import{ah as e}from"./index-DICNmN0G.js";import{D as c,_ as d,$ as s,a4 as r,C as i}from"./IdurarOs-DQIhGZkQ.js";import{C as f}from"./CrudModule-BsAc5g3p.js";import{S as l}from"./countryList-D9IccCpg.js";import"./actions-BkU2fy7X.js";import"./index-DsqXkqb5.js";import"./index-DrLm12-t.js";import"./ErpApp-ChsxfLux.js";import"./DownOutlined-CnuDg53Q.js";import"./helpers-Utty4Y-G.js";import"./index-CF4MqBhj.js";import"./fade-Sei_XaXo.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-DdZSsGFA.js";import"./useDate-DxSV4nP-.js";import"./useDebounce-nTIMxIJF.js";import"./index-9vEdx8EI.js";import"./DeleteOutlined-vrh61FYa.js";import"./ArrowRightOutlined-PkNK_QgL.js";import"./Table-gYHMXWUC.js";import"./PlusOutlined-D9D37ILv.js";function m({isUpdateForm:t=!1}){const n=c();return e.jsxs(e.Fragment,{children:[e.jsx(d.Item,{label:n("Payment Mode"),name:"name",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(d.Item,{label:n("Description"),name:"description",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(d.Item,{label:n("enabled"),name:"enabled",style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},valuePropName:"checked",initialValue:!0,children:e.jsx(l,{checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})}),e.jsx(d.Item,{label:n("Default Mode"),name:"isDefault",style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},valuePropName:"checked",children:e.jsx(l,{checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})})]})}function Y(){const t=c(),n="paymentMode",p={displayLabels:["name"],searchFields:"name",outputValue:"_id"},u=["name"],x=[{title:t("Payment Mode"),dataIndex:"name"},{title:t("Description"),dataIndex:"description"},{title:t("Default"),dataIndex:"isDefault"},{title:t("enabled"),dataIndex:"enabled"}],h=[{title:t("Payment Mode"),dataIndex:"name"},{title:t("Description"),dataIndex:"description"},{title:t("Default"),dataIndex:"isDefault",key:"isDefault",onCell:(o,a)=>({props:{style:{width:"60px"}}}),render:(o,a)=>e.jsx(l,{checked:a.isDefault,checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})},{title:t("enabled"),dataIndex:"enabled",key:"enabled",onCell:(o,a)=>({props:{style:{width:"60px"}}}),render:(o,a)=>e.jsx(l,{checked:a.enabled,checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})}],j={PANEL_TITLE:t("payment_mode"),DATATABLE_TITLE:t("payment_mode_list"),ADD_NEW_ENTITY:t("add_new_payment_mode"),ENTITY_NAME:t("payment_mode")},C={...{entity:n,...j},readColumns:x,dataTableColumns:h,searchConfig:p,deleteModalLabels:u};return e.jsx(f,{createForm:e.jsx(m,{}),updateForm:e.jsx(m,{isUpdateForm:!0}),config:C})}export{Y as default};
