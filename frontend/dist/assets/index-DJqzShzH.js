import{ah as e}from"./index-CH-5c-MR.js";import{D as m,_ as l,$ as j,a4 as i,C as d}from"./IdurarOs-fG_l_C9Y.js";import{C}from"./CrudModule-BFu4G31Y.js";import{T as b}from"./index-BgRVQ2Al.js";import{S as s}from"./countryList-D4Z0_rqR.js";import"./actions-lAyiSV_q.js";import"./index-BJSr-kn-.js";import"./index-DqUJQRo8.js";import"./ErpApp-xuQNuWsw.js";import"./DownOutlined-CwSJeHNu.js";import"./helpers-Bq6rhdAh.js";import"./index-CyUVFuBk.js";import"./fade-DCmSMvW_.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-B4f4eOHp.js";import"./useDate-BULXdJSE.js";import"./useDebounce-Bt454N2K.js";import"./index-BvYAae1P.js";import"./ArrowRightOutlined-C5erMTxb.js";import"./Table-GuseyTUl.js";import"./DeleteOutlined-BFUSzqOA.js";import"./PlusOutlined-DTyZuIQf.js";import"./index-DgQk4TZ4.js";function o({isUpdateForm:t=!1}){const r=m();return e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{label:r("name"),name:"taxName",rules:[{required:!0}],children:e.jsx(j,{})}),e.jsx(l.Item,{label:r("Value"),name:"taxValue",rules:[{required:!0,message:"Please input tax value!",type:"number",min:0,max:100}],children:e.jsx(b,{min:0,max:100,suffix:"%",style:{width:"100%"}})}),e.jsx(l.Item,{label:r("enabled"),name:"enabled",style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},valuePropName:"checked",initialValue:!0,children:e.jsx(s,{checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(d,{})})}),e.jsx(l.Item,{label:r("Default"),name:"isDefault",style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},valuePropName:"checked",children:e.jsx(s,{checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(d,{})})})]})}function $(){const t=m(),r="taxes",u={displayLabels:["name"],searchFields:"name",outputValue:"_id"},x=["name"],c=[{title:t("Name"),dataIndex:"taxName"},{title:t("Value"),dataIndex:"taxValue"},{title:t("Default"),dataIndex:"isDefault"},{title:t("enabled"),dataIndex:"enabled"}],p=[{title:t("Name"),dataIndex:"taxName"},{title:t("Value"),dataIndex:"taxValue",render:(n,a)=>e.jsx(e.Fragment,{children:a.taxValue+"%"})},{title:t("Default"),dataIndex:"isDefault",key:"isDefault",onCell:(n,a)=>({props:{style:{width:"60px"}}}),render:(n,a)=>e.jsx(s,{checked:a.isDefault,checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(d,{})})},{title:t("enabled"),dataIndex:"enabled",key:"enabled",onCell:(n,a)=>({props:{style:{width:"60px"}}}),render:(n,a)=>e.jsx(s,{checked:a.enabled,checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(d,{})})}],h={PANEL_TITLE:t("taxes"),DATATABLE_TITLE:t("taxes_list"),ADD_NEW_ENTITY:t("add_new_tax"),ENTITY_NAME:t("taxes")},f={...{entity:r,...h},readColumns:c,dataTableColumns:p,searchConfig:u,deleteModalLabels:x};return e.jsx(C,{createForm:e.jsx(o,{}),updateForm:e.jsx(o,{isUpdateForm:!0}),config:f})}export{$ as default};
