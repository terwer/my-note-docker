import{L as m,_ as n,g as c,a as E,i as l,S as F,p as d}from"./api-70a4ebc4.js";import{_}from"./BlogIndex.vue_vue_type_script_setup_true_lang-fccd1fa8.js";import{P as g}from"./PublishIndex-1d14985d.js";import{M as f,u as C,A as D,T as w,U as A,O as i,W as B,P as r,a1 as a}from"./vendor-a9bad54d.js";import"./vendor_pinia-306dd1ce.js";import"./vendor_vue-demi-1365f9ef.js";import"./vendor_vue-i18n-5b80ab8c.js";import"./vendor_element-plus-7dd67f1f.js";import"./vendor_lodash-es-8db2b480.js";import"./vendor_rollup-plugin-node-polyfills-2747d496.js";import"./vendor_before-after-hook-6380be1a.js";import"./vendor_dayjs-50d7a178.js";import"./vendor_async-validator-8281a471.js";import"./vendor_escape-html-2f5becbc.js";import"./vendor_normalize-wheel-es-b14b3a0e.js";import"./vendor_highlight-js-4c21db5d.js";import"./vendor_plantuml-encoder-18698577.js";import"./vendor_loglevel-bd2e1c44.js";import"./vendor_loglevel-plugin-prefix-34a2ac06.js";import"./vendor_browser-fs-access-5b1a413d.js";import"./vendor_transliteration-0556f169.js";import"./vendor_shorthash2-e60185c0.js";import"./vendor_js-base64-904ab953.js";import"./vendor_fast-xml-parser-512675b8.js";import"./vendor_strnum-597cc196.js";import"./vendor_xmlrpc-bd2abe58.js";import"./vendor_xmlbuilder-c2ddcc20.js";import"./vendor_sax-0603144b.js";import"./PublishService-c3d249e3.js";import"./vendor_copy-to-clipboard-a51858f9.js";import"./vendor_toggle-selection-441a0a42.js";import"./vendor_cross-fetch-e4e57030.js";import"./PostDetailService.vue_vue_type_style_index_0_lang-325b1c2f.js";import"./vendor_universal-user-agent-2942920f.js";import"./vendor_is-plain-object-eb550d51.js";import"./vendor_deprecation-ea02905c.js";import"./vendor_once-6031544f.js";import"./vendor_wrappy-713fc6dc.js";const h={key:0},v={key:1},P=f({__name:"App",setup(I){const u=m.getLogger("pages/index/App.vue"),t=C(!1),p=async()=>{if(u.warn("MODE=>","production"),c().isInSiyuan){const o=await E();u.warn("\u5F53\u524D\u9875\u9762ID\u662F=>",o);const e=await new F().getSubPostCount(o);u.debug("\u5B50\u6587\u6863\u4E2A\u6570",e),e>1?(t.value=!1,u.warn("\u68C0\u6D4B\u5230\u5B50\u6587\u6863\uFF0C\u5C06\u8F6C\u5230\u663E\u793A\u5217\u8868\u9875\u9762")):(t.value=!0,u.warn("\u6CA1\u6709\u5B50\u6587\u6863\u663E\u793A\u53D1\u5E03\u9875\u9762"))}else l()?u.warn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898"):u.warn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898")};return D(async()=>{await p()}),(s,o)=>(i(),w(n,null,{default:A(()=>[B("div",null,[t.value?(i(),r("div",h,[a(g)])):(i(),r("div",v,[a(_)]))])]),_:1}))}}),y=d.createPage(P);y.mount("#app");
