import{L as u,P as l,K as p,O as _}from"./api-26133740.js";import{M as g,z as d,u as P,A as v,V as h,O as m,P as f,aN as I}from"./vendor-a9bad54d.js";const w=["innerHTML"],S=g({__name:"PostDetailService",props:{pageId:{type:String,default:void 0}},setup(n){const e=n,i=u.getLogger("components/blog/themes/default/PostDetailService.vue");d(()=>e.pageId,(s,t)=>{o(),i.debug("\u6587\u7AE0\u8BE6\u60C5\u67E5\u770B\u521D\u59CB\u5316")});const c=new l,a=P(c),o=async()=>{if(!e.pageId||e.pageId==="")return;const t=await new p(_.API_TYPE_SIYUAN).getPost(e.pageId||"");a.value=t};return v(async()=>{await o()}),(s,t)=>{const r=I("highlight");return h((m(),f("div",{id:"post-detail-content",innerHTML:a.value.description},null,8,w)),[[r]])}}});export{S as _};