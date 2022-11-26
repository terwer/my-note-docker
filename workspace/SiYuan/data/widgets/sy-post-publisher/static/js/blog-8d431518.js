import { d as defineComponent, o as onMounted, ae as createBlock, l as logUtil, e as openBlock, p as pageUtil } from "./footer-d815302d.js";
import { _ as _sfc_main$1 } from "./BlogIndex.vue_vue_type_script_setup_true_lang-207ab19d.js";
import "./PublishService.vue_vue_type_script_setup_true_lang-035e1a8d.js";
import "./DefaultPostDetailService.vue_vue_type_style_index_0_lang-d4f4182b.js";
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
