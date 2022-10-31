import{C as p,i,o as t,j as l,l as e,c as m,y,b as s,t as c,z as w,cP as b,cl as k,co as x,F as S,n as V,a as u,A as I,B as $}from"./index.438e3d4b.js";import{O as C}from"./OnboardingNavigation.3fda2c47.js";const N={name:"ItemStatus",props:{name:{type:String,required:!0},status:{type:Boolean,default:!1}}},A={class:"flex items-center mb-2"},W={class:"circle"};function z(a,f,o,h,n,d){const r=i("KIcon");return t(),l("li",A,[e("span",W,[o.status?(t(),m(r,{key:0,icon:"check",size:"10",color:"var(--kuma-purple-1)"})):y("",!0)]),s(" "+c(o.name),1)])}const L=p(N,[["render",z],["__scopeId","data-v-298809f9"]]);const B={name:"WelcomeAnimationSvg",data(){return{mounted:!1}},computed:{svgClasses(){return["svg",{active:this.mounted}]}},mounted(){setTimeout(()=>{this.mounted=!0},30)}},D=b('<defs data-v-3dfe58ea></defs><defs data-v-3dfe58ea><linearGradient id="a" x1="64.8%" x2="34.4%" y1="-12.6%" y2="153.1%" data-v-3dfe58ea><stop offset="0%" stop-color="#260D50" data-v-3dfe58ea></stop><stop offset="100%" stop-color="#822DC5" data-v-3dfe58ea></stop></linearGradient><linearGradient id="b" x1="0%" x2="107.4%" y1="41.5%" y2="41.5%" data-v-3dfe58ea><stop offset="0%" stop-color="#260D50" data-v-3dfe58ea></stop><stop offset="100%" stop-color="#822DC5" data-v-3dfe58ea></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" mask="url(#ccard)" transform="translate(-63 -285)" data-v-3dfe58ea><g stroke="#822DC5" stroke-width="6" data-v-3dfe58ea><path class="nodepath" d="M1444 893h252" data-v-3dfe58ea></path><path class="nodepath" stroke-opacity=".4" d="M1529 705h232M1452 603h237" data-v-3dfe58ea></path><path class="nodepath" d="M1754 563l-332 332h-76M1444 935l121 121M263 859l156 156" data-v-3dfe58ea></path><path class="nodepath" stroke-opacity=".4" d="M742 781H556" data-v-3dfe58ea></path><path class="nodepath" d="M697 736H513" data-v-3dfe58ea></path><path class="nodepath" stroke-opacity=".4" d="M695 783V577" data-v-3dfe58ea></path><path class="nodepath" d="M261 1026V751M509 573V438M1502 415l291 290" data-v-3dfe58ea></path><path class="nodepath" stroke-opacity=".4" d="M698 912L26 240M1368 411v540l61 61 95-95M1434 3h267l193 192v354" data-v-3dfe58ea></path><path class="nodepath" d="M517 411h342l138 138M1416 573v242l371 323" data-v-3dfe58ea></path><path class="nodepath" d="M1486 817V612l-146-146M839 243h-97l-83 84v348M1698 1063V817l58-57h122M1069 299L558 810M696 1058H585L468 941V570L322 424" data-v-3dfe58ea></path><path class="nodepath" d="M277 528l160 160 236-236 121 121M632 979h-45l-67-67v-86H0M106 669h275M70 707h331M207 745h210M85 784h356M1417 558h228M1609 634h203M528 946h76M619 604v131M1359 567l125 125M1332 594l156 156M1594 1070V959M381 632L260 753" data-v-3dfe58ea></path><path class="nodepath" stroke-opacity=".4" d="M605 817V497M1851 959h-518M944 570H390" data-v-3dfe58ea></path><path class="nodepath" d="M638 912H342M635 1139V912" data-v-3dfe58ea></path><path stroke="url(#a)" d="M1024 573h297v532h-31" class="final" transform="translate(0 3)" data-v-3dfe58ea></path><path fill="url(#b)" fill-rule="nonzero" d="M1024 592a18 18 0 100-36 18 18 0 000 36z" class="final circle" transform="translate(0 3)" data-v-3dfe58ea></path></g><foreignObject x="0" y="0" width="100%" height="100%" data-v-3dfe58ea><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div><div data-v-3dfe58ea></div></foreignObject></g>',3),O=[D];function G(a,f,o,h,n,d){return t(),l("svg",{class:w(["background",d.svgClasses]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1080"},O,2)}const H=p(B,[["render",G],["__scopeId","data-v-3dfe58ea"]]);const j={name:"WelcomeView",components:{ItemStatus:L,OnboardingNavigation:C,WelcomeAnimationSvg:H},data(){return{productName:k}},computed:{...x({environment:"config/getEnvironment",multicluster:"config/getMulticlusterStatus"}),enviromentFormatted(){return this.environment.charAt(0).toUpperCase()+this.environment.slice(1)},multizoneItems(){const a=[];return this.multicluster&&a.push({name:"Add zones",status:!1}),a},statuses(){return[{name:`Run ${this.productName} control plane`,status:!0},{name:"Learn about deployments",status:!1},{name:"Learn about configuration storage",status:!1},...this.multizoneItems,{name:"Create the mesh",status:!1},{name:"Add services",status:!1},{name:"Go to the dashboard",status:!1}]}}},_=a=>(I("data-v-12c0be70"),a=a(),$(),a),F={class:"welcome-container"},E={class:"content"},T={class:"welcome-title"},K={class:"welcome-description"},P=_(()=>e("strong",null,"few minutes",-1)),R={class:"welcome-description"},U=_(()=>e("h2",{class:"welcome-detected"}," Let's get started: ",-1)),q={class:"welcome-navigation"};function Y(a,f,o,h,n,d){const r=i("ItemStatus"),g=i("OnboardingNavigation"),M=i("WelcomeAnimationSvg");return t(),l("div",null,[e("div",F,[e("div",E,[e("h1",T," Welcome to "+c(n.productName),1),e("p",K,[s(" Congratulations on downloading "+c(n.productName)+"! You are just a ",1),P,s(" away from getting your service mesh fully online. ")]),e("p",R,[s(" We have automatically detected that you are running on "),e("strong",null,c(d.enviromentFormatted),1),s(". ")]),U,e("ul",null,[(t(!0),l(S,null,V(d.statuses,v=>(t(),m(r,{key:v.name,name:v.name,status:v.status},null,8,["name","status"]))),128))])]),e("div",q,[u(g,{"next-step":"onboarding-deployment-types"})])]),u(M,{longer:a.multicluster},null,8,["longer"])])}const X=p(j,[["render",Y],["__scopeId","data-v-12c0be70"]]);export{X as default};