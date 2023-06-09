import{d as F,o as a,f as o,e as t,t as B,g as h,b as _,N as f,y as b,r as y,m as w,h as I,F as m,k as v,U as z,a1 as S,a as u,w as k,u as p}from"./index-e5116c83.js";import{_ as q}from"./RouteView.vue_vue_type_script_setup_true_lang-64d62d02.js";import{l as C,T as x}from"./kongponents.es-8835ef00.js";import{Q as $}from"./QueryParameter-70743f73.js";const L={class:"form-line-wrapper"},P={key:0,class:"form-line__col"},R=["for"],V=F({__name:"FormFragment",props:{title:{type:String,required:!1,default:null},forAttr:{type:String,required:!1,default:null},allInline:{type:Boolean,default:!1},hideLabelCol:{type:Boolean,default:!1},equalCols:{type:Boolean,default:!1},shiftRight:{type:Boolean,default:!1}},setup(d){const r=d;return(l,e)=>(a(),o("div",L,[t("div",{class:f(["form-line",{"has-equal-cols":r.equalCols}])},[r.hideLabelCol?h("",!0):(a(),o("div",P,[t("label",{for:r.forAttr,class:"k-input-label"},B(r.title)+`:
        `,9,R)])),_(),t("div",{class:f(["form-line__col",{"is-inline":r.allInline,"is-shifted-right":r.shiftRight}])},[b(l.$slots,"default")],2)],2)]))}});const ae=q(V,[["__scopeId","data-v-aa1ca9d8"]]),E={class:"wizard-steps"},Q={class:"wizard-steps__content-wrapper"},M={class:"wizard-steps__indicator"},U={class:"wizard-steps__indicator__controls",role:"tablist","aria-label":"steptabs"},j=["aria-selected","aria-controls"],G={class:"wizard-steps__content"},H={ref:"wizardForm",autocomplete:"off"},J=["id","aria-labelledby"],K={key:0,class:"wizard-steps__footer"},O={class:"wizard-steps__sidebar"},W={class:"wizard-steps__sidebar__content"},X=F({__name:"StepSkeleton",props:{steps:{type:Array,required:!0},sidebarContent:{type:Array,required:!0},footerEnabled:{type:Boolean,default:!0},nextDisabled:{type:Boolean,default:!0}},emits:["go-to-step"],setup(d,{emit:r}){const l=d,e=y(0),c=y(null),N=w(()=>e.value>=l.steps.length-1),A=w(()=>e.value<=0);I(function(){const n=$.get("step");e.value=n?parseInt(n):0,e.value in l.steps&&(c.value=l.steps[e.value].slug)});function T(){e.value++,g(e.value)}function D(){e.value--,g(e.value)}function g(n){c.value=l.steps[n].slug,$.set("step",n),r("go-to-step",n)}return(n,Y)=>(a(),o("div",E,[t("div",Q,[t("header",M,[t("ul",U,[(a(!0),o(m,null,v(d.steps,(s,i)=>(a(),o("li",{key:s.slug,"aria-selected":c.value===s.slug?"true":"false","aria-controls":`wizard-steps__content__item--${i}`,class:f([{"is-complete":i<=e.value},"wizard-steps__indicator__item"])},[t("span",null,B(s.label),1)],10,j))),128))])]),_(),t("div",G,[t("form",H,[(a(!0),o(m,null,v(d.steps,(s,i)=>(a(),o("div",{id:`wizard-steps__content__item--${i}`,key:s.slug,"aria-labelledby":`wizard-steps__content__item--${i}`,role:"tabpanel",tabindex:"0",class:"wizard-steps__content__item"},[c.value===s.slug?b(n.$slots,s.slug,{key:0},void 0,!0):h("",!0)],8,J))),128))],512)]),_(),l.footerEnabled?(a(),o("footer",K,[z(u(p(x),{appearance:"outline","data-testid":"next-previous-button",onClick:D},{default:k(()=>[u(p(C),{icon:"chevronLeft",color:"currentColor",size:"16","hide-title":""}),_(`

          Previous
        `)]),_:1},512),[[S,!A.value]]),_(),z(u(p(x),{disabled:l.nextDisabled,appearance:"primary","data-testid":"next-step-button",onClick:T},{default:k(()=>[_(`
          Next

          `),u(p(C),{icon:"chevronRight",color:"currentColor",size:"16","hide-title":""})]),_:1},8,["disabled"]),[[S,!N.value]])])):h("",!0)]),_(),t("aside",O,[t("div",W,[(a(!0),o(m,null,v(l.sidebarContent,(s,i)=>(a(),o("div",{key:s.name,class:f(["wizard-steps__sidebar__item",`wizard-steps__sidebar__item--${i}`])},[b(n.$slots,s.name,{},void 0,!0)],2))),128))])])]))}});const oe=q(X,[["__scopeId","data-v-65129b06"]]);export{ae as F,oe as S};