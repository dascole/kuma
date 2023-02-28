import{u as $,h as M,i as Q,k as q}from"./production-765497f0.js";import{A as R,T as U}from"./kongponents.es-881f3b05.js";import{Q as B}from"./QueryParameter-70743f73.js";import{a as G,A as H}from"./AccordionItem-bf8377f9.js";import{D as K}from"./DataOverview-9ac5c84b.js";import{E as _}from"./EnvoyData-b77a5945.js";import{F as W}from"./FrameSkeleton-fce024d0.js";import{_ as X}from"./LabelList.vue_vue_type_style_index_0_lang-fcc406f6.js";import{_ as Y,S as j}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-deca02fc.js";import{T as J}from"./TabsWidget-04971112.js";import{u as ee}from"./index-5fc45c5b.js";import{d as ae,r as l,q as te,a3 as se,h as d,e as r,w as a,o as u,u as b,a as E,f as z,b as w,g as p,t as k,F as I,l as L}from"./runtime-dom.esm-bundler-8dcf3b23.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./datadogLogEvents-302eea7b.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-721b93a6.js";import"./ErrorBlock-6f5a1b32.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-58de5058.js";import"./StatusBadge-1cbdf904.js";import"./TagList-303f6551.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-edbce1d0.js";const ne={class:"zoneegresses"},re={class:"entity-heading"},oe={key:0},xe=ae({__name:"ZoneEgresses",props:{selectedZoneEgressName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(O){const f=O,A=ee(),C={title:"No Data",message:"There are no Zone Egresses present."},F=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],g=$(),m=l(!0),c=l(!1),v=l(null),y=l({headers:[{label:"Actions",key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]}),i=l(null),S=l([]),x=l(null),D=l([]),T=l(f.offset);te(()=>g.params.mesh,function(){g.name==="zoneegresses"&&(m.value=!0,c.value=!1,v.value=null,h(0))}),se(function(){h(f.offset)});async function h(t){T.value=t,B.set("offset",t>0?t:null),m.value=!0,c.value=!1;const s=g.query.ns||null,o=q;try{const{data:e,next:n}=await V(s,o,t);x.value=n,e.length?(c.value=!1,S.value=e,Z({name:f.selectedZoneEgressName??e[0].name}),y.value.data=e.map(N=>{const P=M(N.zoneEgressInsight??{});return{...N,status:P}})):(y.value.data=[],c.value=!0)}catch(e){e instanceof Error?v.value=e:console.error(e),c.value=!0}finally{m.value=!1}}function Z({name:t}){var e;const s=S.value.find(n=>n.name===t),o=((e=s==null?void 0:s.zoneEgressInsight)==null?void 0:e.subscriptions)??[];D.value=Array.from(o).reverse(),i.value=Q(s,["type","name"]),B.set("zoneEgress",t)}async function V(t,s,o){if(t)return{data:[await A.getZoneEgressOverview({name:t},{size:s,offset:o})],next:null};{const{items:e,next:n}=await A.getAllZoneEgressOverviews({size:s,offset:o});return{data:e??[],next:n}}}return(t,s)=>(u(),d("div",ne,[r(W,null,{default:a(()=>{var o;return[r(K,{"selected-entity-name":(o=i.value)==null?void 0:o.name,"page-size":b(q),"is-loading":m.value,error:v.value,"empty-state":C,"table-data":y.value,"table-data-is-empty":c.value,next:x.value,"page-offset":T.value,onTableAction:Z,onLoadData:h},{additionalControls:a(()=>[t.$route.query.ns?(u(),E(b(R),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zoneegresses"}},{default:a(()=>[z(`
            View all
          `)]),_:1})):w("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"]),z(),c.value===!1&&i.value!==null?(u(),E(J,{key:0,"has-error":v.value!==null,"is-loading":m.value,tabs:F},{tabHeader:a(()=>[p("h1",re,`
            Zone Egress: `+k(i.value.name),1)]),overview:a(()=>[r(X,null,{default:a(()=>[p("div",null,[p("ul",null,[(u(!0),d(I,null,L(i.value,(e,n)=>(u(),d("li",{key:n},[e?(u(),d("h4",oe,k(n),1)):w("",!0),z(),p("p",null,k(e),1)]))),128))])])]),_:1})]),insights:a(()=>[r(b(U),{"border-variant":"noBorder"},{body:a(()=>[r(G,{"initially-open":0},{default:a(()=>[(u(!0),d(I,null,L(D.value,(e,n)=>(u(),E(H,{key:n},{"accordion-header":a(()=>[r(Y,{details:e},null,8,["details"])]),"accordion-content":a(()=>[r(j,{details:e,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":a(()=>[r(_,{"data-path":"xds","zone-egress-name":i.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":a(()=>[r(_,{"data-path":"stats","zone-egress-name":i.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":a(()=>[r(_,{"data-path":"clusters","zone-egress-name":i.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading"])):w("",!0)]}),_:1})]))}});export{xe as default};