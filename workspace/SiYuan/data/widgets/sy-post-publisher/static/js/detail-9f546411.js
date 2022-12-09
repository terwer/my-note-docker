import { d as defineComponent, L as LogFactory, r as ref, o as onMounted, ai as ElButton, b as openBlock, f as createElementBlock, e as createBaseVNode, h as createVNode, w as withCtx, G as createTextVNode, g as getWidgetId, aj as goToPage, cT as appendStr, a as getPageId, ak as _export_sfc, c as createBlock, _ as _sfc_main$3, p as pageUtil } from "./api-25273221.js";
import { _ as _sfc_main$2 } from "./PostDetailService.vue_vue_type_style_index_0_lang-58a34817.js";
const _hoisted_1 = {
  class: "post-detail-content-box"
};
const _hoisted_2 = {
  class: "btn-publish"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostDetail",
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const logger = LogFactory.getLogger("components/detail/PostDetail.vue");
    const pid = ref("");
    const handlePublish = async () => {
      const widgetResult = getWidgetId();
      if (widgetResult.isInSiyuan) {
        goToPage(appendStr("/index.html?id=", pid.value));
      } else {
        goToPage(appendStr("/publish/index.html?id=", pid.value));
      }
    };
    const initPage = async () => {
      const pageId = await getPageId(true, props.pageId);
      logger.info("pageId=>", pageId);
      if (!pageId || pageId === "") {
        return;
      }
      pid.value = pageId;
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_el_button, {
        size: "small",
        type: "primary",
        onClick: handlePublish
      }, {
        default: withCtx(() => [createTextVNode("\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0 ")]),
        _: 1
      })]), createVNode(_sfc_main$2, {
        "page-id": pid.value
      }, null, 8, ["page-id"])]);
    };
  }
});
const PostDetail_vue_vue_type_style_index_0_lang = "";
const PostDetail_vue_vue_type_style_index_1_scoped_fb57d71c_lang = "";
const PostDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fb57d71c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, null, {
        default: withCtx(() => [createVNode(PostDetail)]),
        _: 1
      });
    };
  }
});
const app = pageUtil.createPage(_sfc_main);
app.mount("#app");
