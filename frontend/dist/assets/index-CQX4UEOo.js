import{ah as a}from"./index-HnWu2ajL.js";import{d as i}from"./index-9o8rWx82.js";import{D as c}from"./IdurarOs-BukodILd.js";import{t as d}from"./statusTagColor-DxbKI3gy.js";import{a as f,u as T}from"./useDate-VvBhK8L7.js";import"./index-EdnPnSX_.js";import{E as g}from"./selectors-CanXvmAz.js";import{E as I}from"./index-DgTP_UY2.js";import{C as E}from"./ErpApp-CHsvLNMM.js";import{T as l}from"./index-BHMGiCbw.js";import"./DownOutlined-DV_VUyFd.js";import"./index-DcpOWz18.js";import"./useDebounce-B3EZk7FP.js";import"./index-_196Wt15.js";import"./actions-ClqYLQbb.js";import"./index-KrFx5yLV.js";import"./Table-BVAEfPyJ.js";import"./FilePdfOutlined-D4j4MyV-.js";import"./ArrowRightOutlined-C4tBAx2j.js";import"./helpers-DB0-nE3e.js";import"./PlusOutlined-zk98YPLA.js";import"./index-Bsxqi8Iy.js";import"./fade-tVcqSVgs.js";function _({config:t}){const n=c();return a.jsx(g,{children:a.jsx(I,{config:t,extra:[{label:n("Record Payment"),key:"recordPayment",icon:a.jsx(E,{})}]})})}function J(){const t=c(),{dateFormat:n}=f(),m="invoice",{moneyFormatter:o}=T(),s={entity:"client",displayLabels:["name"],searchFields:"name"},p=["number","client.name"],u=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(n)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(n)},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>o({amount:e,currency_code:r.currency})},{title:t("paid"),dataIndex:"credit",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>o({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=d(e);return a.jsx(l,{color:r.color,children:e&&t(r.label)})}},{title:t("Payment"),dataIndex:"paymentStatus",render:e=>{let r=d(e);return a.jsx(l,{color:r.color,children:e&&t(e)})}},{title:t("Created By"),dataIndex:["createdBy","name"]}],x={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},y={...{entity:m,...x},dataTableColumns:u,searchConfig:s,deleteModalLabels:p};return a.jsx(_,{config:y})}export{J as default};
