import{j as l}from"./jsx-runtime.u17CrQMm.js";import{a as e}from"./index.BF06b7nT.js";const u=400,w=5e3,a=500,p=()=>{const[r,c]=e.useState(!1),o=e.useRef(null),n=e.useRef(null),s=e.useCallback(()=>{c(!1),clearTimeout(o.current)},[]),t=e.useCallback(()=>{c(!0),clearTimeout(o.current),o.current=setTimeout(()=>{s()},w)},[s]),i=e.useCallback(()=>{clearTimeout(n.current),clearTimeout(o.current),r&&s(),n.current=setTimeout(()=>{window.scrollY>u?t():s()},a)},[r,t,s]),d=e.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"}),t()},[t]);e.useEffect(()=>{const m=setTimeout(()=>{window.scrollY>u&&t()},a);return()=>{clearTimeout(m),clearTimeout(o.current)}},[t]),e.useEffect(()=>(window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i),clearTimeout(n.current)}),[i]);const f=`
    fixed bottom-8 right-8 z-50 p-3 
    bg-white dark:bg-gray-800 
    text-black dark:text-white 
    rounded-full shadow-xl 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
    transition-all duration-300 ease-in-out
    ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}
  `;return l.jsx("button",{onClick:d,className:f,"aria-label":"快速返回顶部",type:"button",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 16L12 10L18 16"})})})};export{p as default};
