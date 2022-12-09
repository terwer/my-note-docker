import { d as defineComponent, c as createBlock, w as withCtx, _ as _sfc_main$1, b as openBlock, h as createVNode, p as pageUtil } from "./api-25273221.js";
import { _ as _sfc_main$2 } from "./BlogIndex.vue_vue_type_script_setup_true_lang-3cd56b9e.js";
import "./PublishService-c0e7f612.js";
import "./PostDetailService.vue_vue_type_style_index_0_lang-58a34817.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [createVNode(_sfc_main$2)]),
        _: 1
      });
    };
  }
});
const app = pageUtil.createPage(_sfc_main);
app.mount("#app");
