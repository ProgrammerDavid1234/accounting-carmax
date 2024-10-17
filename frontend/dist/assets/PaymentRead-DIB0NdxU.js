import{a as l,h as D,ai as m,aq as f,ap as L,ah as e,ar as R,aw as S}from"./index-HnWu2ajL.js";import{I as M,D as w,B as h,Q as O,X as j,W as T,V as o,a1 as B}from"./IdurarOs-BukodILd.js";import"./index-EdnPnSX_.js";import{d as F,c as v,b as k,E as W}from"./selectors-CanXvmAz.js";import{P as H}from"./index-9o8rWx82.js";import{s as _}from"./index-KrFx5yLV.js";import{u as V}from"./useDate-VvBhK8L7.js";import{t as Y}from"./statusTagColor-DxbKI3gy.js";import{e as y}from"./actions-ClqYLQbb.js";import{T as z}from"./index-BHMGiCbw.js";import{S as d}from"./index-Cwvzgof8.js";import{D as u}from"./index-C7ZWzyay.js";import{C as q}from"./CloseCircleOutlined-D3ROmNKM.js";import{F as Q}from"./FilePdfOutlined-D4j4MyV-.js";import"./ErpApp-CHsvLNMM.js";import"./DownOutlined-DV_VUyFd.js";var U={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},X=function(n,s){return l.createElement(M,D({},n,{ref:s,icon:U}))};const G=l.forwardRef(X);function J({entity:r}){const{isLoading:n}=m(F),s=f();return{send:i=>{const c={id:i};s(y.mail({entity:r,jsonData:c}))},isLoading:n}}function K({config:r,selectedItem:n}){var E;const s=w(),{entity:a,ENTITY_NAME:i}=r;f();const{moneyFormatter:c}=V();J({entity:a});const g=L(),{result:p}=m(v),I={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[t,N]=l.useState(n??I),[x,C]=l.useState({});return l.useEffect(()=>{const P=new AbortController;if(p){const{invoice:$,_id:b,...A}=p;N({...A,...$,_id:b})}return()=>P.abort()},[p]),l.useEffect(()=>{t!=null&&t.client&&C(t.client[t.client.type])},[t]),e.jsxs(e.Fragment,{children:[e.jsx(H,{onBack:()=>{g(`/${a.toLowerCase()}`)},title:`${i} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx(z,{color:(E=Y(t.paymentStatus))==null?void 0:E.color,children:t.paymentStatus}),extra:[e.jsx(h,{onClick:()=>{g(`/${a.toLowerCase()}`)},icon:e.jsx(q,{}),children:s("Close")},`${_.generate()}`),e.jsx(h,{onClick:()=>{window.open(`${O}${a}/${a}-${t._id}.pdf`,"_blank")},icon:e.jsx(Q,{}),children:s("Download PDF")},`${_.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(j,{children:[e.jsx(d,{title:"Status",value:t.status}),e.jsx(d,{title:s("Paid"),value:c({amount:t.amount,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(d,{title:s("SubTotal"),value:c({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(d,{title:s("Total"),value:c({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(T,{dashed:!0}),e.jsxs(u,{title:`${s("Client")} : ${t.client.name}`,children:[e.jsx(u.Item,{label:s("Address"),children:x.address}),e.jsx(u.Item,{label:s("email"),children:x.email}),e.jsx(u.Item,{label:s("Phone"),children:x.phone})]}),e.jsx(T,{}),e.jsxs(j,{children:[e.jsx(o,{sm:24,md:12,children:e.jsxs(B.Title,{level:5,children:[s("Payment Information")," :"]})}),e.jsx(o,{sm:24,md:12,style:{textAlign:"right"},children:e.jsx(h,{icon:e.jsx(G,{}),children:s("Show invoice")})})]}),e.jsx("div",{style:{width:"300px",float:"left",textAlign:"right",fontWeight:"700"},children:e.jsxs(j,{gutter:[12,-5],children:[e.jsx(o,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Paid")," :"]})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.amount,currency_code:t.currency})})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.total,currency_code:t.currency})})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Paid")," :"]})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.credit,currency_code:t.currency})})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Remaining")," :"]})}),e.jsx(o,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.total-t.credit,currency_code:t.currency})})})]})})]})}function Z({config:r}){const n=f(),{id:s}=R();let a=m(k(s));l.useEffect(()=>{n(a?y.currentItem({data:a}):y.read({entity:r.entity,id:s}))},[a]);const{result:i}=m(v);return a=i,e.jsx(W,{children:a?e.jsx(K,{config:r,selectedItem:a}):e.jsx(S,{})})}function je(){const r=w(),n="payment",s={PANEL_TITLE:r("payment"),DATATABLE_TITLE:r("payment_list"),ADD_NEW_ENTITY:r("add_new_payment"),ENTITY_NAME:r("payment")},a={entity:n,...s};return e.jsx(Z,{config:a})}export{je as default};
