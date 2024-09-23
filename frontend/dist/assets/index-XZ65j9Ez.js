import{R as A,a as r,q as j,H as G,J as X,a3 as F,az as V,N as p,E as U}from"./index-DICNmN0G.js";import{al as L,t as q,c as J}from"./IdurarOs-DQIhGZkQ.js";import{f as K}from"./ErpApp-ChsxfLux.js";const Q={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},I=A.createContext({});var Y=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const Z=e=>q(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function k(e,t,o){const n=r.useMemo(()=>t||Z(o),[t,o]);return r.useMemo(()=>n.map(s=>{var{span:a}=s,d=Y(s,["span"]);return Object.assign(Object.assign({},d),{span:typeof a=="number"?a:L(e,a)})}),[n,e])}function B(e,t,o){let n=e,l=!1;return(o===void 0||o>t)&&(n=Object.assign(Object.assign({},e),{span:t}),l=o!==void 0),[n,l]}function ee(e,t){const o=[];let n=[],l=t,s=!1;return e.filter(a=>a).forEach((a,d)=>{const y=a==null?void 0:a.span,c=y||1;if(d===e.length-1){const[i,b]=B(a,l,y);s=s||b,n.push(i),o.push(n);return}if(c<l)l-=c,n.push(a);else{const[i,b]=B(a,l,c);s=s||b,n.push(i),o.push(n),l=t,n=[]}}),[o,s]}const te=(e,t)=>{const[o,n]=r.useMemo(()=>ee(t,e),[t,e]);return o},ne=e=>{let{children:t}=e;return t};function M(e){return e!=null}const N=e=>{const{itemPrefixCls:t,component:o,span:n,className:l,style:s,labelStyle:a,contentStyle:d,bordered:y,label:c,content:i,colon:b,type:f}=e,g=o;return y?r.createElement(g,{className:j({[`${t}-item-label`]:f==="label",[`${t}-item-content`]:f==="content"},l),style:s,colSpan:n},M(c)&&r.createElement("span",{style:a},c),M(i)&&r.createElement("span",{style:d},i)):r.createElement(g,{className:j(`${t}-item`,l),style:s,colSpan:n},r.createElement("div",{className:`${t}-item-container`},(c||c===0)&&r.createElement("span",{className:j(`${t}-item-label`,{[`${t}-item-no-colon`]:!b}),style:a},c),(i||i===0)&&r.createElement("span",{className:j(`${t}-item-content`),style:d},i)))};function P(e,t,o){let{colon:n,prefixCls:l,bordered:s}=t,{component:a,type:d,showLabel:y,showContent:c,labelStyle:i,contentStyle:b}=o;return e.map((f,g)=>{let{label:S,children:E,prefixCls:x=l,className:h,style:O,labelStyle:u,contentStyle:m,span:$=1,key:C}=f;return typeof a=="string"?r.createElement(N,{key:`${d}-${C||g}`,className:h,style:O,labelStyle:Object.assign(Object.assign({},i),u),contentStyle:Object.assign(Object.assign({},b),m),span:$,colon:n,component:a,itemPrefixCls:x,bordered:s,label:y?S:null,content:c?E:null,type:d}):[r.createElement(N,{key:`label-${C||g}`,className:h,style:Object.assign(Object.assign(Object.assign({},i),O),u),span:1,colon:n,component:a[0],itemPrefixCls:x,bordered:s,label:S,type:"label"}),r.createElement(N,{key:`content-${C||g}`,className:h,style:Object.assign(Object.assign(Object.assign({},b),O),m),span:$*2-1,component:a[1],itemPrefixCls:x,bordered:s,content:E,type:"content"})]})}const le=e=>{const t=r.useContext(I),{prefixCls:o,vertical:n,row:l,index:s,bordered:a}=e;return n?r.createElement(r.Fragment,null,r.createElement("tr",{key:`label-${s}`,className:`${o}-row`},P(l,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:`content-${s}`,className:`${o}-row`},P(l,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:s,className:`${o}-row`},P(l,e,Object.assign({component:a?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},oe=e=>{const{componentCls:t,labelBg:o}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${p(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"},[`${t}-row`]:{borderBottom:`${p(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${p(e.padding)} ${p(e.paddingLG)}`,borderInlineEnd:`${p(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:o,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${p(e.paddingSM)} ${p(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${p(e.paddingXS)} ${p(e.padding)}`}}}}}},re=e=>{const{componentCls:t,extraColor:o,itemPaddingBottom:n,colonMarginRight:l,colonMarginLeft:s,titleMarginBottom:a}=e;return{[t]:Object.assign(Object.assign(Object.assign({},F(e)),oe(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:a},[`${t}-title`]:Object.assign(Object.assign({},V),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:o,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${p(s)} ${p(l)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},ae=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText}),se=G("Descriptions",e=>{const t=X(e,{});return re(t)},ae);var ie=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const ce=e=>{const{prefixCls:t,title:o,extra:n,column:l,colon:s=!0,bordered:a,layout:d,children:y,className:c,rootClassName:i,style:b,size:f,labelStyle:g,contentStyle:S,items:E}=e,x=ie(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:h,direction:O,descriptions:u}=r.useContext(U),m=h("descriptions",t),$=K(),C=r.useMemo(()=>{var v;return typeof l=="number"?l:(v=L($,Object.assign(Object.assign({},Q),l)))!==null&&v!==void 0?v:3},[$,l]),T=k($,E,y),w=J(f),R=te(C,T),[H,_,D]=se(m),W=r.useMemo(()=>({labelStyle:g,contentStyle:S}),[g,S]);return H(r.createElement(I.Provider,{value:W},r.createElement("div",Object.assign({className:j(m,u==null?void 0:u.className,{[`${m}-${w}`]:w&&w!=="default",[`${m}-bordered`]:!!a,[`${m}-rtl`]:O==="rtl"},c,i,_,D),style:Object.assign(Object.assign({},u==null?void 0:u.style),b)},x),(o||n)&&r.createElement("div",{className:`${m}-header`},o&&r.createElement("div",{className:`${m}-title`},o),n&&r.createElement("div",{className:`${m}-extra`},n)),r.createElement("div",{className:`${m}-view`},r.createElement("table",null,r.createElement("tbody",null,R.map((v,z)=>r.createElement(le,{key:z,index:z,colon:s,prefixCls:m,vertical:d==="vertical",bordered:a,row:v}))))))))};ce.Item=ne;export{ce as D};
