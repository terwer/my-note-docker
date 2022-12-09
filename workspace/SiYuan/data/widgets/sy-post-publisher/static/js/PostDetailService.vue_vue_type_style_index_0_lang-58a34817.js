import { d as defineComponent, L as LogFactory, a5 as watch, r as ref, o as onMounted, bf as withDirectives, b as openBlock, f as createElementBlock, ag as Post, cL as API, cP as API_TYPE_CONSTANTS, c2 as resolveDirective } from "./api-25273221.js";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostDetailService",
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const logger = LogFactory.getLogger("components/blog/themes/default/PostDetailService.vue");
    watch(() => props.pageId, (oldValue, newValue) => {
      initPage();
      logger.debug("\u6587\u7AE0\u8BE6\u60C5\u67E5\u770B\u521D\u59CB\u5316");
    });
    const defaultPost = new Post();
    const post = ref(defaultPost);
    const initPage = async () => {
      if (!props.pageId || props.pageId === "") {
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
      const _directive_beauty = resolveDirective("beauty");
      const _directive_highlight = resolveDirective("highlight");
      return withDirectives((openBlock(), createElementBlock("div", {
        id: "post-detail-content",
        innerHTML: post.value.description
      }, null, 8, _hoisted_1)), [[_directive_beauty], [_directive_highlight]]);
    };
  }
});
const PostDetailService_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
