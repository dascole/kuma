import{d as te,l as ne,m as oe,i as re,r as n,n as le,p as ie,q as M,s as G,t as ue,v as ce,I as fe,o,c as f,u as I,k as d,w as r,a as g,E as ge,e as z,x as C,P as R,g as V,y as A,F as J,z as Y,_ as pe,A as ve,B as me}from"./index-e096fb01.js";import{_ as de}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-7e372d7d.js";import{_ as he}from"./CodeBlock.vue_vue_type_style_index_0_lang-25903ab0.js";import{D as ye}from"./DataOverview-8ec2eb8a.js";import{F as _e}from"./FrameSkeleton-f310b9e4.js";import{_ as be}from"./LabelList.vue_vue_type_style_index_0_lang-4dec2f30.js";import{_ as we,S as ke}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-bf69e6e6.js";import{T as Ee}from"./TabsWidget-760376e0.js";import{_ as Se}from"./WarningsWidget.vue_vue_type_script_setup_true_lang-2a258ae8.js";import{Q as H}from"./QueryParameter-70743f73.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-467e5ff3.js";import"./ErrorBlock-e347ad5a.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-7adf9901.js";import"./TagList-91f2b0bd.js";import"./StatusBadge-79f7109b.js";const Ie={class:"zones"},ze={class:"entity-heading"},Ce={key:0},Ae={key:1},Ne={key:2},Re=te({__name:"ZonesView",props:{selectedZoneName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(Q){const N=Q,c=ne(),U={title:"No Data",message:"There are no Zones present."},D=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Insights"},{hash:"#config",title:"Config"},{hash:"#warnings",title:"Warnings"}],Z=oe(),O=re(),h=n(!0),p=n(!1),_=n(null),b=n(!0),y=n(!1),w=n(!1),k=n(!1),E=n({headers:[{label:"Status",key:"status"},{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{label:"Warnings",key:"warnings",hideLabel:!0}],data:[]}),v=n(null),L=n(null),S=n([]),x=n([]),T=n(null),B=n(N.offset),W=n(new Set),P=n(new Set);le(()=>Z.params.mesh,function(){Z.name==="zones"&&(h.value=!0,p.value=!1,b.value=!0,y.value=!1,w.value=!1,k.value=!1,_.value=null,q(0))}),ie(function(){q(N.offset)});function q(a){O.getters["config/getMulticlusterStatus"]&&F(a)}function j(){return S.value.length===0?D.filter(a=>a.hash!=="#warnings"):D}function K(a){var m;let t="-",s="",e=!0;(((m=a.zoneInsight)==null?void 0:m.subscriptions)??[]).forEach(u=>{if(u.version&&u.version.kumaCp){t=u.version.kumaCp.version;const{kumaCpGlobalCompatible:se=!0}=u.version.kumaCp;e=se,u.config&&(s=JSON.parse(u.config).store.type)}});const i=G(a.zoneInsight);return{...a,status:i,zoneCpVersion:t,storeType:s,hasIngress:W.value.has(a.name)?"Yes":"No",hasEgress:P.value.has(a.name)?"Yes":"No",withWarnings:!e}}function X(a){const t=new Set;a.forEach(({zoneIngress:{zone:s}})=>{t.add(s)}),W.value=t}function ee(a){const t=new Set;a.forEach(({zoneEgress:{zone:s}})=>{t.add(s)}),P.value=t}async function F(a){B.value=a,H.set("offset",a>0?a:null),h.value=!0,p.value=!1;const t=Z.query.ns||null,s=R;try{const[{data:e,next:l},{items:i},{items:m}]=await Promise.all([ae(t,s,a),M(c.getAllZoneIngressOverviews.bind(c)),M(c.getAllZoneEgressOverviews.bind(c))]);L.value=l,e.length?(X(i),ee(m),E.value.data=e.map(K),k.value=!1,p.value=!1,await $({name:N.selectedZoneName??e[0].name})):(E.value.data=[],k.value=!0,p.value=!0,y.value=!0)}catch(e){e instanceof Error?_.value=e:console.error(e),p.value=!0}finally{h.value=!1}}async function $({name:a}){var t;w.value=!1,b.value=!0,y.value=!1,S.value=[];try{const s=await c.getZoneOverview({name:a}),e=((t=s.zoneInsight)==null?void 0:t.subscriptions)??[],l=G(s.zoneInsight);if(v.value={...ue(s,["type","name"]),status:l,"Authentication Type":ce(s)},H.set("zone",a),x.value=Array.from(e).reverse(),e.length>0){const i=e[e.length-1],m=i.version.kumaCp.version||"-",{kumaCpGlobalCompatible:u=!0}=i.version.kumaCp;u||S.value.push({kind:fe,payload:{zoneCpVersion:m,globalCpVersion:O.getters["config/getVersion"]}}),i.config&&(T.value=JSON.stringify(JSON.parse(i.config),null,2))}}catch(s){console.error(s),v.value=null,w.value=!0,y.value=!0}finally{b.value=!1}}async function ae(a,t,s){if(a)return{data:[await c.getZoneOverview({name:a},{size:t,offset:s})],next:null};{const{items:e,next:l}=await c.getAllZoneOverviews({size:t,offset:s});return{data:e??[],next:l}}}return(a,t)=>(o(),f("div",Ie,[I(O).getters["config/getMulticlusterStatus"]===!1?(o(),d(de,{key:0})):(o(),d(_e,{key:1},{default:r(()=>{var s;return[g(ye,{"selected-entity-name":(s=v.value)==null?void 0:s.name,"page-size":I(R),"is-loading":h.value,error:_.value,"empty-state":U,"table-data":E.value,"table-data-is-empty":k.value,"show-warnings":E.value.data.some(e=>e.withWarnings),next:L.value,"page-offset":B.value,onTableAction:$,onLoadData:F},{additionalControls:r(()=>[a.$route.query.ns?(o(),d(I(ge),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zones"}},{default:r(()=>[z(`
            View all
          `)]),_:1})):C("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","show-warnings","next","page-offset"]),z(),p.value===!1&&v.value!==null?(o(),d(Ee,{key:0,"has-error":_.value!==null,"is-loading":h.value,tabs:j()},{tabHeader:r(()=>[V("h1",ze,`
            Zone: `+A(v.value.name),1)]),overview:r(()=>[g(be,{"has-error":w.value,"is-loading":b.value,"is-empty":y.value},{default:r(()=>[V("div",null,[V("ul",null,[(o(!0),f(J,null,Y(v.value,(e,l)=>(o(),f("li",{key:l},[e?(o(),f("h4",Ce,A(l),1)):C("",!0),z(),l==="status"?(o(),f("p",Ae,[g(I(pe),{appearance:e==="Offline"?"danger":"success"},{default:r(()=>[z(A(e),1)]),_:2},1032,["appearance"])])):(o(),f("p",Ne,A(e),1))]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])]),insights:r(()=>[g(me,{"initially-open":0},{default:r(()=>[(o(!0),f(J,null,Y(x.value,(e,l)=>(o(),d(ve,{key:l},{"accordion-header":r(()=>[g(we,{details:e},null,8,["details"])]),"accordion-content":r(()=>[g(ke,{details:e},null,8,["details"])]),_:2},1024))),128))]),_:1})]),config:r(()=>[T.value?(o(),d(he,{key:0,id:"code-block-zone-config",language:"json",code:T.value,"is-searchable":"","query-key":"zone-config"},null,8,["code"])):C("",!0)]),warnings:r(()=>[g(Se,{warnings:S.value},null,8,["warnings"])]),_:1},8,["has-error","is-loading","tabs"])):C("",!0)]}),_:1}))]))}});export{Re as default};