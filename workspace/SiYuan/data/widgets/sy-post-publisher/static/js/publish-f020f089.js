import { d as defineComponent, c as createBlock, w as withCtx, _ as _sfc_main$1, b as openBlock, h as createVNode, p as pageUtil } from "./api-25273221.js";
import { P as PublishIndex } from "./PublishIndex-b87b097e.js";
import "./PublishService-c0e7f612.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [createVNode(PublishIndex)]),
        _: 1
      });
    };
  }
});
const app = pageUtil.createPage(_sfc_main);
app.mount("#app");
