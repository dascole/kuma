import{d as h,q as y,m as _,o as i,c as m,w as p,a as r,u as c,b as f,g as d}from"./index-e5116c83.js";import{_ as b}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-a4d047d2.js";import{b as P,g as x,f as N,e as w}from"./RouteView.vue_vue_type_script_setup_true_lang-64d62d02.js";import{_ as T}from"./RouteTitle.vue_vue_type_script_setup_true_lang-fd054cf1.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-833d3b91.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-df6de271.js";import"./kongponents.es-8835ef00.js";import"./ErrorBlock-29ba64e5.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-0c64654f.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-466639ee.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-6ba77cd3.js";import"./TextWithCopyButton-145bd8be.js";import"./toYaml-4e00099e.js";import"./TabsWidget-4d648f17.js";import"./QueryParameter-70743f73.js";const G=h({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(l){const t=l,n=y(),e=P(),{t:a}=x(),o=_(()=>e.state.policyTypesByPath[t.policyPath]);u();function u(){e.dispatch("updatePageTitle",n.params.policy)}return(V,$)=>(i(),m(w,null,{default:p(({route:s})=>[r(T,{title:c(a)("policies.routes.item.title")},null,8,["title"]),f(),r(N,{breadcrumbs:[{to:{name:"policies-list-view",params:{mesh:s.params.mesh,policyPath:s.params.policyPath}},text:c(a)("policies.routes.item.breadcrumbs")}]},{default:p(()=>[o.value?(i(),m(b,{key:0,name:t.policyName,mesh:t.mesh,path:t.policyPath,type:o.value.name},null,8,["name","mesh","path","type"])):d("",!0)]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{G as default};