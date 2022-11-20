import { d as defineComponent, e as useDark, f as useToggle, b as openBlock, c as createElementBlock, B as createBaseVNode, h as unref, t as toDisplayString, j as createTextVNode, ar as goToPage, ao as pushScopeId, ap as popScopeId, _ as _export_sfc, Q as watch, n as ref, o as onMounted, V as withDirectives, l as logUtil, aj as Post, E as API, J as API_TYPE_CONSTANTS, at as resolveDirective } from "./_plugin-vue_export-helper-037a5d29.js";
const _withScopeId = (n) => (pushScopeId("data-v-7b19ef74"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  class: "footer"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " \xA92011-2022 ", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " v0.0.3. ", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const __default__$1 = {
  name: "DefaultFooter"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const goGithub = () => {
      window.open("https://github.com/terwer/src-sy-post-publisher");
    };
    const newWin = () => {
      goToPage("/blog/index.html");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", null, [_hoisted_2, createBaseVNode("span", {
        class: "s-dark",
        onClick: _cache[0] || (_cache[0] = ($event) => goGithub())
      }, " sy-post-publisher "), _hoisted_3, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
      }, toDisplayString(unref(isDark) ? _ctx.$t("theme.mode.light") : _ctx.$t("theme.mode.dark")), 1), _hoisted_4, createTextVNode(), createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[2] || (_cache[2] = ($event) => newWin())
      }, " \u65B0\u7A97\u53E3\u6253\u5F00 ")])])]);
    };
  }
});
const DefaultFooter_vue_vue_type_style_index_0_scoped_7b19ef74_lang = "";
const DefaultFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7b19ef74"]]);
const _hoisted_1 = ["innerHTML"];
const __default__ = {
  name: "DefaultPostDetailService"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    watch(() => props.pageId, (oldValue, newValue) => {
      initPage();
      logUtil.logInfo("\u6587\u7AE0\u8BE6\u60C5\u67E5\u770B\u521D\u59CB\u5316");
    });
    const defaultPost = new Post();
    const post = ref(defaultPost);
    const initPage = async () => {
      if (!props.pageId || props.pageId == "") {
        return;
      }
      const api = new API(API_TYPE_CONSTANTS.API_TYPE_SIYUAN);
      const siyuanPost = await api.getPost(props.pageId || "");
      post.value = siyuanPost;
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _directive_highlight = resolveDirective("highlight");
      return withDirectives((openBlock(), createElementBlock("div", {
        id: "post-detail-content",
        innerHTML: post.value.description
      }, null, 8, _hoisted_1)), [[_directive_highlight]]);
    };
  }
});
const DefaultPostDetailService_vue_vue_type_style_index_0_lang = "";
export {
  DefaultFooter as D,
  _sfc_main as _
};
