import{ah as o}from"./index-HnWu2ajL.js";import{d as i}from"./index-9o8rWx82.js";import{t as u}from"./statusTagColor-DxbKI3gy.js";import"./index-EdnPnSX_.js";import{D as f}from"./IdurarOs-BukodILd.js";import{E as x}from"./selectors-CanXvmAz.js";import{E as T}from"./index-DgTP_UY2.js";import{a as g,u as y}from"./useDate-VvBhK8L7.js";import{T as E}from"./index-BHMGiCbw.js";import"./ErpApp-CHsvLNMM.js";import"./DownOutlined-DV_VUyFd.js";import"./index-DcpOWz18.js";import"./useDebounce-B3EZk7FP.js";import"./index-_196Wt15.js";import"./actions-ClqYLQbb.js";import"./index-KrFx5yLV.js";import"./Table-BVAEfPyJ.js";import"./FilePdfOutlined-D4j4MyV-.js";import"./ArrowRightOutlined-C4tBAx2j.js";import"./helpers-DB0-nE3e.js";import"./PlusOutlined-zk98YPLA.js";import"./index-Bsxqi8Iy.js";import"./fade-tVcqSVgs.js";function b({config:t}){return o.jsx(x,{children:o.jsx(T,{config:t})})}function H(){const t=f(),{dateFormat:a}=g(),m="quote",{moneyFormatter:n}=y(),l={entity:"client",displayLabels:["name"],searchFields:"name"},s=["number","client.name"],c=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(a)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(a)},{title:t("Sub Total"),dataIndex:"subTotal",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=u(e);return o.jsx(E,{color:r.color,children:e&&t(r.label)})}}],d={PANEL_TITLE:t("proforma invoice"),DATATABLE_TITLE:t("proforma invoice_list"),ADD_NEW_ENTITY:t("add_new_proforma invoice"),ENTITY_NAME:t("proforma invoice")},p={...{entity:m,...d},dataTableColumns:c,searchConfig:l,deleteModalLabels:s};return o.jsx(b,{config:p})}export{H as default};
