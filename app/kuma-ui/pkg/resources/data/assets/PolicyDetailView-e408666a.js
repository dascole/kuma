import{d as b,j as S,r as V,o as e,e as m,O as B,P as L,q as g,g as d,h as p,w as o,a as s,F as f,s as P,t as q,b as h,H as N}from"./index-1a6818f4.js";import{E as k,s as v,t as $,o as w,i as C,m as A,A as E,_ as F}from"./RouteView.vue_vue_type_script_setup_true_lang-7aee8921.js";import{_ as j}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-04e9624d.js";import{_ as I}from"./RouteTitle.vue_vue_type_script_setup_true_lang-957e0dce.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-ac7280a6.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4c04f3f2.js";const O={key:3,"data-testid":"affected-data-plane-proxies"},R=b({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyPath:{type:String,required:!0},policyName:{type:String,required:!0}},setup(u){const a=u,c=S("");return(_,t)=>{const n=V("RouterLink");return e(),m(f,null,[B(g("input",{id:"dataplane-search","onUpdate:modelValue":t[0]||(t[0]=i=>c.value=i),type:"text",class:"k-input mt-4",placeholder:"Filter by name",required:"","data-testid":"dataplane-search-input"},null,512),[[L,c.value]]),d(),p(w,{src:`/meshes/${a.mesh}/policy-path/${a.policyPath}/policy/${a.policyName}/dataplanes`},{default:o(({data:i,error:l})=>[l?(e(),s(k,{key:0,error:l},null,8,["error"])):i===void 0?(e(),s(v,{key:1})):i.items.length===0?(e(),s($,{key:2})):(e(),m("ul",O,[(e(!0),m(f,null,P(i.items.filter(r=>r.dataplane.name.toLowerCase().includes(c.value.toLowerCase())),(r,y)=>(e(),m("li",{key:y,"data-testid":"dataplane-name"},[p(n,{to:{name:"data-plane-detail-view",params:{mesh:r.dataplane.mesh,dataPlane:r.dataplane.name}}},{default:o(()=>[d(q(r.dataplane.name),1)]),_:2},1032,["to"])]))),128))]))]),_:1},8,["src"])],64)}}}),H={class:"stack"},K=b({__name:"PolicyDetails",props:{policy:{type:Object,required:!0},path:{type:String,required:!0}},setup(u){const a=u,{t:c}=C(),_=A();async function t(n){const{name:i,mesh:l}=a.policy,r=a.path;return await _.getSinglePolicyEntity({name:i,mesh:l,path:r},n)}return(n,i)=>(e(),m("div",H,[p(h(N),null,{body:o(()=>[g("h2",null,q(h(c)("policies.detail.affected_dpps")),1),d(),p(R,{mesh:a.policy.mesh,"policy-name":a.policy.name,"policy-path":a.path},null,8,["mesh","policy-name","policy-path"])]),_:1}),d(),p(j,{id:"code-block-policy",resource:a.policy,"resource-fetcher":t,"is-searchable":""},null,8,["resource"])]))}}),W=b({__name:"PolicyDetailView",setup(u){const{t:a}=C();return(c,_)=>(e(),s(F,{name:"policy-detail-view","data-testid":"policy-detail-view"},{default:o(({route:t})=>[p(w,{src:"/*/policy-types"},{default:o(({data:n,error:i})=>[i?(e(),s(k,{key:0,error:i},null,8,["error"])):n===void 0?(e(),s(v,{key:1})):n.policies.length===0?(e(),s($,{key:2})):(e(!0),m(f,{key:3},P([n.policies.find(l=>l.path===t.params.policyPath)??n.policies[0]],l=>(e(),s(E,{key:l.name,breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"policies-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath}},text:h(a)("policies.routes.item.breadcrumbs")}]},{title:o(()=>[g("h1",null,[p(I,{title:h(a)("policies.routes.item.title",{name:t.params.policy}),render:!0},null,8,["title"])])]),default:o(()=>[d(),p(w,{src:`/meshes/${t.params.mesh}/policy-path/${l.path}/policy/${t.params.policy}`},{default:o(({data:r,isLoading:y,error:x})=>[y?(e(),s(v,{key:0})):x?(e(),s(k,{key:1,error:x},null,8,["error"])):r===void 0?(e(),s($,{key:2})):(e(),s(K,{key:3,policy:r,path:l.path,"data-testid":"detail-view-details"},null,8,["policy","path"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"]))),128))]),_:2},1024)]),_:1}))}});export{W as default};