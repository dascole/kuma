import{d as z,q as k,r as l,s as p,o as a,c as s,w as f,a as c,u as _,b,e as h,f as y}from"./index-e5116c83.js";import{_ as $}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-221d9d55.js";import{u as x,b as B,g,f as E,e as V}from"./RouteView.vue_vue_type_script_setup_true_lang-64d62d02.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-fd054cf1.js";import{_ as A}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-df6de271.js";import{E as C}from"./ErrorBlock-29ba64e5.js";import{_ as D}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-0c64654f.js";import"./kongponents.es-8835ef00.js";import"./AccordionList-fdaaa95d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-6ba77cd3.js";import"./DefinitionListItem-f6c66a82.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-ede5b867.js";import"./TabsWidget-4d648f17.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-145bd8be.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-9b42336b.js";const O={class:"zone-details"},T={key:3,class:"kcard-border"},X=z({__name:"ZoneDetailView",setup(Z){const d=x(),e=k(),v=B(),{t:m}=g(),t=l(null),n=l(!0),o=l(null);p(()=>e.params.mesh,function(){e.name==="zone-cp-detail-view"&&i()}),p(()=>e.params.name,function(){e.name==="zone-cp-detail-view"&&i()}),w();function w(){v.dispatch("updatePageTitle",e.params.zone),i()}async function i(){n.value=!0,o.value=null;const u=e.params.zone;try{t.value=await d.getZoneOverview({name:u})}catch(r){t.value=null,r instanceof Error?o.value=r:console.error(r)}finally{n.value=!1}}return(u,r)=>(a(),s(V,null,{default:f(()=>[c(N,{title:_(m)("zone-cps.routes.item.title")},null,8,["title"]),b(),c(E,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:_(m)("zone-cps.routes.item.breadcrumbs")}]},{default:f(()=>[h("div",O,[n.value?(a(),s(D,{key:0})):o.value!==null?(a(),s(C,{key:1,error:o.value},null,8,["error"])):t.value===null?(a(),s(A,{key:2})):(a(),y("div",T,[c($,{"zone-overview":t.value},null,8,["zone-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{X as default};