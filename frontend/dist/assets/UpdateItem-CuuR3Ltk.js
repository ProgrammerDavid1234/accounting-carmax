import{aq as B,ap as I,ai as N,a as u,ar as O,ah as e}from"./index-DICNmN0G.js";import{d,P as Z}from"./index-DrLm12-t.js";import{D as A,_ as T,B as $,W,a0 as _}from"./IdurarOs-DQIhGZkQ.js";import{e as b}from"./actions-D2x6ggdI.js";import{c as F}from"./calculate-DSD-I2U7.js";import{s as Y}from"./index-KrFx5yLV.js";import{d as z}from"./selectors-CA_LF2fK.js";import{t as E}from"./statusTagColor-DxbKI3gy.js";import{T as L}from"./index-DdZSsGFA.js";import{C as G}from"./CloseCircleOutlined-DOxxBXXR.js";import{P as J}from"./PlusOutlined-D9D37ILv.js";function K({form:l,translate:x}){const s=()=>{l.submit()};return e.jsx($,{onClick:s,type:"primary",icon:e.jsx(J,{}),children:x("update")})}function ct({config:l,UpdateForm:x}){var D,C;const s=A();let{entity:m}=l;const y=B(),f=I(),{current:n,isLoading:q,isSuccess:S}=N(z),[c]=T.useForm(),[v,h]=u.useState(0),H={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[o,P]=u.useState(n??H),{id:j}=O(),k=(t,a)=>{const p=a.items;let r=0;p&&(p.map(i=>{if(i&&i.quantity&&i.price){let g=F.multiply(i.quantity,i.price);r=F.add(r,g)}}),h(r))},w=t=>{let a={...t};if(t&&((t.date||t.expiredDate)&&(a.date=d(t.date).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),a.expiredDate=d(t.expiredDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ")),t.items)){let p=[];t.items.map(r=>{const{quantity:i,price:g,itemName:M,description:R}=r,U=r.quantity*r.price;p.push({total:U,quantity:i,price:g,itemName:M,description:R})}),a.items=p}y(b.update({entity:m,id:j,jsonData:a}))};return u.useEffect(()=>{S&&(c.resetFields(),h(0),y(b.resetAction({actionType:"update"})),f(`/${m.toLowerCase()}/read/${j}`))},[S]),u.useEffect(()=>{if(n){P(n);let t={...n};t.date&&(t.date=d(t.date)),t.expiredDate&&(t.expiredDate=d(t.expiredDate)),t.taxRate||(t.taxRate=0);const{subTotal:a}=t;c.resetFields(),c.setFieldsValue(t),h(a)}},[n]),e.jsxs(e.Fragment,{children:[e.jsx(Z,{onBack:()=>{f(`/${m.toLowerCase()}`)},title:s("update"),ghost:!1,tags:[e.jsx(L,{color:(D=E(o.status))==null?void 0:D.color,children:o.status&&s(o.status)},"status"),o.paymentStatus&&e.jsx(L,{color:(C=E(o.paymentStatus))==null?void 0:C.color,children:o.paymentStatus&&s(o.paymentStatus)},"paymentStatus")],extra:[e.jsx($,{onClick:()=>{f(`/${m.toLowerCase()}`)},icon:e.jsx(G,{}),children:s("Cancel")},`${Y.generate()}`),e.jsx(K,{translate:s,form:c},`${Y.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(W,{dashed:!0}),e.jsx(_,{isLoading:q,children:e.jsx(T,{form:c,layout:"vertical",onFinish:w,onValuesChange:k,children:e.jsx(x,{subTotal:v,current:n})})})]})}export{ct as U};
