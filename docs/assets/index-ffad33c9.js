import{r as n,a as d,f as s,j as h,R as P}from"./index-cfba0c20.js";import{u as g}from"./useUpdate-ee26ec70.js";function k(){const e=n.useRef(null),[a,t]=n.useState(!1),i=n.useCallback(()=>t(!0),[]),l=n.useCallback(()=>t(!1),[]);return n.useEffect(()=>{if(e.current)return e.current.addEventListener("mouseenter",i),e.current.addEventListener("mouseleave",l),()=>{var r,c;(r=e.current)==null||r.removeEventListener("mouseenter",i),(c=e.current)==null||c.removeEventListener("mouseleave",l)}},[]),[e,a]}function N(e){const a=n.useRef(null),t=n.useRef(null),i=n.useMemo(()=>Math.floor(Math.random()*1e5),[]);return n.useEffect(()=>{const l=r=>{t.current={x:r.pageX,y:r.pageY},console.log(i,t.current),setTimeout(()=>t.current=null,100)};return document.documentElement.addEventListener("click",l,!0),()=>{document.documentElement.removeEventListener("click",l,!0)}},[a.current]),t.current}const w=n.memo(e=>{var a;return d("div",{className:s("group",e.className),style:e.style,onClick:t=>{var i;return[t==null?void 0:t.stopPropagation(),(i=e==null?void 0:e.onClick)==null?void 0:i.call(e,t)]},children:(a=n.Children)==null?void 0:a.toArray(e.children).filter(Boolean)})});const T=n.memo(e=>{const[a,t]=g({}),[i,l]=k(),r=n.useRef(null),c=n.useRef(null);n.useLayoutEffect(()=>{if(i.current&&l&&!e.disabled){const u=i.current,m=r.current,v=u.getBoundingClientRect(),f=m.getBoundingClientRect(),b=u.offsetWidth/v.width,y=m.offsetWidth/f.width,C=v.width*b||0,R=f.width*y||0,E=4;t({opacity:1,hovered:!0,top:u.offsetTop-f.height-E,left:u.offsetLeft+C/2-R/2})}i.current&&!l&&!e.disabled&&(t({opacity:0}),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{t({hovered:!1})},300))},[l,e.disabled]);const o=n.useMemo(()=>({transitionProperty:"opacity",transitionDuration:"250ms",transitionTimingFunction:"ease",opacity:a.opacity,top:a.top,left:a.left,zIndex:300}),[a]);return h(P.Fragment,{children:[d("span",{ref:i,children:e.children}),!e.disabled&&!!(l||a.hovered)&&d("div",{ref:r,className:"tooltip",style:o,children:e.label})]})});const B=n.memo(e=>{const a=n.useRef({}),[t,i]=g({});n.useLayoutEffect(()=>{if(a.current.after){const o=a.current.after.getBoundingClientRect();t.afterPadding=`calc(${o==null?void 0:o.width}px + 0.35rem)`}if(a.current.before){const o=a.current.before.getBoundingClientRect();t.beforePadding=`calc(${o==null?void 0:o.width}px + 0.35rem)`}},[e.after,e.before]);const l=n.useMemo(()=>({paddingLeft:t.beforePadding||void 0,paddingRight:t.afterPadding||void 0,...e.style}),[t.beforePadding,t.afterPadding,e.style]),r=n.useCallback((c,o)=>{var u;o.stopPropagation(),e[c]&&((u=e==null?void 0:e[c])==null||u.call(e,o))},[]);return console.log("IPUT",{props:e}),h("div",{onClick:c=>c==null?void 0:c.stopPropagation(),"data-disabled":e.disabled||void 0,className:s("input-wrap",e.className),style:e.wrapStyle,children:[!!e.before&&d("div",{ref:c=>a.current.before=c,className:s("input-before",e.beforeClass),children:e.before}),d("input",{className:s("input-input",e.inputClass),placeholder:e.placeholder,"data-before":!!e.before||void 0,"data-after":!!e.after||void 0,"data-borderless":!!e.borderless||void 0,"data-open":!!e.open||void 0,style:l,type:e.type||void 0,readOnly:e.readOnly,autoComplete:"off",value:e.value,onClick:e==null?void 0:e.onClick,onBlur:e.onBlur,onChange:r.bind(null,"onChange"),onInput:r.bind(null,"onInput")}),!!e.after&&d("div",{ref:c=>a.current.after=c,className:s("input-after",e.afterClass),children:e.after})]})});export{w as G,B as I,T,k as a,N as u};
