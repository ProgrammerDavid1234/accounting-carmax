import{ah as t}from"./index-CH-5c-MR.js";import{C as s}from"./CrudModule-BFu4G31Y.js";import{D as o}from"./index-ZhfB7L0u.js";import{D as c}from"./IdurarOs-fG_l_C9Y.js";import"./actions-lAyiSV_q.js";import"./index-BJSr-kn-.js";import"./index-DqUJQRo8.js";import"./ErpApp-xuQNuWsw.js";import"./DownOutlined-CwSJeHNu.js";import"./helpers-Bq6rhdAh.js";import"./index-CyUVFuBk.js";import"./fade-DCmSMvW_.js";import"./countryList-D4Z0_rqR.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-B4f4eOHp.js";import"./useDate-BULXdJSE.js";import"./useDebounce-Bt454N2K.js";import"./index-BvYAae1P.js";import"./ArrowRightOutlined-C5erMTxb.js";import"./Table-GuseyTUl.js";import"./DeleteOutlined-BFUSzqOA.js";import"./PlusOutlined-DTyZuIQf.js";import"./index-DgQk4TZ4.js";import"./index-D9tus7yj.js";import"./index-BqZbbUgK.js";import"./useFetch-9h3EQO6S.js";import"./index-BgRVQ2Al.js";const r={firstname:{type:"string",required:!0},lastname:{type:"string",required:!0},company:{type:"search",entity:"company",renderAsTag:!0,redirectLabel:"Add New Company",withRedirect:!0,urlToRedirect:"/company",displayLabels:["name"],searchFields:"name",dataIndex:["company","name"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email"}};function v(){const e=c(),i="people",m={displayLabels:["firstname","lastname"],searchFields:"firstname,lastname,email"},a=["firstname","lastname"],p={PANEL_TITLE:e("person"),DATATABLE_TITLE:e("people_list"),ADD_NEW_ENTITY:e("add_new_person"),ENTITY_NAME:e("person")},n={...{entity:i,...p},fields:r,searchConfig:m,deleteModalLabels:a};return t.jsx(s,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:n})}export{v as default};
