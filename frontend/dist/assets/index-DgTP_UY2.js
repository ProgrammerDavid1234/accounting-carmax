import{ai as L,ah as e,ap as I,aq as O,a as h}from"./index-HnWu2ajL.js";import{P as $}from"./index-9o8rWx82.js";import{A as R}from"./index-DcpOWz18.js";import{D as v,M as F,E as M,B as _,Q as B}from"./IdurarOs-BukodILd.js";import{e as c}from"./actions-ClqYLQbb.js";import{f as P,g as N}from"./selectors-CanXvmAz.js";import{u as C}from"./index-EdnPnSX_.js";import{s as E}from"./index-KrFx5yLV.js";import{D as q,E as z}from"./ErpApp-CHsvLNMM.js";import{F as W}from"./Table-BVAEfPyJ.js";import{F as H}from"./FilePdfOutlined-D4j4MyV-.js";import{A as K,a as Q}from"./ArrowRightOutlined-C4tBAx2j.js";import{R as U,v as Y}from"./helpers-DB0-nE3e.js";import{P as G}from"./PlusOutlined-zk98YPLA.js";import{M as J}from"./index-Bsxqi8Iy.js";function V({config:n}){const r=I(),{ADD_NEW_ENTITY:a,entity:o}=n,i=()=>{r(`/${o.toLowerCase()}/create`)};return e.jsx(_,{onClick:i,type:"primary",icon:e.jsx(G,{}),children:a})}function X({config:n,extra:r=[]}){const a=v();let{entity:o,dataTableColumns:i,disableAdd:d=!1,searchConfig:s}=n;const{DATATABLE_TITLE:f}=n,{result:x,isLoading:g}=L(P),{pagination:y,items:j}=x;C();const u=[{label:a("Show"),key:"read",icon:e.jsx(F,{})},{label:a("Download"),key:"download",icon:e.jsx(H,{})},...r],b=I(),p=O(),w=t=>{p(c.currentItem({data:t})),b(`/${o}/read/${t._id}`)},D=t=>{window.open(`${B}${o}/${o}-${t._id}.pdf`,"_blank")};i=[...i,{title:"",key:"action",fixed:"right",render:(t,m)=>e.jsx(q,{menu:{items:u,onClick:({key:A})=>{switch(A){case"read":w(m);break;case"download":D(m);break}}},trigger:["click"],children:e.jsx(z,{style:{cursor:"pointer",fontSize:"24px"},onClick:A=>A.preventDefault()})})}];const l=t=>{const m={page:t.current||1,items:t.pageSize||10};p(c.list({entity:o,options:m}))},k=()=>{p(c.list({entity:o}))};h.useEffect(()=>{const t=new AbortController;return k(),()=>{t.abort()}},[]);const S=t=>{const m={equal:t,filter:s==null?void 0:s.entity};p(c.list({entity:o,options:m}))},T=L(M);return e.jsxs(e.Fragment,{children:[e.jsx($,{title:f,ghost:!0,onBack:()=>window.history.back(),backIcon:T==="rtl"?e.jsx(K,{}):e.jsx(Q,{}),extra:[e.jsx(R,{entity:s==null?void 0:s.entity,displayLabels:["name"],searchFields:"name",onChange:S},`${E.generate()}`),e.jsx(_,{onClick:l,icon:e.jsx(U,{}),children:a("Refresh")},`${E.generate()}`),!d&&e.jsx(V,{config:n},`${E.generate()}`)],style:{padding:"20px 0px",direction:T}}),e.jsx(W,{columns:i,rowKey:t=>t._id,dataSource:j,pagination:y,loading:g,onChange:l,scroll:{x:!0}})]})}function Z({config:n}){let{entity:r,deleteModalLabels:a,deleteMessage:o="Do you want delete : ",modalTitle:i="Remove Item"}=n;const d=O(),{current:s,isLoading:f,isSuccess:x}=L(N),{state:g,erpContextAction:y}=C(),{deleteModal:j}=g,{modal:u}=y,[b,p]=h.useState("");h.useEffect(()=>{if(x){u.close();const l={page:1,items:10};d(c.list({entity:r,options:l}))}if(s){let l=a.map(k=>Y(s,k)).join(" ");p(l)}},[x,s]);const w=()=>{const l=s._id;d(c.delete({entity:r,id:l})),u.close()},D=()=>{f||u.close()};return e.jsx(J,{title:i,open:j.isOpen,onOk:w,onCancel:D,confirmLoading:f,children:e.jsxs("p",{children:[o,b]})})}function xe({config:n,extra:r}){const a=O(),{state:o}=C(),{deleteModal:i}=o,d=()=>{a(c.resetState())};return h.useLayoutEffect(()=>{const s=new AbortController;return d(),()=>{s.abort()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(X,{config:n,extra:r}),e.jsx(Z,{config:n,isOpen:i.isOpen})]})}export{xe as E};
