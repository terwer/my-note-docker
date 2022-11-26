import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, a as createVNode, l as logUtil, g as getWidgetId, b as getPageId, i as isInChromeExtension, e as openBlock, S as SiYuanApiAdaptor, p as pageUtil } from "./footer-024d6c20.js";
import { _ as _sfc_main$1 } from "./PublishService.vue_vue_type_script_setup_true_lang-4b6bcca2.js";
import { _ as _sfc_main$2 } from "./BlogIndex.vue_vue_type_script_setup_true_lang-fc9f7ab8.js";
import "./DefaultPostDetailService.vue_vue_type_style_index_0_lang-ead50190.js";
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1
};
const __default__ = {
  name: "index"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const isPublish = ref(false);
    const init = async () => {
      logUtil.logWarn("MODE=>", "production");
      const widgetResult = getWidgetId();
      if (widgetResult.isInSiyuan) {
        const postid = await getPageId();
        const api = new SiYuanApiAdaptor();
        const result = await api.getSubPostCount(postid);
        if (result > 1) {
          isPublish.value = false;
          logUtil.logWarn("\u68C0\u6D4B\u5230\u5B50\u6587\u6863\uFF0C\u5C06\u8F6C\u5230\u663E\u793A\u5217\u8868\u9875\u9762");
        } else {
          isPublish.value = true;
          logUtil.logWarn("\u6CA1\u6709\u5B50\u6587\u6863\u663E\u793A\u53D1\u5E03\u9875\u9762");
        }
      } else if (isInChromeExtension()) {
        logUtil.logWarn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      } else {
        logUtil.logWarn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      }
    };
    onMounted(async () => {
      await init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [isPublish.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_sfc_main$1, {
        "page-id": void 0
      })])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(_sfc_main$2)]))]);
    };
  }
});
pageUtil.createPage(_sfc_main);
