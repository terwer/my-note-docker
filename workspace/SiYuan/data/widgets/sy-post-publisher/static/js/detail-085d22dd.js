import { d as defineComponent, r as ref, o as onMounted, bt as ElButton, d5 as ElFooter, e as openBlock, c as createElementBlock, ah as createBaseVNode, a as createVNode, af as withCtx, b5 as createTextVNode, g as getWidgetId, d3 as goToPage, b as getPageId, cn as _export_sfc, ae as createBlock, p as pageUtil } from "./footer-024d6c20.js";
import { _ as _sfc_main$2, D as DefaultFooter } from "./DefaultPostDetailService.vue_vue_type_style_index_0_lang-ead50190.js";
const _hoisted_1 = {
  class: "post-detail-content-box"
};
const _hoisted_2 = {
  class: "btn-publish"
};
const __default__$1 = {
  name: "BlogDetail",
  components: {
    DefaultPostDetailService: _sfc_main$2
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const pid = ref("");
    const handlePublish = async (e) => {
      e.preventDefault();
      const widgetResult = getWidgetId();
      if (widgetResult.isInSiyuan) {
        goToPage("/index.html?id=" + pid.value, "/");
      } else {
        goToPage("/publish/index.html?id=" + pid.value, "/");
      }
    };
    const initPage = async () => {
      const pageId = await getPageId(true, props.pageId);
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
      const _component_el_footer = ElFooter;
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_el_button, {
        size: "small",
        type: "primary",
        onClick: handlePublish
      }, {
        default: withCtx(() => [createTextVNode("\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0")]),
        _: 1
      })]), createVNode(_sfc_main$2, {
        "page-id": pid.value
      }, null, 8, ["page-id"]), createVNode(_component_el_footer, null, {
        default: withCtx(() => [createVNode(DefaultFooter)]),
        _: 1
      })]);
    };
  }
});
const BlogDetail_vue_vue_type_style_index_0_lang = "";
const BlogDetail_vue_vue_type_style_index_1_scoped_4346cff2_lang = "";
const BlogDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4346cff2"]]);
const __default__ = {
  name: "detail"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BlogDetail);
    };
  }
});
pageUtil.createPage(_sfc_main);
