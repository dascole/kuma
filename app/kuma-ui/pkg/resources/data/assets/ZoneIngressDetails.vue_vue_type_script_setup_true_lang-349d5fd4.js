import{A as _,a as z}from"./AccordionList-a4eff7da.js";import{a as I,D as b}from"./DefinitionListItem-c5c5813d.js";import{E as l}from"./EnvoyData-82400eab.js";import{_ as w,S as D}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-3296d566.js";import{T as k}from"./TabsWidget-4b7d0d5c.js";import{d as x,c as d,o as a,b as c,w as e,i as O,t as m,g as s,j as v,q as g,h as S,F as p}from"./index-566d109f.js";const q={class:"entity-heading"},E=x({__name:"ZoneIngressDetails",props:{zoneIngressOverview:{type:Object,required:!0}},setup(h){const u=h,y=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],n=d(()=>{const{type:r,name:t}=u.zoneIngressOverview;return{type:r,name:t}}),f=d(()=>{var t;const r=((t=u.zoneIngressOverview.zoneIngressInsight)==null?void 0:t.subscriptions)??[];return Array.from(r).reverse()});return(r,t)=>(a(),c(k,{tabs:y},{tabHeader:e(()=>[O("h1",q,`
        Zone Ingress: `+m(n.value.name),1)]),overview:e(()=>[s(b,null,{default:e(()=>[(a(!0),v(p,null,g(n.value,(o,i)=>(a(),c(I,{key:i,term:i},{default:e(()=>[S(m(o),1)]),_:2},1032,["term"]))),128))]),_:1})]),insights:e(()=>[s(z,{"initially-open":0},{default:e(()=>[(a(!0),v(p,null,g(f.value,(o,i)=>(a(),c(_,{key:i},{"accordion-header":e(()=>[s(w,{details:o},null,8,["details"])]),"accordion-content":e(()=>[s(D,{details:o,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),"xds-configuration":e(()=>[s(l,{"data-path":"xds","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-stats":e(()=>[s(l,{"data-path":"stats","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-clusters":e(()=>[s(l,{"data-path":"clusters","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1}))}});export{E as _};