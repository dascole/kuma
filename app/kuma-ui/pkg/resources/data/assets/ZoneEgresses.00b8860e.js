import{D as B,cn as F,co as Z,e as q,Q as K,P as N,k as y,cq as O,s as R,o as i,j as u,a,w as s,c as _,b as V,z as b,l as m,t as v,F as E,n as D,i as n}from"./index.c585bc0e.js";import{g as H}from"./tableDataUtils.2db529d9.js";import{D as U}from"./DataOverview.c604c2e3.js";import{_ as W}from"./EntityURLControl.vue_vue_type_script_setup_true_lang.10fe11eb.js";import{E as P}from"./EnvoyData.82a106c4.js";import{F as j}from"./FrameSkeleton.ab90227b.js";import{_ as G}from"./LabelList.vue_vue_type_style_index_0_lang.029bcff0.js";import{S as M,a as Q}from"./SubscriptionHeader.5f9cf7f2.js";import{T as X}from"./TabsWidget.e103bfcd.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.148e4b93.js";import"./ErrorBlock.7fcd7756.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.4545e3d6.js";import"./TagList.dbd4cbd9.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.1e46e3e5.js";import"./_commonjsHelpers.f037b798.js";const J={name:"ZoneEgresses",components:{AccordionItem:F,AccordionList:Z,DataOverview:U,EntityURLControl:W,EnvoyData:P,FrameSkeleton:j,LabelList:G,SubscriptionDetails:M,SubscriptionHeader:Q,TabsWidget:X,KButton:q,KCard:K},data(){return{isLoading:!0,isEmpty:!1,error:null,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:N,next:null,subscriptionsReversed:[]}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.init()}},beforeMount(){this.init()},methods:{init(){this.loadData()},tableAction(r){const o=r;this.getEntity(o)},async loadData(r="0"){this.isLoading=!0,this.isEmpty=!1;const o=this.$route.query.ns||null;try{const{data:t,next:p}=await H({getAllEntities:y.getAllZoneEgressOverviews.bind(y),getSingleEntity:y.getZoneEgressOverview.bind(y),size:this.pageSize,offset:r,query:o});this.next=p,t.length?(this.isEmpty=!1,this.rawData=t,this.getEntity({name:t[0].name}),this.tableData.data=t.map(e=>{const{zoneEgressInsight:l={}}=e;return{...e,...O(l)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(t){t instanceof Error?error.value=t:console.error(t),this.isEmpty=!0}finally{this.isLoading=!1}},getEntity(r){var e,l;const o=["type","name"],t=this.rawData.find(g=>g.name===r.name),p=(l=(e=t==null?void 0:t.zoneEgressInsight)==null?void 0:e.subscriptions)!=null?l:[];this.subscriptionsReversed=Array.from(p).reverse(),this.entity=R(t,o)}}},Y={class:"zoneegresses"},$=m("span",{class:"custom-control-icon"}," \u2190 ",-1),ee={key:0};function te(r,o,t,p,e,l){const g=n("KButton"),L=n("DataOverview"),S=n("EntityURLControl"),z=n("LabelList"),k=n("SubscriptionHeader"),w=n("SubscriptionDetails"),A=n("AccordionItem"),x=n("AccordionList"),C=n("KCard"),h=n("EnvoyData"),T=n("TabsWidget"),I=n("FrameSkeleton");return i(),u("div",Y,[a(I,null,{default:s(()=>{var f;return[a(L,{"selected-entity-name":(f=e.entity)==null?void 0:f.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,onTableAction:l.tableAction,onLoadData:o[0]||(o[0]=c=>l.loadData(c))},{additionalControls:s(()=>[r.$route.query.ns?(i(),_(g,{key:0,class:"back-button",appearance:"primary",to:{name:"zoneegresses"}},{default:s(()=>[$,V(" View All ")]),_:1})):b("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","next","onTableAction"]),e.isEmpty===!1?(i(),_(T,{key:0,"has-error":e.error!==null,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:s(()=>[m("div",null,[m("h3",null," Zone Egress: "+v(e.entity.name),1)]),m("div",null,[a(S,{name:e.entity.name},null,8,["name"])])]),overview:s(()=>[a(z,null,{default:s(()=>[m("div",null,[m("ul",null,[(i(!0),u(E,null,D(e.entity,(c,d)=>(i(),u("li",{key:d},[c?(i(),u("h4",ee,v(d),1)):b("",!0),m("p",null,v(c),1)]))),128))])])]),_:1})]),insights:s(()=>[a(C,{"border-variant":"noBorder"},{body:s(()=>[a(x,{"initially-open":0},{default:s(()=>[(i(!0),u(E,null,D(e.subscriptionsReversed,(c,d)=>(i(),_(A,{key:d},{"accordion-header":s(()=>[a(k,{details:c},null,8,["details"])]),"accordion-content":s(()=>[a(w,{details:c,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":s(()=>[a(h,{"data-path":"xds","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":s(()=>[a(h,{"data-path":"stats","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":s(()=>[a(h,{"data-path":"clusters","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading","tabs"])):b("",!0)]}),_:1})])}const _e=B(J,[["render",te]]);export{_e as default};