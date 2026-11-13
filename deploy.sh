#!/usr/bin/env bash
# 官网部署脚本：构建静态产物 -> 替换 docs/ -> 提交并推送
# 用法：bash deploy.sh          完整部署
#       bash deploy.sh --check  只做检查和构建，不改 docs、不提交不推送
set -euo pipefail

cd "$(dirname "$0")"

CHECK_ONLY=0
if [ "${1:-}" = "--check" ]; then
  CHECK_ONLY=1
fi

BUILD_DIR=".deploy-build"
OUT_DIR="docs"
KEEP="CNAME"

die() { echo "部署中止：$1" >&2; exit 1; }

cleanup() { rm -rf "$BUILD_DIR"; }
trap cleanup EXIT

BRANCH=$(git rev-parse --abbrev-ref HEAD) || die "读取当前分支失败"

# 1. 完整部署要求工作区干净，避免把未提交的源码改动和产物混在一次提交里
if [ "$CHECK_ONLY" = "0" ]; then
  [ -z "$(git status --porcelain)" ] || {
    git status --short
    die "工作区有未提交改动，请先提交源码后再部署"
  }
fi

# 2. 构建前置文件检查：这些都被 .gitignore 排除，缺失时构建会连带删掉 docs 里的资源和域名配置
[ -f astro.config.mjs ] || die "缺少 astro.config.mjs"
[ -d public ] || die "缺少 public 目录"
[ -d public/images ] || die "缺少 public/images"
[ -d public/icons ] || die "缺少 public/icons"
[ -f "public/$KEEP" ] || die "缺少 public/$KEEP"

# 3. 构建到临时目录，不直接写 docs，构建失败时现有产物不受影响
echo "==> 构建静态产物"
npx astro build --outDir "$BUILD_DIR"

[ -f "$BUILD_DIR/index.html" ] || die "构建产物缺少 index.html"
PAGES=$(find "$BUILD_DIR" -name '*.html' | wc -l | tr -d ' ')
[ "$PAGES" -gt 0 ] || die "构建产物没有任何页面"

if [ "$CHECK_ONLY" = "1" ]; then
  echo "==> 检查通过：$PAGES 个 HTML 文件，未改动 $OUT_DIR，未提交未推送"
  exit 0
fi

# 4. 替换 docs 内容，保留 CNAME
echo "==> 替换 $OUT_DIR 产物"
find "$OUT_DIR" -mindepth 1 -maxdepth 1 ! -name "$KEEP" -exec rm -rf {} +
cp -r "$BUILD_DIR/." "$OUT_DIR/"
cleanup
trap - EXIT

# 5. 提交产物
git add "$OUT_DIR"
SRC_SHA=$(git rev-parse --short HEAD)
if git diff --cached --quiet; then
  echo "==> $OUT_DIR 与源码一致，无需新建产物提交"
else
  echo "==> 提交 $OUT_DIR 产物"
  git commit -m "Rebuild docs for site pages (src ${SRC_SHA})"
fi

# 6. 推送分支，本地领先的源码提交一并推出去
echo "==> 推送 $BRANCH 到 origin"
git push origin "$BRANCH"

echo "==> 完成：$PAGES 个 HTML 文件，产物提交基于源码 ${SRC_SHA}"
