import{ah as t}from"./index-CTCBJzRR.js";import{C as s}from"./CrudModule-BvPmqAwS.js";import{D as o}from"./index-Buz4FWpG.js";import{D as c}from"./IdurarOs-C1ccoc5w.js";import"./actions-NQwF321l.js";import"./index-CdlM297y.js";import"./index-DmJj_FyJ.js";import"./ErpApp-HKIHJaRg.js";import"./DownOutlined-1foRSa1_.js";import"./helpers-B-LtsaJ6.js";import"./index-PuTi9JZX.js";import"./fade-NNgYGlbA.js";import"./countryList-BMI-59xj.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-BT8QzzTa.js";import"./useDate-D4igKvV0.js";import"./useDebounce-CY_c4DTb.js";import"./index-DdLBPheE.js";import"./ArrowRightOutlined-tFQf75iq.js";import"./Table-C6aSP117.js";import"./DeleteOutlined-C4uAHv9y.js";import"./PlusOutlined-DPRi5CKy.js";import"./index-B9GaUWf0.js";import"./index-DRHd9gyj.js";import"./index-DWqF2znp.js";import"./useFetch-DKjgpc6t.js";import"./index-Dav0lxE5.js";const r={firstname:{type:"string",required:!0},lastname:{type:"string",required:!0},company:{type:"search",entity:"company",renderAsTag:!0,redirectLabel:"Add New Company",withRedirect:!0,urlToRedirect:"/company",displayLabels:["name"],searchFields:"name",dataIndex:["company","name"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email"}};function v(){const e=c(),i="people",m={displayLabels:["firstname","lastname"],searchFields:"firstname,lastname,email"},a=["firstname","lastname"],p={PANEL_TITLE:e("person"),DATATABLE_TITLE:e("people_list"),ADD_NEW_ENTITY:e("add_new_person"),ENTITY_NAME:e("person")},n={...{entity:i,...p},fields:r,searchConfig:m,deleteModalLabels:a};return t.jsx(s,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:n})}export{v as default};
