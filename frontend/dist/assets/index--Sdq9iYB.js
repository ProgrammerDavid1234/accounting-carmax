import{ah as a}from"./index-HnWu2ajL.js";import{d as u}from"./index-9o8rWx82.js";import{D as c}from"./IdurarOs-BukodILd.js";import"./index-EdnPnSX_.js";import{E as y}from"./selectors-CanXvmAz.js";import{E as f}from"./index-DgTP_UY2.js";import{a as x,u as b}from"./useDate-VvBhK8L7.js";import"./ErpApp-CHsvLNMM.js";import"./DownOutlined-DV_VUyFd.js";import"./index-DcpOWz18.js";import"./useDebounce-B3EZk7FP.js";import"./index-_196Wt15.js";import"./actions-ClqYLQbb.js";import"./index-KrFx5yLV.js";import"./Table-BVAEfPyJ.js";import"./FilePdfOutlined-D4j4MyV-.js";import"./ArrowRightOutlined-C4tBAx2j.js";import"./helpers-DB0-nE3e.js";import"./PlusOutlined-zk98YPLA.js";import"./index-Bsxqi8Iy.js";import"./fade-tVcqSVgs.js";function E({config:t}){return a.jsx(y,{children:a.jsx(f,{config:t})})}function k(){const t=c(),{dateFormat:n}=x(),{moneyFormatter:r}=b(),o={entity:"client",displayLabels:["number"],searchFields:"number",outputValue:"_id"},i=["number"],m=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Amount"),dataIndex:"amount",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,l)=>r({amount:e,currency_code:l.currency})},{title:t("Date"),dataIndex:"date",render:e=>u(e).format(n)},{title:t("Number"),dataIndex:["invoice","number"]},{title:t("year"),dataIndex:["invoice","year"]},{title:t("Payment Mode"),dataIndex:["paymentMode","name"]}],s="payment",d={PANEL_TITLE:t("payment"),DATATABLE_TITLE:t("payment_list"),ADD_NEW_ENTITY:t("add_new_payment"),ENTITY_NAME:t("payment")},p={...{entity:s,...d},disableAdd:!0,dataTableColumns:m,searchConfig:o,deleteModalLabels:i};return a.jsx(E,{config:p})}export{k as default};
