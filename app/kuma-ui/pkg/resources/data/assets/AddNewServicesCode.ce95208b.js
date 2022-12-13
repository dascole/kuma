import{E as _,M as k,ck as b,cn as P,k as f,i as o,o as n,c as D,w as c,a,b as t,j as i,F as v,l as s,t as x,z as C}from"./index.0cb244cf.js";import{j as y}from"./index.58caa11d.js";import{k as O}from"./kumaDpServerUrl.1e48e09f.js";import{_ as A}from"./CodeBlock.vue_vue_type_style_index_0_lang.bc379a4d.js";import{L as N}from"./LoadingBox.8123b37c.js";import{O as T}from"./OnboardingNavigation.4797753a.js";import{O as w,a as L}from"./OnboardingPage.9278b395.js";import"./_commonjsHelpers.f037b798.js";const B=1e3,E={type:"Dataplane",mesh:"default",name:"example",networking:{address:"localhost",inbound:[{port:7777,servicePort:7777,serviceAddress:"127.0.0.1",tags:{"kuma.io/service":"example","kuma.io/protocol":"tcp"}}]}},R={name:"AddNewServicesCode",components:{CodeBlock:A,OnboardingNavigation:T,OnboardingHeading:w,OnboardingPage:L,LoadingBox:N,KCard:k},data(){return{productName:b,githubLink:"https://github.com/kumahq/kuma-counter-demo/",githubLinkReadme:"https://github.com/kumahq/kuma-counter-demo/blob/master/README.md",k8sRunCommand:"kubectl apply -f https://bit.ly/3Kh2Try",generateDpTokenCode:"kumactl generate dataplane-token --name=redis > kuma-token-redis",startDpCode:`kuma-dp run \\
  --cp-address=${O()} \\
  --dataplane=${`"${y(E)}"`} \\
  --dataplane-token-file=kuma-token-example`,hasDPPs:!1,DPPsTimeout:null}},computed:{...P({environment:"config/getEnvironment"}),isKubernetes(){return this.environment==="kubernetes"}},created(){this.getDPPs()},unmounted(){clearTimeout(this.DPPsTimeout)},methods:{async getDPPs(){try{const{total:r}=await f.getAllDataplanes();this.hasDPPs=r>0}catch(r){console.error(r)}this.hasDPPs||(this.DPPsTimeout=setTimeout(()=>this.getDPPs(),B))}}},K=s("p",{class:"text-center mb-12"},`
        The demo application includes two services: a Redis backend to store a counter value,
        and a frontend web UI to show and increment the counter.
      `,-1),S=s("p",null,"To run execute the following command:",-1),V={key:1},j=s("p",null,"Clone the GitHub repository for the demo application:",-1),G=["href"],H={class:"text-center my-4"},M={key:0,class:"text-green-500","data-testid":"dpps-connected"},I={key:1,class:"text-red-500","data-testid":"dpps-disconnected"},U={key:0,class:"flex justify-center"};function q(r,F,z,J,e,l){const m=o("OnboardingHeading"),d=o("CodeBlock"),u=o("KCard"),p=o("LoadingBox"),h=o("OnboardingNavigation"),g=o("OnboardingPage");return n(),D(g,null,{header:c(()=>[a(m,{title:"Add services"})]),content:c(()=>[K,t(),l.isKubernetes?(n(),i(v,{key:0},[S,t(),a(d,{id:"code-block-kubernetes-command",language:"bash",code:e.k8sRunCommand},null,8,["code"])],64)):(n(),i("div",V,[j,t(),a(d,{id:"code-block-clone-command",language:"bash",code:e.githubLink},null,8,["code"]),t(),a(u,{title:"And follow the instructions in the README","border-variant":"noBorder"},{body:c(()=>[s("a",{target:"_blank",class:"external-link-code-block",href:e.githubLinkReadme},x(e.githubLinkReadme),9,G)]),_:1})])),t(),s("div",null,[s("p",H,[t(`
          DPPs status:
          `),e.hasDPPs?(n(),i("span",M,"Connected")):(n(),i("span",I,"Disconeccted"))]),t(),e.hasDPPs?C("",!0):(n(),i("div",U,[a(p)]))])]),navigation:c(()=>[a(h,{"next-step":"onboarding-dataplanes-overview","previous-step":"onboarding-add-services","should-allow-next":e.hasDPPs},null,8,["should-allow-next"])]),_:1})}const oe=_(R,[["render",q]]);export{oe as default};