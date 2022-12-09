import { j as buildProps, k as definePropType, N as NOOP, U as UPDATE_MODEL_EVENT, l as isString, I as INPUT_EVENT, C as CHANGE_EVENT, m as isObject, d as defineComponent, u as useAttrs, n as useAttrs$1, q as useDisabled, s as useNamespace, r as ref, t as computed, v as onClickOutside, o as onMounted, b as openBlock, c as createBlock, w as withCtx, e as createBaseVNode, x as normalizeClass, y as unref, z as normalizeStyle, h as createVNode, f as createElementBlock, E as ElIcon, A as loading_default, F as Fragment, B as renderList, D as renderSlot, G as createTextVNode, H as toDisplayString, J as ElInput, K as mergeProps, M as withKeys, O as withModifiers, P as createSlots, Q as _export_sfc, R as nextTick, T as isArray, V as throwError, W as withInstall, X as createCommentVNode, Y as iconPropType, Z as back_default, $ as useSlots, a0 as useLocale, a1 as resolveDynamicComponent, a2 as inject, a3 as mutable, a4 as componentSizes, a5 as watch, a6 as watchEffect, a7 as d_arrow_left_default, a8 as more_filled_default, a9 as d_arrow_right_default, aa as arrow_left_default, ab as arrow_right_default, ac as getCurrentInstance, ad as provide, ae as debugWarn, af as h, ag as Post, ah as getByLength, ai as ElButton, aj as goToPage, ak as _export_sfc$1, L as LogFactory, al as useI18n, am as ElAlert, an as ElMessageBox, ao as inSiyuan, ap as SIYUAN_CONSTANTS, aq as getEnv, a as getPageId, ar as removeTitleNumber, as as CONSTANTS, at as mdToHtml, au as pushScopeId, av as popScopeId, S as SiYuanApiAdaptor, aw as ElMain, ax as ElContainer } from "./api-25273221.js";
import { u as useTooltipContentProps, d as debounce, E as ElScrollbar, a as ElTooltip, i as isEqual, b as ElOption, c as ElSelect, P as PublishService, e as ElTableColumn, f as ElTable, g as formatIsoToZhDate } from "./PublishService-c0e7f612.js";
import { _ as _sfc_main$d } from "./PostDetailService.vue_vue_type_style_index_0_lang-58a34817.js";
const generateId = () => Math.floor(Math.random() * 1e4);
const elPaginationKey = Symbol("elPaginationKey");
const autocompleteProps = buildProps({
  valueKey: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  debounce: {
    type: Number,
    default: 300
  },
  placement: {
    type: definePropType(String),
    values: [
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end"
    ],
    default: "bottom-start"
  },
  fetchSuggestions: {
    type: definePropType([Function, Array]),
    default: NOOP
  },
  popperClass: {
    type: String,
    default: ""
  },
  triggerOnFocus: {
    type: Boolean,
    default: true
  },
  selectWhenUnmatched: {
    type: Boolean,
    default: false
  },
  hideLoading: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  teleported: useTooltipContentProps.teleported,
  highlightFirstItem: {
    type: Boolean,
    default: false
  },
  fitInputWidth: {
    type: Boolean,
    default: false
  }
});
const autocompleteEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  [INPUT_EVENT]: (value) => isString(value),
  [CHANGE_EVENT]: (value) => isString(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item) => isObject(item)
};
const _hoisted_1$a = ["aria-expanded", "aria-owns"];
const _hoisted_2$6 = { key: 0 };
const _hoisted_3$4 = ["id", "aria-selected", "onClick"];
const COMPONENT_NAME = "ElAutocomplete";
const __default__$8 = defineComponent({
  name: COMPONENT_NAME,
  inheritAttrs: false
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: autocompleteProps,
  emits: autocompleteEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const attrs = useAttrs();
    const rawAttrs = useAttrs$1();
    const disabled = useDisabled();
    const ns = useNamespace("autocomplete");
    const inputRef = ref();
    const regionRef = ref();
    const popperRef = ref();
    const listboxRef = ref();
    let readonly = false;
    let ignoreFocusEvent = false;
    const suggestions = ref([]);
    const highlightedIndex = ref(-1);
    const dropdownWidth = ref("");
    const activated = ref(false);
    const suggestionDisabled = ref(false);
    const loading = ref(false);
    const listboxId = computed(() => ns.b(String(generateId())));
    const styles = computed(() => rawAttrs.style);
    const suggestionVisible = computed(() => {
      const isValidData = suggestions.value.length > 0;
      return (isValidData || loading.value) && activated.value;
    });
    const suggestionLoading = computed(() => !props.hideLoading && loading.value);
    const refInput = computed(() => {
      if (inputRef.value) {
        return Array.from(inputRef.value.$el.querySelectorAll("input"));
      }
      return [];
    });
    const onSuggestionShow = async () => {
      await nextTick();
      if (suggestionVisible.value) {
        dropdownWidth.value = `${inputRef.value.$el.offsetWidth}px`;
      }
    };
    const onShow = () => {
      ignoreFocusEvent = true;
    };
    const onHide = () => {
      ignoreFocusEvent = false;
      highlightedIndex.value = -1;
    };
    const getData = async (queryString) => {
      if (suggestionDisabled.value)
        return;
      const cb = (suggestionList) => {
        loading.value = false;
        if (suggestionDisabled.value)
          return;
        if (isArray(suggestionList)) {
          suggestions.value = suggestionList;
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1;
        } else {
          throwError(COMPONENT_NAME, "autocomplete suggestions must be an array");
        }
      };
      loading.value = true;
      if (isArray(props.fetchSuggestions)) {
        cb(props.fetchSuggestions);
      } else {
        const result = await props.fetchSuggestions(queryString, cb);
        if (isArray(result))
          cb(result);
      }
    };
    const debouncedGetData = debounce(getData, props.debounce);
    const handleInput = (value) => {
      const valuePresented = !!value;
      emit(INPUT_EVENT, value);
      emit(UPDATE_MODEL_EVENT, value);
      suggestionDisabled.value = false;
      activated.value || (activated.value = valuePresented);
      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true;
        suggestions.value = [];
        return;
      }
      debouncedGetData(value);
    };
    const handleMouseDown = (event) => {
      var _a;
      if (disabled.value)
        return;
      if (((_a = event.target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        activated.value = true;
      }
    };
    const handleChange = (value) => {
      emit(CHANGE_EVENT, value);
    };
    const handleFocus = (evt) => {
      if (ignoreFocusEvent)
        return;
      activated.value = true;
      emit("focus", evt);
      if (props.triggerOnFocus && !readonly) {
        debouncedGetData(String(props.modelValue));
      }
    };
    const handleBlur = (evt) => {
      if (ignoreFocusEvent)
        return;
      emit("blur", evt);
    };
    const handleClear = () => {
      activated.value = false;
      emit(UPDATE_MODEL_EVENT, "");
      emit("clear");
    };
    const handleKeyEnter = async () => {
      if (suggestionVisible.value && highlightedIndex.value >= 0 && highlightedIndex.value < suggestions.value.length) {
        handleSelect(suggestions.value[highlightedIndex.value]);
      } else if (props.selectWhenUnmatched) {
        emit("select", { value: props.modelValue });
        suggestions.value = [];
        highlightedIndex.value = -1;
      }
    };
    const handleKeyEscape = (evt) => {
      if (suggestionVisible.value) {
        evt.preventDefault();
        evt.stopPropagation();
        close();
      }
    };
    const close = () => {
      activated.value = false;
    };
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
    };
    const handleSelect = async (item) => {
      emit(INPUT_EVENT, item[props.valueKey]);
      emit(UPDATE_MODEL_EVENT, item[props.valueKey]);
      emit("select", item);
      suggestions.value = [];
      highlightedIndex.value = -1;
    };
    const highlight = (index) => {
      if (!suggestionVisible.value || loading.value)
        return;
      if (index < 0) {
        highlightedIndex.value = -1;
        return;
      }
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }
      const suggestion = regionRef.value.querySelector(`.${ns.be("suggestion", "wrap")}`);
      const suggestionList = suggestion.querySelectorAll(`.${ns.be("suggestion", "list")} li`);
      const highlightItem = suggestionList[index];
      const scrollTop = suggestion.scrollTop;
      const { offsetTop, scrollHeight } = highlightItem;
      if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= scrollHeight;
      }
      highlightedIndex.value = index;
      inputRef.value.ref.setAttribute("aria-activedescendant", `${listboxId.value}-item-${highlightedIndex.value}`);
    };
    onClickOutside(listboxRef, () => {
      suggestionVisible.value && close();
    });
    onMounted(() => {
      inputRef.value.ref.setAttribute("role", "textbox");
      inputRef.value.ref.setAttribute("aria-autocomplete", "list");
      inputRef.value.ref.setAttribute("aria-controls", "id");
      inputRef.value.ref.setAttribute("aria-activedescendant", `${listboxId.value}-item-${highlightedIndex.value}`);
      readonly = inputRef.value.ref.hasAttribute("readonly");
    });
    expose({
      highlightedIndex,
      activated,
      loading,
      inputRef,
      popperRef,
      suggestions,
      handleSelect,
      handleKeyEnter,
      focus,
      blur,
      close,
      highlight
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), {
        ref_key: "popperRef",
        ref: popperRef,
        visible: unref(suggestionVisible),
        placement: _ctx.placement,
        "fallback-placements": ["bottom-start", "top-start"],
        "popper-class": [unref(ns).e("popper"), _ctx.popperClass],
        teleported: _ctx.teleported,
        "gpu-acceleration": false,
        pure: "",
        "manual-mode": "",
        effect: "light",
        trigger: "click",
        transition: `${unref(ns).namespace.value}-zoom-in-top`,
        persistent: "",
        onBeforeShow: onSuggestionShow,
        onShow,
        onHide
      }, {
        content: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "regionRef",
            ref: regionRef,
            class: normalizeClass([unref(ns).b("suggestion"), unref(ns).is("loading", unref(suggestionLoading))]),
            style: normalizeStyle({
              [_ctx.fitInputWidth ? "width" : "minWidth"]: dropdownWidth.value,
              outline: "none"
            }),
            role: "region"
          }, [
            createVNode(unref(ElScrollbar), {
              id: unref(listboxId),
              tag: "ul",
              "wrap-class": unref(ns).be("suggestion", "wrap"),
              "view-class": unref(ns).be("suggestion", "list"),
              role: "listbox"
            }, {
              default: withCtx(() => [
                unref(suggestionLoading) ? (openBlock(), createElementBlock("li", _hoisted_2$6, [
                  createVNode(unref(ElIcon), {
                    class: normalizeClass(unref(ns).is("loading"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(loading_default))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(suggestions.value, (item, index) => {
                  return openBlock(), createElementBlock("li", {
                    id: `${unref(listboxId)}-item-${index}`,
                    key: index,
                    class: normalizeClass({ highlighted: highlightedIndex.value === index }),
                    role: "option",
                    "aria-selected": highlightedIndex.value === index,
                    onClick: ($event) => handleSelect(item)
                  }, [
                    renderSlot(_ctx.$slots, "default", { item }, () => [
                      createTextVNode(toDisplayString(item[_ctx.valueKey]), 1)
                    ])
                  ], 10, _hoisted_3$4);
                }), 128))
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class"])
          ], 6)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "listboxRef",
            ref: listboxRef,
            class: normalizeClass([unref(ns).b(), _ctx.$attrs.class]),
            style: normalizeStyle(unref(styles)),
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": unref(suggestionVisible),
            "aria-owns": unref(listboxId)
          }, [
            createVNode(unref(ElInput), mergeProps({
              ref_key: "inputRef",
              ref: inputRef
            }, unref(attrs), {
              "model-value": _ctx.modelValue,
              onInput: handleInput,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onClear: handleClear,
              onKeydown: [
                _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => highlight(highlightedIndex.value - 1), ["prevent"]), ["up"])),
                _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => highlight(highlightedIndex.value + 1), ["prevent"]), ["down"])),
                withKeys(handleKeyEnter, ["enter"]),
                withKeys(close, ["tab"]),
                withKeys(handleKeyEscape, ["esc"])
              ],
              onMousedown: handleMouseDown
            }), createSlots({ _: 2 }, [
              _ctx.$slots.prepend ? {
                name: "prepend",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "prepend")
                ])
              } : void 0,
              _ctx.$slots.append ? {
                name: "append",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "append")
                ])
              } : void 0,
              _ctx.$slots.prefix ? {
                name: "prefix",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              } : void 0,
              _ctx.$slots.suffix ? {
                name: "suffix",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "suffix")
                ])
              } : void 0
            ]), 1040, ["model-value", "onKeydown"])
          ], 14, _hoisted_1$a)
        ]),
        _: 3
      }, 8, ["visible", "placement", "popper-class", "teleported", "transition"]);
    };
  }
});
var Autocomplete = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]]);
const ElAutocomplete = withInstall(Autocomplete);
const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__$7 = defineComponent({
  name: "ElDivider"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);
const ElDivider = withInstall(Divider);
const pageHeaderProps = buildProps({
  icon: {
    type: iconPropType,
    default: () => back_default
  },
  title: String,
  content: {
    type: String,
    default: ""
  }
});
const pageHeaderEmits = {
  back: () => true
};
const _hoisted_1$9 = ["aria-label"];
const __default__$6 = defineComponent({
  name: "ElPageHeader"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: pageHeaderProps,
  emits: pageHeaderEmits,
  setup(__props, { emit }) {
    const slots = useSlots();
    const { t } = useLocale();
    const ns = useNamespace("page-header");
    const kls = computed(() => {
      return [
        ns.b(),
        {
          [ns.m("has-breadcrumb")]: !!slots.breadcrumb,
          [ns.m("has-extra")]: !!slots.extra,
          [ns.is("contentful")]: !!slots.default
        }
      ];
    });
    function handleClick() {
      emit("back");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(kls))
      }, [
        _ctx.$slots.breadcrumb ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("breadcrumb"))
        }, [
          renderSlot(_ctx.$slots, "breadcrumb")
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(ns).e("header"))
        }, [
          createBaseVNode("div", {
            class: normalizeClass(unref(ns).e("left"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(ns).e("back")),
              role: "button",
              tabindex: "0",
              onClick: handleClick
            }, [
              _ctx.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("div", {
                key: 0,
                "aria-label": _ctx.title || unref(t)("el.pageHeader.title"),
                class: normalizeClass(unref(ns).e("icon"))
              }, [
                renderSlot(_ctx.$slots, "icon", {}, () => [
                  _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                    ]),
                    _: 1
                  })) : createCommentVNode("v-if", true)
                ])
              ], 10, _hoisted_1$9)) : createCommentVNode("v-if", true),
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("title"))
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(_ctx.title || unref(t)("el.pageHeader.title")), 1)
                ])
              ], 2)
            ], 2),
            createVNode(unref(ElDivider), { direction: "vertical" }),
            createBaseVNode("div", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(_ctx.content), 1)
              ])
            ], 2)
          ], 2),
          _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("extra"))
          }, [
            renderSlot(_ctx.$slots, "extra")
          ], 2)) : createCommentVNode("v-if", true)
        ], 2),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("main"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/page-header/src/page-header.vue"]]);
const ElPageHeader = withInstall(PageHeader);
const paginationPrevProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: iconPropType
  }
});
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$8 = ["disabled", "aria-disabled"];
const _hoisted_2$5 = { key: 0 };
const __default__$5 = defineComponent({
  name: "ElPaginationPrev"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: unref(internalDisabled),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$8);
    };
  }
});
var Prev = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: iconPropType
  }
});
const _hoisted_1$7 = ["disabled", "aria-disabled"];
const _hoisted_2$4 = { key: 0 };
const __default__$4 = defineComponent({
  name: "ElPaginationNext"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: unref(internalDisabled),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$7);
    };
  }
});
var Next = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const usePagination = () => inject(elPaginationKey, {});
const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: componentSizes
  }
});
const __default__$3 = defineComponent({
  name: "ElPaginationSizes"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const pagination2 = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPageSizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination2.handleSizeChange) == null ? void 0 : _a.call(pagination2, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("sizes"))
      }, [
        createVNode(unref(ElSelect), {
          "model-value": innerPageSize.value,
          disabled: _ctx.disabled,
          "popper-class": _ctx.popperClass,
          size: _ctx.size,
          "validate-event": false,
          onChange: handleChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(innerPageSizes), (item) => {
              return openBlock(), createBlock(unref(ElOption), {
                key: item,
                value: item,
                label: item + unref(t)("el.pagination.pagesize")
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["model-value", "disabled", "popper-class", "size"])
      ], 2);
    };
  }
});
var Sizes = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const paginationJumperProps = buildProps({
  size: {
    type: String,
    values: componentSizes
  }
});
const _hoisted_1$6 = ["disabled"];
const __default__$2 = defineComponent({
  name: "ElPaginationJumper"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: paginationJumperProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed(() => {
      var _a;
      return (_a = userInput.value) != null ? _a : currentPage == null ? void 0 : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = +val;
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(+val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("jump")),
        disabled: unref(disabled)
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(ns).e("goto")])
        }, toDisplayString(unref(t)("el.pagination.goto")), 3),
        createVNode(unref(ElInput), {
          size: _ctx.size,
          class: normalizeClass([unref(ns).e("editor"), unref(ns).is("in-pagination")]),
          min: 1,
          max: unref(pageCount),
          disabled: unref(disabled),
          "model-value": unref(innerValue),
          "validate-event": false,
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
        createBaseVNode("span", {
          class: normalizeClass([unref(ns).e("classifier")])
        }, toDisplayString(unref(t)("el.pagination.pageClassifier")), 3)
      ], 10, _hoisted_1$6);
    };
  }
});
var Jumper = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const paginationTotalProps = buildProps({
  total: {
    type: Number,
    default: 1e3
  }
});
const _hoisted_1$5 = ["disabled"];
const __default__$1 = defineComponent({
  name: "ElPaginationTotal"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: paginationTotalProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("total")),
        disabled: unref(disabled)
      }, toDisplayString(unref(t)("el.pagination.total", {
        total: _ctx.total
      })), 11, _hoisted_1$5);
    };
  }
});
var Total = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const paginationPagerProps = buildProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
});
const _hoisted_1$4 = ["onKeyup"];
const _hoisted_2$3 = ["aria-current", "tabindex"];
const _hoisted_3$3 = ["tabindex"];
const _hoisted_4$2 = ["aria-current", "tabindex"];
const _hoisted_5$2 = ["tabindex"];
const _hoisted_6$1 = ["aria-current", "tabindex"];
const __default__ = defineComponent({
  name: "ElPaginationPager"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationPagerProps,
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const nsPager = useNamespace("pager");
    const nsIcon = useNamespace("icon");
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const quickPrevFocus = ref(false);
    const quickNextFocus = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    const tabindex = computed(() => props.disabled ? -1 : 0);
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onMouseEnter(forward = false) {
      if (props.disabled)
        return;
      if (forward) {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onFocus(forward = false) {
      if (forward) {
        quickPrevFocus.value = true;
      } else {
        quickNextFocus.value = true;
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      } else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) {
        onPagerClick(e);
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(unref(nsPager).b()),
        onClick: onPagerClick,
        onKeyup: withKeys(onEnter, ["enter"])
      }, [
        _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === 1),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === 1,
          tabindex: unref(tabindex)
        }, " 1 ", 10, _hoisted_2$3)) : createCommentVNode("v-if", true),
        showPrevMore.value ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass([
            "more",
            "btn-quickprev",
            unref(nsIcon).b(),
            unref(nsPager).is("disabled", _ctx.disabled)
          ]),
          tabindex: unref(tabindex),
          onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
          onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
          onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
        }, [
          (quickPrevHover.value || quickPrevFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_left_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_3$3)) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (pager) => {
          return openBlock(), createElementBlock("li", {
            key: pager,
            class: normalizeClass([[
              unref(nsPager).is("active", _ctx.currentPage === pager),
              unref(nsPager).is("disabled", _ctx.disabled)
            ], "number"]),
            "aria-current": _ctx.currentPage === pager,
            tabindex: unref(tabindex)
          }, toDisplayString(pager), 11, _hoisted_4$2);
        }), 128)),
        showNextMore.value ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass([
            "more",
            "btn-quicknext",
            unref(nsIcon).b(),
            unref(nsPager).is("disabled", _ctx.disabled)
          ]),
          tabindex: unref(tabindex),
          onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
          onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
          onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
          onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
        }, [
          (quickNextHover.value || quickNextFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_right_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_5$2)) : createCommentVNode("v-if", true),
        _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
          key: 3,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === _ctx.pageCount,
          tabindex: unref(tabindex)
        }, toDisplayString(_ctx.pageCount), 11, _hoisted_6$1)) : createCommentVNode("v-if", true)
      ], 42, _hoisted_1$4);
    };
  }
});
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const isAbsent = (v) => typeof v !== "number";
const paginationProps = buildProps({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value) => {
      return typeof value === "number" && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: iconPropType,
    default: () => arrow_left_default
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: iconPropType,
    default: () => arrow_right_default
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
});
const paginationEmits = {
  "update:current-page": (val) => typeof val === "number",
  "update:page-size": (val) => typeof val === "number",
  "size-change": (val) => typeof val === "number",
  "current-change": (val) => typeof val === "number",
  "prev-click": (val) => typeof val === "number",
  "next-click": (val) => typeof val === "number"
};
const componentName = "ElPagination";
var Pagination = defineComponent({
  name: componentName,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v);
          emit("size-change", v);
        }
      }
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v) {
        let newCurrentPage = v;
        if (v < 1) {
          newCurrentPage = 1;
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function addClass(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a, _b;
      if (!assertValidUsage.value) {
        debugWarn(componentName, t("el.pagination.deprecationWarning"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h("div", { class: ns.e("rightwrapper") }, rightWrapperChildren);
      const TEMPLATE_MAP = {
        prev: h(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev
        }),
        jumper: h(Jumper, {
          size: props.small ? "small" : "default"
        }),
        pager: h(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled,
          size: props.small ? "small" : "default"
        }),
        slot: (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components.forEach((c) => {
        if (c === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c]);
        }
      });
      addClass(rootChildren[0], ns.is("first"));
      addClass(rootChildren[rootChildren.length - 1], ns.is("last"));
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        addClass(rightWrapperChildren[0], ns.is("first"));
        addClass(rightWrapperChildren[rightWrapperChildren.length - 1], ns.is("last"));
        rootChildren.push(rightWrapperRoot);
      }
      return h("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          ns.b(),
          ns.is("background", props.background),
          {
            [ns.m("small")]: props.small
          }
        ]
      }, rootChildren);
    };
  }
});
const ElPagination = withInstall(Pagination);
const pagination = "";
const autocomplete = "";
const divider = "";
const pageHeader = "";
const _hoisted_1$3 = {
  id: "post-detail-body"
};
const _hoisted_2$2 = {
  class: "flex items-center"
};
const _hoisted_3$2 = ["title"];
const _hoisted_4$1 = {
  class: "post-detail-content-box"
};
const _hoisted_5$1 = {
  class: "btn-publish"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SingleBlogDetail",
  props: {
    post: {
      type: Post,
      default: new Post()
    }
  },
  emits: ["on-change", "on-publish-change"],
  setup(__props, {
    emit: emits
  }) {
    var _a;
    const props = __props;
    const shortTitle = getByLength((_a = props.post) == null ? void 0 : _a.title, 18, false);
    const onBack = () => {
      emits("on-change");
    };
    const handlePublish = (e) => {
      emits("on-publish-change", props.post);
    };
    const handleNewWinPublish = (e) => {
      var _a2;
      e.preventDefault();
      goToPage("/publish/index.html?id=" + ((_a2 = props.post) == null ? void 0 : _a2.postid));
    };
    return (_ctx, _cache) => {
      const _component_el_page_header = ElPageHeader;
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(_component_el_page_header, {
        icon: unref(arrow_left_default),
        title: "\u8FD4\u56DE",
        onClick: onBack
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("span", {
          class: "text-large font-600 mr-3",
          title: props.post.title
        }, toDisplayString(unref(shortTitle)) + " - \u6587\u7AE0\u9884\u89C8 ", 9, _hoisted_3$2)])]),
        _: 1
      }, 8, ["icon"]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [createVNode(_component_el_button, {
        size: "small",
        onClick: handlePublish
      }, {
        default: withCtx(() => [createTextVNode("\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0 ")]),
        _: 1
      }), createVNode(_component_el_button, {
        size: "small",
        type: "primary",
        onClick: handleNewWinPublish
      }, {
        default: withCtx(() => [createTextVNode("\u65B0\u7A97\u53E3\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0 ")]),
        _: 1
      })]), createVNode(_sfc_main$d, {
        "page-id": props.post.postid
      }, null, 8, ["page-id"])])]);
    };
  }
});
const SingleBlogDetail_vue_vue_type_style_index_0_scoped_79c6b349_lang = "";
const SingleBlogDetail = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-79c6b349"]]);
const _hoisted_1$2 = {
  id: "publish-body"
};
const _hoisted_2$1 = {
  class: "flex items-center"
};
const _hoisted_3$1 = ["title"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "singlePublish",
  props: {
    publishData: {
      type: Post,
      default: new Post()
    }
  },
  emits: ["on-change"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const shortTitle = getByLength(props.publishData.title, 18, false);
    const onBack = () => {
      emits("on-change");
    };
    return (_ctx, _cache) => {
      const _component_el_page_header = ElPageHeader;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(_component_el_page_header, {
        class: "publish-header",
        icon: unref(arrow_left_default),
        title: "\u8FD4\u56DE",
        onClick: onBack
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("span", {
          class: "text-large font-600 mr-3",
          title: props.publishData.title
        }, toDisplayString(unref(shortTitle)) + " - \u6587\u7AE0\u53D1\u5E03 ", 9, _hoisted_3$1)])]),
        _: 1
      }, 8, ["icon"]), createVNode(PublishService, {
        "page-id": props.publishData.postid
      }, null, 8, ["page-id"])]);
    };
  }
});
const singlePublish_vue_vue_type_style_index_0_scoped_1cbc53e4_lang = "";
const SinglePublish = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-1cbc53e4"]]);
const _withScopeId = (n) => (pushScopeId("data-v-286b4ff2"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  id: "post-list"
};
const _hoisted_2 = {
  class: "value"
};
const _hoisted_3 = {
  m: "4",
  style: {
    "padding-left": "10px"
  }
};
const _hoisted_4 = {
  m: "t-0 b-2"
};
const _hoisted_5 = {
  m: "t-0 b-2"
};
const _hoisted_6 = {
  m: "t-0 b-2"
};
const _hoisted_7 = {
  m: "t-0 b-2"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  style: {
    "text-align": "center"
  }
}, "\u64CD\u4F5C", -1));
const _hoisted_9 = {
  key: 1,
  id: "post-detail"
};
const _hoisted_10 = {
  key: 2,
  id: "post-publisher"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogMain",
  setup(__props) {
    const logger = LogFactory.getLogger();
    const {
      t
    } = useI18n();
    const showHome = ref(true);
    const showDetail = ref(false);
    const showPublish = ref(false);
    const postDetail = ref();
    const publishData = ref();
    const isInSiyuan = ref(false);
    const state = ref("");
    const links = ref([]);
    const querySearch = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const handleSelect = (item) => {
    };
    const handleBtnSearch = () => {
      reloadTableData();
    };
    const tableData = [];
    const MAX_PAGE_SIZE = 5;
    const num = ref(0);
    const total = ref(0);
    const currentPage = ref(1);
    const handlePrevPage = async (curPage) => {
      currentPage.value = curPage;
      await reloadTableData();
    };
    const handleNextPage = async (curPage) => {
      currentPage.value = curPage;
      await reloadTableData();
    };
    const handleCurrentPage = async (curPage) => {
      currentPage.value = curPage;
      await reloadTableData();
    };
    const handleView = (index, row) => {
      const post = new Post();
      post.postid = row.postid;
      post.title = row.title;
      post.dateCreated = row.dateCreated;
      post.mt_keywords = row.mt_keywords;
      post.description = row.description;
      postDetail.value = post;
      showPublish.value = false;
      showHome.value = false;
      showDetail.value = true;
    };
    const handleNewWinView = (index, row) => {
      ElMessageBox.confirm("\u9884\u89C8\u4F1A\u6253\u5F00\u65B0\u9875\u9762\uFF0C\u6B64\u7A97\u53E3\u5C06\u5173\u95ED\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        goToPage("/detail/index.html?id=" + row.postid);
      }).catch(() => {
      });
    };
    const emitFn = () => {
      showPublish.value = false;
      showHome.value = true;
      showDetail.value = false;
    };
    const emitPublishBackFn = () => {
      emitFn();
    };
    const emitPublishPageFn = (post) => {
      publishData.value = post;
      showPublish.value = true;
      showHome.value = false;
      showDetail.value = false;
    };
    const handleEdit = (index, row) => {
      const post = new Post();
      post.postid = row.postid;
      post.title = row.title;
      publishData.value = post;
      showPublish.value = true;
      showHome.value = false;
      showDetail.value = false;
    };
    const handleNewWinEdit = (index, row) => {
      ElMessageBox.confirm("\u6B64\u64CD\u4F5C\u4F1A\u6253\u5F00\u65B0\u9875\u9762\uFF0C\u6B64\u7A97\u53E3\u5C06\u5173\u95ED\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        goToPage("/publish/index.html?id=" + row.postid);
      }).catch(() => {
      });
    };
    const handleRowClick = (row, column, event) => {
    };
    const initPage = async () => {
      isInSiyuan.value = inSiyuan();
      await reloadTableData();
    };
    const reloadTableData = async () => {
      let postCount = 1;
      let postList = [];
      let hasSubdoc = false;
      const siyuanApi = new SiYuanApiAdaptor();
      if (isInSiyuan.value || SIYUAN_CONSTANTS.DEBUG_SIYUAN_SUBDOC) {
        let postid = getEnv("VITE_SIYUAN_DEV_PAGE_ID");
        {
          postid = await getPageId();
          logger.warn("\u5904\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u7236\u6587\u6863ID\u4E3A=>", postid);
        }
        postCount = await siyuanApi.getSubPostCount(postid);
        if (postCount > 1) {
          hasSubdoc = true;
        }
        if (hasSubdoc) {
          postList = await siyuanApi.getSubPosts(postid, MAX_PAGE_SIZE, currentPage.value - 1, state.value);
        }
      } else {
        postCount = await siyuanApi.getRecentPostsCount(state.value);
        postList = await siyuanApi.getRecentPosts(MAX_PAGE_SIZE, currentPage.value - 1, state.value);
        logger.debug("postList=>", postList);
      }
      total.value = postCount;
      tableData.splice(0, tableData.length);
      for (let i = 0; i < postList.length; i++) {
        const item = postList[i];
        const title = removeTitleNumber(item.title);
        const shortTitle = getByLength(title, CONSTANTS.MAX_TITLE_LENGTH, false);
        const content = mdToHtml(item.description);
        const tableRow = {
          postid: item.postid,
          title,
          shortTitle,
          dateCreated: formatIsoToZhDate(item.dateCreated.toISOString(), true, true),
          mt_keywords: item.mt_keywords,
          description: content.trim() === "" ? "\u6682\u65E0\u5185\u5BB9" : content
        };
        tableData.push(tableRow);
      }
      num.value++;
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_autocomplete = ElAutocomplete;
      const _component_el_button = ElButton;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _component_el_pagination = ElPagination;
      const _component_el_alert = ElAlert;
      return openBlock(), createElementBlock("div", null, [showHome.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_el_autocomplete, {
        class: "s-input",
        modelValue: state.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value = $event),
        "fetch-suggestions": querySearch,
        "popper-class": "my-autocomplete",
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
        onChange: handleBtnSearch,
        onSelect: handleSelect
      }, {
        default: withCtx(({
          item
        }) => [createBaseVNode("div", _hoisted_2, toDisplayString(item.value), 1)]),
        _: 1
      }, 8, ["modelValue"]), createVNode(_component_el_button, {
        class: "s-btn",
        type: "primary",
        onClick: handleBtnSearch
      }, {
        default: withCtx(() => [createTextVNode("\u641C\u7D22 ")]),
        _: 1
      }), (openBlock(), createBlock(_component_el_table, {
        class: "tb-data",
        data: tableData,
        key: num.value,
        border: "",
        stripe: "",
        "highlight-current-row": "",
        "empty-text": "\u7B14\u8BB0\u6570\u636E\u4E3A\u7A7A\u6216\u8005\u601D\u6E90\u7B14\u8BB0\u672A\u542F\u52A8\uFF01",
        onRowClick: handleRowClick,
        style: {
          "width": "100%",
          "min-width": "600px"
        }
      }, {
        default: withCtx(() => [createVNode(_component_el_table_column, {
          type: "expand"
        }, {
          default: withCtx((props) => [createBaseVNode("div", _hoisted_3, [createBaseVNode("p", _hoisted_4, "ID: " + toDisplayString(props.row.postid), 1), createBaseVNode("p", _hoisted_5, "\u53D1\u5E03\u65F6\u95F4: " + toDisplayString(props.row.dateCreated), 1), createBaseVNode("p", _hoisted_6, "\u6807\u9898: " + toDisplayString(props.row.title), 1), createBaseVNode("p", _hoisted_7, " \u6807\u7B7E: " + toDisplayString(props.row.mt_keywords == "" ? "\u6682\u65E0\u6807\u7B7E" : props.row.mt_keywords), 1)])]),
          _: 1
        }), createVNode(_component_el_table_column, {
          prop: "shortTitle",
          label: "\u6807\u9898"
        }), createVNode(_component_el_table_column, {
          align: "right",
          width: "350"
        }, {
          header: withCtx(() => [_hoisted_8]),
          default: withCtx((scope) => [createVNode(_component_el_button, {
            size: "small",
            onClick: ($event) => handleView(scope.$index, scope.row)
          }, {
            default: withCtx(() => [createTextVNode("\u9884\u89C8 ")]),
            _: 2
          }, 1032, ["onClick"]), createVNode(_component_el_button, {
            size: "small",
            type: "primary",
            onClick: ($event) => handleNewWinView(scope.$index, scope.row)
          }, {
            default: withCtx(() => [createTextVNode("\u65B0\u7A97\u53E3\u9884\u89C8 ")]),
            _: 2
          }, 1032, ["onClick"]), createVNode(_component_el_button, {
            size: "small",
            onClick: ($event) => handleEdit(scope.$index, scope.row)
          }, {
            default: withCtx(() => [createTextVNode("\u53D1\u5E03 ")]),
            _: 2
          }, 1032, ["onClick"]), createVNode(_component_el_button, {
            size: "small",
            type: "primary",
            onClick: ($event) => handleNewWinEdit(scope.$index, scope.row)
          }, {
            default: withCtx(() => [createTextVNode("\u65B0\u7A97\u53E3\u53D1\u5E03 ")]),
            _: 2
          }, 1032, ["onClick"])]),
          _: 1
        })]),
        _: 1
      })), createVNode(_component_el_pagination, {
        small: "",
        background: "",
        layout: "prev, pager, next",
        total: total.value,
        class: "mt-4",
        "page-size": MAX_PAGE_SIZE,
        onPrevClick: handlePrevPage,
        onNextClick: handleNextPage,
        onCurrentChange: handleCurrentPage
      }, null, 8, ["total"]), createBaseVNode("div", null, [createVNode(_component_el_alert, {
        class: "top-data-tip",
        title: isInSiyuan.value ? _ctx.$t("blog.top-data-tip.siyuan") : _ctx.$t("blog.top-data-tip"),
        type: "info",
        closable: false
      }, null, 8, ["title"])])])) : createCommentVNode("", true), showDetail.value ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(SingleBlogDetail, {
        post: postDetail.value,
        onOnChange: emitFn,
        onOnPublishChange: emitPublishPageFn
      }, null, 8, ["post"])])) : createCommentVNode("", true), showPublish.value ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(SinglePublish, {
        "publish-data": publishData.value,
        onOnChange: emitPublishBackFn
      }, null, 8, ["publish-data"])])) : createCommentVNode("", true)]);
    };
  }
});
const BlogMain_vue_vue_type_style_index_0_lang = "";
const BlogMain_vue_vue_type_style_index_1_scoped_286b4ff2_lang = "";
const BlogMain = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-286b4ff2"]]);
const _hoisted_1 = {
  class: "common-layout"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlogIndex",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_main = ElMain;
      const _component_el_container = ElContainer;
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_el_container, null, {
        default: withCtx(() => [createVNode(_component_el_main, null, {
          default: withCtx(() => [createVNode(BlogMain)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
});
export {
  _sfc_main as _
};
