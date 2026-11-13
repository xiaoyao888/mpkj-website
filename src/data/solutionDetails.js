export const solutionDetails = [
  {
    id: 'water-delivery',
    title: '秒派送水系统',
    subtitle: '桶装水订水与配送',
    tagline: '从下单、支付到派单、送达的桶装水业务闭环',
    intro: [
      '秒派送水系统面向桶装水门店、水站和配送团队，把客户下单、门店接单、骑手配送和平台运营放在同一套系统里。客户在小程序或 H5 一键订水，门店按订单安排配送，骑手在移动端接单、开始配送并确认送达，订单、水票和提成自动流转。',
      '系统按业务模块拆分，支持商品与 SKU、水票、优惠券、积分、门店入驻、合同与续约、消息通知等常见运营玩法，也支持在此基础上按区域和门店规则做二次开发。',
    ],
    scenes: [
      { title: '水站与桶装水门店', description: '已有线下门店和水源渠道，想把散客下单、水票和配送排班搬到线上，减少电话和微信记账。' },
      { title: '社区配送团队', description: '覆盖若干小区集中配送，需要骑手接单、转单、送达确认和按单提成核算。' },
      { title: '企业与单位用水', description: '办公室、工厂、学校等固定用水客户，需要多地址、周期订水、发票和账单管理。' },
      { title: '区域平台与连锁水站', description: '多家门店入驻同一平台，需要审核、合同与到期管理、默认门店分配和经营统计。' },
    ],
    ends: [
      { title: '用户下单端', description: '微信小程序、H5、APP、支付宝小程序、抖音小程序多端入口，支持商品选购、一键订水、地址与配送时段选择。' },
      { title: '门店经营端', description: '门店入驻与续约、商户签约、商品与库存、订单处理、附近门店与默认门店分配。' },
      { title: '骑手配送端', description: '骑手认证、接单、开始配送、确认送达、转单、提成明细与配送数据分析。' },
      { title: '平台管理端', description: '订单、商品、用户、水票、优惠券、积分、账单与经营统计集中管理。' },
    ],
    modules: [
      { title: '用户与会员', description: '账号密码与短信登录、个人信息、余额、VIP、水桶、积分、发票、电话簿。' },
      { title: '商品与库存', description: '商品管理、SKU 规格、品牌分类、库存、押桶、热销新品与限购标记、销售统计。' },
      { title: '订单与售后', description: '下单、一键订水、取消、退款、售后、发票申请与订单状态流转跟踪。' },
      { title: '支付能力', description: '微信 JSAPI / H5 / NATIVE 支付、余额支付、门店入驻费支付、充值、退款与回调校验。' },
      { title: '水票体系', description: '商品水票、订单水票、我的水票、使用记录与剩余水票处理状态。' },
      { title: '门店体系', description: '门店入驻与续约、审核、营业时间、起送与配送费、合同与到期管理、平台展示开关。' },
      { title: '配送调度', description: '骑手认证与工作状态、派单与接单、配送明细、转单、异常处理与提成结算。' },
      { title: '营销玩法', description: '优惠券发放与核销、满减、积分提现、抽奖插件、广告位与轮播。' },
      { title: '消息与通知', description: '系统消息、公告、模板消息、已读标记与钉钉消息推送。' },
    ],
    flows: [
      {
        title: '订水配送主流程',
        steps: ['选择商品或一键订水', '确认地址与配送时段', '微信 / 余额支付', '门店接单并派单', '骑手开始配送', '确认送达', '水票核销与提成结算'],
      },
      {
        title: '订单状态流转',
        steps: ['待付款', '待发货', '待收货', '已完成', '售后 / 退款 / 取消分支同步处理'],
      },
    ],
    stack: [
      { group: '后端服务', items: ['Spring Boot 3.2.3', 'JDK 21', 'MyBatis-Plus', 'MySQL 8', 'Redis', 'Druid', 'Knife4j 4.3.0'] },
      { group: '多端入口', items: ['微信小程序', 'H5', 'APP', '支付宝小程序', '抖音小程序'] },
      { group: '支付与生态', items: ['weixin-java-pay 4.8.0', 'weixin-java-miniapp', '支付宝支付', '余额与充值', '阿里短信'] },
      { group: '工程与部署', items: ['Maven 多模块', 'Docker 镜像部署', 'Jenkins CI/CD', '代码生成器', '多环境配置'] },
    ],
  },
  {
    id: 'study-room',
    title: '自习室预约系统',
    subtitle: '座位预约与考勤',
    tagline: '小程序选座预约，后台掌握上座与考勤',
    intro: [
      '自习室预约系统面向付费自习室、图书馆阅读区和共享学习空间，采用前后端分离架构，由后端接口服务、管理后台和微信小程序三部分组成，可独立部署，也可扩展到门店连锁场景。',
      '用户端以可视化座位图完成选座与预约，到场后签到、离开时签退；管理端负责座位、时段、用户与预约记录维护，并提供多维度使用率与趋势统计。',
    ],
    scenes: [
      { title: '付费自习室', description: '按座位和时段计费，需要实时座位状态、预约冲突检测与到场签到，减少人工登记。' },
      { title: '图书馆与阅览室', description: '开放座位或阅览区域限量预约，需要时段规则、考勤记录和到座率统计。' },
      { title: '共享学习与联合空间', description: '工位、自习室与会议室共用一套空间，需要分区座位管理与统一后台。' },
      { title: '学校与培训机构', description: '考研专区、自习教室或空余课室的开放预约，按院系或班级分配使用。' },
    ],
    ends: [
      { title: '学生端小程序', description: '基于 uni-app 开发，微信小程序优先，一套代码可适配多端。' },
      { title: '管理后台', description: 'Vue 3 + Element Plus 组合式界面，面向店长与运营人员。' },
      { title: '后端接口服务', description: 'Spring Boot 多模块工程，统一 RESTful API、业务逻辑与数据持久化。' },
      { title: '接口文档', description: 'Knife4j / OpenAPI3 在线文档，联调与二次开发可直接调试。' },
    ],
    modules: [
      { title: '座位预约', description: '可视化座位布局、实时座位状态、时段选择与预约冲突检测。' },
      { title: '预约记录', description: '历史预约查看、取消预约、状态跟踪与异常预约处理。' },
      { title: '考勤打卡', description: '到场签到、离开签退、考勤记录汇总，支持旷用与超时场景。' },
      { title: '座位管理', description: '座位增删改查、区域与状态维护、批量操作。' },
      { title: '用户管理', description: '用户查询与筛选、账号状态、角色权限分离。' },
      { title: '时段与规则', description: '开放时间段、系统参数配置，适配不同门店营业规则。' },
      { title: '数据统计', description: 'ECharts 多维度图表、预约趋势与座位使用率分析。' },
      { title: '微信生态', description: '小程序登录、手机号绑定与微信支付能力预留接入。' },
    ],
    flows: [
      {
        title: '用户预约流程',
        steps: ['小程序登录', '选择日期与时段', '座位图选座', '提交预约', '到店签到', '离店签退', '历史记录查询'],
      },
      {
        title: '运营管理流程',
        steps: ['维护座位与区域', '配置营业时段', '查看当日预约与考勤', '处理异常与取消', '复盘使用率数据'],
      },
    ],
    stack: [
      { group: '后端服务', items: ['Spring Boot 3.2.3', 'Spring Cloud 2023.0.0', 'Java 21', 'MyBatis-Plus 3.5.5', 'MySQL 8.0+', 'Redis', 'Druid 1.2.27'] },
      { group: '管理后台', items: ['Vue 3.5', 'Element Plus 2.8', 'Vite', 'Vue Router 4', 'Vuex 4', 'ECharts 5'] },
      { group: '用户端', items: ['uni-app', 'Vue 3', 'uni-ui', 'Vuex 4', 'Sass'] },
      { group: '文档与生态', items: ['Knife4j 4.3.0', 'OpenAPI3', 'weixin-java-miniapp', 'weixin-java-pay 4.8.0'] },
    ],
  },
  {
    id: 'after-school',
    title: '托管辅导系统',
    subtitle: '托管机构日常运营',
    tagline: '家长看得到孩子在机构的一天',
    intro: [
      '托管辅导系统面向午托、晚托、课后托管和寒暑假托管机构，以微信小程序作为家长与教师的日常入口，配套 Web 管理后台，覆盖报名缴费、考勤签到、请假审批、接送核验、每日报告、作业与餐饮记录等日常业务。',
      '系统为前后端分离架构，后台菜单与权限由数据库动态下发，机构可按校区、角色（管理员 / 教务 / 财务）分配可见功能，经营分析与对账报表支撑多校区运营。',
    ],
    scenes: [
      { title: '午托 / 晚托机构', description: '日常接送、就餐和休息环节需要留痕，家长希望看到孩子到机构和离开的记录。' },
      { title: '课后托管与作业辅导', description: '报名缴费、请假审批、作业布置与批改反馈集中在同一系统，减少微信群里翻记录。' },
      { title: '寒暑假托管营', description: '短期班期滚动开班，需要每日报告、餐食记录和家长端通知。' },
      { title: '多校区托管品牌', description: '按校区和班级管理学生档案，缴费与对账出报表，教务、财务各看各的功能。' },
    ],
    ends: [
      { title: '家长端小程序', description: '孩子档案、考勤记录、请假申请、接送人管理、套餐报名与支付、成长记录查看。' },
      { title: '教师端小程序', description: '签到签退、请假处理、每日报告与作业、餐食记录发布。' },
      { title: 'Web 管理后台', description: 'Vue 3 + Element Plus，班级、学生、报名、财务与系统配置集中管理。' },
      { title: '后端服务', description: 'Spring Boot 多模块，分别提供小程序接口与管理后台接口。' },
    ],
    modules: [
      { title: '报名与缴费', description: '套餐上架与价格有效期、在线报名、待支付订单、微信支付与回调校验、订单查询。' },
      { title: '学生与班级', description: '学生档案、家长关联、班级维护、状态与容量管理。' },
      { title: '考勤与请假', description: '签到签退记录与汇总、家长请假申请、机构审批与审批留痕。' },
      { title: '接送安全', description: '接送人授权、接送码生成与核验、接送记录，保障离园环节可追溯。' },
      { title: '成长记录', description: '每日报告（辅导内容与表现评价）、作业布置与批改、每日餐食与菜品图片。' },
      { title: '经营与对账', description: 'ECharts 经营分析、订单与对账报表、缴费与退款记录。' },
      { title: '通知与互动', description: '公告通知、意见反馈、待办事项与消息触达。' },
      { title: '系统与权限', description: '菜单 / 角色 / 用户三级权限，字典、参数配置、操作日志与文件管理。' },
    ],
    flows: [
      {
        title: '报名缴费流程',
        steps: ['查看套餐列表', '套餐详情', '选择孩子与起止日期', '提交报名生成待支付订单', '微信支付', '支付回调校验', '报名与订单状态同步', '订单与支付结果展示'],
      },
      {
        title: '日常托管流程',
        steps: ['签到 / 签退', '接送人核验（接送码）', '请假申请与审批', '每日报告 / 作业 / 餐食记录', '家长小程序查看'],
      },
    ],
    stack: [
      { group: '后端服务', items: ['Spring Boot 3.2.3', 'Spring Cloud 2023.0.0', 'Java 21', 'MyBatis-Plus 3.5.5', 'MySQL 8.0+', 'Redis', 'Knife4j 4.3.0'] },
      { group: '管理后台', items: ['Vue 3.5', 'Element Plus 2.8', 'Vite 8', 'Vue Router 4', 'Vuex 4', 'ECharts 6'] },
      { group: '小程序端', items: ['uni-app 3.x', 'Vue 3.5', 'uni-ui', 'Vite', 'Sass'] },
      { group: '业务能力', items: ['微信小程序登录', '手机号绑定', '微信支付与退款回调', '动态菜单权限', '多环境部署脚本'] },
    ],
  },
];

export const getSolutionDetail = (id) => solutionDetails.find((item) => item.id === id);
