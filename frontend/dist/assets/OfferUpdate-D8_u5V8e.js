import{aq as n,ar as u,ap as c,a as s,ai as d,ah as r,aw as E}from"./index-DICNmN0G.js";import{Z as L,D as l}from"./IdurarOs-DQIhGZkQ.js";import"./index-DsqXkqb5.js";import{s as T,E as i}from"./selectors-CA_LF2fK.js";import{U as x}from"./UpdateItem-CuuR3Ltk.js";import{O as y}from"./OfferForm-DXxh3YNe.js";import{e as p}from"./actions-D2x6ggdI.js";import"./index-DrLm12-t.js";import"./ErpApp-ChsxfLux.js";import"./DownOutlined-CnuDg53Q.js";import"./calculate-DSD-I2U7.js";import"./useDate-DxSV4nP-.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-DdZSsGFA.js";import"./CloseCircleOutlined-DOxxBXXR.js";import"./PlusOutlined-D9D37ILv.js";import"./index-BIn2RWBA.js";import"./useDebounce-nTIMxIJF.js";import"./index-9vEdx8EI.js";import"./index-DrXV9ujL.js";import"./useFetch-0-88RWWy.js";import"./color-DHucoY0N.js";import"./index-BuuiV7G3.js";import"./index-Iob1MjX4.js";import"./DeleteOutlined-vrh61FYa.js";function _({config:t}){const o=n(),{id:a}=u();c(),s.useLayoutEffect(()=>{o(p.read({entity:t.entity,id:a}))},[a]);const{result:e,isSuccess:m,isLoading:f=!0}=d(T);return s.useLayoutEffect(()=>{e&&o(p.currentAction({actionType:"update",data:e}))},[e]),f?r.jsx(i,{children:r.jsx(E,{})}):r.jsx(i,{children:m?r.jsx(x,{config:t,UpdateForm:y}):r.jsx(L,{entity:t.entity})})}function H(){const t=l(),o="offer",a={PANEL_TITLE:t("Offer Leads"),DATATABLE_TITLE:t("offer_list"),ADD_NEW_ENTITY:t("add_new_offer"),ENTITY_NAME:t("Offer Leads")},e={entity:o,...a};return r.jsx(_,{config:e})}export{H as default};
