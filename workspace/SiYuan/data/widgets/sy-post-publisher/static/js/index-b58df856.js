import { d as defineComponent, L as LogFactory, r as ref, o as onMounted, c as createBlock, w as withCtx, _ as _sfc_main$1, g as getWidgetId, a as getPageId, i as isInChromeExtension, b as openBlock, e as createBaseVNode, f as createElementBlock, h as createVNode, S as SiYuanApiAdaptor, p as pageUtil } from "./api-25273221.js";
import { _ as _sfc_main$2 } from "./BlogIndex.vue_vue_type_script_setup_true_lang-3cd56b9e.js";
import { P as PublishIndex } from "./PublishIndex-b87b097e.js";
import "./PublishService-c0e7f612.js";
import "./PostDetailService.vue_vue_type_style_index_0_lang-58a34817.js";
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const logger = LogFactory.getLogger("pages/index/App.vue");
    const isPublish = ref(false);
    const init = async () => {
      logger.warn("MODE=>", "production");
      const widgetResult = getWidgetId();
      if (widgetResult.isInSiyuan) {
        const postid = await getPageId();
        logger.warn("\u5F53\u524D\u9875\u9762ID\u662F=>", postid);
        const api = new SiYuanApiAdaptor();
        const result = await api.getSubPostCount(postid);
        logger.debug("\u5B50\u6587\u6863\u4E2A\u6570", result);
        if (result > 1) {
          isPublish.value = false;
          logger.warn("\u68C0\u6D4B\u5230\u5B50\u6587\u6863\uFF0C\u5C06\u8F6C\u5230\u663E\u793A\u5217\u8868\u9875\u9762");
        } else {
          isPublish.value = true;
          logger.warn("\u6CA1\u6709\u5B50\u6587\u6863\u663E\u793A\u53D1\u5E03\u9875\u9762");
        }
      } else if (isInChromeExtension()) {
        logger.warn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      } else {
        logger.warn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      }
    };
    onMounted(async () => {
      await init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [createBaseVNode("div", null, [isPublish.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(PublishIndex)])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(_sfc_main$2)]))])]),
        _: 1
      });
    };
  }
});
const app = pageUtil.createPage(_sfc_main);
app.mount("#app");
