import{ai as p,ah as e,a}from"./index-DICNmN0G.js";import{d as m}from"./index-DrLm12-t.js";import{A as R}from"./index-BIn2RWBA.js";import{a as q}from"./useDate-DxSV4nP-.js";import{c as o}from"./calculate-DSD-I2U7.js";import{a as j}from"./ErpApp-ChsxfLux.js";import{D as v,X as E,V as s,_ as r,$ as T,W as V}from"./IdurarOs-DQIhGZkQ.js";import{D as d}from"./index-DrXV9ujL.js";import{T as x}from"./index-Iob1MjX4.js";import{S as A}from"./index-9vEdx8EI.js";function H({subTotal:l=0,current:n=null}){const{last_quote_number:t}=p(j);return t===void 0?e.jsx(e.Fragment,{}):e.jsx(C,{subTotal:l,current:n})}function C({subTotal:l=0,current:n=null}){const t=v(),{dateFormat:c}=q(),{last_quote_number:f}=p(j),[h,b]=a.useState(()=>f+1),[L,y]=a.useState(0),[i,g]=a.useState(0),[_,w]=a.useState(0),[N,F]=a.useState(()=>new Date().getFullYear());a.useEffect(()=>{if(n){const{taxRate:u=0,year:S,number:I}=n;g(u/100),F(S),b(I)}},[n]),a.useEffect(()=>{const u=o.add(o.multiply(l,i),l);w(Number.parseFloat(o.multiply(l,i))),y(Number.parseFloat(u))},[l,i]);const D=a.useRef(!1);return a.useEffect(()=>{D.current.click()},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{gutter:[12,0],children:[e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(r.Item,{name:"client",label:t("Client"),rules:[{required:!0}],children:e.jsx(R,{entity:"client",displayLabels:["name"],searchFields:"name",redirectLabel:"Add New Client",withRedirect:!0,urlToRedirect:"/customer"})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(r.Item,{label:t("number"),name:"number",initialValue:h,rules:[{required:!0}],children:e.jsx(x,{min:1,style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(r.Item,{label:t("year"),name:"year",initialValue:N,rules:[{required:!0}],children:e.jsx(x,{style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:4,children:e.jsx(r.Item,{label:t("status"),name:"status",initialValue:"draft",children:e.jsx(A,{options:[{value:"draft",label:t("Draft")},{value:"pending",label:t("Pending")},{value:"sent",label:t("Sent")},{value:"accepted",label:t("Accepted")},{value:"declined",label:t("Declined")}]})})}),e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(r.Item,{name:"date",label:t("Date"),rules:[{required:!0,type:"object"}],initialValue:m(),children:e.jsx(d,{style:{width:"100%"},format:c})})}),e.jsx(s,{className:"gutter-row",span:6,children:e.jsx(r.Item,{name:"expiredDate",label:t("Expire Date"),rules:[{required:!0,type:"object"}],initialValue:m().add(30,"days"),children:e.jsx(d,{style:{width:"100%"},format:c})})}),e.jsx(s,{className:"gutter-row",span:10,children:e.jsx(r.Item,{label:t("Note"),name:"notes",children:e.jsx(T,{})})})]}),e.jsx(V,{dashed:!0})]})}export{H as Q};
