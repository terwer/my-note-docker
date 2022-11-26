import { d as defineComponent, o as onMounted, ae as createBlock, l as logUtil, e as openBlock, p as pageUtil } from "./footer-024d6c20.js";
import { _ as _sfc_main$1 } from "./BlogIndex.vue_vue_type_script_setup_true_lang-fc9f7ab8.js";
import "./PublishService.vue_vue_type_script_setup_true_lang-4b6bcca2.js";
import "./DefaultPostDetailService.vue_vue_type_style_index_0_lang-ead50190.js";
const __default__ = {
  name: "blog"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    onMounted(async () => {
      logUtil.logInfo("MODE=>", "production");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1);
    };
  }
});
pageUtil.createPage(_sfc_main);
