import { T as isFunction, a2 as buildProps, bz as iconPropType, d as defineComponent, aX as useLocale, a8 as inject, d6 as FOCUS_TRAP_INJECTION_KEY, R as computed, b_ as useDraggable, e as openBlock, c as createElementBlock, ah as createBaseVNode, au as renderSlot, ai as normalizeClass, a3 as unref, aR as toDisplayString, a as createVNode, af as withCtx, ae as createBlock, av as resolveDynamicComponent, b3 as ElIcon, aw as createCommentVNode, aj as normalizeStyle, am as _export_sfc, d7 as CloseComponents, Q as definePropType, b9 as UPDATE_MODEL_EVENT, Y as isBoolean, aI as useZIndex, aO as useId, r as ref, $ as useGlobalConfig, ap as addUnit, b$ as useLockscreen, V as watch, ar as nextTick, o as onMounted, W as getCurrentInstance, a0 as defaultNamespace, d8 as useTimeoutFn, X as isClient, be as useSlots, bu as useDeprecated, a9 as useNamespace, a4 as provide, c0 as useSameTarget, ag as withDirectives, bX as ElOverlay, aJ as ElFocusTrap, aG as mergeProps, bD as createSlots, ak as vShow, al as Transition, aM as Teleport, ay as withInstall, c2 as useI18n, c3 as useDark, c4 as useToggle, as as reactive, cQ as inSiyuan, b1 as ElInput, c5 as ElFormItem, cb as ElAlert, c6 as ElForm, bt as ElButton, b5 as createTextVNode, d3 as goToPage, l as logUtil, d9 as SiYuanConfig, cf as setJSONConf, da as SIYUAN_CONSTANTS, cg as ElMessage, db as goToPageWithTarget, dc as getSiyuanCfg, d0 as pushScopeId, d1 as popScopeId, cn as _export_sfc$1, cP as Post, ce as API, ci as API_TYPE_CONSTANTS, bB as resolveDirective } from "./footer-282fdf81.js";
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const dialogInjectionKey = Symbol("dialogInjectionKey");
const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  closeIcon: {
    type: iconPropType
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  }
});
const dialogContentEmits = {
  close: () => true
};
const _hoisted_1$3 = ["aria-label"];
const _hoisted_2$1 = ["id"];
const __default__$3 = defineComponent({ name: "ElDialogContent" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => props.draggable);
    useDraggable(dialogRef, headerRef, draggable);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("fullscreen", _ctx.fullscreen),
          unref(ns).is("draggable", unref(draggable)),
          unref(ns).is("align-center", _ctx.alignCenter),
          { [unref(ns).m("center")]: _ctx.center },
          _ctx.customClass
        ]),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createBaseVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createBaseVNode("span", {
              role: "heading",
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 3)
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, _hoisted_1$3)) : createCommentVNode("v-if", true)
        ], 2),
        createBaseVNode("div", {
          id: unref(bodyId),
          class: normalizeClass(unref(ns).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_2$1),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const _hoisted_1$2 = ["aria-label", "aria-labelledby", "aria-describedby"];
const __default__$2 = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    useDeprecated({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, computed(() => !!props.customClass));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    expose({
      visible,
      dialogContentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: "dialog-fade",
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave),
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(ElOverlay), {
              "custom-mask-event": "",
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": unref(zIndex)
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": _ctx.title || void 0,
                  "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                  "aria-describedby": unref(bodyId),
                  class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                  style: normalizeStyle(unref(overlayDialogStyle)),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
                  onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
                  onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
                }, [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: dialogContentRef
                      }, _ctx.$attrs, {
                        "custom-class": _ctx.customClass,
                        center: _ctx.center,
                        "align-center": _ctx.alignCenter,
                        "close-icon": _ctx.closeIcon,
                        draggable: unref(draggable),
                        fullscreen: _ctx.fullscreen,
                        "show-close": _ctx.showClose,
                        title: _ctx.title,
                        onClose: unref(handleClose)
                      }), createSlots({
                        header: withCtx(() => [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                        ]),
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        _ctx.$slots.footer ? {
                          name: "footer",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : createCommentVNode("v-if", true)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, _hoisted_1$2)
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const dialog = "";
const overlay = "";
const _withScopeId = (n) => (pushScopeId("data-v-1868d1ea"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  class: "footer"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " \xA92011-2022 ", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " v0.1.0. ", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_6 = {
  class: "dialog-footer"
};
const __default__$1 = {
  name: "DefaultFooter"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const {
      t
    } = useI18n();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const isInSiyuan = ref(false);
    const formLabelWidth = "140px";
    const siyuanApiChangeFormVisible = ref(false);
    const siyuanApiSettingFormRef = ref();
    const siyuanApiChangeForm = reactive({
      apiUrl: "http://127.0.0.1:6806",
      pwd: "",
      middlewareUrl: ""
    });
    const siyuanApiChangeRules = reactive({
      apiUrl: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      pwd: [{
        required: false,
        message: () => t("form.validate.name.required")
      }]
    });
    const goGithub = () => {
      window.open("https://github.com/terwer/src-sy-post-publisher");
    };
    const newWin = () => {
      goToPage("/blog/index.html");
    };
    const changeSuyuanApi = () => {
      siyuanApiChangeFormVisible.value = true;
    };
    const handleSiyuanApiSetting = async (formEl) => {
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logUtil.logInfo("\u6821\u9A8C\u6210\u529F");
        } else {
          logUtil.logError(t("main.opt.failure"), fields);
          return;
        }
      });
      if (!result) {
        return;
      }
      try {
        const siyuanCfg = new SiYuanConfig(siyuanApiChangeForm.apiUrl, siyuanApiChangeForm.pwd, siyuanApiChangeForm.middlewareUrl);
        setJSONConf(SIYUAN_CONSTANTS.SIYUAN_CFG_KEY, siyuanCfg);
        logUtil.logInfo("\u4FDD\u5B58\u601D\u6E90\u914D\u7F6E", siyuanCfg);
        ElMessage.success(t("main.opt.success"));
        setTimeout(function() {
          siyuanApiChangeFormVisible.value = false;
          goToPageWithTarget("/blog/index.html", "_self");
        }, 500);
      } catch (e) {
        siyuanApiChangeFormVisible.value = false;
        ElMessage.error(t("main.opt.failure"));
        logUtil.logError(t("main.opt.failure"), e);
      }
    };
    const initConf = () => {
      const siyuanCfg = getSiyuanCfg();
      siyuanApiChangeForm.apiUrl = siyuanCfg.baseUrl;
      siyuanApiChangeForm.pwd = siyuanCfg.token;
      siyuanApiChangeForm.middlewareUrl = siyuanCfg.middlewareUrl;
      logUtil.logInfo("\u521D\u59CB\u5316\u601D\u6E90\u914D\u7F6E", siyuanCfg);
    };
    onMounted(async () => {
      initConf();
      isInSiyuan.value = await inSiyuan();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_alert = ElAlert;
      const _component_el_form = ElForm;
      const _component_el_button = ElButton;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", null, [_hoisted_2, createBaseVNode("span", {
        class: "s-dark",
        onClick: _cache[0] || (_cache[0] = ($event) => goGithub())
      }, " sy-post-publisher "), _hoisted_3, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
      }, toDisplayString(unref(isDark) ? _ctx.$t("theme.mode.light") : _ctx.$t("theme.mode.dark")), 1), _hoisted_4, createTextVNode(), createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[2] || (_cache[2] = ($event) => changeSuyuanApi())
      }, toDisplayString(_ctx.$t("blog.change.siyuan.api")), 1), _hoisted_5, createTextVNode(), createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[3] || (_cache[3] = ($event) => newWin())
      }, toDisplayString(_ctx.$t("blog.newwin.open")), 1), createVNode(_component_el_dialog, {
        modelValue: siyuanApiChangeFormVisible.value,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => siyuanApiChangeFormVisible.value = $event),
        title: _ctx.$t("blog.change.siyuan.api")
      }, {
        footer: withCtx(() => [createBaseVNode("span", _hoisted_6, [createVNode(_component_el_button, {
          onClick: _cache[7] || (_cache[7] = ($event) => siyuanApiChangeFormVisible.value = false)
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.cancel")), 1)]),
          _: 1
        }), createVNode(_component_el_button, {
          type: "primary",
          onClick: _cache[8] || (_cache[8] = ($event) => handleSiyuanApiSetting(siyuanApiSettingFormRef.value))
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.ok")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_form, {
          ref_key: "siyuanApiSettingFormRef",
          ref: siyuanApiSettingFormRef,
          model: siyuanApiChangeForm,
          rules: siyuanApiChangeRules
        }, {
          default: withCtx(() => [createVNode(_component_el_form_item, {
            label: _ctx.$t("setting.blog.apiurl"),
            "label-width": formLabelWidth,
            prop: "apiUrl"
          }, {
            default: withCtx(() => [createVNode(_component_el_input, {
              modelValue: siyuanApiChangeForm.apiUrl,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => siyuanApiChangeForm.apiUrl = $event),
              autocomplete: "off",
              placeholder: _ctx.$t("setting.blog.siyuan.apiurl")
            }, null, 8, ["modelValue", "placeholder"])]),
            _: 1
          }, 8, ["label"]), createVNode(_component_el_form_item, {
            label: _ctx.$t("setting.blog.password"),
            "label-width": formLabelWidth,
            prop: "pwd"
          }, {
            default: withCtx(() => [createVNode(_component_el_input, {
              modelValue: siyuanApiChangeForm.pwd,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => siyuanApiChangeForm.pwd = $event),
              type: "password",
              autocomplete: "off",
              placeholder: _ctx.$t("setting.blog.siyuan.password"),
              "show-password": ""
            }, null, 8, ["modelValue", "placeholder"])]),
            _: 1
          }, 8, ["label"]), createVNode(_component_el_form_item, {
            label: _ctx.$t("setting.blog.middlewareUrl"),
            "label-width": formLabelWidth,
            prop: "middlewareUrl"
          }, {
            default: withCtx(() => [createVNode(_component_el_input, {
              modelValue: siyuanApiChangeForm.middlewareUrl,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => siyuanApiChangeForm.middlewareUrl = $event),
              autocomplete: "off",
              placeholder: _ctx.$t("setting.blog.middlewareUrl.tip")
            }, null, 8, ["modelValue", "placeholder"])]),
            _: 1
          }, 8, ["label"]), createVNode(_component_el_form_item, null, {
            default: withCtx(() => [createVNode(_component_el_alert, {
              class: "top-data-tip middleware-tip",
              title: _ctx.$t("setting.blog.middlewareUrl.my.tip"),
              type: "success",
              closable: false
            }, null, 8, ["title"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model", "rules"])]),
        _: 1
      }, 8, ["modelValue", "title"])])])]);
    };
  }
});
const DefaultFooter_vue_vue_type_style_index_0_scoped_1868d1ea_lang = "";
const DefaultFooter = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-1868d1ea"]]);
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
