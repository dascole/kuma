import{d as D,u as E,r as n,v as x,a5 as A,S as Z,o as i,j as p,e as b,b as V,i as B,g as k,N as w,h as L,f as M}from"./index-9446a80a.js";import{_ as O}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-b28622a7.js";import{_ as P}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-6b6f2d12.js";import{D as q}from"./DataOverview-91709042.js";import{u as C}from"./store-151b9d07.js";import{u as F}from"./index-8803a3d4.js";import{Q as f}from"./QueryParameter-70743f73.js";import"./kongponents.es-086743bd.js";import"./AccordionList-a1a0efe3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DefinitionListItem-ff5ef3cf.js";import"./EnvoyData-5f3aab89.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-84f822cd.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-fbb95771.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-6f33c42a.js";import"./ErrorBlock-95d72981.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-57553418.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-23956c2c.js";import"./TabsWidget-b87682a9.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-63b4257e.js";import"./StatusBadge-32df551b.js";const Q={class:"zoneingresses"},R={key:1,class:"kcard-stack"},U={class:"kcard-border"},$={key:0,class:"kcard-border"},fe=D({__name:"ZoneIngressListView",props:{selectedZoneIngressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const l=z,v=F(),N={title:"No Data",message:"There are no Zone Ingresses present."},g=E(),_=C(),u=n(!0),c=n(null),r=n({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),o=n(null),y=n(null),h=n(l.offset);x(()=>g.params.mesh,function(){g.name==="zone-ingress-list-view"&&m(0)}),A(function(){S(l.offset)});function S(e){_.getters["config/getMulticlusterStatus"]&&m(e)}async function m(e){var a;h.value=e,f.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=w;try{const{items:s,next:d}=await v.getAllZoneIngressOverviews({size:t,offset:e});y.value=d,r.value.data=T(s??[]),await I({name:l.selectedZoneIngressName??((a=r.value.data[0])==null?void 0:a.entity.name)})}catch(s){r.value.data=[],o.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function T(e){return e.map(t=>{const{name:a}=t,s={name:"zone-ingress-detail-view",params:{zoneIngress:a}},d=Z(t.zoneIngressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function I({name:e}){if(e===void 0){o.value=null,f.set("zoneIngress",null);return}try{o.value=await v.getZoneIngressOverview({name:e}),f.set("zoneIngress",e)}catch(t){console.error(t)}}return(e,t)=>{var a;return i(),p("div",Q,[b(_).getters["config/getMulticlusterStatus"]===!1?(i(),V(O,{key:0})):(i(),p("div",R,[B("div",U,[k(q,{"selected-entity-name":(a=o.value)==null?void 0:a.name,"page-size":b(w),"is-loading":u.value,error:c.value,"empty-state":N,"table-data":r.value,"table-data-is-empty":r.value.data.length===0,next:y.value,"page-offset":h.value,onTableAction:I,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),L(),o.value!==null?(i(),p("div",$,[k(P,{"zone-ingress-overview":o.value},null,8,["zone-ingress-overview"])])):M("",!0)]))])}}});export{fe as default};