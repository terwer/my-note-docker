var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { f as isSymbol, h as isObject$2, j as defineProperty, k as Symbol$1, m as isArray, n as isArguments, q as arrayPush, M as MapCache, s as eq, U as Uint8Array$1, t as getAllKeys, u as getTag, v as isBuffer, w as Stack, x as isTypedArray, y as isObjectLike, z as keys, A as castPath, B as toKey, C as isLength, D as isIndex, E as isKey, F as get, G as baseGet, H as isArrayLike, I as root, J as arrayMap, K as baseSet, L as capitalize$1, N as componentSizeMap, O as componentSizes, P as buildProp, Q as definePropType, R as computed, T as isFunction, V as watch, o as onMounted, W as getCurrentInstance, X as isClient, Y as isBoolean, Z as isRef, r as ref, _ as tryOnScopeDispose, $ as useGlobalConfig, a0 as defaultNamespace, a1 as onBeforeMount, a2 as buildProps, a3 as unref, a4 as provide, a5 as shallowRef, a6 as flattedChildren, a7 as isVNode, d as defineComponent, a8 as inject, a9 as useNamespace, aa as throwError, ab as onBeforeUnmount, ac as useEventListener, ad as toRef, e as openBlock, ae as createBlock, af as withCtx, ag as withDirectives, ah as createBaseVNode, ai as normalizeClass, aj as normalizeStyle, ak as vShow, al as Transition, am as _export_sfc, c as createElementBlock, a as createVNode, an as Fragment, ao as isNumber, ap as addUnit, aq as useResizeObserver, ar as nextTick, as as reactive, at as onUpdated, au as renderSlot, av as resolveDynamicComponent, aw as createCommentVNode, ax as isObject$3, ay as withInstall, az as NOOP, aA as cloneVNode, aB as Text, aC as Comment, aD as unrefElement, aE as isElement, aF as isNil, aG as mergeProps, aH as formItemContextKey, aI as useZIndex, aJ as ElFocusTrap, aK as EVENT_CODE, aL as isArray$1, aM as Teleport, aN as onClickOutside, aO as useId, aP as readonly, aQ as onDeactivated, aR as toDisplayString, aS as commonjsGlobal, aT as isEmpty, aU as isDate, aV as circle_close_default, aW as useSizeProp, aX as useLocale, aY as useFormItem, aZ as debugWarn, a_ as clock_default, a$ as calendar_default, b0 as useSize, b1 as ElInput, b2 as withModifiers, b3 as ElIcon, b4 as renderList, b5 as createTextVNode, b6 as arrow_up_default, b7 as arrow_down_default, b8 as isUndefined, b9 as UPDATE_MODEL_EVENT, ba as isString, bb as useDisabled, bc as toRaw, bd as useFormItemInputId, be as useSlots, bf as vModelCheckbox, bg as toRefs, bh as withNoopInstall, bi as CHANGE_EVENT, bj as vModelRadio, bk as close_default, bl as toHandlers, bm as withKeys, bn as hasClass, bo as useAttrs, bp as d_arrow_left_default, bq as arrow_left_default, br as arrow_right_default, bs as d_arrow_right_default, bt as ElButton, bu as useDeprecated, bv as triggerRef, bw as toRawType, bx as scrollIntoView, by as isKorean, bz as iconPropType, bA as resolveComponent, bB as resolveDirective, bC as vModelText, bD as createSlots, bE as picture_filled_default, bF as normalizeProps, bG as INPUT_EVENT, bH as loading_default, bI as isPromise, bJ as hasOwn, bK as onUnmounted, bL as addClass, bM as removeClass, bN as h$1, bO as getStyle, bP as watchEffect, bQ as getProp, bR as mutable, bS as useDocumentVisibility, bT as useWindowFocus, bU as plus_default, bV as computedEager, bW as caret_right_default, bX as ElOverlay, bY as TypeComponents, bZ as TypeComponentsMap, b_ as useDraggable, b$ as useLockscreen, c0 as useSameTarget, c1 as render, c2 as useI18n, c3 as useDark, c4 as useToggle, c5 as ElFormItem, c6 as ElForm, l as logUtil, c7 as defineStore, c8 as getBooleanConf, c9 as getDynamicJsonCfg, ca as getConf, cb as ElAlert, cc as setBooleanConf, cd as getJSONConf, ce as API, cf as setJSONConf, cg as ElMessage, ch as isEmptyObject, ci as API_TYPE_CONSTANTS, cj as browser$1, ck as getDefaultExportFromCjs, cl as gBase64, cm as formatIsoToZhDate, cn as _export_sfc$1, co as DynamicConfig, b as getPageId, cp as getPageAttrs, cq as setPageAttrs, cr as isEmptyString, cs as getPage, ct as formatNumToZhDate, cu as getPublishStatus, cv as getPageMd, cw as removeMdWidgetTag, cx as getApiParams, cy as covertStringToDate, cz as obj2yaml, cA as ElButtonGroup, cB as ElAside, cC as ElMain, cD as ElContainer, cE as removeTitleNumber, cF as zhSlugify, cG as pingyinSlugify, cH as mdToPlainText, cI as parseHtml, cJ as cutWords, cK as jiebaToHotWords, cL as yaml2Obj, cM as CONSTANTS, cN as mdToHtml, cO as removeWidgetTag, cP as Post, cQ as inSiyuan, cR as getEnv, cS as setConf, cT as calcLastSeconds, cU as PlantformType, cV as ElHeader, cW as checkKeyExists, cX as setDynamicJsonCfg, cY as reloadPage } from "./footer-d815302d.js";
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
var nativeMax$1 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag2, bitmask, customizer, equalFunc, stack) {
  switch (tag2) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject$2(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
const baseFor$1 = baseFor;
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
const baseEach$1 = baseEach;
var now = function() {
  return root.Date.now();
};
const now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
const pick$1 = pick;
const FOCUSABLE_ELEMENT_SELECTORS = `a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`;
const isVisible = (element) => {
  const computed2 = getComputedStyle(element);
  return computed2.position === "fixed" ? false : element.offsetParent !== null;
};
const obtainAllFocusableElements = (element) => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter((item) => isFocusable(item) && isVisible(item));
};
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const capitalize = (str) => capitalize$1(str);
const datePickTypes = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];
const getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};
const generateId = () => Math.floor(Math.random() * 1e4);
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const radioGroupKey = Symbol("radioGroupKey");
const scrollbarContextKey = Symbol("scrollbarContextKey");
const tabsRootContextKey = Symbol("tabsRootContextKey");
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const ROOT_PICKER_INJECTION_KEY = Symbol();
const useFocus = (el) => {
  return {
    focus: () => {
      var _a, _b;
      (_b = (_a = el.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
  };
};
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const useRestoreActive = (toggle, initialFocus) => {
  let previousActive;
  watch(() => toggle.value, (val) => {
    var _a, _b;
    if (val) {
      previousActive = document.activeElement;
      if (isRef(initialFocus)) {
        (_b = (_a = initialFocus.value).focus) == null ? void 0 : _b.call(_a);
      }
    } else {
      {
        previousActive.focus();
      }
    }
  });
};
const useThrottleRender = (loading, throttle = 0) => {
  if (throttle === 0)
    return loading;
  const throttled = ref(false);
  let timeoutHandle = 0;
  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value;
    }, throttle);
  };
  onMounted(dispatchThrottling);
  watch(() => loading.value, (val) => {
    if (val) {
      dispatchThrottling();
    } else {
      throttled.value = val;
    }
  });
  return throttled;
};
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn2, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
let cachedContainer;
const namespace = useGlobalConfig("namespace", defaultNamespace);
const POPPER_CONTAINER_ID = `${namespace.value}-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container2 = document.createElement("div");
  container2.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container2);
  return container2;
};
const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (!cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
    }, unref(showAfter));
  };
  const onClose = (event) => {
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p2) => !!p2);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const COMPONENT_NAME$6 = "Thumb";
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const scrollbar2 = inject(scrollbarContextKey);
    const ns2 = useNamespace("scrollbar");
    if (!scrollbar2)
      throwError(COMPONENT_NAME$6, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar2.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar2.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar2.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar2.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar2.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar2.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar2, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar2, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns2).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            ref_key: "instance",
            ref: instance,
            class: normalizeClass([unref(ns2).e("bar"), unref(ns2).is(unref(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            createBaseVNode("div", {
              ref_key: "thumb",
              ref: thumb,
              class: normalizeClass(unref(ns2).e("thumb")),
              style: normalizeStyle(unref(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = ref(0);
    const moveY = ref(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    expose({
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Thumb, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        createVNode(Thumb, {
          move: moveY.value,
          ratio: _ctx.ratioY,
          size: _ctx.height,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber)
};
const COMPONENT_NAME$5 = "ElScrollbar";
const __default__$N = defineComponent({
  name: COMPONENT_NAME$5
});
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  ...__default__$N,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns2 = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbarRef = ref();
    const wrapRef = ref();
    const resizeRef = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const barRef = ref();
    const ratioY = ref(1);
    const ratioX = ref(1);
    const style = computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const wrapKls = computed(() => {
      return [
        props.wrapClass,
        ns2.e("wrap"),
        { [ns2.em("wrap", "hidden-default")]: !props.native }
      ];
    });
    const resizeKls = computed(() => {
      return [ns2.e("view"), props.viewClass];
    });
    const handleScroll = () => {
      var _a;
      if (wrapRef.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
        emit("scroll", {
          scrollTop: wrapRef.value.scrollTop,
          scrollLeft: wrapRef.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject$3(arg1)) {
        wrapRef.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrapRef.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrapRef.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrapRef.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrapRef.value)
        return;
      const offsetHeight = wrapRef.value.offsetHeight - GAP;
      const offsetWidth = wrapRef.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a;
          update();
          if (wrapRef.value) {
            (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbarRef,
      wrapElement: wrapRef
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update();
        });
    });
    onUpdated(() => update());
    expose({
      wrapRef,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        class: normalizeClass(unref(ns2).b())
      }, [
        createBaseVNode("div", {
          ref_key: "wrapRef",
          ref: wrapRef,
          class: normalizeClass(unref(wrapKls)),
          style: normalizeStyle(unref(style)),
          onScroll: handleScroll
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            ref_key: "resizeRef",
            ref: resizeRef,
            class: normalizeClass(unref(resizeKls)),
            style: normalizeStyle(_ctx.viewStyle)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]))
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          height: sizeHeight.value,
          width: sizeWidth.value,
          always: _ctx.always,
          "ratio-x": ratioX.value,
          "ratio-y": ratioY.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const ElScrollbar = withInstall(Scrollbar);
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$M = defineComponent({
  name: "ElPopperRoot",
  inheritAttrs: false
});
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  ...__default__$M,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef2 = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef: triggerRef2,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const __default__$L = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  ...__default__$L,
  props: popperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("popper");
    const { arrowOffset, arrowRef } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns2).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_2, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject$3(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s2) {
  const ns2 = useNamespace("only-child");
  return createVNode("span", {
    "class": ns2.e("content")
  }, [s2]);
}
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const __default__$K = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  ...__default__$K,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef: triggerRef2 } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef2);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    onMounted(() => {
      watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef2.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      watch(triggerRef2, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if (isElement(el)) {
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
            [
              "aria-controls",
              "aria-describedby",
              "aria-haspopup",
              "aria-expanded"
            ].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key) => prevEl.removeAttribute(key));
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
var E$1 = "top", R = "bottom", W = "right", P$1 = "left", me = "auto", G = [E$1, R, W, P$1], U$1 = "start", J = "end", Xe = "clippingParents", je = "viewport", K = "popper", Ye = "reference", De = G.reduce(function(t, e) {
  return t.concat([e + "-" + U$1, e + "-" + J]);
}, []), Ee = [].concat(G, [me]).reduce(function(t, e) {
  return t.concat([e, e + "-" + U$1, e + "-" + J]);
}, []), Ge = "beforeRead", Je = "read", Ke = "afterRead", Qe = "beforeMain", Ze = "main", et = "afterMain", tt = "beforeWrite", nt = "write", rt = "afterWrite", ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];
function C(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function H(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Q(t) {
  var e = H(t).Element;
  return t instanceof e || t instanceof Element;
}
function B(t) {
  var e = H(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Pe(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = H(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Mt(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o2 = e.attributes[n] || {}, i = e.elements[n];
    !B(i) || !C(i) || (Object.assign(i.style, r), Object.keys(o2).forEach(function(a2) {
      var s2 = o2[a2];
      s2 === false ? i.removeAttribute(a2) : i.setAttribute(a2, s2 === true ? "" : s2);
    }));
  });
}
function Rt(t) {
  var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o2 = e.elements[r], i = e.attributes[r] || {}, a2 = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s2 = a2.reduce(function(f2, c2) {
        return f2[c2] = "", f2;
      }, {});
      !B(o2) || !C(o2) || (Object.assign(o2.style, s2), Object.keys(i).forEach(function(f2) {
        o2.removeAttribute(f2);
      }));
    });
  };
}
var Ae = { name: "applyStyles", enabled: true, phase: "write", fn: Mt, effect: Rt, requires: ["computeStyles"] };
function q(t) {
  return t.split("-")[0];
}
var X$1 = Math.max, ve = Math.min, Z = Math.round;
function ee(t, e) {
  e === void 0 && (e = false);
  var n = t.getBoundingClientRect(), r = 1, o2 = 1;
  if (B(t) && e) {
    var i = t.offsetHeight, a2 = t.offsetWidth;
    a2 > 0 && (r = Z(n.width) / a2 || 1), i > 0 && (o2 = Z(n.height) / i || 1);
  }
  return { width: n.width / r, height: n.height / o2, top: n.top / o2, right: n.right / r, bottom: n.bottom / o2, left: n.left / r, x: n.left / r, y: n.top / o2 };
}
function ke(t) {
  var e = ee(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: r };
}
function it(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return true;
  if (n && Pe(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function N$1(t) {
  return H(t).getComputedStyle(t);
}
function Wt(t) {
  return ["table", "td", "th"].indexOf(C(t)) >= 0;
}
function I$1(t) {
  return ((Q(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ge(t) {
  return C(t) === "html" ? t : t.assignedSlot || t.parentNode || (Pe(t) ? t.host : null) || I$1(t);
}
function at(t) {
  return !B(t) || N$1(t).position === "fixed" ? null : t.offsetParent;
}
function Bt(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && B(t)) {
    var r = N$1(t);
    if (r.position === "fixed")
      return null;
  }
  var o2 = ge(t);
  for (Pe(o2) && (o2 = o2.host); B(o2) && ["html", "body"].indexOf(C(o2)) < 0; ) {
    var i = N$1(o2);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o2;
    o2 = o2.parentNode;
  }
  return null;
}
function se(t) {
  for (var e = H(t), n = at(t); n && Wt(n) && N$1(n).position === "static"; )
    n = at(n);
  return n && (C(n) === "html" || C(n) === "body" && N$1(n).position === "static") ? e : n || Bt(t) || e;
}
function Le(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function fe(t, e, n) {
  return X$1(t, ve(e, n));
}
function St(t, e, n) {
  var r = fe(t, e, n);
  return r > n ? n : r;
}
function st() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ft(t) {
  return Object.assign({}, st(), t);
}
function ct(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var Tt = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, ft(typeof t != "number" ? t : ct(t, G));
};
function Ht(t) {
  var e, n = t.state, r = t.name, o2 = t.options, i = n.elements.arrow, a2 = n.modifiersData.popperOffsets, s2 = q(n.placement), f2 = Le(s2), c2 = [P$1, W].indexOf(s2) >= 0, u2 = c2 ? "height" : "width";
  if (!(!i || !a2)) {
    var m2 = Tt(o2.padding, n), v2 = ke(i), l2 = f2 === "y" ? E$1 : P$1, h2 = f2 === "y" ? R : W, p2 = n.rects.reference[u2] + n.rects.reference[f2] - a2[f2] - n.rects.popper[u2], g = a2[f2] - n.rects.reference[f2], x2 = se(i), y = x2 ? f2 === "y" ? x2.clientHeight || 0 : x2.clientWidth || 0 : 0, $ = p2 / 2 - g / 2, d2 = m2[l2], b2 = y - v2[u2] - m2[h2], w2 = y / 2 - v2[u2] / 2 + $, O2 = fe(d2, w2, b2), j = f2;
    n.modifiersData[r] = (e = {}, e[j] = O2, e.centerOffset = O2 - w2, e);
  }
}
function Ct(t) {
  var e = t.state, n = t.options, r = n.element, o2 = r === void 0 ? "[data-popper-arrow]" : r;
  o2 != null && (typeof o2 == "string" && (o2 = e.elements.popper.querySelector(o2), !o2) || !it(e.elements.popper, o2) || (e.elements.arrow = o2));
}
var pt = { name: "arrow", enabled: true, phase: "main", fn: Ht, effect: Ct, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function te(t) {
  return t.split("-")[1];
}
var qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vt(t) {
  var e = t.x, n = t.y, r = window, o2 = r.devicePixelRatio || 1;
  return { x: Z(e * o2) / o2 || 0, y: Z(n * o2) / o2 || 0 };
}
function ut(t) {
  var e, n = t.popper, r = t.popperRect, o2 = t.placement, i = t.variation, a2 = t.offsets, s2 = t.position, f2 = t.gpuAcceleration, c2 = t.adaptive, u2 = t.roundOffsets, m2 = t.isFixed, v2 = a2.x, l2 = v2 === void 0 ? 0 : v2, h2 = a2.y, p2 = h2 === void 0 ? 0 : h2, g = typeof u2 == "function" ? u2({ x: l2, y: p2 }) : { x: l2, y: p2 };
  l2 = g.x, p2 = g.y;
  var x2 = a2.hasOwnProperty("x"), y = a2.hasOwnProperty("y"), $ = P$1, d2 = E$1, b2 = window;
  if (c2) {
    var w2 = se(n), O2 = "clientHeight", j = "clientWidth";
    if (w2 === H(n) && (w2 = I$1(n), N$1(w2).position !== "static" && s2 === "absolute" && (O2 = "scrollHeight", j = "scrollWidth")), w2 = w2, o2 === E$1 || (o2 === P$1 || o2 === W) && i === J) {
      d2 = R;
      var A2 = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.height : w2[O2];
      p2 -= A2 - r.height, p2 *= f2 ? 1 : -1;
    }
    if (o2 === P$1 || (o2 === E$1 || o2 === R) && i === J) {
      $ = W;
      var k = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.width : w2[j];
      l2 -= k - r.width, l2 *= f2 ? 1 : -1;
    }
  }
  var D2 = Object.assign({ position: s2 }, c2 && qt), S2 = u2 === true ? Vt({ x: l2, y: p2 }) : { x: l2, y: p2 };
  if (l2 = S2.x, p2 = S2.y, f2) {
    var L;
    return Object.assign({}, D2, (L = {}, L[d2] = y ? "0" : "", L[$] = x2 ? "0" : "", L.transform = (b2.devicePixelRatio || 1) <= 1 ? "translate(" + l2 + "px, " + p2 + "px)" : "translate3d(" + l2 + "px, " + p2 + "px, 0)", L));
  }
  return Object.assign({}, D2, (e = {}, e[d2] = y ? p2 + "px" : "", e[$] = x2 ? l2 + "px" : "", e.transform = "", e));
}
function Nt(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, o2 = r === void 0 ? true : r, i = n.adaptive, a2 = i === void 0 ? true : i, s2 = n.roundOffsets, f2 = s2 === void 0 ? true : s2, c2 = { placement: q(e.placement), variation: te(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o2, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ut(Object.assign({}, c2, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a2, roundOffsets: f2 })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ut(Object.assign({}, c2, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f2 })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
var Me = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt, data: {} }, ye = { passive: true };
function It(t) {
  var e = t.state, n = t.instance, r = t.options, o2 = r.scroll, i = o2 === void 0 ? true : o2, a2 = r.resize, s2 = a2 === void 0 ? true : a2, f2 = H(e.elements.popper), c2 = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c2.forEach(function(u2) {
    u2.addEventListener("scroll", n.update, ye);
  }), s2 && f2.addEventListener("resize", n.update, ye), function() {
    i && c2.forEach(function(u2) {
      u2.removeEventListener("scroll", n.update, ye);
    }), s2 && f2.removeEventListener("resize", n.update, ye);
  };
}
var Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: It, data: {} }, _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return _t[e];
  });
}
var zt = { start: "end", end: "start" };
function lt(t) {
  return t.replace(/start|end/g, function(e) {
    return zt[e];
  });
}
function We(t) {
  var e = H(t), n = e.pageXOffset, r = e.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Be(t) {
  return ee(I$1(t)).left + We(t).scrollLeft;
}
function Ft(t) {
  var e = H(t), n = I$1(t), r = e.visualViewport, o2 = n.clientWidth, i = n.clientHeight, a2 = 0, s2 = 0;
  return r && (o2 = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a2 = r.offsetLeft, s2 = r.offsetTop)), { width: o2, height: i, x: a2 + Be(t), y: s2 };
}
function Ut(t) {
  var e, n = I$1(t), r = We(t), o2 = (e = t.ownerDocument) == null ? void 0 : e.body, i = X$1(n.scrollWidth, n.clientWidth, o2 ? o2.scrollWidth : 0, o2 ? o2.clientWidth : 0), a2 = X$1(n.scrollHeight, n.clientHeight, o2 ? o2.scrollHeight : 0, o2 ? o2.clientHeight : 0), s2 = -r.scrollLeft + Be(t), f2 = -r.scrollTop;
  return N$1(o2 || n).direction === "rtl" && (s2 += X$1(n.clientWidth, o2 ? o2.clientWidth : 0) - i), { width: i, height: a2, x: s2, y: f2 };
}
function Se(t) {
  var e = N$1(t), n = e.overflow, r = e.overflowX, o2 = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o2 + r);
}
function dt(t) {
  return ["html", "body", "#document"].indexOf(C(t)) >= 0 ? t.ownerDocument.body : B(t) && Se(t) ? t : dt(ge(t));
}
function ce(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = dt(t), o2 = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = H(r), a2 = o2 ? [i].concat(i.visualViewport || [], Se(r) ? r : []) : r, s2 = e.concat(a2);
  return o2 ? s2 : s2.concat(ce(ge(a2)));
}
function Te(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
function Xt(t) {
  var e = ee(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}
function ht(t, e) {
  return e === je ? Te(Ft(t)) : Q(e) ? Xt(e) : Te(Ut(I$1(t)));
}
function Yt(t) {
  var e = ce(ge(t)), n = ["absolute", "fixed"].indexOf(N$1(t).position) >= 0, r = n && B(t) ? se(t) : t;
  return Q(r) ? e.filter(function(o2) {
    return Q(o2) && it(o2, r) && C(o2) !== "body";
  }) : [];
}
function Gt(t, e, n) {
  var r = e === "clippingParents" ? Yt(t) : [].concat(e), o2 = [].concat(r, [n]), i = o2[0], a2 = o2.reduce(function(s2, f2) {
    var c2 = ht(t, f2);
    return s2.top = X$1(c2.top, s2.top), s2.right = ve(c2.right, s2.right), s2.bottom = ve(c2.bottom, s2.bottom), s2.left = X$1(c2.left, s2.left), s2;
  }, ht(t, i));
  return a2.width = a2.right - a2.left, a2.height = a2.bottom - a2.top, a2.x = a2.left, a2.y = a2.top, a2;
}
function mt(t) {
  var e = t.reference, n = t.element, r = t.placement, o2 = r ? q(r) : null, i = r ? te(r) : null, a2 = e.x + e.width / 2 - n.width / 2, s2 = e.y + e.height / 2 - n.height / 2, f2;
  switch (o2) {
    case E$1:
      f2 = { x: a2, y: e.y - n.height };
      break;
    case R:
      f2 = { x: a2, y: e.y + e.height };
      break;
    case W:
      f2 = { x: e.x + e.width, y: s2 };
      break;
    case P$1:
      f2 = { x: e.x - n.width, y: s2 };
      break;
    default:
      f2 = { x: e.x, y: e.y };
  }
  var c2 = o2 ? Le(o2) : null;
  if (c2 != null) {
    var u2 = c2 === "y" ? "height" : "width";
    switch (i) {
      case U$1:
        f2[c2] = f2[c2] - (e[u2] / 2 - n[u2] / 2);
        break;
      case J:
        f2[c2] = f2[c2] + (e[u2] / 2 - n[u2] / 2);
        break;
    }
  }
  return f2;
}
function ne(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o2 = r === void 0 ? t.placement : r, i = n.boundary, a2 = i === void 0 ? Xe : i, s2 = n.rootBoundary, f2 = s2 === void 0 ? je : s2, c2 = n.elementContext, u2 = c2 === void 0 ? K : c2, m2 = n.altBoundary, v2 = m2 === void 0 ? false : m2, l2 = n.padding, h2 = l2 === void 0 ? 0 : l2, p2 = ft(typeof h2 != "number" ? h2 : ct(h2, G)), g = u2 === K ? Ye : K, x2 = t.rects.popper, y = t.elements[v2 ? g : u2], $ = Gt(Q(y) ? y : y.contextElement || I$1(t.elements.popper), a2, f2), d2 = ee(t.elements.reference), b2 = mt({ reference: d2, element: x2, strategy: "absolute", placement: o2 }), w2 = Te(Object.assign({}, x2, b2)), O2 = u2 === K ? w2 : d2, j = { top: $.top - O2.top + p2.top, bottom: O2.bottom - $.bottom + p2.bottom, left: $.left - O2.left + p2.left, right: O2.right - $.right + p2.right }, A2 = t.modifiersData.offset;
  if (u2 === K && A2) {
    var k = A2[o2];
    Object.keys(j).forEach(function(D2) {
      var S2 = [W, R].indexOf(D2) >= 0 ? 1 : -1, L = [E$1, R].indexOf(D2) >= 0 ? "y" : "x";
      j[D2] += k[L] * S2;
    });
  }
  return j;
}
function Jt(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o2 = n.boundary, i = n.rootBoundary, a2 = n.padding, s2 = n.flipVariations, f2 = n.allowedAutoPlacements, c2 = f2 === void 0 ? Ee : f2, u2 = te(r), m2 = u2 ? s2 ? De : De.filter(function(h2) {
    return te(h2) === u2;
  }) : G, v2 = m2.filter(function(h2) {
    return c2.indexOf(h2) >= 0;
  });
  v2.length === 0 && (v2 = m2);
  var l2 = v2.reduce(function(h2, p2) {
    return h2[p2] = ne(t, { placement: p2, boundary: o2, rootBoundary: i, padding: a2 })[q(p2)], h2;
  }, {});
  return Object.keys(l2).sort(function(h2, p2) {
    return l2[h2] - l2[p2];
  });
}
function Kt(t) {
  if (q(t) === me)
    return [];
  var e = be(t);
  return [lt(t), e, lt(e)];
}
function Qt(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var o2 = n.mainAxis, i = o2 === void 0 ? true : o2, a2 = n.altAxis, s2 = a2 === void 0 ? true : a2, f2 = n.fallbackPlacements, c2 = n.padding, u2 = n.boundary, m2 = n.rootBoundary, v2 = n.altBoundary, l2 = n.flipVariations, h2 = l2 === void 0 ? true : l2, p2 = n.allowedAutoPlacements, g = e.options.placement, x2 = q(g), y = x2 === g, $ = f2 || (y || !h2 ? [be(g)] : Kt(g)), d2 = [g].concat($).reduce(function(z, V) {
      return z.concat(q(V) === me ? Jt(e, { placement: V, boundary: u2, rootBoundary: m2, padding: c2, flipVariations: h2, allowedAutoPlacements: p2 }) : V);
    }, []), b2 = e.rects.reference, w2 = e.rects.popper, O2 = /* @__PURE__ */ new Map(), j = true, A2 = d2[0], k = 0; k < d2.length; k++) {
      var D2 = d2[k], S2 = q(D2), L = te(D2) === U$1, re = [E$1, R].indexOf(S2) >= 0, oe = re ? "width" : "height", M2 = ne(e, { placement: D2, boundary: u2, rootBoundary: m2, altBoundary: v2, padding: c2 }), T2 = re ? L ? W : P$1 : L ? R : E$1;
      b2[oe] > w2[oe] && (T2 = be(T2));
      var pe = be(T2), _2 = [];
      if (i && _2.push(M2[S2] <= 0), s2 && _2.push(M2[T2] <= 0, M2[pe] <= 0), _2.every(function(z) {
        return z;
      })) {
        A2 = D2, j = false;
        break;
      }
      O2.set(D2, _2);
    }
    if (j)
      for (var ue = h2 ? 3 : 1, xe = function(z) {
        var V = d2.find(function(de) {
          var ae = O2.get(de);
          if (ae)
            return ae.slice(0, z).every(function(Y2) {
              return Y2;
            });
        });
        if (V)
          return A2 = V, "break";
      }, ie = ue; ie > 0; ie--) {
        var le = xe(ie);
        if (le === "break")
          break;
      }
    e.placement !== A2 && (e.modifiersData[r]._skip = true, e.placement = A2, e.reset = true);
  }
}
var vt = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
function gt(t, e, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
}
function yt(t) {
  return [E$1, W, R, P$1].some(function(e) {
    return t[e] >= 0;
  });
}
function Zt(t) {
  var e = t.state, n = t.name, r = e.rects.reference, o2 = e.rects.popper, i = e.modifiersData.preventOverflow, a2 = ne(e, { elementContext: "reference" }), s2 = ne(e, { altBoundary: true }), f2 = gt(a2, r), c2 = gt(s2, o2, i), u2 = yt(f2), m2 = yt(c2);
  e.modifiersData[n] = { referenceClippingOffsets: f2, popperEscapeOffsets: c2, isReferenceHidden: u2, hasPopperEscaped: m2 }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u2, "data-popper-escaped": m2 });
}
var bt = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
function en(t, e, n) {
  var r = q(t), o2 = [P$1, E$1].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, a2 = i[0], s2 = i[1];
  return a2 = a2 || 0, s2 = (s2 || 0) * o2, [P$1, W].indexOf(r) >= 0 ? { x: s2, y: a2 } : { x: a2, y: s2 };
}
function tn(t) {
  var e = t.state, n = t.options, r = t.name, o2 = n.offset, i = o2 === void 0 ? [0, 0] : o2, a2 = Ee.reduce(function(u2, m2) {
    return u2[m2] = en(m2, e.rects, i), u2;
  }, {}), s2 = a2[e.placement], f2 = s2.x, c2 = s2.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f2, e.modifiersData.popperOffsets.y += c2), e.modifiersData[r] = a2;
}
var wt = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
function nn(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = mt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
var He = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
function rn(t) {
  return t === "x" ? "y" : "x";
}
function on(t) {
  var e = t.state, n = t.options, r = t.name, o2 = n.mainAxis, i = o2 === void 0 ? true : o2, a2 = n.altAxis, s2 = a2 === void 0 ? false : a2, f2 = n.boundary, c2 = n.rootBoundary, u2 = n.altBoundary, m2 = n.padding, v2 = n.tether, l2 = v2 === void 0 ? true : v2, h2 = n.tetherOffset, p2 = h2 === void 0 ? 0 : h2, g = ne(e, { boundary: f2, rootBoundary: c2, padding: m2, altBoundary: u2 }), x2 = q(e.placement), y = te(e.placement), $ = !y, d2 = Le(x2), b2 = rn(d2), w2 = e.modifiersData.popperOffsets, O2 = e.rects.reference, j = e.rects.popper, A2 = typeof p2 == "function" ? p2(Object.assign({}, e.rects, { placement: e.placement })) : p2, k = typeof A2 == "number" ? { mainAxis: A2, altAxis: A2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, A2), D2 = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, S2 = { x: 0, y: 0 };
  if (w2) {
    if (i) {
      var L, re = d2 === "y" ? E$1 : P$1, oe = d2 === "y" ? R : W, M2 = d2 === "y" ? "height" : "width", T2 = w2[d2], pe = T2 + g[re], _2 = T2 - g[oe], ue = l2 ? -j[M2] / 2 : 0, xe = y === U$1 ? O2[M2] : j[M2], ie = y === U$1 ? -j[M2] : -O2[M2], le = e.elements.arrow, z = l2 && le ? ke(le) : { width: 0, height: 0 }, V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : st(), de = V[re], ae = V[oe], Y2 = fe(0, O2[M2], z[M2]), jt = $ ? O2[M2] / 2 - ue - Y2 - de - k.mainAxis : xe - Y2 - de - k.mainAxis, Dt = $ ? -O2[M2] / 2 + ue + Y2 + ae + k.mainAxis : ie + Y2 + ae + k.mainAxis, Oe = e.elements.arrow && se(e.elements.arrow), Et = Oe ? d2 === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (L = D2 == null ? void 0 : D2[d2]) != null ? L : 0, Pt = T2 + jt - Ce - Et, At = T2 + Dt - Ce, qe = fe(l2 ? ve(pe, Pt) : pe, T2, l2 ? X$1(_2, At) : _2);
      w2[d2] = qe, S2[d2] = qe - T2;
    }
    if (s2) {
      var Ve, kt = d2 === "x" ? E$1 : P$1, Lt = d2 === "x" ? R : W, F2 = w2[b2], he = b2 === "y" ? "height" : "width", Ne = F2 + g[kt], Ie = F2 - g[Lt], $e = [E$1, P$1].indexOf(x2) !== -1, _e = (Ve = D2 == null ? void 0 : D2[b2]) != null ? Ve : 0, ze = $e ? Ne : F2 - O2[he] - j[he] - _e + k.altAxis, Fe = $e ? F2 + O2[he] + j[he] - _e - k.altAxis : Ie, Ue = l2 && $e ? St(ze, F2, Fe) : fe(l2 ? ze : Ne, F2, l2 ? Fe : Ie);
      w2[b2] = Ue, S2[b2] = Ue - F2;
    }
    e.modifiersData[r] = S2;
  }
}
var xt = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
function an(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function sn(t) {
  return t === H(t) || !B(t) ? We(t) : an(t);
}
function fn(t) {
  var e = t.getBoundingClientRect(), n = Z(e.width) / t.offsetWidth || 1, r = Z(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function cn(t, e, n) {
  n === void 0 && (n = false);
  var r = B(e), o2 = B(e) && fn(e), i = I$1(e), a2 = ee(t, o2), s2 = { scrollLeft: 0, scrollTop: 0 }, f2 = { x: 0, y: 0 };
  return (r || !r && !n) && ((C(e) !== "body" || Se(i)) && (s2 = sn(e)), B(e) ? (f2 = ee(e, true), f2.x += e.clientLeft, f2.y += e.clientTop) : i && (f2.x = Be(i))), { x: a2.left + s2.scrollLeft - f2.x, y: a2.top + s2.scrollTop - f2.y, width: a2.width, height: a2.height };
}
function pn(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o2(i) {
    n.add(i.name);
    var a2 = [].concat(i.requires || [], i.requiresIfExists || []);
    a2.forEach(function(s2) {
      if (!n.has(s2)) {
        var f2 = e.get(s2);
        f2 && o2(f2);
      }
    }), r.push(i);
  }
  return t.forEach(function(i) {
    n.has(i.name) || o2(i);
  }), r;
}
function un(t) {
  var e = pn(t);
  return ot.reduce(function(n, r) {
    return n.concat(e.filter(function(o2) {
      return o2.phase === r;
    }));
  }, []);
}
function ln(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function dn(t) {
  var e = t.reduce(function(n, r) {
    var o2 = n[r.name];
    return n[r.name] = o2 ? Object.assign({}, o2, r, { options: Object.assign({}, o2.options, r.options), data: Object.assign({}, o2.data, r.data) }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $t() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function we(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o2 = e.defaultOptions, i = o2 === void 0 ? Ot : o2;
  return function(a2, s2, f2) {
    f2 === void 0 && (f2 = i);
    var c2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot, i), modifiersData: {}, elements: { reference: a2, popper: s2 }, attributes: {}, styles: {} }, u2 = [], m2 = false, v2 = { state: c2, setOptions: function(p2) {
      var g = typeof p2 == "function" ? p2(c2.options) : p2;
      h2(), c2.options = Object.assign({}, i, c2.options, g), c2.scrollParents = { reference: Q(a2) ? ce(a2) : a2.contextElement ? ce(a2.contextElement) : [], popper: ce(s2) };
      var x2 = un(dn([].concat(r, c2.options.modifiers)));
      return c2.orderedModifiers = x2.filter(function(y) {
        return y.enabled;
      }), l2(), v2.update();
    }, forceUpdate: function() {
      if (!m2) {
        var p2 = c2.elements, g = p2.reference, x2 = p2.popper;
        if ($t(g, x2)) {
          c2.rects = { reference: cn(g, se(x2), c2.options.strategy === "fixed"), popper: ke(x2) }, c2.reset = false, c2.placement = c2.options.placement, c2.orderedModifiers.forEach(function(j) {
            return c2.modifiersData[j.name] = Object.assign({}, j.data);
          });
          for (var y = 0; y < c2.orderedModifiers.length; y++) {
            if (c2.reset === true) {
              c2.reset = false, y = -1;
              continue;
            }
            var $ = c2.orderedModifiers[y], d2 = $.fn, b2 = $.options, w2 = b2 === void 0 ? {} : b2, O2 = $.name;
            typeof d2 == "function" && (c2 = d2({ state: c2, options: w2, name: O2, instance: v2 }) || c2);
          }
        }
      }
    }, update: ln(function() {
      return new Promise(function(p2) {
        v2.forceUpdate(), p2(c2);
      });
    }), destroy: function() {
      h2(), m2 = true;
    } };
    if (!$t(a2, s2))
      return v2;
    v2.setOptions(f2).then(function(p2) {
      !m2 && f2.onFirstUpdate && f2.onFirstUpdate(p2);
    });
    function l2() {
      c2.orderedModifiers.forEach(function(p2) {
        var g = p2.name, x2 = p2.options, y = x2 === void 0 ? {} : x2, $ = p2.effect;
        if (typeof $ == "function") {
          var d2 = $({ state: c2, name: g, instance: v2, options: y }), b2 = function() {
          };
          u2.push(d2 || b2);
        }
      });
    }
    function h2() {
      u2.forEach(function(p2) {
        return p2();
      }), u2 = [];
    }
    return v2;
  };
}
we();
var mn = [Re, He, Me, Ae];
we({ defaultModifiers: mn });
var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt], yn = we({ defaultModifiers: gn });
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ee,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const __default__$J = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  ...__default__$J,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef: triggerRef2, role } = inject(POPPER_INJECTION_KEY, void 0);
    const formItemContext = inject(formItemContextKey, void 0);
    const { nextZIndex } = useZIndex();
    const ns2 = useNamespace("popper");
    const popperContentRef = ref();
    const focusStartRef = ref("first");
    const arrowRef = ref();
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const contentZIndex = ref(props.zIndex || nextZIndex());
    const trapped = ref(false);
    let triggerTargetAriaStopWatch = void 0;
    const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef2));
    const contentStyle = computed(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed(() => [
      ns2.b(),
      ns2.is("pure", props.pure),
      ns2.is(props.effect),
      props.popperClass
    ]);
    const ariaModal = computed(() => {
      return role && role.value === "dialog" ? "false" : void 0;
    });
    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return yn(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a;
      (_a = unref(popperInstanceRef)) == null ? void 0 : _a.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a = unref(popperInstanceRef)) == null ? void 0 : _a.setOptions) == null ? void 0 : _b.call(_a, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    const onFocusAfterTrapped = () => {
      emit("focus");
    };
    const onFocusAfterReleased = (event) => {
      var _a;
      if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
        focusStartRef.value = "first";
        emit("blur");
      }
    };
    const onFocusInTrap = (event) => {
      if (props.visible && !trapped.value) {
        if (event.target) {
          focusStartRef.value = event.target;
        }
        trapped.value = true;
      }
    };
    const onFocusoutPrevented = (event) => {
      if (!props.trapping) {
        if (event.detail.focusReason === "pointer") {
          event.preventDefault();
        }
        trapped.value = false;
      }
    };
    const onReleaseRequested = () => {
      trapped.value = false;
      emit("close");
    };
    onMounted(() => {
      let updateHandle;
      watch(computedReference, (referenceEl) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = unref(popperInstanceRef);
        (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: unref(arrowRef)
          });
          updateHandle = watch(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = unref(triggerTargetEl || popperContentRef.value);
        const prevEl = unref(prevTriggerTargetEl || popperContentRef.value);
        if (isElement(el)) {
          triggerTargetAriaStopWatch = watch([role, () => props.ariaLabel, ariaModal, () => props.id], (watches) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (prevEl !== el && isElement(prevEl)) {
          ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
            prevEl.removeAttribute(key);
          });
        }
      }, { immediate: true });
      watch(() => props.visible, togglePopperAlive, { immediate: true });
      watch(() => buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset)
      }), (option2) => {
        var _a;
        return (_a = popperInstanceRef.value) == null ? void 0 : _a.setOptions(option2);
      });
    });
    onBeforeUnmount(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: normalizeStyle(unref(contentStyle)),
        class: normalizeClass(unref(contentClass)),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }, [
        createVNode(unref(ElFocusTrap), {
          trapped: trapped.value,
          "trap-on-focus-in": true,
          "focus-trap-el": popperContentRef.value,
          "focus-start-el": focusStartRef.value,
          onFocusAfterTrapped,
          onFocusAfterReleased,
          onFocusin: onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const ElPopper = withInstall(Popper);
const ns = useNamespace("tooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type) => {
  if (isArray$1(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};
const __default__$I = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  ...__default__$I,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef2 = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns2).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const __default__$H = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  ...__default__$H,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const contentRef = ref(null);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed(() => {
      return props.persistent;
    });
    onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = computed(() => !unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        disabled: !_ctx.teleported,
        to: _ctx.appendTo
      }, [
        createVNode(Transition, {
          name: _ctx.transition,
          onAfterLeave: onTransitionLeave,
          onBeforeEnter,
          onAfterEnter: onAfterShow,
          onBeforeLeave
        }, {
          default: withCtx(() => [
            unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
              key: 0,
              id: unref(id),
              ref_key: "contentRef",
              ref: contentRef
            }, _ctx.$attrs, {
              "aria-label": _ctx.ariaLabel,
              "aria-hidden": unref(ariaHidden),
              "boundaries-padding": _ctx.boundariesPadding,
              "fallback-placements": _ctx.fallbackPlacements,
              "gpu-acceleration": _ctx.gpuAcceleration,
              offset: _ctx.offset,
              placement: _ctx.placement,
              "popper-options": _ctx.popperOptions,
              strategy: _ctx.strategy,
              effect: _ctx.effect,
              enterable: _ctx.enterable,
              pure: _ctx.pure,
              "popper-class": _ctx.popperClass,
              "popper-style": [_ctx.popperStyle, unref(contentStyle)],
              "reference-el": _ctx.referenceEl,
              "trigger-target-el": _ctx.triggerTargetEl,
              visible: unref(shouldShow),
              "z-index": _ctx.zIndex,
              onMouseenter: unref(onContentEnter),
              onMouseleave: unref(onContentLeave),
              onBlur,
              onClose: unref(onClose)
            }), {
              default: withCtx(() => [
                createCommentVNode(" Workaround bug #6378 "),
                !destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [vShow, unref(shouldShow)]
            ]) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const _hoisted_1$u = ["innerHTML"];
const _hoisted_2$j = { key: 1 };
const __default__$G = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  ...__default__$G,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a, _b;
      const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    onDeactivated(() => open.value && hide());
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_1$u)) : (openBlock(), createElementBlock("span", _hoisted_2$j, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
                key: 0,
                "arrow-offset": _ctx.arrowOffset
              }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", f2 = "month", h2 = "quarter", c2 = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m2 = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v2 = { s: m2, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f2), s3 = n2 - i2 < 0, u3 = e2.clone().add(r2 + (s3 ? -1 : 1), f2);
      return +(-(r2 + (n2 - i2) / (s3 ? i2 - u3 : u3 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f2, y: c2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i, ms: r, Q: h2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D2 = {};
    D2[g] = M2;
    var p2 = function(t2) {
      return t2 instanceof _2;
    }, S2 = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s3 = e2.toLowerCase();
        D2[s3] && (i2 = s3), n2 && (D2[s3] = n2, i2 = s3);
        var u3 = e2.split("-");
        if (!i2 && u3.length > 1)
          return t2(u3[0]);
      } else {
        var a3 = e2.name;
        D2[a3] = e2, i2 = a3;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, w2 = function(t2, e2) {
      if (p2(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _2(n2);
    }, O2 = v2;
    O2.l = S2, O2.i = p2, O2.w = function(t2, e2) {
      return w2(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _2 = function() {
      function M3(t2) {
        this.$L = S2(t2.locale, null, true), this.parse(t2);
      }
      var m3 = M3.prototype;
      return m3.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return new Date(NaN);
          if (O2.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s3 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m3.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m3.$utils = function() {
        return O2;
      }, m3.isValid = function() {
        return !(this.$d.toString() === l2);
      }, m3.isSame = function(t2, e2) {
        var n2 = w2(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m3.isAfter = function(t2, e2) {
        return w2(t2) < this.startOf(e2);
      }, m3.isBefore = function(t2, e2) {
        return this.endOf(e2) < w2(t2);
      }, m3.$g = function(t2, e2, n2) {
        return O2.u(t2) ? this[e2] : this.set(n2, t2);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O2.u(e2) || e2, h3 = O2.p(t2), l3 = function(t3, e3) {
          var i2 = O2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a2);
        }, $2 = function(t3, e3) {
          return O2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
        switch (h3) {
          case c2:
            return r2 ? l3(1, 0) : l3(31, 11);
          case f2:
            return r2 ? l3(1, M4) : l3(0, M4 + 1);
          case o2:
            var g2 = this.$locale().weekStart || 0, D3 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l3(r2 ? m4 - D3 : m4 + (6 - D3), M4);
          case a2:
          case d2:
            return $2(v3 + "Hours", 0);
          case u2:
            return $2(v3 + "Minutes", 1);
          case s2:
            return $2(v3 + "Seconds", 2);
          case i:
            return $2(v3 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m3.$set = function(t2, e2) {
        var n2, o3 = O2.p(t2), h3 = "set" + (this.$u ? "UTC" : ""), l3 = (n2 = {}, n2[a2] = h3 + "Date", n2[d2] = h3 + "Date", n2[f2] = h3 + "Month", n2[c2] = h3 + "FullYear", n2[u2] = h3 + "Hours", n2[s2] = h3 + "Minutes", n2[i] = h3 + "Seconds", n2[r] = h3 + "Milliseconds", n2)[o3], $2 = o3 === a2 ? this.$D + (e2 - this.$W) : e2;
        if (o3 === f2 || o3 === c2) {
          var y2 = this.clone().set(d2, 1);
          y2.$d[l3]($2), y2.init(), this.$d = y2.set(d2, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l3 && this.$d[l3]($2);
        return this.init(), this;
      }, m3.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m3.get = function(t2) {
        return this[O2.p(t2)]();
      }, m3.add = function(r2, h3) {
        var d3, l3 = this;
        r2 = Number(r2);
        var $2 = O2.p(h3), y2 = function(t2) {
          var e2 = w2(l3);
          return O2.w(e2.date(e2.date() + Math.round(t2 * r2)), l3);
        };
        if ($2 === f2)
          return this.set(f2, this.$M + r2);
        if ($2 === c2)
          return this.set(c2, this.$y + r2);
        if ($2 === a2)
          return y2(1);
        if ($2 === o2)
          return y2(7);
        var M4 = (d3 = {}, d3[s2] = e, d3[u2] = n, d3[i] = t, d3)[$2] || 1, m4 = this.$d.getTime() + r2 * M4;
        return O2.w(m4, this);
      }, m3.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m3.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l2;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n2.weekdays, f3 = n2.months, h3 = function(t3, n3, i3, s4) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s4);
        }, c3 = function(t3) {
          return O2.s(s3 % 12 || 12, t3, "0");
        }, d3 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: O2.s(a3 + 1, 2, "0"), MMM: h3(n2.monthsShort, a3, f3, 3), MMMM: h3(f3, a3), D: this.$D, DD: O2.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n2.weekdaysMin, this.$W, o3, 2), ddd: h3(n2.weekdaysShort, this.$W, o3, 3), dddd: o3[this.$W], H: String(s3), HH: O2.s(s3, 2, "0"), h: c3(1), hh: c3(2), a: d3(s3, u3, true), A: d3(s3, u3, false), m: String(u3), mm: O2.s(u3, 2, "0"), s: String(this.$s), ss: O2.s(this.$s, 2, "0"), SSS: O2.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || $2[t3] || i2.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r2, d3, l3) {
        var $2, y2 = O2.p(d3), M4 = w2(r2), m4 = (M4.utcOffset() - this.utcOffset()) * e, v3 = this - M4, g2 = O2.m(this, M4);
        return g2 = ($2 = {}, $2[c2] = g2 / 12, $2[f2] = g2, $2[h2] = g2 / 3, $2[o2] = (v3 - m4) / 6048e5, $2[a2] = (v3 - m4) / 864e5, $2[u2] = v3 / n, $2[s2] = v3 / e, $2[i] = v3 / t, $2)[y2] || v3, l3 ? g2 : O2.a(g2);
      }, m3.daysInMonth = function() {
        return this.endOf(f2).$D;
      }, m3.$locale = function() {
        return D2[this.$L];
      }, m3.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S2(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m3.clone = function() {
        return O2.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M3;
    }(), T2 = _2.prototype;
    return w2.prototype = T2, [["$ms", r], ["$s", i], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", f2], ["$y", c2], ["$D", d2]].forEach(function(t2) {
      T2[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w2.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _2, w2), t2.$i = true), w2;
    }, w2.locale = S2, w2.isDayjs = p2, w2.unix = function(t2) {
      return w2(1e3 * t2);
    }, w2.en = D2[g], w2.Ls = D2, w2.p = {}, w2;
  });
})(dayjs_min);
const dayjs = dayjs_min.exports;
var customParseFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o2 = {}, s2 = function(e2) {
      return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
    };
    var a2 = function(e2) {
      return function(t2) {
        this[e2] = +t2;
      };
    }, f2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
      (this.zone || (this.zone = {})).offset = function(e3) {
        if (!e3)
          return 0;
        if ("Z" === e3)
          return 0;
        var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
        return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
      }(e2);
    }], h2 = function(e2) {
      var t2 = o2[e2];
      return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
    }, u2 = function(e2, t2) {
      var n2, r2 = o2.meridiem;
      if (r2) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
      } else
        n2 = e2 === (t2 ? "pm" : "PM");
      return n2;
    }, d2 = { A: [i, function(e2) {
      this.afternoon = u2(e2, false);
    }], a: [i, function(e2) {
      this.afternoon = u2(e2, true);
    }], S: [/\d/, function(e2) {
      this.milliseconds = 100 * +e2;
    }], SS: [n, function(e2) {
      this.milliseconds = 10 * +e2;
    }], SSS: [/\d{3}/, function(e2) {
      this.milliseconds = +e2;
    }], s: [r, a2("seconds")], ss: [r, a2("seconds")], m: [r, a2("minutes")], mm: [r, a2("minutes")], H: [r, a2("hours")], h: [r, a2("hours")], HH: [r, a2("hours")], hh: [r, a2("hours")], D: [r, a2("day")], DD: [n, a2("day")], Do: [i, function(e2) {
      var t2 = o2.ordinal, n2 = e2.match(/\d+/);
      if (this.day = n2[0], t2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
    }], M: [r, a2("month")], MM: [n, a2("month")], MMM: [i, function(e2) {
      var t2 = h2("months"), n2 = (h2("monthsShort") || t2.map(function(e3) {
        return e3.slice(0, 3);
      })).indexOf(e2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [i, function(e2) {
      var t2 = h2("months").indexOf(e2) + 1;
      if (t2 < 1)
        throw new Error();
      this.month = t2 % 12 || t2;
    }], Y: [/[+-]?\d+/, a2("year")], YY: [n, function(e2) {
      this.year = s2(e2);
    }], YYYY: [/\d{4}/, a2("year")], Z: f2, ZZ: f2 };
    function c2(n2) {
      var r2, i2;
      r2 = n2, i2 = o2 && o2.formats;
      for (var s3 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
        var o3 = r3 && r3.toUpperCase();
        return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
          return t3 || n4.slice(1);
        });
      })).match(t), a3 = s3.length, f3 = 0; f3 < a3; f3 += 1) {
        var h3 = s3[f3], u3 = d2[h3], c3 = u3 && u3[0], l2 = u3 && u3[1];
        s3[f3] = l2 ? { regex: c3, parser: l2 } : h3.replace(/^\[|\]$/g, "");
      }
      return function(e2) {
        for (var t2 = {}, n3 = 0, r3 = 0; n3 < a3; n3 += 1) {
          var i3 = s3[n3];
          if ("string" == typeof i3)
            r3 += i3.length;
          else {
            var o3 = i3.regex, f4 = i3.parser, h4 = e2.slice(r3), u4 = o3.exec(h4)[0];
            f4.call(t2, u4), e2 = e2.replace(u4, "");
          }
        }
        return function(e3) {
          var t3 = e3.afternoon;
          if (void 0 !== t3) {
            var n4 = e3.hours;
            t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
          }
        }(t2), t2;
      };
    }
    return function(e2, t2, n2) {
      n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (s2 = e2.parseTwoDigitYear);
      var r2 = t2.prototype, i2 = r2.parse;
      r2.parse = function(e3) {
        var t3 = e3.date, r3 = e3.utc, s3 = e3.args;
        this.$u = r3;
        var a3 = s3[1];
        if ("string" == typeof a3) {
          var f3 = true === s3[2], h3 = true === s3[3], u3 = f3 || h3, d3 = s3[2];
          h3 && (d3 = s3[2]), o2 = this.$locale(), !f3 && d3 && (o2 = n2.Ls[d3]), this.$d = function(e4, t4, n3) {
            try {
              if (["x", "X"].indexOf(t4) > -1)
                return new Date(("X" === t4 ? 1e3 : 1) * e4);
              var r4 = c2(t4)(e4), i3 = r4.year, o3 = r4.month, s4 = r4.day, a4 = r4.hours, f4 = r4.minutes, h4 = r4.seconds, u4 = r4.milliseconds, d4 = r4.zone, l3 = new Date(), m3 = s4 || (i3 || o3 ? 1 : l3.getDate()), M3 = i3 || l3.getFullYear(), Y2 = 0;
              i3 && !o3 || (Y2 = o3 > 0 ? o3 - 1 : l3.getMonth());
              var p2 = a4 || 0, v2 = f4 || 0, D2 = h4 || 0, g = u4 || 0;
              return d4 ? new Date(Date.UTC(M3, Y2, m3, p2, v2, D2, g + 60 * d4.offset * 1e3)) : n3 ? new Date(Date.UTC(M3, Y2, m3, p2, v2, D2, g)) : new Date(M3, Y2, m3, p2, v2, D2, g);
            } catch (e5) {
              return new Date("");
            }
          }(t3, a3, r3), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t3 != this.format(a3) && (this.$d = new Date("")), o2 = {};
        } else if (a3 instanceof Array)
          for (var l2 = a3.length, m2 = 1; m2 <= l2; m2 += 1) {
            s3[1] = a3[m2 - 1];
            var M2 = n2.apply(this, s3);
            if (M2.isValid()) {
              this.$d = M2.$d, this.$L = M2.$L, this.init();
              break;
            }
            m2 === l2 && (this.$d = new Date(""));
          }
        else
          i2.call(this, e3);
      };
    };
  });
})(customParseFormat$1);
const customParseFormat = customParseFormat$1.exports;
const timeUnits = ["hours", "minutes", "seconds"];
const DEFAULT_FORMATS_TIME = "HH:mm:ss";
const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: "YYYY-MM",
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
};
const buildTimeList = (value, bound) => {
  return [
    value > 0 ? value - 1 : void 0,
    value,
    value < bound ? value + 1 : void 0
  ];
};
const rangeArr = (n) => Array.from(Array.from({ length: n }).keys());
const extractDateFormat = (format2) => {
  return format2.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format2) => {
  return format2.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};
const dateEquals = function(a2, b2) {
  const aIsDate = isDate(a2);
  const bIsDate = isDate(b2);
  if (aIsDate && bIsDate) {
    return a2.getTime() === b2.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a2 === b2;
  }
  return false;
};
const valueEquals = function(a2, b2) {
  const aIsArray = isArray$1(a2);
  const bIsArray = isArray$1(b2);
  if (aIsArray && bIsArray) {
    if (a2.length !== b2.length) {
      return false;
    }
    return a2.every((item, index) => dateEquals(item, b2[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a2, b2);
  }
  return false;
};
const parseDate = function(date2, format2, lang) {
  const day = isEmpty(format2) || format2 === "x" ? dayjs(date2).locale(lang) : dayjs(date2, format2).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date2, format2, lang) {
  if (isEmpty(format2))
    return date2;
  if (format2 === "x")
    return +date2;
  return dayjs(date2).locale(lang).format(format2);
};
const makeList = (total, method) => {
  var _a;
  const arr = [];
  const disabledArr = method == null ? void 0 : method();
  for (let i = 0; i < total; i++) {
    arr.push((_a = disabledArr == null ? void 0 : disabledArr.includes(i)) != null ? _a : false);
  }
  return arr;
};
const disabledTimeListsProps = buildProps({
  disabledHours: {
    type: definePropType(Function)
  },
  disabledMinutes: {
    type: definePropType(Function)
  },
  disabledSeconds: {
    type: definePropType(Function)
  }
});
const timePanelSharedProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
});
const timePickerDefaultProps = buildProps({
  id: {
    type: definePropType([Array, String])
  },
  name: {
    type: definePropType([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: definePropType([String, Object]),
    default: circle_close_default
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  size: useSizeProp,
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  modelValue: {
    type: definePropType([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: definePropType([Date, Array])
  },
  defaultTime: {
    type: definePropType([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: false
  },
  ...disabledTimeListsProps,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: definePropType([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  unlinkPanels: Boolean
});
const _hoisted_1$t = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2$i = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const __default__$F = defineComponent({
  name: "Picker"
});
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  ...__default__$F,
  props: timePickerDefaultProps,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const { lang } = useLocale();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const { form, formItem } = useFormItem();
    const elPopperOptions = inject("ElPopperOptions", {});
    const refPopper = ref();
    const inputRef = ref();
    const pickerVisible = ref(false);
    const pickerActualVisible = ref(false);
    const valueOnOpen = ref(null);
    let hasJustTabExitedInput = false;
    let ignoreFocusEvent = false;
    watch(pickerVisible, (val) => {
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
      } else {
        nextTick(() => {
          if (val) {
            valueOnOpen.value = props.modelValue;
          }
        });
      }
    });
    const emitChange = (val, isClear) => {
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        emit("change", val);
        props.validateEvent && (formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn()));
      }
    };
    const emitInput = (input) => {
      if (!valueEquals(props.modelValue, input)) {
        let formatted;
        if (isArray$1(input)) {
          formatted = input.map((item) => formatter(item, props.valueFormat, lang.value));
        } else if (input) {
          formatted = formatter(input, props.valueFormat, lang.value);
        }
        emit("update:modelValue", input ? formatted : input, lang.value);
      }
    };
    const emitKeydown = (e) => {
      emit("keydown", e);
    };
    const refInput = computed(() => {
      if (inputRef.value) {
        const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
        return Array.from(_r.querySelectorAll("input"));
      }
      return [];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const focusOnInputBox = () => {
      focus(true, true);
      nextTick(() => {
        ignoreFocusEvent = false;
      });
    };
    const onPick = (date2 = "", visible = false) => {
      if (!visible) {
        ignoreFocusEvent = true;
      }
      pickerVisible.value = visible;
      let result;
      if (isArray$1(date2)) {
        result = date2.map((_2) => _2.toDate());
      } else {
        result = date2 ? date2.toDate() : date2;
      }
      userInput.value = null;
      emitInput(result);
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      emit("visible-change", true);
    };
    const onKeydownPopperContent = (event) => {
      if ((event == null ? void 0 : event.key) === EVENT_CODE.esc) {
        focus(true, true);
      }
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      pickerVisible.value = false;
      ignoreFocusEvent = false;
      emit("visible-change", false);
    };
    const handleOpen = () => {
      pickerVisible.value = true;
    };
    const handleClose = () => {
      pickerVisible.value = false;
    };
    const focus = (focusStartInput = true, isIgnoreFocusEvent = false) => {
      ignoreFocusEvent = isIgnoreFocusEvent;
      const [leftInput, rightInput] = unref(refInput);
      let input = leftInput;
      if (!focusStartInput && isRangeInput.value) {
        input = rightInput;
      }
      if (input) {
        input.focus();
      }
    };
    const handleFocusInput = (e) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value || ignoreFocusEvent) {
        return;
      }
      pickerVisible.value = true;
      emit("focus", e);
    };
    let currentHandleBlurDeferCallback = void 0;
    const handleBlurInput = (e) => {
      const handleBlurDefer = async () => {
        setTimeout(() => {
          var _a;
          if (currentHandleBlurDeferCallback === handleBlurDefer) {
            if (!(((_a = refPopper.value) == null ? void 0 : _a.isFocusInsideContent()) && !hasJustTabExitedInput) && refInput.value.filter((input) => {
              return input.contains(document.activeElement);
            }).length === 0) {
              handleChange();
              pickerVisible.value = false;
              emit("blur", e);
              props.validateEvent && (formItem == null ? void 0 : formItem.validate("blur").catch((err) => debugWarn()));
            }
            hasJustTabExitedInput = false;
          }
        }, 0);
      };
      currentHandleBlurDeferCallback = handleBlurDefer;
      handleBlurDefer();
    };
    const pickerDisabled = computed(() => {
      return props.disabled || (form == null ? void 0 : form.disabled);
    });
    const parsedValue2 = computed(() => {
      let dayOrDays;
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          dayOrDays = pickerOptions.value.getDefaultValue();
        }
      } else {
        if (isArray$1(props.modelValue)) {
          dayOrDays = props.modelValue.map((d2) => parseDate(d2, props.valueFormat, lang.value));
        } else {
          dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value);
        }
      }
      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult = pickerOptions.value.getRangeAvailableTime(dayOrDays);
        if (!isEqual(availableResult, dayOrDays)) {
          dayOrDays = availableResult;
          emitInput(isArray$1(dayOrDays) ? dayOrDays.map((_2) => _2.toDate()) : dayOrDays.toDate());
        }
      }
      if (isArray$1(dayOrDays) && dayOrDays.some((day) => !day)) {
        dayOrDays = [];
      }
      return dayOrDays;
    });
    const displayValue = computed(() => {
      if (!pickerOptions.value.panelReady)
        return "";
      const formattedValue = formatDayjsToString(parsedValue2.value);
      if (isArray$1(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return "";
      if (!pickerVisible.value && valueIsEmpty.value)
        return "";
      if (formattedValue) {
        return isDatesPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = computed(() => props.type.includes("time"));
    const isTimePicker = computed(() => props.type.startsWith("time"));
    const isDatesPicker = computed(() => props.type === "dates");
    const triggerIcon = computed(() => props.prefixIcon || (isTimeLikePicker.value ? clock_default : calendar_default));
    const showClose = ref(false);
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClose.value) {
        event.stopPropagation();
        focusOnInputBox();
        emitInput(null);
        emitChange(null, true);
        showClose.value = false;
        pickerVisible.value = false;
        pickerOptions.value.handleClear && pickerOptions.value.handleClear();
      }
    };
    const valueIsEmpty = computed(() => {
      const { modelValue } = props;
      return !modelValue || isArray$1(modelValue) && !modelValue.filter(Boolean).length;
    });
    const onMouseDownInput = async (event) => {
      var _a;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a = event.target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true;
      }
    };
    const onMouseLeave = () => {
      showClose.value = false;
    };
    const onTouchStartInput = (event) => {
      var _a;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a = event.touches[0].target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const isRangeInput = computed(() => {
      return props.type.includes("range");
    });
    const pickerSize = useSize();
    const popperEl = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(refPopper)) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const actualInputRef = computed(() => {
      var _a;
      if (unref(isRangeInput)) {
        return unref(inputRef);
      }
      return (_a = unref(inputRef)) == null ? void 0 : _a.$el;
    });
    onClickOutside(actualInputRef, (e) => {
      const unrefedPopperEl = unref(popperEl);
      const inputEl = unref(actualInputRef);
      if (unrefedPopperEl && (e.target === unrefedPopperEl || e.composedPath().includes(unrefedPopperEl)) || e.target === inputEl || e.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    const userInput = ref(null);
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue2(value)) {
            emitInput(isArray$1(value) ? value.map((_2) => _2.toDate()) : value.toDate());
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(null);
        emitChange(null);
        userInput.value = null;
      }
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatDayjsToString = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.formatToString(value);
    };
    const isValidValue2 = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydownInput = async (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      const { code } = event;
      emitKeydown(event);
      if (code === EVENT_CODE.esc) {
        if (pickerVisible.value === true) {
          pickerVisible.value = false;
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (code === EVENT_CODE.down) {
        if (pickerOptions.value.handleFocusPicker) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (pickerVisible.value === false) {
          pickerVisible.value = true;
          await nextTick();
        }
        if (pickerOptions.value.handleFocusPicker) {
          pickerOptions.value.handleFocusPicker();
          return;
        }
      }
      if (code === EVENT_CODE.tab) {
        hasJustTabExitedInput = true;
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (userInput.value === null || userInput.value === "" || isValidValue2(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydownInput) {
        pickerOptions.value.handleKeydownInput(event);
      }
    };
    const onUserInput = (e) => {
      userInput.value = e;
      if (!pickerVisible.value) {
        pickerVisible.value = true;
      }
    };
    const handleStartInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [target.value, userInput.value[1]];
      } else {
        userInput.value = [target.value, null];
      }
    };
    const handleEndInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [userInput.value[0], target.value];
      } else {
        userInput.value = [null, target.value];
      }
    };
    const handleStartChange = () => {
      var _a;
      const values = userInput.value;
      const value = parseUserInputToDayjs(values && values[0]);
      const parsedVal = unref(parsedValue2);
      if (value && value.isValid()) {
        userInput.value = [
          formatDayjsToString(value),
          ((_a = displayValue.value) == null ? void 0 : _a[1]) || null
        ];
        const newValue = [value, parsedVal && (parsedVal[1] || null)];
        if (isValidValue2(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      var _a;
      const values = unref(userInput);
      const value = parseUserInputToDayjs(values && values[1]);
      const parsedVal = unref(parsedValue2);
      if (value && value.isValid()) {
        userInput.value = [
          ((_a = unref(displayValue)) == null ? void 0 : _a[0]) || null,
          formatDayjsToString(value)
        ];
        const newValue = [parsedVal && parsedVal[0], value];
        if (isValidValue2(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const pickerOptions = ref({});
    const onSetPickerOption = (e) => {
      pickerOptions.value[e[0]] = e[1];
      pickerOptions.value.panelReady = true;
    };
    const onCalendarChange = (e) => {
      emit("calendar-change", e);
    };
    const onPanelChange = (value, mode, view) => {
      emit("panel-change", value, mode, view);
    };
    provide("EP_PICKER_BASE", {
      props
    });
    expose({
      focus,
      handleFocusInput,
      handleBlurInput,
      handleOpen,
      handleClose,
      onPick
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "refPopper",
        ref: refPopper,
        visible: pickerVisible.value,
        effect: "light",
        pure: "",
        trigger: "click"
      }, _ctx.$attrs, {
        role: "dialog",
        teleported: "",
        transition: `${unref(nsDate).namespace.value}-zoom-in-top`,
        "popper-class": [`${unref(nsDate).namespace.value}-picker__popper`, _ctx.popperClass],
        "popper-options": unref(elPopperOptions),
        "fallback-placements": ["bottom", "top", "right", "left"],
        "gpu-acceleration": false,
        "stop-popper-mouse-event": false,
        "hide-after": 0,
        persistent: "",
        onBeforeShow,
        onShow,
        onHide
      }), {
        default: withCtx(() => [
          !unref(isRangeInput) ? (openBlock(), createBlock(unref(ElInput), {
            key: 0,
            id: _ctx.id,
            ref_key: "inputRef",
            ref: inputRef,
            "container-role": "combobox",
            "model-value": unref(displayValue),
            name: _ctx.name,
            size: unref(pickerSize),
            disabled: unref(pickerDisabled),
            placeholder: _ctx.placeholder,
            class: normalizeClass([unref(nsDate).b("editor"), unref(nsDate).bm("editor", _ctx.type), _ctx.$attrs.class]),
            style: normalizeStyle(_ctx.$attrs.style),
            readonly: !_ctx.editable || _ctx.readonly || unref(isDatesPicker) || _ctx.type === "week",
            label: _ctx.label,
            tabindex: _ctx.tabindex,
            "validate-event": false,
            onInput: onUserInput,
            onFocus: handleFocusInput,
            onBlur: handleBlurInput,
            onKeydown: handleKeydownInput,
            onChange: handleChange,
            onMousedown: onMouseDownInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstart: onTouchStartInput,
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, {
            prefix: withCtx(() => [
              unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(nsInput).e("icon")),
                onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
                onTouchstart: onTouchStartInput
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
            ]),
            suffix: withCtx(() => [
              showClose.value && _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(`${unref(nsInput).e("icon")} clear-icon`),
                onClick: withModifiers(onClearIconClick, ["stop"])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"])) : (openBlock(), createElementBlock("div", {
            key: 1,
            ref_key: "inputRef",
            ref: inputRef,
            class: normalizeClass([
              unref(nsDate).b("editor"),
              unref(nsDate).bm("editor", _ctx.type),
              unref(nsInput).e("wrapper"),
              unref(nsDate).is("disabled", unref(pickerDisabled)),
              unref(nsDate).is("active", pickerVisible.value),
              unref(nsRange).b("editor"),
              unref(pickerSize) ? unref(nsRange).bm("editor", unref(pickerSize)) : "",
              _ctx.$attrs.class
            ]),
            style: normalizeStyle(_ctx.$attrs.style),
            onClick: handleFocusInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstart: onTouchStartInput,
            onKeydown: handleKeydownInput
          }, [
            unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(nsInput).e("icon"), unref(nsRange).e("icon")]),
              onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
              onTouchstart: onTouchStartInput
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
            createBaseVNode("input", {
              id: _ctx.id && _ctx.id[0],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[0],
              placeholder: _ctx.startPlaceholder,
              value: unref(displayValue) && unref(displayValue)[0],
              disabled: unref(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: normalizeClass(unref(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onInput: handleStartInput,
              onChange: handleStartChange,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput
            }, null, 42, _hoisted_1$t),
            renderSlot(_ctx.$slots, "range-separator", {}, () => [
              createBaseVNode("span", {
                class: normalizeClass(unref(nsRange).b("separator"))
              }, toDisplayString(_ctx.rangeSeparator), 3)
            ]),
            createBaseVNode("input", {
              id: _ctx.id && _ctx.id[1],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[1],
              placeholder: _ctx.endPlaceholder,
              value: unref(displayValue) && unref(displayValue)[1],
              disabled: unref(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: normalizeClass(unref(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput,
              onInput: handleEndInput,
              onChange: handleEndChange
            }, null, 42, _hoisted_2$i),
            _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([
                unref(nsInput).e("icon"),
                unref(nsRange).e("close-icon"),
                {
                  [unref(nsRange).e("close-icon--hidden")]: !showClose.value
                }
              ]),
              onClick: onClearIconClick
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 38))
        ]),
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            visible: pickerVisible.value,
            actualVisible: pickerActualVisible.value,
            parsedValue: unref(parsedValue2),
            format: _ctx.format,
            unlinkPanels: _ctx.unlinkPanels,
            type: _ctx.type,
            defaultValue: _ctx.defaultValue,
            onPick,
            onSelectRange: setSelectionRange,
            onSetPickerOption,
            onCalendarChange,
            onPanelChange,
            onKeydown: onKeydownPopperContent,
            onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["stop"]))
          })
        ]),
        _: 3
      }, 16, ["visible", "transition", "popper-class", "popper-options"]);
    };
  }
});
var CommonPicker = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType(Object)
  }
});
const useTimePanel = ({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds
}) => {
  const getAvailableTime = (date2, role, first, compareDate) => {
    const availableTimeGetters = {
      hour: getAvailableHours,
      minute: getAvailableMinutes,
      second: getAvailableSeconds
    };
    let result = date2;
    ["hour", "minute", "second"].forEach((type) => {
      if (availableTimeGetters[type]) {
        let availableTimeSlots;
        const method = availableTimeGetters[type];
        switch (type) {
          case "minute": {
            availableTimeSlots = method(result.hour(), role, compareDate);
            break;
          }
          case "second": {
            availableTimeSlots = method(result.hour(), result.minute(), role, compareDate);
            break;
          }
          default: {
            availableTimeSlots = method(role, compareDate);
            break;
          }
        }
        if ((availableTimeSlots == null ? void 0 : availableTimeSlots.length) && !availableTimeSlots.includes(result[type]())) {
          const pos = first ? 0 : availableTimeSlots.length - 1;
          result = result[type](availableTimeSlots[pos]);
        }
      }
    });
    return result;
  };
  const timePickerOptions = {};
  const onSetOption = ([key, val]) => {
    timePickerOptions[key] = val;
  };
  return {
    timePickerOptions,
    getAvailableTime,
    onSetOption
  };
};
const makeAvailableArr = (disabledList) => {
  const trueOrNumber = (isDisabled, index) => isDisabled || index;
  const getNumber = (predicate) => predicate !== true;
  return disabledList.map(trueOrNumber).filter(getNumber);
};
const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare) => {
    return makeList(24, disabledHours && (() => disabledHours == null ? void 0 : disabledHours(role, compare)));
  };
  const getMinutesList = (hour, role, compare) => {
    return makeList(60, disabledMinutes && (() => disabledMinutes == null ? void 0 : disabledMinutes(hour, role, compare)));
  };
  const getSecondsList = (hour, minute, role, compare) => {
    return makeList(60, disabledSeconds && (() => disabledSeconds == null ? void 0 : disabledSeconds(hour, minute, role, compare)));
  };
  return {
    getHoursList,
    getMinutesList,
    getSecondsList
  };
};
const buildAvailableTimeSlotGetter = (disabledHours, disabledMinutes, disabledSeconds) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
  const getAvailableHours = (role, compare) => {
    return makeAvailableArr(getHoursList(role, compare));
  };
  const getAvailableMinutes = (hour, role, compare) => {
    return makeAvailableArr(getMinutesList(hour, role, compare));
  };
  const getAvailableSeconds = (hour, minute, role, compare) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare));
  };
  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds
  };
};
const useOldValue = (props) => {
  const oldValue = ref(props.parsedValue);
  watch(() => props.visible, (val) => {
    if (!val) {
      oldValue.value = props.parsedValue;
    }
  });
  return oldValue;
};
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const REPEAT_INTERVAL = 100;
const REPEAT_DELAY = 600;
const vRepeatClick = {
  beforeMount(el, binding) {
    const value = binding.value;
    const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = isFunction(value) ? {} : value;
    let intervalId;
    let delayId;
    const handler = () => isFunction(value) ? value() : value.handler();
    const clear = () => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = void 0;
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = void 0;
      }
    };
    el.addEventListener("mousedown", (evt) => {
      if (evt.button !== 0)
        return;
      clear();
      handler();
      document.addEventListener("mouseup", () => clear(), {
        once: true
      });
      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler();
        }, interval);
      }, delay);
    });
  }
};
const FOCUSABLE_CHILDREN = "_trap-focus-children";
const FOCUS_STACK = [];
const FOCUS_HANDLER = (e) => {
  if (FOCUS_STACK.length === 0)
    return;
  const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN];
  if (focusableElement.length > 0 && e.code === EVENT_CODE.tab) {
    if (focusableElement.length === 1) {
      e.preventDefault();
      if (document.activeElement !== focusableElement[0]) {
        focusableElement[0].focus();
      }
      return;
    }
    const goingBackward = e.shiftKey;
    const isFirst = e.target === focusableElement[0];
    const isLast = e.target === focusableElement[focusableElement.length - 1];
    if (isFirst && goingBackward) {
      e.preventDefault();
      focusableElement[focusableElement.length - 1].focus();
    }
    if (isLast && !goingBackward) {
      e.preventDefault();
      focusableElement[0].focus();
    }
  }
};
const TrapFocus = {
  beforeMount(el) {
    el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    FOCUS_STACK.push(el);
    if (FOCUS_STACK.length <= 1) {
      document.addEventListener("keydown", FOCUS_HANDLER);
    }
  },
  updated(el) {
    nextTick(() => {
      el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    });
  },
  unmounted() {
    FOCUS_STACK.shift();
    if (FOCUS_STACK.length === 0) {
      document.removeEventListener("keydown", FOCUS_HANDLER);
    }
  }
};
var v = false, o, f, s, u, d, N, l, p, m, w, D, x, E, M, F;
function a() {
  if (!v) {
    v = true;
    var e = navigator.userAgent, n = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), i = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (x = /\b(iPhone|iP[ao]d)/.exec(e), E = /\b(iP[ao]d)/.exec(e), w = /Android/i.exec(e), M = /FBAN\/\w+;/i.exec(e), F = /Mobile/i.exec(e), D = !!/Win64/.exec(e), n) {
      o = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN, o && document && document.documentMode && (o = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      N = r ? parseFloat(r[1]) + 4 : o, f = n[2] ? parseFloat(n[2]) : NaN, s = n[3] ? parseFloat(n[3]) : NaN, u = n[4] ? parseFloat(n[4]) : NaN, u ? (n = /(?:Chrome\/(\d+\.\d+))/.exec(e), d = n && n[1] ? parseFloat(n[1]) : NaN) : d = NaN;
    } else
      o = f = s = d = u = NaN;
    if (i) {
      if (i[1]) {
        var t = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        l = t ? parseFloat(t[1].replace("_", ".")) : true;
      } else
        l = false;
      p = !!i[2], m = !!i[3];
    } else
      l = p = m = false;
  }
}
var _ = { ie: function() {
  return a() || o;
}, ieCompatibilityMode: function() {
  return a() || N > o;
}, ie64: function() {
  return _.ie() && D;
}, firefox: function() {
  return a() || f;
}, opera: function() {
  return a() || s;
}, webkit: function() {
  return a() || u;
}, safari: function() {
  return _.webkit();
}, chrome: function() {
  return a() || d;
}, windows: function() {
  return a() || p;
}, osx: function() {
  return a() || l;
}, linux: function() {
  return a() || m;
}, iphone: function() {
  return a() || x;
}, mobile: function() {
  return a() || x || E || w || F;
}, nativeApp: function() {
  return a() || M;
}, android: function() {
  return a() || w;
}, ipad: function() {
  return a() || E;
} }, A = _;
var c = !!(typeof window < "u" && window.document && window.document.createElement), U = { canUseDOM: c, canUseWorkers: typeof Worker < "u", canUseEventListeners: c && !!(window.addEventListener || window.attachEvent), canUseViewport: c && !!window.screen, isInWorker: !c }, h = U;
var X;
h.canUseDOM && (X = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function S(e, n) {
  if (!h.canUseDOM || n && !("addEventListener" in document))
    return false;
  var i = "on" + e, r = i in document;
  if (!r) {
    var t = document.createElement("div");
    t.setAttribute(i, "return;"), r = typeof t[i] == "function";
  }
  return !r && X && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var b = S;
var O = 10, I = 40, P = 800;
function T(e) {
  var n = 0, i = 0, r = 0, t = 0;
  return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = i, i = 0), r = n * O, t = i * O, "deltaY" in e && (t = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || t) && e.deltaMode && (e.deltaMode == 1 ? (r *= I, t *= I) : (r *= P, t *= P)), r && !n && (n = r < 1 ? -1 : 1), t && !i && (i = t < 1 ? -1 : 1), { spinX: n, spinY: i, pixelX: r, pixelY: t };
}
T.getEventType = function() {
  return A.firefox() ? "DOMMouseScroll" : b("wheel") ? "wheel" : "mousewheel";
};
var Y = T;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    const fn2 = function(event) {
      const normalized = Y(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    element.addEventListener("wheel", fn2, { passive: true });
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};
const basicTimeSpinnerProps = buildProps({
  role: {
    type: String,
    required: true
  },
  spinnerDate: {
    type: definePropType(Object),
    required: true
  },
  showSeconds: {
    type: Boolean,
    default: true
  },
  arrowControl: Boolean,
  amPmMode: {
    type: definePropType(String),
    default: ""
  },
  ...disabledTimeListsProps
});
const _hoisted_1$s = ["onClick"];
const _hoisted_2$h = ["onMouseenter"];
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "basic-time-spinner",
  props: basicTimeSpinnerProps,
  emits: ["change", "select-range", "set-option"],
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("time");
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    let isScrolling = false;
    const currentScrollbar = ref();
    const listHoursRef = ref();
    const listMinutesRef = ref();
    const listSecondsRef = ref();
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = computed(() => {
      return props.showSeconds ? timeUnits : timeUnits.slice(0, 2);
    });
    const timePartials = computed(() => {
      const { spinnerDate } = props;
      const hours = spinnerDate.hour();
      const minutes = spinnerDate.minute();
      const seconds = spinnerDate.second();
      return { hours, minutes, seconds };
    });
    const timeList = computed(() => {
      const { hours, minutes } = unref(timePartials);
      return {
        hours: getHoursList(props.role),
        minutes: getMinutesList(hours, props.role),
        seconds: getSecondsList(hours, minutes, props.role)
      };
    });
    const arrowControlTimeList = computed(() => {
      const { hours, minutes, seconds } = unref(timePartials);
      return {
        hours: buildTimeList(hours, 23),
        minutes: buildTimeList(minutes, 59),
        seconds: buildTimeList(seconds, 59)
      };
    });
    const debouncedResetScroll = debounce((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      let range;
      switch (type) {
        case "hours":
          range = [0, 2];
          break;
        case "minutes":
          range = [3, 5];
          break;
        case "seconds":
          range = [6, 8];
          break;
      }
      const [left, right] = range;
      emit("select-range", left, right);
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, unref(timePartials)[type]);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns2.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const scrollbar2 = unref(listRefsMap[type]);
      if (scrollbar2 && scrollbar2.$el) {
        getScrollbarElement(scrollbar2.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const scrollbar2 = unref(listRefsMap[type]);
      return (scrollbar2 == null ? void 0 : scrollbar2.$el.querySelector("li").offsetHeight) || 0;
    };
    const onIncrement = () => {
      scrollDown(1);
    };
    const onDecrement = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      const now2 = unref(timePartials)[label];
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      const next = findNextUnDisabled(label, now2, step, total);
      modifyDateField(label, next);
      adjustSpinner(label, next);
      nextTick(() => emitSelectRange(label));
    };
    const findNextUnDisabled = (type, now2, step, total) => {
      let next = (now2 + step + total) % total;
      const list = unref(timeList)[type];
      while (list[next] && next !== now2) {
        next = (next + step + total) % total;
      }
      return next;
    };
    const modifyDateField = (type, value) => {
      const list = unref(timeList)[type];
      const isDisabled = list[value];
      if (isDisabled)
        return;
      const { hours, minutes, seconds } = unref(timePartials);
      let changeTo;
      switch (type) {
        case "hours":
          changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds);
          break;
        case "minutes":
          changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds);
          break;
        case "seconds":
          changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value);
          break;
      }
      emit("change", changeTo);
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((getScrollbarElement(unref(listRefsMap[type]).$el).scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return unref(listRefsMap[type]).$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        const scrollbar2 = unref(listRefsMap[type]);
        if (scrollbar2 && scrollbar2.$el) {
          getScrollbarElement(scrollbar2.$el).onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar2, type) => {
      listRefsMap[type].value = scrollbar2;
    };
    emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns2).b("spinner"), { "has-seconds": _ctx.showSeconds }])
      }, [
        !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createBlock(unref(ElScrollbar), {
            key: item,
            ref_for: true,
            ref: (scrollbar2) => setRef(scrollbar2, item),
            class: normalizeClass(unref(ns2).be("spinner", "wrapper")),
            "wrap-style": "max-height: inherit;",
            "view-class": unref(ns2).be("spinner", "list"),
            noresize: "",
            tag: "ul",
            onMouseenter: ($event) => emitSelectRange(item),
            onMousemove: ($event) => adjustCurrentSpinner(item)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(timeList)[item], (disabled, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([
                    unref(ns2).be("spinner", "item"),
                    unref(ns2).is("active", key === unref(timePartials)[item]),
                    unref(ns2).is("disabled", disabled)
                  ]),
                  onClick: ($event) => handleClick(item, { value: key, disabled })
                }, [
                  item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(getAmPmFlag(key)), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)
                  ], 64))
                ], 10, _hoisted_1$s);
              }), 128))
            ]),
            _: 2
          }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
        }), 128)) : createCommentVNode("v-if", true),
        _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item,
            class: normalizeClass([unref(ns2).be("spinner", "wrapper"), unref(ns2).is("arrow")]),
            onMouseenter: ($event) => emitSelectRange(item)
          }, [
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-up", unref(ns2).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_up_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(vRepeatClick), onDecrement]
            ]),
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-down", unref(ns2).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(vRepeatClick), onIncrement]
            ]),
            createBaseVNode("ul", {
              class: normalizeClass(unref(ns2).be("spinner", "list"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(arrowControlTimeList)[item], (time, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([
                    unref(ns2).be("spinner", "item"),
                    unref(ns2).is("active", time === unref(timePartials)[item]),
                    unref(ns2).is("disabled", unref(timeList)[item][time])
                  ])
                }, [
                  typeof time === "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(getAmPmFlag(time)), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)
                    ], 64))
                  ], 64)) : createCommentVNode("v-if", true)
                ], 2);
              }), 128))
            ], 2)
          ], 42, _hoisted_2$h);
        }), 128)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var TimeSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "panel-time-pick",
  props: panelTimePickerProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds);
    const ns2 = useNamespace("time");
    const { t, lang } = useLocale();
    const selectionRange = ref([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = computed(() => {
      return isUndefined(props.actualVisible) ? `${ns2.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue2 = (_date) => {
      const parsedDate = dayjs(_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      emit("pick", oldValue.value, false);
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step = code === left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step = code === up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step);
        event.preventDefault();
        return;
      }
    };
    const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const getRangeAvailableTime = (date2) => {
      return getAvailableTime(date2, props.datetimeRole || "", true);
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs(value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      return value.format(props.format);
    };
    const getDefaultValue2 = () => {
      return dayjs(defaultValue).locale(lang.value);
    };
    emit("set-picker-option", ["isValidValue", isValidValue2]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue2]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: unref(transitionName) }, {
        default: withCtx(() => [
          _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns2).b("panel"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass([unref(ns2).be("panel", "content"), { "has-seconds": unref(showSeconds) }])
            }, [
              createVNode(TimeSpinner, {
                ref: "spinner",
                role: _ctx.datetimeRole || "start",
                "arrow-control": unref(arrowControl),
                "show-seconds": unref(showSeconds),
                "am-pm-mode": unref(amPmMode),
                "spinner-date": _ctx.parsedValue,
                "disabled-hours": unref(disabledHours),
                "disabled-minutes": unref(disabledMinutes),
                "disabled-seconds": unref(disabledSeconds),
                onChange: handleChange,
                onSetOption: unref(onSetOption),
                onSelectRange: setSelectionRange
              }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(unref(ns2).be("panel", "footer"))
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns2).be("panel", "btn"), "cancel"]),
                onClick: handleCancel
              }, toDisplayString(unref(t)("el.datepicker.cancel")), 3),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns2).be("panel", "btn"), "confirm"]),
                onClick: _cache[0] || (_cache[0] = ($event) => handleConfirm())
              }, toDisplayString(unref(t)("el.datepicker.confirm")), 3)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var TimePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);
var localeData$1 = { exports: {} };
(function(module, exports) {
  !function(n, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o2 = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u2 = function(n2, e2, t2, r2, u3) {
        var i2 = n2.name ? n2 : n2.$locale(), a3 = o2(i2[e2]), s3 = o2(i2[t2]), f2 = a3 || s3.map(function(n3) {
          return n3.slice(0, r2);
        });
        if (!u3)
          return f2;
        var d2 = i2.weekStart;
        return f2.map(function(n3, e3) {
          return f2[(e3 + (d2 || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a2 = function(n2, e2) {
        return n2.formats[e2] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
            return e3 || t2.slice(1);
          });
        }(n2.formats[e2.toUpperCase()]);
      }, s2 = function() {
        var n2 = this;
        return { months: function(e2) {
          return e2 ? e2.format("MMMM") : u2(n2, "months");
        }, monthsShort: function(e2) {
          return e2 ? e2.format("MMM") : u2(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e2) {
          return e2 ? e2.format("dddd") : u2(n2, "weekdays");
        }, weekdaysMin: function(e2) {
          return e2 ? e2.format("dd") : u2(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e2) {
          return e2 ? e2.format("ddd") : u2(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e2) {
          return a2(n2.$locale(), e2);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s2.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e2) {
          return a2(n2, e2);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u2(i(), "months");
      }, t.monthsShort = function() {
        return u2(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u2(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u2(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u2(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
})(localeData$1);
const localeData = localeData$1.exports;
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup2 = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup2 == null ? void 0 : checkboxGroup2.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup2 == null ? void 0 : checkboxGroup2.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useDisabled(computed(() => (checkboxGroup2 == null ? void 0 : checkboxGroup2.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup2 = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b;
    return value === props.trueLabel || value === true ? (_a = props.trueLabel) != null ? _a : true : (_b = props.falseLabel) != null ? _b : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup2 == null ? void 0 : checkboxGroup2.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup2 = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup2) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup2 == null ? void 0 : checkboxGroup2.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray$1(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup2 == null ? void 0 : checkboxGroup2.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup2 == null ? void 0 : checkboxGroup2.max.value);
        isLimitExceeded.value === false && ((_b = checkboxGroup2 == null ? void 0 : checkboxGroup2.changeEvent) == null ? void 0 : _b.call(checkboxGroup2, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup2 = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray$1(value)) {
      if (isObject$3(props.label)) {
        return value.map(toRaw).some((o2) => isEqual(o2, props.label));
      } else {
        return value.map(toRaw).includes(props.label);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useSize(computed(() => {
    var _a;
    return (_a = checkboxGroup2 == null ? void 0 : checkboxGroup2.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useSize(computed(() => {
    var _a;
    return (_a = checkboxGroup2 == null ? void 0 : checkboxGroup2.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!(slots.default || props.label);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (isArray$1(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  setStoreValue(props, { model });
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$r = ["tabindex", "role", "aria-checked"];
const _hoisted_2$g = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_3$9 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
const __default__$E = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  ...__default__$E,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns2 = useNamespace("checkbox");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).m(unref(checkboxSize)),
          unref(ns2).is("disabled", unref(isDisabled)),
          unref(ns2).is("bordered", _ctx.border),
          unref(ns2).is("checked", unref(isChecked))
        ]),
        "aria-controls": _ctx.indeterminate ? _ctx.controls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: normalizeClass([
              unref(ns2).e("input"),
              unref(ns2).is("disabled", unref(isDisabled)),
              unref(ns2).is("checked", unref(isChecked)),
              unref(ns2).is("indeterminate", _ctx.indeterminate),
              unref(ns2).is("focus", unref(isFocused))
            ]),
            tabindex: _ctx.indeterminate ? 0 : void 0,
            role: _ctx.indeterminate ? "checkbox" : void 0,
            "aria-checked": _ctx.indeterminate ? "mixed" : void 0
          }, [
            _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns2).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              disabled: unref(isDisabled),
              "true-value": _ctx.trueLabel,
              "false-value": _ctx.falseLabel,
              onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
              onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
            }, null, 42, _hoisted_2$g)), [
              [vModelCheckbox, unref(model)]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns2).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              disabled: unref(isDisabled),
              value: _ctx.label,
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[6] || (_cache[6] = ($event) => isFocused.value = true),
              onBlur: _cache[7] || (_cache[7] = ($event) => isFocused.value = false)
            }, null, 42, _hoisted_3$9)), [
              [vModelCheckbox, unref(model)]
            ]),
            createBaseVNode("span", {
              class: normalizeClass(unref(ns2).e("inner"))
            }, null, 2)
          ], 10, _hoisted_1$r),
          unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(ns2).e("label"))
          }, [
            renderSlot(_ctx.$slots, "default"),
            !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], 64)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const _hoisted_1$q = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$f = ["name", "tabindex", "disabled", "value"];
const __default__$D = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  ...__default__$D,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup2 = inject(checkboxGroupContextKey, void 0);
    const ns2 = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup2 == null ? void 0 : checkboxGroup2.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup2 == null ? void 0 : checkboxGroup2.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b("button"),
          unref(ns2).bm("button", unref(checkboxButtonSize)),
          unref(ns2).is("disabled", unref(isDisabled)),
          unref(ns2).is("checked", unref(isChecked)),
          unref(ns2).is("focus", unref(isFocused))
        ])
      }, [
        _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": _ctx.trueLabel,
          "false-value": _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
        }, null, 42, _hoisted_1$q)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: _ctx.label,
          onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[6] || (_cache[6] = ($event) => isFocused.value = true),
          onBlur: _cache[7] || (_cache[7] = ($event) => isFocused.value = false)
        }, null, 42, _hoisted_2$f)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns2).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray$1(val),
  change: (val) => isArray$1(val)
};
const __default__$C = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  ...__default__$C,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick$1(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns2).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
const ElCheckboxGroup$1 = withNoopInstall(CheckboxGroup);
const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup2 = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup2);
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup2.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup2.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = useSize(computed(() => radioGroup2 == null ? void 0 : radioGroup2.size));
  const disabled = useDisabled(computed(() => radioGroup2 == null ? void 0 : radioGroup2.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup: radioGroup2,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};
const _hoisted_1$p = ["value", "name", "disabled"];
const __default__$B = defineComponent({
  name: "ElRadio"
});
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  ...__default__$B,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const { radioRef, radioGroup: radioGroup2, focus, size, disabled, modelValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).is("disabled", unref(disabled)),
          unref(ns2).is("focus", unref(focus)),
          unref(ns2).is("bordered", _ctx.border),
          unref(ns2).is("checked", unref(modelValue) === _ctx.label),
          unref(ns2).m(unref(size))
        ])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([
            unref(ns2).e("input"),
            unref(ns2).is("disabled", unref(disabled)),
            unref(ns2).is("checked", unref(modelValue) === _ctx.label)
          ])
        }, [
          withDirectives(createBaseVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
            class: normalizeClass(unref(ns2).e("original")),
            value: _ctx.label,
            name: _ctx.name || ((_a = unref(radioGroup2)) == null ? void 0 : _a.name),
            disabled: unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, _hoisted_1$p), [
            [vModelRadio, unref(modelValue)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(ns2).e("inner"))
          }, null, 2)
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(unref(ns2).e("label")),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});
const _hoisted_1$o = ["value", "name", "disabled"];
const __default__$A = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  ...__default__$A,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup: radioGroup2 } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup2 == null ? void 0 : radioGroup2.fill) || "",
        borderColor: (radioGroup2 == null ? void 0 : radioGroup2.fill) || "",
        boxShadow: (radioGroup2 == null ? void 0 : radioGroup2.fill) ? `-1px 0 0 0 ${radioGroup2.fill}` : "",
        color: (radioGroup2 == null ? void 0 : radioGroup2.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b("button"),
          unref(ns2).is("active", unref(modelValue) === _ctx.label),
          unref(ns2).is("disabled", unref(disabled)),
          unref(ns2).is("focus", unref(focus)),
          unref(ns2).bm("button", unref(size))
        ])
      }, [
        withDirectives(createBaseVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original-radio")),
          value: _ctx.label,
          type: "radio",
          name: _ctx.name || ((_a = unref(radioGroup2)) == null ? void 0 : _a.name),
          disabled: unref(disabled),
          onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false)
        }, null, 42, _hoisted_1$o), [
          [vModelRadio, unref(modelValue)]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(unref(ns2).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const radioGroupEmits = radioEmits;
const _hoisted_1$n = ["id", "aria-label", "aria-labelledby"];
const __default__$z = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  ...__default__$z,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit("change", value));
    };
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio2) => radio2.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = computed(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns2).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$n);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
withNoopInstall(RadioButton);
const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$y = defineComponent({
  name: "ElTag"
});
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  ...__default__$y,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useSize();
    const ns2 = useNamespace("tag");
    const classes = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns2.b(),
        ns2.is("closable", closable),
        ns2.m(type),
        ns2.m(tagSize.value),
        ns2.m(effect),
        ns2.is("hit", hit),
        ns2.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(classes)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createBaseVNode("span", {
          class: normalizeClass(unref(ns2).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns2).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns2).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: normalizeClass(unref(classes)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(ns2).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns2).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ElTag = withInstall(Tag);
const __default__$x = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  ...__default__$x,
  setup(__props) {
    const ns2 = useNamespace("collapse-transition");
    const on2 = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.maxHeight = 0;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = "hidden";
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns2).b()
      }, toHandlers(on2)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
var advancedFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      var r = t.prototype, n = r.format;
      r.format = function(e2) {
        var t2 = this, r2 = this.$locale();
        if (!this.isValid())
          return n.bind(this)(e2);
        var s2 = this.$utils(), a2 = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
          switch (e3) {
            case "Q":
              return Math.ceil((t2.$M + 1) / 3);
            case "Do":
              return r2.ordinal(t2.$D);
            case "gggg":
              return t2.weekYear();
            case "GGGG":
              return t2.isoWeekYear();
            case "wo":
              return r2.ordinal(t2.week(), "W");
            case "w":
            case "ww":
              return s2.s(t2.week(), "w" === e3 ? 1 : 2, "0");
            case "W":
            case "WW":
              return s2.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
            case "k":
            case "kk":
              return s2.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
            case "X":
              return Math.floor(t2.$d.getTime() / 1e3);
            case "x":
              return t2.$d.getTime();
            case "z":
              return "[" + t2.offsetName() + "]";
            case "zzz":
              return "[" + t2.offsetName("long") + "]";
            default:
              return e3;
          }
        });
        return n.bind(this)(a2);
      };
    };
  });
})(advancedFormat$1);
const advancedFormat = advancedFormat$1.exports;
var weekOfYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f2 = n.prototype;
      f2.week = function(i2) {
        if (void 0 === i2 && (i2 = null), null !== i2)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f3 = r(this).startOf(t).add(1, t).date(n2), s2 = r(this).endOf(e);
          if (f3.isBefore(s2))
            return 1;
        }
        var a2 = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o2 = this.diff(a2, e, true);
        return o2 < 0 ? r(this).startOf("week").week() : Math.ceil(o2);
      }, f2.weeks = function(e2) {
        return void 0 === e2 && (e2 = null), this.week(e2);
      };
    };
  });
})(weekOfYear$1);
const weekOfYear = weekOfYear$1.exports;
var weekYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekYear = function() {
        var e2 = this.month(), t2 = this.week(), n = this.year();
        return 1 === t2 && 11 === e2 ? n + 1 : 0 === e2 && t2 >= 52 ? n - 1 : n;
      };
    };
  });
})(weekYear$1);
const weekYear = weekYear$1.exports;
var dayOfYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, n) {
      t.prototype.dayOfYear = function(e2) {
        var t2 = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
        return null == e2 ? t2 : this.add(e2 - t2, "day");
      };
    };
  });
})(dayOfYear$1);
const dayOfYear = dayOfYear$1.exports;
var isSameOrAfter$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.isSameOrAfter = function(e2, t2) {
        return this.isSame(e2, t2) || this.isAfter(e2, t2);
      };
    };
  });
})(isSameOrAfter$1);
const isSameOrAfter = isSameOrAfter$1.exports;
var isSameOrBefore$1 = { exports: {} };
(function(module, exports) {
  !function(e, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    return function(e, i) {
      i.prototype.isSameOrBefore = function(e2, i2) {
        return this.isSame(e2, i2) || this.isBefore(e2, i2);
      };
    };
  });
})(isSameOrBefore$1);
const isSameOrBefore = isSameOrBefore$1.exports;
const datePickerProps = buildProps({
  type: {
    type: definePropType(String),
    default: "date"
  }
});
const selectionModes = ["date", "dates", "year", "month", "week", "range"];
const datePickerSharedProps = buildProps({
  disabledDate: {
    type: definePropType(Function)
  },
  date: {
    type: definePropType(Object),
    required: true
  },
  minDate: {
    type: definePropType(Object)
  },
  maxDate: {
    type: definePropType(Object)
  },
  parsedValue: {
    type: definePropType([Object, Array])
  },
  rangeState: {
    type: definePropType(Object),
    default: () => ({
      endDate: null,
      selecting: false
    })
  }
});
const panelSharedProps = buildProps({
  type: {
    type: definePropType(String),
    required: true,
    values: datePickTypes
  }
});
const panelRangeSharedProps = buildProps({
  unlinkPanels: Boolean,
  parsedValue: {
    type: definePropType(Array)
  }
});
const selectionModeWithDefault = (mode) => {
  return {
    type: String,
    values: selectionModes,
    default: mode
  };
};
const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
});
const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault("date")
});
const isValidRange = (range) => {
  if (!isArray$1(range))
    return false;
  const [left, right] = range;
  return dayjs.isDayjs(left) && dayjs.isDayjs(right) && left.isSameOrBefore(right);
};
const getDefaultValue = (defaultValue, { lang, unit: unit2, unlinkPanels }) => {
  let start;
  if (isArray$1(defaultValue)) {
    let [left, right] = defaultValue.map((d2) => dayjs(d2).locale(lang));
    if (!unlinkPanels) {
      right = left.add(1, unit2);
    }
    return [left, right];
  } else if (defaultValue) {
    start = dayjs(defaultValue);
  } else {
    start = dayjs();
  }
  start = start.locale(lang);
  return [start, start.add(1, unit2)];
};
const buildPickerTable = (dimension, rows, {
  columnIndexOffset,
  startDate,
  nextEndDate,
  now: now2,
  unit: unit2,
  relativeDateGetter,
  setCellMetadata,
  setRowMetadata
}) => {
  for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
    const row = rows[rowIndex];
    for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
      let cell = row[columnIndex + columnIndexOffset];
      if (!cell) {
        cell = {
          row: rowIndex,
          column: columnIndex,
          type: "normal",
          inRange: false,
          start: false,
          end: false
        };
      }
      const index = rowIndex * dimension.column + columnIndex;
      const nextStartDate = relativeDateGetter(index);
      cell.dayjs = nextStartDate;
      cell.date = nextStartDate.toDate();
      cell.timestamp = nextStartDate.valueOf();
      cell.type = "normal";
      cell.inRange = !!(startDate && nextStartDate.isSameOrAfter(startDate, unit2) && nextEndDate && nextStartDate.isSameOrBefore(nextEndDate, unit2)) || !!(startDate && nextStartDate.isSameOrBefore(startDate, unit2) && nextEndDate && nextStartDate.isSameOrAfter(nextEndDate, unit2));
      if (startDate == null ? void 0 : startDate.isSameOrAfter(nextEndDate)) {
        cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit2);
        cell.end = startDate && nextStartDate.isSame(startDate, unit2);
      } else {
        cell.start = !!startDate && nextStartDate.isSame(startDate, unit2);
        cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit2);
      }
      const isToday = nextStartDate.isSame(now2, unit2);
      if (isToday) {
        cell.type = "today";
      }
      setCellMetadata == null ? void 0 : setCellMetadata(cell, { rowIndex, columnIndex });
      row[columnIndex + columnIndexOffset] = cell;
    }
    setRowMetadata == null ? void 0 : setRowMetadata(row);
  }
};
const basicCellProps = buildProps({
  cell: {
    type: definePropType(Object)
  }
});
var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: basicCellProps,
  setup(props) {
    const ns2 = useNamespace("date-table-cell");
    const {
      slots
    } = inject(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const {
        cell
      } = props;
      if (slots.default) {
        const list = slots.default(cell).filter((item) => {
          return item.patchFlag !== -2 && item.type.toString() !== "Symbol(Comment)";
        });
        if (list.length) {
          return list;
        }
      }
      return createVNode("div", {
        "class": ns2.b()
      }, [createVNode("span", {
        "class": ns2.e("text")
      }, [cell == null ? void 0 : cell.text])]);
    };
  }
});
const _hoisted_1$m = ["aria-label"];
const _hoisted_2$e = {
  key: 0,
  scope: "col"
};
const _hoisted_3$8 = ["aria-label"];
const _hoisted_4$4 = ["aria-current", "aria-selected", "tabindex"];
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "basic-date-table",
  props: basicDateTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns2 = useNamespace("date-table");
    const { t, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const lastRow = ref();
    const lastColumn = ref();
    const tableRows = ref([[], [], [], [], [], []]);
    let focusWithClick = false;
    const firstDayOfWeek = props.date.$locale().weekStart || 7;
    const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_2) => _2.toLowerCase());
    const offsetDay = computed(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
    });
    const startDate = computed(() => {
      const startDayOfMonth = props.date.startOf("month");
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
    });
    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
    });
    const hasCurrent = computed(() => {
      return flatten(rows.value).some((row) => {
        return row.isCurrent;
      });
    });
    const days = computed(() => {
      const startOfMonth = props.date.startOf("month");
      const startOfMonthDay = startOfMonth.day() || 7;
      const dateCountOfMonth = startOfMonth.daysInMonth();
      const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay,
        dateCountOfMonth,
        dateCountOfLastMonth
      };
    });
    const selectedDate = computed(() => {
      return props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
    });
    const setDateText = (cell, {
      count,
      rowIndex,
      columnIndex
    }) => {
      const { startOfMonthDay, dateCountOfMonth, dateCountOfLastMonth } = unref(days);
      const offset = unref(offsetDay);
      if (rowIndex >= 0 && rowIndex <= 1) {
        const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
        if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
          cell.text = count;
          return true;
        } else {
          cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - columnIndex % 7) + 1 + rowIndex * 7;
          cell.type = "prev-month";
        }
      } else {
        if (count <= dateCountOfMonth) {
          cell.text = count;
        } else {
          cell.text = count - dateCountOfMonth;
          cell.type = "next-month";
        }
        return true;
      }
      return false;
    };
    const setCellMetadata = (cell, {
      columnIndex,
      rowIndex
    }, count) => {
      const { disabledDate: disabledDate2, cellClassName } = props;
      const _selectedDate = unref(selectedDate);
      const shouldIncrement = setDateText(cell, { count, rowIndex, columnIndex });
      const cellDate = cell.dayjs.toDate();
      cell.selected = _selectedDate.find((d2) => d2.valueOf() === cell.dayjs.valueOf());
      cell.isSelected = !!cell.selected;
      cell.isCurrent = isCurrent(cell);
      cell.disabled = disabledDate2 == null ? void 0 : disabledDate2(cellDate);
      cell.customClass = cellClassName == null ? void 0 : cellClassName(cellDate);
      return shouldIncrement;
    };
    const setRowMetadata = (row) => {
      if (props.selectionMode === "week") {
        const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6];
        const isActive = isWeekActive(row[start + 1]);
        row[start].inRange = isActive;
        row[start].start = isActive;
        row[end].inRange = isActive;
        row[end].end = isActive;
      }
    };
    const rows = computed(() => {
      const { minDate, maxDate, rangeState, showWeekNumber } = props;
      const offset = offsetDay.value;
      const rows_ = tableRows.value;
      const dateUnit = "day";
      let count = 1;
      if (showWeekNumber) {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
          if (!rows_[rowIndex][0]) {
            rows_[rowIndex][0] = {
              type: "week",
              text: startDate.value.add(rowIndex * 7 + 1, dateUnit).week()
            };
          }
        }
      }
      buildPickerTable({ row: 6, column: 7 }, rows_, {
        startDate: minDate,
        columnIndexOffset: showWeekNumber ? 1 : 0,
        nextEndDate: rangeState.endDate || maxDate || rangeState.selecting && minDate || null,
        now: dayjs().locale(unref(lang)).startOf(dateUnit),
        unit: dateUnit,
        relativeDateGetter: (idx) => startDate.value.add(idx - offset, dateUnit),
        setCellMetadata: (...args) => {
          if (setCellMetadata(...args, count)) {
            count += 1;
          }
        },
        setRowMetadata
      });
      return rows_;
    });
    watch(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    const focus = async () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const isNormalDay = (type = "") => {
      return ["normal", "today"].includes(type);
    };
    const isCurrent = (cell) => {
      return props.selectionMode === "date" && isNormalDay(cell.type) && cellMatchesDate(cell, props.parsedValue);
    };
    const cellMatchesDate = (cell, date2) => {
      if (!date2)
        return false;
      return dayjs(date2).locale(lang.value).isSame(props.date.date(Number(cell.text)), "day");
    };
    const getCellClasses = (cell) => {
      const classes = [];
      if (isNormalDay(cell.type) && !cell.disabled) {
        classes.push("available");
        if (cell.type === "today") {
          classes.push("today");
        }
      } else {
        classes.push(cell.type);
      }
      if (isCurrent(cell)) {
        classes.push("current");
      }
      if (cell.inRange && (isNormalDay(cell.type) || props.selectionMode === "week")) {
        classes.push("in-range");
        if (cell.start) {
          classes.push("start-date");
        }
        if (cell.end) {
          classes.push("end-date");
        }
      }
      if (cell.disabled) {
        classes.push("disabled");
      }
      if (cell.selected) {
        classes.push("selected");
      }
      if (cell.customClass) {
        classes.push(cell.customClass);
      }
      return classes.join(" ");
    };
    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value;
      return startDate.value.add(offsetFromStart, "day");
    };
    const handleMouseMove = (event) => {
      var _a;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: getDateOfCell(row, column)
        });
      }
    };
    const isSelectedCell = (cell) => {
      return !hasCurrent.value && (cell == null ? void 0 : cell.text) === 1 && cell.type === "normal" || cell.isCurrent;
    };
    const handleFocus = (event) => {
      if (focusWithClick || hasCurrent.value || props.selectionMode !== "date")
        return;
      handlePickDate(event, true);
    };
    const handleMouseDown = (event) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      focusWithClick = true;
    };
    const handleMouseUp = (event) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      focusWithClick = false;
    };
    const handlePickDate = (event, isKeyboardMovement = false) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      const cell = rows.value[row][column];
      if (cell.disabled || cell.type === "week")
        return;
      const newDate = getDateOfCell(row, column);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting || !props.minDate) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else if (props.selectionMode === "date") {
        emit("pick", newDate, isKeyboardMovement);
      } else if (props.selectionMode === "week") {
        const weekNumber = newDate.week();
        const value = `${newDate.year()}w${weekNumber}`;
        emit("pick", {
          year: newDate.year(),
          week: weekNumber,
          value,
          date: newDate.startOf("week")
        });
      } else if (props.selectionMode === "dates") {
        const newValue = cell.selected ? castArray(props.parsedValue).filter((d2) => (d2 == null ? void 0 : d2.valueOf()) !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]);
        emit("pick", newValue);
      }
    };
    const isWeekActive = (cell) => {
      if (props.selectionMode !== "week")
        return false;
      let newDate = props.date.startOf("day");
      if (cell.type === "prev-month") {
        newDate = newDate.subtract(1, "month");
      }
      if (cell.type === "next-month") {
        newDate = newDate.add(1, "month");
      }
      newDate = newDate.date(Number.parseInt(cell.text, 10));
      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
        const weekDate = props.parsedValue.subtract(dayOffset, "day");
        return weekDate.isSame(newDate, "day");
      }
      return false;
    };
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t)("el.datepicker.dateTablePrompt"),
        cellspacing: "0",
        cellpadding: "0",
        class: normalizeClass([unref(ns2).b(), { "is-week-mode": _ctx.selectionMode === "week" }]),
        onClick: handlePickDate,
        onMousemove: handleMouseMove,
        onMousedown: handleMouseDown,
        onMouseup: handleMouseUp
      }, [
        createBaseVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          createBaseVNode("tr", null, [
            _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_2$e, toDisplayString(unref(t)("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(WEEKS), (week, key) => {
              return openBlock(), createElementBlock("th", {
                key,
                scope: "col",
                "aria-label": unref(t)("el.datepicker.weeksFull." + week)
              }, toDisplayString(unref(t)("el.datepicker.weeks." + week)), 9, _hoisted_3$8);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, rowKey) => {
            return openBlock(), createElementBlock("tr", {
              key: rowKey,
              class: normalizeClass([unref(ns2).e("row"), { current: isWeekActive(row[1]) }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, columnKey) => {
                return openBlock(), createElementBlock("td", {
                  key: `${rowKey}.${columnKey}`,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: normalizeClass(getCellClasses(cell)),
                  "aria-current": cell.isCurrent ? "date" : void 0,
                  "aria-selected": cell.isCurrent,
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onFocus: handleFocus
                }, [
                  createVNode(unref(ElDatePickerCell), { cell }, null, 8, ["cell"])
                ], 42, _hoisted_4$4);
              }), 128))
            ], 2);
          }), 128))
        ], 512)
      ], 42, _hoisted_1$m);
    };
  }
});
var DateTable = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("month")
});
const _hoisted_1$l = ["aria-label"];
const _hoisted_2$d = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
const _hoisted_3$7 = { class: "cell" };
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "basic-month-table",
  props: basicMonthTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInMonth = (year, month, lang2) => {
      const firstDay = dayjs().locale(lang2).startOf("month").month(month).year(year);
      const numOfDays = firstDay.daysInMonth();
      return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
    };
    const ns2 = useNamespace("month-table");
    const { t, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const months = ref(props.date.locale("en").localeData().monthsShort().map((_2) => _2.toLowerCase()));
    const tableRows = ref([
      [],
      [],
      []
    ]);
    const lastRow = ref();
    const lastColumn = ref();
    const rows = computed(() => {
      var _a, _b;
      const rows2 = tableRows.value;
      const now2 = dayjs().locale(lang.value).startOf("month");
      for (let i = 0; i < 3; i++) {
        const row = rows2[i];
        for (let j = 0; j < 4; j++) {
          const cell = row[j] || (row[j] = {
            row: i,
            column: j,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false
          });
          cell.type = "normal";
          const index = i * 4 + j;
          const calTime = props.date.startOf("year").month(index);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
          cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month"));
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = !!(calEndDate && calTime.isSame(calEndDate, "month"));
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = !!(props.minDate && calTime.isSame(props.minDate, "month"));
            cell.end = !!(calEndDate && calTime.isSame(calEndDate, "month"));
          }
          const isToday = now2.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index;
          cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, calTime.toDate())) || false;
        }
      }
      return rows2;
    });
    const focus = () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const getCellStyle = (cell) => {
      const style = {};
      const year = props.date.year();
      const today = new Date();
      const month = cell.text;
      style.disabled = props.disabledDate ? datesInMonth(year, month, lang.value).every(props.disabledDate) : false;
      style.current = castArray(props.parsedValue).findIndex((date2) => dayjs.isDayjs(date2) && date2.year() === year && date2.month() === month) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      if (cell.inRange) {
        style["in-range"] = true;
        if (cell.start) {
          style["start-date"] = true;
        }
        if (cell.end) {
          style["end-date"] = true;
        }
      }
      return style;
    };
    const isSelectedCell = (cell) => {
      const year = props.date.year();
      const month = cell.text;
      return castArray(props.date).findIndex((date2) => date2.year() === year && date2.month() === month) >= 0;
    };
    const handleMouseMove = (event) => {
      var _a;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "A") {
        target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: props.date.startOf("year").month(row * 4 + column)
        });
      }
    };
    const handleMonthTableClick = (event) => {
      var _a;
      const target = (_a = event.target) == null ? void 0 : _a.closest("td");
      if ((target == null ? void 0 : target.tagName) !== "TD")
        return;
      if (hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const month = row * 4 + column;
      const newDate = props.date.startOf("year").month(month);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (props.minDate && newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else {
        emit("pick", month);
      }
    };
    watch(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t)("el.datepicker.monthTablePrompt"),
        class: normalizeClass(unref(ns2).b()),
        onClick: handleMonthTableClick,
        onMousemove: handleMouseMove
      }, [
        createBaseVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, key) => {
            return openBlock(), createElementBlock("tr", { key }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
                return openBlock(), createElementBlock("td", {
                  key: key_,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: normalizeClass(getCellStyle(cell)),
                  "aria-selected": `${isSelectedCell(cell)}`,
                  "aria-label": unref(t)(`el.datepicker.month${+cell.text + 1}`),
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onKeydown: [
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["space"]),
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["enter"])
                  ]
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("span", _hoisted_3$7, toDisplayString(unref(t)("el.datepicker.months." + months.value[cell.text])), 1)
                  ])
                ], 42, _hoisted_2$d);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 42, _hoisted_1$l);
    };
  }
});
var MonthTable = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
const { date, disabledDate, parsedValue } = datePickerSharedProps;
const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue
});
const _hoisted_1$k = ["aria-label"];
const _hoisted_2$c = ["aria-selected", "tabindex", "onKeydown"];
const _hoisted_3$6 = { class: "cell" };
const _hoisted_4$3 = { key: 1 };
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "basic-year-table",
  props: basicYearTableProps,
  emits: ["pick"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInYear = (year, lang2) => {
      const firstDay = dayjs(String(year)).locale(lang2).startOf("year");
      const lastDay = firstDay.endOf("year");
      const numOfDays = lastDay.dayOfYear();
      return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
    };
    const ns2 = useNamespace("year-table");
    const { t, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10;
    });
    const focus = () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const getCellKls = (year) => {
      const kls = {};
      const today = dayjs().locale(lang.value);
      kls.disabled = props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false;
      kls.current = castArray(props.parsedValue).findIndex((d2) => d2.year() === year) >= 0;
      kls.today = today.year() === year;
      return kls;
    };
    const isSelectedCell = (year) => {
      return year === startYear.value && props.date.year() < startYear.value && props.date.year() > startYear.value + 9 || castArray(props.date).findIndex((date2) => date2.year() === year) >= 0;
    };
    const handleYearTableClick = (event) => {
      const clickTarget = event.target;
      const target = clickTarget.closest("td");
      if (target && target.textContent) {
        if (hasClass(target, "disabled"))
          return;
        const year = target.textContent || target.innerText;
        emit("pick", Number(year));
      }
    };
    watch(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t)("el.datepicker.yearTablePrompt"),
        class: normalizeClass(unref(ns2).b()),
        onClick: handleYearTableClick
      }, [
        createBaseVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(3, (_2, i) => {
            return createBaseVNode("tr", { key: i }, [
              (openBlock(), createElementBlock(Fragment, null, renderList(4, (__, j) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: i + "_" + j
                }, [
                  i * 4 + j < 10 ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    ref_for: true,
                    ref: (el) => isSelectedCell(unref(startYear) + i * 4 + j) && (currentCellRef.value = el),
                    class: normalizeClass(["available", getCellKls(unref(startYear) + i * 4 + j)]),
                    "aria-selected": `${isSelectedCell(unref(startYear) + i * 4 + j)}`,
                    tabindex: isSelectedCell(unref(startYear) + i * 4 + j) ? 0 : -1,
                    onKeydown: [
                      withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["space"]),
                      withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["enter"])
                    ]
                  }, [
                    createBaseVNode("span", _hoisted_3$6, toDisplayString(unref(startYear) + i * 4 + j), 1)
                  ], 42, _hoisted_2$c)) : (openBlock(), createElementBlock("td", _hoisted_4$3))
                ], 64);
              }), 64))
            ]);
          }), 64))
        ], 512)
      ], 10, _hoisted_1$k);
    };
  }
});
var YearTable = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
const _hoisted_1$j = ["onClick"];
const _hoisted_2$b = ["aria-label"];
const _hoisted_3$5 = ["aria-label"];
const _hoisted_4$2 = ["aria-label"];
const _hoisted_5$2 = ["aria-label"];
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "panel-date-pick",
  props: panelDatePickProps,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(__props, { emit: contextEmit }) {
    const props = __props;
    const timeWithinRange = (_2, __, ___) => true;
    const ppNs = useNamespace("picker-panel");
    const dpNs = useNamespace("date-picker");
    const attrs = useAttrs();
    const slots = useSlots();
    const { t, lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const popper2 = inject(TOOLTIP_INJECTION_KEY);
    const { shortcuts, disabledDate: disabledDate2, cellClassName, defaultTime, arrowControl } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const currentViewRef = ref();
    const innerDate = ref(dayjs().locale(lang.value));
    const defaultTimeD = computed(() => {
      return dayjs(defaultTime).locale(lang.value);
    });
    const month = computed(() => {
      return innerDate.value.month();
    });
    const year = computed(() => {
      return innerDate.value.year();
    });
    const selectableRange = ref([]);
    const userInputDate = ref(null);
    const userInputTime = ref(null);
    const checkDateWithinRange = (date2) => {
      return selectableRange.value.length > 0 ? timeWithinRange(date2, selectableRange.value, props.format || "HH:mm:ss") : true;
    };
    const formatEmit = (emitDayjs) => {
      if (defaultTime && !visibleTime.value) {
        return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      if (showTime.value)
        return emitDayjs.millisecond(0);
      return emitDayjs.startOf("day");
    };
    const emit = (value, ...args) => {
      if (!value) {
        contextEmit("pick", value, ...args);
      } else if (isArray$1(value)) {
        const dates = value.map(formatEmit);
        contextEmit("pick", dates, ...args);
      } else {
        contextEmit("pick", formatEmit(value), ...args);
      }
      userInputDate.value = null;
      userInputTime.value = null;
    };
    const handleDatePick = (value, keepOpen) => {
      if (selectionMode.value === "date") {
        value = value;
        let newDate = props.parsedValue ? props.parsedValue.year(value.year()).month(value.month()).date(value.date()) : value;
        if (!checkDateWithinRange(newDate)) {
          newDate = selectableRange.value[0][0].year(value.year()).month(value.month()).date(value.date());
        }
        innerDate.value = newDate;
        emit(newDate, showTime.value || keepOpen);
      } else if (selectionMode.value === "week") {
        emit(value.date);
      } else if (selectionMode.value === "dates") {
        emit(value, true);
      }
    };
    const moveByMonth = (forward) => {
      const action = forward ? "add" : "subtract";
      innerDate.value = innerDate.value[action](1, "month");
      handlePanelChange("month");
    };
    const moveByYear = (forward) => {
      const currentDate = innerDate.value;
      const action = forward ? "add" : "subtract";
      innerDate.value = currentView.value === "year" ? currentDate[action](10, "year") : currentDate[action](1, "year");
      handlePanelChange("year");
    };
    const currentView = ref("date");
    const yearLabel = computed(() => {
      const yearTranslation = t("el.datepicker.year");
      if (currentView.value === "year") {
        const startYear = Math.floor(year.value / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 9}`;
      }
      return `${year.value} ${yearTranslation}`;
    });
    const handleShortcutClick = (shortcut) => {
      const shortcutValue = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
      if (shortcutValue) {
        emit(dayjs(shortcutValue).locale(lang.value));
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick({
          attrs,
          slots,
          emit: contextEmit
        });
      }
    };
    const selectionMode = computed(() => {
      const { type } = props;
      if (["week", "month", "year", "dates"].includes(type))
        return type;
      return "date";
    });
    const keyboardMode = computed(() => {
      return selectionMode.value === "date" ? currentView.value : selectionMode.value;
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const handleMonthPick = async (month2) => {
      innerDate.value = innerDate.value.startOf("month").month(month2);
      if (selectionMode.value === "month") {
        emit(innerDate.value, false);
      } else {
        currentView.value = "date";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("month");
    };
    const handleYearPick = async (year2) => {
      if (selectionMode.value === "year") {
        innerDate.value = innerDate.value.startOf("year").year(year2);
        emit(innerDate.value, false);
      } else {
        innerDate.value = innerDate.value.year(year2);
        currentView.value = "month";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("year");
    };
    const showPicker = async (view) => {
      currentView.value = view;
      await nextTick();
      handleFocusPicker();
    };
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const footerVisible = computed(() => {
      return showTime.value || selectionMode.value === "dates";
    });
    const onConfirm = () => {
      if (selectionMode.value === "dates") {
        emit(props.parsedValue);
      } else {
        let result = props.parsedValue;
        if (!result) {
          const defaultTimeD2 = dayjs(defaultTime).locale(lang.value);
          const defaultValueD = getDefaultValue2();
          result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
        }
        innerDate.value = result;
        emit(result);
      }
    };
    const changeToNow = () => {
      const now2 = dayjs().locale(lang.value);
      const nowDate = now2.toDate();
      if ((!disabledDate2 || !disabledDate2(nowDate)) && checkDateWithinRange(nowDate)) {
        innerDate.value = dayjs().locale(lang.value);
        emit(innerDate.value);
      }
    };
    const timeFormat = computed(() => {
      return extractTimeFormat(props.format);
    });
    const dateFormat = computed(() => {
      return extractDateFormat(props.format);
    });
    const visibleTime = computed(() => {
      if (userInputTime.value)
        return userInputTime.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(timeFormat.value);
    });
    const visibleDate = computed(() => {
      if (userInputDate.value)
        return userInputDate.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(dateFormat.value);
    });
    const timePickerVisible = ref(false);
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true;
    };
    const handleTimePickClose = () => {
      timePickerVisible.value = false;
    };
    const getUnits = (date2) => {
      return {
        hour: date2.hour(),
        minute: date2.minute(),
        second: date2.second(),
        year: date2.year(),
        month: date2.month(),
        date: date2.date()
      };
    };
    const handleTimePick = (value, visible, first) => {
      const { hour, minute, second } = getUnits(value);
      const newDate = props.parsedValue ? props.parsedValue.hour(hour).minute(minute).second(second) : value;
      innerDate.value = newDate;
      emit(innerDate.value, true);
      if (!first) {
        timePickerVisible.value = visible;
      }
    };
    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs(value, timeFormat.value).locale(lang.value);
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        const { year: year2, month: month2, date: date2 } = getUnits(innerDate.value);
        innerDate.value = newDate.year(year2).month(month2).date(date2);
        userInputTime.value = null;
        timePickerVisible.value = false;
        emit(innerDate.value, true);
      }
    };
    const handleVisibleDateChange = (value) => {
      const newDate = dayjs(value, dateFormat.value).locale(lang.value);
      if (newDate.isValid()) {
        if (disabledDate2 && disabledDate2(newDate.toDate())) {
          return;
        }
        const { hour, minute, second } = getUnits(innerDate.value);
        innerDate.value = newDate.hour(hour).minute(minute).second(second);
        userInputDate.value = null;
        emit(innerDate.value, true);
      }
    };
    const isValidValue2 = (date2) => {
      return dayjs.isDayjs(date2) && date2.isValid() && (disabledDate2 ? !disabledDate2(date2.toDate()) : true);
    };
    const formatToString = (value) => {
      if (selectionMode.value === "dates") {
        return value.map((_2) => _2.format(props.format));
      }
      return value.format(props.format);
    };
    const parseUserInput = (value) => {
      return dayjs(value, props.format).locale(lang.value);
    };
    const getDefaultValue2 = () => {
      const parseDate2 = dayjs(defaultValue.value).locale(lang.value);
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value;
        return dayjs().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
      }
      return parseDate2;
    };
    const handleFocusPicker = async () => {
      var _a;
      if (["week", "month", "year", "date"].includes(selectionMode.value)) {
        (_a = currentViewRef.value) == null ? void 0 : _a.focus();
        if (selectionMode.value === "week") {
          handleKeyControl(EVENT_CODE.down);
        }
      }
    };
    const handleKeydownTable = (event) => {
      const { code } = event;
      const validCode = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
        EVENT_CODE.home,
        EVENT_CODE.end,
        EVENT_CODE.pageUp,
        EVENT_CODE.pageDown
      ];
      if (validCode.includes(code)) {
        handleKeyControl(code);
        event.stopPropagation();
        event.preventDefault();
      }
      if ([EVENT_CODE.enter, EVENT_CODE.space].includes(code) && userInputDate.value === null && userInputTime.value === null) {
        event.preventDefault();
        emit(innerDate.value, false);
      }
    };
    const handleKeyControl = (code) => {
      var _a;
      const { up, down, left, right, home, end, pageUp, pageDown } = EVENT_CODE;
      const mapping = {
        year: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date2, step) => date2.setFullYear(date2.getFullYear() + step)
        },
        month: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date2, step) => date2.setMonth(date2.getMonth() + step)
        },
        week: {
          [up]: -1,
          [down]: 1,
          [left]: -1,
          [right]: 1,
          offset: (date2, step) => date2.setDate(date2.getDate() + step * 7)
        },
        date: {
          [up]: -7,
          [down]: 7,
          [left]: -1,
          [right]: 1,
          [home]: (date2) => -date2.getDay(),
          [end]: (date2) => -date2.getDay() + 6,
          [pageUp]: (date2) => -new Date(date2.getFullYear(), date2.getMonth(), 0).getDate(),
          [pageDown]: (date2) => new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate(),
          offset: (date2, step) => date2.setDate(date2.getDate() + step)
        }
      };
      const newDate = innerDate.value.toDate();
      while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
        const map2 = mapping[keyboardMode.value];
        if (!map2)
          return;
        map2.offset(newDate, isFunction(map2[code]) ? map2[code](newDate) : (_a = map2[code]) != null ? _a : 0);
        if (disabledDate2 && disabledDate2(newDate)) {
          break;
        }
        const result = dayjs(newDate).locale(lang.value);
        innerDate.value = result;
        contextEmit("pick", result, true);
        break;
      }
    };
    const handlePanelChange = (mode) => {
      contextEmit("panel-change", innerDate.value.toDate(), mode, currentView.value);
    };
    watch(() => selectionMode.value, (val) => {
      if (["month", "year"].includes(val)) {
        currentView.value = val;
        return;
      }
      currentView.value = "date";
    }, { immediate: true });
    watch(() => currentView.value, () => {
      popper2 == null ? void 0 : popper2.updatePopper();
    });
    watch(() => defaultValue.value, (val) => {
      if (val) {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (val) => {
      if (val) {
        if (selectionMode.value === "dates")
          return;
        if (Array.isArray(val))
          return;
        innerDate.value = val;
      } else {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    contextEmit("set-picker-option", ["isValidValue", isValidValue2]);
    contextEmit("set-picker-option", ["formatToString", formatToString]);
    contextEmit("set-picker-option", ["parseUserInput", parseUserInput]);
    contextEmit("set-picker-option", ["handleFocusPicker", handleFocusPicker]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(dpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => handleShortcutClick(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$j);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(dpNs).e("time-header"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t)("el.datepicker.selectDate"),
                  "model-value": unref(visibleDate),
                  size: "small",
                  "validate-event": false,
                  onInput: _cache[0] || (_cache[0] = (val) => userInputDate.value = val),
                  onChange: handleVisibleDateChange
                }, null, 8, ["placeholder", "model-value"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t)("el.datepicker.selectTime"),
                  "model-value": unref(visibleTime),
                  size: "small",
                  "validate-event": false,
                  onFocus: onTimePickerInputFocus,
                  onInput: _cache[1] || (_cache[1] = (val) => userInputTime.value = val),
                  onChange: handleVisibleTimeChange
                }, null, 8, ["placeholder", "model-value"]),
                createVNode(unref(TimePickPanel), {
                  visible: timePickerVisible.value,
                  format: unref(timeFormat),
                  "time-arrow-control": unref(arrowControl),
                  "parsed-value": innerDate.value,
                  onPick: handleTimePick
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [unref(ClickOutside), handleTimePickClose]
              ])
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([
                unref(dpNs).e("header"),
                (currentView.value === "year" || currentView.value === "month") && unref(dpNs).e("header--bordered")
              ])
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("prev-btn"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.prevYear`),
                  class: normalizeClass(["d-arrow-left", unref(ppNs).e("icon-btn")]),
                  onClick: _cache[2] || (_cache[2] = ($event) => moveByYear(false))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$b),
                withDirectives(createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.prevMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: _cache[3] || (_cache[3] = ($event) => moveByMonth(false))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$5), [
                  [vShow, currentView.value === "date"]
                ])
              ], 2),
              createBaseVNode("span", {
                role: "button",
                class: normalizeClass(unref(dpNs).e("header-label")),
                "aria-live": "polite",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(($event) => showPicker("year"), ["enter"])),
                onClick: _cache[5] || (_cache[5] = ($event) => showPicker("year"))
              }, toDisplayString(unref(yearLabel)), 35),
              withDirectives(createBaseVNode("span", {
                role: "button",
                "aria-live": "polite",
                tabindex: "0",
                class: normalizeClass([
                  unref(dpNs).e("header-label"),
                  { active: currentView.value === "month" }
                ]),
                onKeydown: _cache[6] || (_cache[6] = withKeys(($event) => showPicker("month"), ["enter"])),
                onClick: _cache[7] || (_cache[7] = ($event) => showPicker("month"))
              }, toDisplayString(unref(t)(`el.datepicker.month${unref(month) + 1}`)), 35), [
                [vShow, currentView.value === "date"]
              ]),
              createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("next-btn"))
              }, [
                withDirectives(createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.nextMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: _cache[8] || (_cache[8] = ($event) => moveByMonth(true))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_4$2), [
                  [vShow, currentView.value === "date"]
                ]),
                createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.nextYear`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[9] || (_cache[9] = ($event) => moveByYear(true))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_5$2)
              ], 2)
            ], 2), [
              [vShow, currentView.value !== "time"]
            ]),
            createBaseVNode("div", {
              class: normalizeClass(unref(ppNs).e("content")),
              onKeydown: handleKeydownTable
            }, [
              currentView.value === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onPick: handleDatePick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : createCommentVNode("v-if", true),
              currentView.value === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "disabled-date": unref(disabledDate2),
                "parsed-value": _ctx.parsedValue,
                onPick: handleYearPick
              }, null, 8, ["date", "disabled-date", "parsed-value"])) : createCommentVNode("v-if", true),
              currentView.value === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate2),
                onPick: handleMonthPick
              }, null, 8, ["date", "parsed-value", "disabled-date"])) : createCommentVNode("v-if", true)
            ], 34)
          ], 2)
        ], 2),
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          withDirectives(createVNode(unref(ElButton), {
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: changeToNow
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.now")), 1)
            ]),
            _: 1
          }, 8, ["class"]), [
            [vShow, unref(selectionMode) !== "dates"]
          ]),
          createVNode(unref(ElButton), {
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: onConfirm
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ], 2), [
          [vShow, unref(footerVisible) && currentView.value === "date"]
        ])
      ], 2);
    };
  }
});
var DatePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps
});
const useShortcut = (lang) => {
  const { emit } = getCurrentInstance();
  const attrs = useAttrs();
  const slots = useSlots();
  const handleShortcutClick = (shortcut) => {
    const shortcutValues = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
    if (shortcutValues) {
      emit("pick", [
        dayjs(shortcutValues[0]).locale(lang.value),
        dayjs(shortcutValues[1]).locale(lang.value)
      ]);
      return;
    }
    if (shortcut.onClick) {
      shortcut.onClick({
        attrs,
        slots,
        emit
      });
    }
  };
  return handleShortcutClick;
};
const useRangePicker = (props, {
  defaultValue,
  leftDate,
  rightDate,
  unit: unit2,
  onParsedValueChanged
}) => {
  const { emit } = getCurrentInstance();
  const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY);
  const drpNs = useNamespace("date-range-picker");
  const { t, lang } = useLocale();
  const handleShortcutClick = useShortcut(lang);
  const minDate = ref();
  const maxDate = ref();
  const rangeState = ref({
    endDate: null,
    selecting: false
  });
  const handleChangeRange = (val) => {
    rangeState.value = val;
  };
  const handleRangeConfirm = (visible = false) => {
    const _minDate = unref(minDate);
    const _maxDate = unref(maxDate);
    if (isValidRange([_minDate, _maxDate])) {
      emit("pick", [_minDate, _maxDate], visible);
    }
  };
  const onSelect = (selecting) => {
    rangeState.value.selecting = selecting;
    if (!selecting) {
      rangeState.value.endDate = null;
    }
  };
  const restoreDefault = () => {
    const [start, end] = getDefaultValue(unref(defaultValue), {
      lang: unref(lang),
      unit: unit2,
      unlinkPanels: props.unlinkPanels
    });
    minDate.value = void 0;
    maxDate.value = void 0;
    leftDate.value = start;
    rightDate.value = end;
  };
  watch(defaultValue, (val) => {
    if (val) {
      restoreDefault();
    }
  }, { immediate: true });
  watch(() => props.parsedValue, (parsedValue2) => {
    if (isArray$1(parsedValue2) && parsedValue2.length === 2) {
      const [start, end] = parsedValue2;
      minDate.value = start;
      leftDate.value = start;
      maxDate.value = end;
      onParsedValueChanged(unref(minDate), unref(maxDate));
    } else {
      restoreDefault();
    }
  }, { immediate: true });
  return {
    minDate,
    maxDate,
    rangeState,
    lang,
    ppNs: pickerNs,
    drpNs,
    handleChangeRange,
    handleRangeConfirm,
    handleShortcutClick,
    onSelect,
    t
  };
};
const _hoisted_1$i = ["onClick"];
const _hoisted_2$a = ["disabled"];
const _hoisted_3$4 = ["disabled"];
const _hoisted_4$1 = ["disabled"];
const _hoisted_5$1 = ["disabled"];
const unit$1 = "month";
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "panel-date-range",
  props: panelDateRangeProps,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      disabledDate: disabledDate2,
      cellClassName,
      format: format2,
      defaultTime,
      arrowControl,
      clearable
    } = pickerBase.props;
    const shortcuts = toRef(pickerBase.props, "shortcuts");
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const { lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit$1));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      t
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit: unit$1,
      onParsedValueChanged
    });
    const dateUserInput = ref({
      min: null,
      max: null
    });
    const timeUserInput = ref({
      min: null,
      max: null
    });
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${leftDate.value.month() + 1}`)}`;
    });
    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${rightDate.value.month() + 1}`)}`;
    });
    const leftYear = computed(() => {
      return leftDate.value.year();
    });
    const leftMonth = computed(() => {
      return leftDate.value.month();
    });
    const rightYear = computed(() => {
      return rightDate.value.year();
    });
    const rightMonth = computed(() => {
      return rightDate.value.month();
    });
    const hasShortcuts = computed(() => !!shortcuts.value.length);
    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null)
        return dateUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(dateFormat.value);
      return "";
    });
    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null)
        return dateUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value);
      return "";
    });
    const minVisibleTime = computed(() => {
      if (timeUserInput.value.min !== null)
        return timeUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(timeFormat.value);
      return "";
    });
    const maxVisibleTime = computed(() => {
      if (timeUserInput.value.max !== null)
        return timeUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(timeFormat.value);
      return "";
    });
    const timeFormat = computed(() => {
      return extractTimeFormat(format2);
    });
    const dateFormat = computed(() => {
      return extractDateFormat(format2);
    });
    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, "year");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("year");
    };
    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, "month");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "year");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "year");
      }
      handlePanelChange("year");
    };
    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "month");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, "year");
      handlePanelChange("year");
    };
    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, "year");
      handlePanelChange("year");
    };
    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const handlePanelChange = (mode) => {
      emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
    };
    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12;
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
    });
    const btnDisabled = computed(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidRange([minDate.value, maxDate.value]));
    });
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const formatEmit = (emitDayjs, index) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime).locale(lang.value);
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      return emitDayjs;
    };
    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate;
      const max_ = val.maxDate;
      const minDate_ = formatEmit(min_, 0);
      const maxDate_ = formatEmit(max_, 1);
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close || showTime.value)
        return;
      handleRangeConfirm();
    };
    const minTimePickerVisible = ref(false);
    const maxTimePickerVisible = ref(false);
    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false;
    };
    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false;
    };
    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value;
      const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (disabledDate2 && disabledDate2(parsedValueD.toDate())) {
          return;
        }
        if (type === "min") {
          leftDate.value = parsedValueD;
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, "month");
            maxDate.value = minDate.value.add(1, "month");
          }
        } else {
          rightDate.value = parsedValueD;
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, "month");
            minDate.value = maxDate.value.subtract(1, "month");
          }
        }
      }
    };
    const handleDateChange = (_2, type) => {
      dateUserInput.value[type] = null;
    };
    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value;
      const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (type === "min") {
          minTimePickerVisible.value = true;
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value;
          }
        } else {
          maxTimePickerVisible.value = true;
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          rightDate.value = maxDate.value;
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value;
          }
        }
      }
    };
    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null;
      if (type === "min") {
        leftDate.value = minDate.value;
        minTimePickerVisible.value = false;
      } else {
        rightDate.value = maxDate.value;
        maxTimePickerVisible.value = false;
      }
    };
    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min)
        return;
      if (value) {
        leftDate.value = value;
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        minTimePickerVisible.value = visible;
      }
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value;
        rightDate.value = value;
      }
    };
    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max)
        return;
      if (value) {
        rightDate.value = value;
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        maxTimePickerVisible.value = visible;
      }
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value;
      }
    };
    const handleClear = () => {
      leftDate.value = getDefaultValue(unref(defaultValue), {
        lang: unref(lang),
        unit: "month",
        unlinkPanels: props.unlinkPanels
      })[0];
      rightDate.value = leftDate.value.add(1, "month");
      emit("pick", null);
    };
    const formatToString = (value) => {
      return isArray$1(value) ? value.map((_2) => _2.format(format2)) : value.format(format2);
    };
    const parseUserInput = (value) => {
      return isArray$1(value) ? value.map((_2) => dayjs(_2, format2).locale(lang.value)) : dayjs(value, format2).locale(lang.value);
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const minDateMonth = (minDate2 == null ? void 0 : minDate2.month()) || 0;
        const maxDateYear = maxDate2.year();
        const maxDateMonth = maxDate2.month();
        rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate2.add(1, unit$1) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit$1);
        if (maxDate2) {
          rightDate.value = rightDate.value.hour(maxDate2.hour()).minute(maxDate2.minute()).second(maxDate2.second());
        }
      }
    }
    emit("set-picker-option", ["isValidValue", isValidRange]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$i);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(drpNs).e("time-header"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(drpNs).e("editors-wrap"))
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t)("el.datepicker.startDate"),
                    class: normalizeClass(unref(drpNs).e("editor")),
                    "model-value": unref(minVisibleDate),
                    "validate-event": false,
                    onInput: _cache[0] || (_cache[0] = (val) => handleDateInput(val, "min")),
                    onChange: _cache[1] || (_cache[1] = (val) => handleDateChange(val, "min"))
                  }, null, 8, ["disabled", "placeholder", "class", "model-value"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t)("el.datepicker.startTime"),
                    "model-value": unref(minVisibleTime),
                    "validate-event": false,
                    onFocus: _cache[2] || (_cache[2] = ($event) => minTimePickerVisible.value = true),
                    onInput: _cache[3] || (_cache[3] = (val) => handleTimeInput(val, "min")),
                    onChange: _cache[4] || (_cache[4] = (val) => handleTimeChange(val, "min"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                  createVNode(unref(TimePickPanel), {
                    visible: minTimePickerVisible.value,
                    format: unref(timeFormat),
                    "datetime-role": "start",
                    "time-arrow-control": unref(arrowControl),
                    "parsed-value": leftDate.value,
                    onPick: handleMinTimePick
                  }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMinTimeClose]
                ])
              ], 2),
              createBaseVNode("span", null, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("span", {
                class: normalizeClass([unref(drpNs).e("editors-wrap"), "is-right"])
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t)("el.datepicker.endDate"),
                    "model-value": unref(maxVisibleDate),
                    readonly: !unref(minDate),
                    "validate-event": false,
                    onInput: _cache[5] || (_cache[5] = (val) => handleDateInput(val, "max")),
                    onChange: _cache[6] || (_cache[6] = (val) => handleDateChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t)("el.datepicker.endTime"),
                    "model-value": unref(maxVisibleTime),
                    readonly: !unref(minDate),
                    "validate-event": false,
                    onFocus: _cache[7] || (_cache[7] = ($event) => unref(minDate) && (maxTimePickerVisible.value = true)),
                    onInput: _cache[8] || (_cache[8] = (val) => handleTimeInput(val, "max")),
                    onChange: _cache[9] || (_cache[9] = (val) => handleTimeChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                  createVNode(unref(TimePickPanel), {
                    "datetime-role": "end",
                    visible: maxTimePickerVisible.value,
                    format: unref(timeFormat),
                    "time-arrow-control": unref(arrowControl),
                    "parsed-value": rightDate.value,
                    onPick: handleMaxTimePick
                  }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMaxTimeClose]
                ])
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: leftPrevYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: leftPrevMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-right"]),
                  onClick: leftNextYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$a)) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { "is-disabled": !unref(enableMonthArrow) }
                  ], "arrow-right"]),
                  onClick: leftNextMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$4)) : createCommentVNode("v-if", true),
                createBaseVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(DateTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-left"]),
                  onClick: rightPrevYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_4$1)) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { "is-disabled": !unref(enableMonthArrow) }
                  ], "arrow-left"]),
                  onClick: rightPrevMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_5$1)) : createCommentVNode("v-if", true),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: rightNextYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: rightNextMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(DateTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2),
        unref(showTime) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          unref(clearable) ? (openBlock(), createBlock(unref(ElButton), {
            key: 0,
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: handleClear
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          createVNode(unref(ElButton), {
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(btnDisabled),
            onClick: _cache[10] || (_cache[10] = ($event) => unref(handleRangeConfirm)(false))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var DateRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps
});
const panelMonthRangeEmits = ["pick", "set-picker-option"];
const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate
}) => {
  const { t } = useLocale();
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, "year");
    if (!unlinkPanels.value) {
      rightDate.value = rightDate.value.subtract(1, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels.value) {
      leftDate.value = leftDate.value.add(1, "year");
    }
    rightDate.value = rightDate.value.add(1, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, "year");
  };
  const leftLabel = computed(() => {
    return `${leftDate.value.year()} ${t("el.datepicker.year")}`;
  });
  const rightLabel = computed(() => {
    return `${rightDate.value.year()} ${t("el.datepicker.year")}`;
  });
  const leftYear = computed(() => {
    return leftDate.value.year();
  });
  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};
const _hoisted_1$h = ["onClick"];
const _hoisted_2$9 = ["disabled"];
const _hoisted_3$3 = ["disabled"];
const unit = "year";
const __default__$w = defineComponent({
  name: "DatePickerMonthRange"
});
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  ...__default__$w,
  props: panelMonthRangeProps,
  emits: panelMonthRangeEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const { shortcuts, disabledDate: disabledDate2, format: format2 } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit,
      onParsedValueChanged
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const {
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
      leftLabel,
      rightLabel,
      leftYear,
      rightYear
    } = useMonthRangeHeader({
      unlinkPanels: toRef(props, "unlinkPanels"),
      leftDate,
      rightDate
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleRangeConfirm();
    };
    const formatToString = (days) => {
      return days.map((day) => day.format(format2));
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const maxDateYear = maxDate2.year();
        rightDate.value = minDateYear === maxDateYear ? maxDate2.add(1, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit);
      }
    }
    emit("set-picker-option", ["formatToString", formatToString]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          {
            "has-sidebar": Boolean(_ctx.$slots.sidebar) || unref(hasShortcuts)
          }
        ])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$h);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(leftPrevYear) && unref(leftPrevYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { [unref(ppNs).is("disabled")]: !unref(enableYearArrow) }
                  ], "d-arrow-right"]),
                  onClick: _cache[1] || (_cache[1] = (...args) => unref(leftNextYear) && unref(leftNextYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$9)) : createCommentVNode("v-if", true),
                createBaseVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-left"]),
                  onClick: _cache[2] || (_cache[2] = (...args) => unref(rightPrevYear) && unref(rightPrevYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$3)) : createCommentVNode("v-if", true),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[3] || (_cache[3] = (...args) => unref(rightNextYear) && unref(rightNextYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
const getPanel = function(type) {
  switch (type) {
    case "daterange":
    case "datetimerange": {
      return DateRangePickPanel;
    }
    case "monthrange": {
      return MonthRangePickPanel;
    }
    default: {
      return DatePickPanel;
    }
  }
};
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    ...datePickerProps
  },
  emits: ["update:modelValue"],
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const ns2 = useNamespace("picker-panel");
    provide("ElPopperOptions", reactive(toRef(props, "popperOptions")));
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns2
    });
    const commonPicker = ref();
    const refProps = {
      focus: (focusStartInput = true) => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.focus(focusStartInput);
      },
      handleOpen: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleOpen();
      },
      handleClose: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleClose();
      }
    };
    expose(refProps);
    const onModelValueUpdated = (val) => {
      emit("update:modelValue", val);
    };
    return () => {
      var _a;
      const format2 = (_a = props.format) != null ? _a : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      const Component = getPanel(props.type);
      return createVNode(CommonPicker, mergeProps(props, {
        "format": format2,
        "type": props.type,
        "ref": commonPicker,
        "onUpdate:modelValue": onModelValueUpdated
      }), {
        default: (scopedProps) => createVNode(Component, scopedProps, null),
        "range-separator": slots["range-separator"]
      });
    };
  }
});
const _DatePicker = DatePicker;
_DatePicker.install = (app) => {
  app.component(_DatePicker.name, _DatePicker);
};
const ElDatePicker = _DatePicker;
const selectGroupKey = "ElSelectGroup";
const selectKey = "ElSelect";
function useOption(props, states) {
  const select2 = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const isObject2 = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = computed(() => {
    if (!select2.props.multiple) {
      return isEqual2(props.value, select2.props.modelValue);
    } else {
      return contains(select2.props.modelValue, props.value);
    }
  });
  const limitReached = computed(() => {
    if (select2.props.multiple) {
      const modelValue = select2.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select2.props.multipleLimit && select2.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject2.value ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject2.value) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select2.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const isEqual2 = (a2, b2) => {
    if (!isObject2.value) {
      return a2 === b2;
    } else {
      const { valueKey } = select2.props;
      return get(a2, valueKey) === get(b2, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select2.hoverIndex = select2.optionsArray.indexOf(instance.proxy);
    }
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select2.props.remote)
      select2.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select2.props;
    if (!Object.is(val, oldVal)) {
      select2.onOptionDestroy(oldVal, instance.proxy);
      select2.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select2.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = toRaw(select2);
  watch(queryChange, (changes) => {
    const { query } = unref(changes);
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select2.filteredOptionsCount--;
    }
  });
  return {
    select: select2,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}
const _sfc_main$G = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns2 = useNamespace("select");
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select: select2, hoverItem } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select2.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key = vm.value;
      const { selected } = select2;
      const selectedOptions = select2.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select2.cachedOptions.get(key) === vm && !doesSelected) {
          select2.cachedOptions.delete(key);
        }
      });
      select2.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select2.handleOptionSelect(vm, true);
      }
    }
    return {
      ns: ns2,
      currentLabel,
      itemSelected,
      isDisabled,
      select: select2,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.ns.be("dropdown", "item"),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      {
        selected: _ctx.itemSelected,
        hover: _ctx.hover
      }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const _sfc_main$F = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select2 = inject(selectKey);
    const ns2 = useNamespace("select");
    const popperClass = computed(() => select2.props.popperClass);
    const isMultiple = computed(() => select2.props.multiple);
    const isFitInputWidth = computed(() => select2.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select2.selectWrapper) == null ? void 0 : _a.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select2.selectWrapper, updateMinWidth);
    });
    return {
      ns: ns2,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function useSelectStates(props) {
  const { t } = useLocale();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false,
    mouseEnter: false
  });
}
const useSelect$1 = (props, states, ctx) => {
  const { t } = useLocale();
  const ns2 = useNamespace("select");
  useDeprecated({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, computed(() => props.suffixTransition === false));
  const reference = ref(null);
  const input = ref(null);
  const tooltipRef = ref(null);
  const tags = ref(null);
  const selectWrapper = ref(null);
  const scrollbar2 = ref(null);
  const hoverOption = ref(-1);
  const queryChange = shallowRef({ query: "" });
  const groupQueryChange = shallowRef("");
  const { form, formItem } = useFormItem();
  const readonly2 = computed(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const showClose = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => ns2.is("reverse", iconComponent.value && states.visible && props.suffixTransition));
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = computed(() => Array.from(states.options.values()));
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option2) => {
      return !option2.created;
    }).some((option2) => {
      return option2.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropMenuVisible = computed({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  watch([() => selectDisabled.value, () => selectSize.value, () => form == null ? void 0 : form.size], () => {
    nextTick(() => {
      resetInputHeight();
    });
  });
  watch(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => states.visible, (val) => {
    var _a, _b, _c;
    if (!val) {
      if (props.filterable) {
        if (isFunction(props.filterMethod)) {
          props.filterMethod("");
        }
        if (isFunction(props.remoteMethod)) {
          props.remoteMethod("");
        }
      }
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      nextTick(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = `${states.selectedLabel}`;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          triggerRef(queryChange);
          triggerRef(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a, _b, _c;
    if (!isClient)
      return;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoverIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option2) => {
      option2.hover = hoverOption.value === option2;
    });
  });
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable)
      return;
    nextTick(() => {
      var _a, _b;
      if (!reference.value)
        return;
      const input2 = reference.value.$el.querySelector("input");
      const _tags = tags.value;
      const sizeInMap = getComponentSize(selectSize.value || (form == null ? void 0 : form.size));
      input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`;
      states.tagInMultiLine = Number.parseFloat(input2.style.height) >= sizeInMap;
      if (states.visible && emptyText.value !== false) {
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      }
    });
  };
  const handleQueryChange = async (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (isFunction(props.filterMethod) || isFunction(props.remoteMethod))) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    nextTick(() => {
      var _a, _b;
      if (states.visible)
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && isFunction(props.remoteMethod)) {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (isFunction(props.filterMethod)) {
      props.filterMethod(val);
      triggerRef(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      triggerRef(queryChange);
      triggerRef(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      await nextTick();
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a;
    if (!props.multiple) {
      const option2 = getOption(props.modelValue);
      if ((_a = option2.props) == null ? void 0 : _a.created) {
        states.createdLabel = option2.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option2.currentLabel;
      states.selected = option2;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    nextTick(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option2;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option2 = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option2)
      return option2;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return get(item, valueKey) === get(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a, _b;
    resetInputWidth();
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple && !props.filterable)
      resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a;
    states.inputWidth = (_a = reference.value) == null ? void 0 : _a.$el.getBoundingClientRect().width;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = debounce((e) => {
    handleQueryChange(e.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e) => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag2) => {
    const index = states.selected.indexOf(tag2);
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag2.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (!isString(value)) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoverIndex = -1;
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option2, byClick) => {
    var _a;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option2.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option2.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option2.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a = input.value) == null ? void 0 : _a.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option2.value);
      emitChange(option2.value);
      states.visible = false;
    }
    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible)
      return;
    nextTick(() => {
      scrollToOption(option2);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject$3(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const setSoftFocus = () => {
    states.softFocus = true;
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option2) => {
    var _a, _b, _c, _d, _e;
    const targetOption = Array.isArray(option2) ? option2[0] : option2;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns2.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar2.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options.delete(key);
    }
  };
  const resetInputState = (e) => {
    if (e.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option2 = states.selected[states.selected.length - 1];
    if (!option2)
      return;
    if (hit === true || hit === false) {
      option2.hitState = hit;
      return hit;
    }
    option2.hitState = !option2.hitState;
    return option2.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      nextTick(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }
        states.visible = true;
      }
      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const blur = () => {
    var _a;
    states.visible = false;
    (_a = reference.value) == null ? void 0 : _a.blur();
  };
  const handleBlur = (event) => {
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const handleKeydownEscape = (event) => {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };
  const toggleMenu = (e) => {
    var _a;
    if (e && !states.mouseEnter) {
      return;
    }
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) {
          states.visible = !states.visible;
        }
      }
      if (states.visible) {
        (_a = input.value || reference.value) == null ? void 0 : _a.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$3(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option2) => option2.visible).every((option2) => option2.disabled));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option2 = optionsArray.value[states.hoverIndex];
      if (option2.disabled === true || option2.states.groupDisabled === true || !option2.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const handleMouseEnter = () => {
    states.mouseEnter = true;
  };
  const handleMouseLeave = () => {
    states.mouseEnter = false;
  };
  return {
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly: readonly2,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar: scrollbar2,
    handleMouseEnter,
    handleMouseLeave
  };
};
const COMPONENT_NAME$4 = "ElSelect";
const _sfc_main$E = defineComponent({
  name: COMPONENT_NAME$4,
  componentName: COMPONENT_NAME$4,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: iconPropType,
      default: circle_close_default
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: iconPropType,
      default: arrow_down_default
    },
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false
    },
    suffixTransition: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      values: Ee,
      default: "bottom-start"
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const nsSelect = useNamespace("select");
    const nsInput = useNamespace("input");
    const { t } = useLocale();
    const states = useSelectStates(props);
    const {
      optionsArray,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar: scrollbar2,
      queryChange,
      groupQueryChange,
      handleMouseEnter,
      handleMouseLeave
    } = useSelect$1(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states);
    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()];
      const _selectSize = unref(selectSize);
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }
      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }
      return classList;
    });
    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: "100%"
    }));
    const tagTextStyle = computed(() => {
      const maxWidth = unref(inputWidth) > 123 ? unref(inputWidth) - 123 : unref(inputWidth) - 75;
      return { maxWidth: `${maxWidth}px` };
    });
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t("el.select.placeholder");
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      useResizeObserver(selectWrapper, handleResize);
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      nextTick(() => {
        const refEl = reference.value && reference.value.$el;
        if (!refEl)
          return;
        inputWidth.value = refEl.getBoundingClientRect().width;
        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e("prefix")}`);
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
        }
      });
      setSelected();
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar: scrollbar2,
      wrapperKls,
      selectTagsStyle,
      nsSelect,
      tagTextStyle,
      handleMouseEnter,
      handleMouseLeave
    };
  }
});
const _hoisted_1$g = ["disabled", "autocomplete"];
const _hoisted_2$8 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(_ctx.wrapperKls),
    onMouseenter: _cache[22] || (_cache[22] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[23] || (_cache[23] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onClick: _cache[24] || (_cache[24] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onShow: _ctx.handleMenuEnter
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: "select-trigger",
          onMouseenter: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = true),
          onMouseleave: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = false)
        }, [
          _ctx.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: normalizeClass(_ctx.nsSelect.e("tags")),
            style: normalizeStyle(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass([
                _ctx.nsSelect.b("tags-wrapper"),
                { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
              ])
            }, [
              createVNode(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
                size: _ctx.collapseTagSize,
                hit: _ctx.selected[0].hitState,
                type: _ctx.tagType,
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.selected[0]))
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", {
                    class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                    style: normalizeStyle(_ctx.tagTextStyle)
                  }, toDisplayString(_ctx.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              _ctx.selected.length > 1 ? (openBlock(), createBlock(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: _ctx.tagType,
                "disable-transitions": ""
              }, {
                default: withCtx(() => [
                  _ctx.collapseTagsTooltip ? (openBlock(), createBlock(_component_el_tooltip, {
                    key: 0,
                    disabled: _ctx.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: _ctx.effect,
                    placement: "bottom",
                    teleported: _ctx.teleported
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                      }, "+ " + toDisplayString(_ctx.selected.length - 1), 3)
                    ]),
                    content: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass(_ctx.nsSelect.e("collapse-tags"))
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected.slice(1), (item, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: idx,
                            class: normalizeClass(_ctx.nsSelect.e("collapse-tag"))
                          }, [
                            (openBlock(), createBlock(_component_el_tag, {
                              key: _ctx.getValueKey(item),
                              class: "in-tooltip",
                              closable: !_ctx.selectDisabled && !item.isDisabled,
                              size: _ctx.collapseTagSize,
                              hit: item.hitState,
                              type: _ctx.tagType,
                              "disable-transitions": "",
                              style: { margin: "2px" },
                              onClose: ($event) => _ctx.deleteTag($event, item)
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", {
                                  class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                                  style: normalizeStyle({
                                    maxWidth: _ctx.inputWidth - 75 + "px"
                                  })
                                }, toDisplayString(item.currentLabel), 7)
                              ]),
                              _: 2
                            }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                          ], 2);
                        }), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                  }, "+ " + toDisplayString(_ctx.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true),
            createCommentVNode(" <div> "),
            !_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            createCommentVNode(" </div> "),
            _ctx.filterable ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.query = $event),
              type: "text",
              class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: normalizeStyle({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[5] || (_cache[5] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[8] || (_cache[8] = withKeys((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
                _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[10] || (_cache[10] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[11] || (_cache[11] = withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[15] || (_cache[15] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_1$g)), [
              [vModelText, _ctx.query]
            ]) : createCommentVNode("v-if", true)
          ], 6)) : createCommentVNode("v-if", true),
          createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: normalizeClass([_ctx.nsSelect.is("focus", _ctx.visible)]),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              withKeys(_ctx.handleKeydownEscape, ["esc"]),
              _cache[19] || (_cache[19] = withKeys(($event) => _ctx.visible = false, ["tab"]))
            ]
          }, createSlots({
            suffix: withCtx(() => [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createBaseVNode("div", _hoisted_2$8, [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, null, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([
                _ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)
              ])
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
              }, toDisplayString(_ctx.emptyText), 3))
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const _sfc_main$D = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns2 = useNamespace("select");
    const visible = ref(true);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const select2 = inject(selectKey);
    onMounted(() => {
      children.value = flattedChildren2(instance.subTree);
    });
    const flattedChildren2 = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a = child.children) == null ? void 0 : _a.length) {
            children2.push(...flattedChildren2(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = toRaw(select2);
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option2) => option2.visible === true);
    }, { flush: "post" });
    return {
      visible,
      ns: ns2
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createBaseVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createBaseVNode("li", null, [
      createBaseVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const skeletonProps = buildProps({
  animated: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: true
  },
  throttle: {
    type: Number
  }
});
const skeletonItemProps = buildProps({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
});
const __default__$v = defineComponent({
  name: "ElSkeletonItem"
});
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  ...__default__$v,
  props: skeletonItemProps,
  setup(__props) {
    const ns2 = useNamespace("skeleton");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns2).e("item"), unref(ns2).e(_ctx.variant)])
      }, [
        _ctx.variant === "image" ? (openBlock(), createBlock(unref(picture_filled_default), { key: 0 })) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var SkeletonItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);
const __default__$u = defineComponent({
  name: "ElSkeleton"
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  ...__default__$u,
  props: skeletonProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("skeleton");
    const uiLoading = useThrottleRender(toRef(props, "loading"), props.throttle);
    expose({
      uiLoading
    });
    return (_ctx, _cache) => {
      return unref(uiLoading) ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        class: [unref(ns2).b(), unref(ns2).is("animated", _ctx.animated)]
      }, _ctx.$attrs), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [
            _ctx.loading ? renderSlot(_ctx.$slots, "template", { key: i }, () => [
              createVNode(SkeletonItem, {
                class: normalizeClass(unref(ns2).is("first")),
                variant: "p"
              }, null, 8, ["class"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
                return openBlock(), createBlock(SkeletonItem, {
                  key: item,
                  class: normalizeClass([
                    unref(ns2).e("paragraph"),
                    unref(ns2).is("last", item === _ctx.rows && _ctx.rows > 1)
                  ]),
                  variant: "p"
                }, null, 8, ["class"]);
              }), 128))
            ]) : createCommentVNode("v-if", true)
          ], 64);
        }), 128))
      ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
    };
  }
});
var Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);
const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem
});
withNoopInstall(SkeletonItem);
const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: iconPropType
  },
  inactiveIcon: {
    type: iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String,
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: {
    type: definePropType(Function)
  },
  size: {
    type: String,
    validator: isValidComponentSize
  },
  tabindex: {
    type: [String, Number]
  }
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
const _hoisted_1$f = ["onClick"];
const _hoisted_2$7 = ["id", "aria-checked", "aria-disabled", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
const _hoisted_3$2 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const COMPONENT_NAME$3 = "ElSwitch";
const __default__$t = defineComponent({
  name: COMPONENT_NAME$3
});
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  ...__default__$t,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const vm = getCurrentInstance();
    const { formItem } = useFormItem();
    const switchSize = useSize();
    const ns2 = useNamespace("switch");
    useDeprecated({
      from: '"value"',
      replacement: '"model-value" or "v-model"',
      scope: COMPONENT_NAME$3,
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/switch.html#attributes",
      type: "Attribute"
    }, computed(() => {
      var _a;
      return !!((_a = vm.vnode.props) == null ? void 0 : _a.value);
    }));
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useDisabled(computed(() => props.loading));
    const isControlled = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns2.b(),
      ns2.m(switchSize.value),
      ns2.is("disabled", switchDisabled.value),
      ns2.is("checked", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    watch(() => props.modelValue, () => {
      isControlled.value = true;
    });
    watch(() => props.value, () => {
      isControlled.value = false;
    });
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : props.value;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, (val) => {
      var _a;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError(COMPONENT_NAME$3, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const styles = computed(() => {
      return ns2.cssVarBlock({
        ...props.activeColor ? { "on-color": props.activeColor } : null,
        ...props.inactiveColor ? { "off-color": props.inactiveColor } : null,
        ...props.borderColor ? { "border-color": props.borderColor } : null
      });
    });
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    onMounted(() => {
      input.value.checked = checked.value;
    });
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        style: normalizeStyle(unref(styles)),
        onClick: withModifiers(switchValue, ["prevent"])
      }, [
        createBaseVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns2).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: withKeys(switchValue, ["enter"])
        }, null, 42, _hoisted_2$7),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([
            unref(ns2).e("label"),
            unref(ns2).em("label", "left"),
            unref(ns2).is("active", !unref(checked))
          ])
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3$2)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns2).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns2).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns2).is("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(ns2).is("text")),
              "aria-hidden": !unref(checked)
            }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, _hoisted_4)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ns2).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns2).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(loading_default))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass([
            unref(ns2).e("label"),
            unref(ns2).em("label", "right"),
            unref(ns2).is("active", unref(checked))
          ])
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, _hoisted_5)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1$f);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);
const ElSwitch = withInstall(Switch);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var matchHtmlRegExp = /["'&<>]/;
var escapeHtml_1 = escapeHtml;
function escapeHtml(string) {
  var str = "" + string;
  var match = matchHtmlRegExp.exec(str);
  if (!match) {
    return str;
  }
  var escape;
  var html = "";
  var index = 0;
  var lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escape = "&quot;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escape;
  }
  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
const getCell = function(event) {
  var _a;
  return (_a = event.target) == null ? void 0 : _a.closest("td");
};
const isObject$1 = function(obj) {
  return obj !== null && typeof obj === "object";
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (typeof by === "string") {
          return get(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject$1(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject$1(value) ? get(value, sortKey) : value];
  };
  const compare = function(a2, b2) {
    if (sortMethod) {
      return sortMethod(a2.value, b2.value);
    }
    for (let i = 0, len = a2.key.length; i < len; i++) {
      if (a2.key[i] < b2.key[i]) {
        return -1;
      }
      if (a2.key[i] > b2.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index) => {
    return {
      value,
      index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort((a2, b2) => {
    let order = compare(a2, b2);
    if (!order) {
      order = a2.index - b2.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table2, columnId) {
  let column = null;
  table2.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table2, columnKey) {
  let column = null;
  for (let i = 0; i < table2.columns.length; i++) {
    const item = table2.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  if (!column)
    throwError("ElTable", `No column matching with column-key: ${columnKey}`);
  return column;
};
const getColumnByCell = function(table2, cell, namespace2) {
  const matches = (cell.className || "").match(new RegExp(`${namespace2}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table2, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (typeof rowKey === "string") {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function(array, rowKey) {
  const arrayMap2 = {};
  (array || []).forEach((row, index) => {
    arrayMap2[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap2;
};
function mergeOptions(defaults, config) {
  const options = {};
  let key;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      const value = config[key];
      if (typeof value !== "undefined") {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width === "")
    return width;
  if (width !== void 0) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (minWidth !== void 0) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (typeof height === "number") {
    return height;
  }
  if (typeof height === "string") {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a2, b2) => (...args) => a2(b2(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;
  const toggleStatus = (type) => {
    if (type === "add") {
      statusArr.push(row);
    } else {
      statusArr.splice(index, 1);
    }
    changed = true;
    if (isArray$1(row.children)) {
      row.children.forEach((item) => {
        toggleRowStatus(statusArr, item, newVal != null ? newVal : !included);
      });
    }
  };
  if (isBoolean(newVal)) {
    if (newVal && !included) {
      toggleStatus("add");
    } else if (!newVal && included) {
      toggleStatus("remove");
    }
  } else {
    included ? toggleStatus("remove") : toggleStatus("add");
  }
  return changed;
}
function walkTreeNode(root2, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil2 = (array) => !(Array.isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil2(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root2.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil2(children)) {
      _walker(item, children, 0);
    }
  });
}
let removePopper;
function createTablePopper(parentNode, trigger, popperContent, popperOptions, tooltipEffect) {
  const { nextZIndex } = useZIndex();
  const ns2 = parentNode == null ? void 0 : parentNode.dataset.prefix;
  const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns2}-scrollbar__wrap`);
  function renderContent() {
    const isLight = tooltipEffect === "light";
    const content2 = document.createElement("div");
    content2.className = `${ns2}-popper ${isLight ? "is-light" : "is-dark"}`;
    popperContent = escapeHtml_1(popperContent);
    content2.innerHTML = popperContent;
    content2.style.zIndex = String(nextZIndex());
    parentNode == null ? void 0 : parentNode.appendChild(content2);
    return content2;
  }
  function renderArrow() {
    const arrow2 = document.createElement("div");
    arrow2.className = `${ns2}-popper__arrow`;
    return arrow2;
  }
  function showPopper() {
    popperInstance && popperInstance.update();
  }
  removePopper == null ? void 0 : removePopper();
  removePopper = () => {
    try {
      popperInstance && popperInstance.destroy();
      content && (parentNode == null ? void 0 : parentNode.removeChild(content));
      trigger.removeEventListener("mouseenter", showPopper);
      trigger.removeEventListener("mouseleave", removePopper);
      scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", removePopper);
      removePopper = void 0;
    } catch (e) {
    }
  };
  let popperInstance = null;
  const content = renderContent();
  const arrow = renderArrow();
  content.appendChild(arrow);
  popperInstance = yn(trigger, content, {
    strategy: "absolute",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "arrow",
        options: {
          element: arrow,
          padding: 10
        }
      }
    ],
    ...popperOptions
  });
  trigger.addEventListener("mouseenter", showPopper);
  trigger.addEventListener("mouseleave", removePopper);
  scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
  return popperInstance;
}
function getCurrentColumns(column) {
  if (column.children) {
    return flatMap(column.children, getCurrentColumns);
  } else {
    return [column];
  }
}
function getColSpan(colSpan, column) {
  return colSpan + column.colSpan;
}
const isFixedColumn = (index, fixed, store, realColumns) => {
  let start = 0;
  let after = index;
  const columns = store.states.columns.value;
  if (realColumns) {
    const curColumns = getCurrentColumns(realColumns[index]);
    const preColumns = columns.slice(0, columns.indexOf(curColumns[0]));
    start = preColumns.reduce(getColSpan, 0);
    after = start + curColumns.reduce(getColSpan, 0) - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace2, index, fixed, store, realColumns, offset = 0) => {
  const classes = [];
  const { direction, start, after } = isFixedColumn(index, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace2}-fixed-column--${direction}`);
    if (isLeft && after + offset === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start - offset === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index, fixed, store, realColumns) => {
  const {
    direction,
    start = 0,
    after = 0
  } = isFixedColumn(index, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, start).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};
function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded);
    if (changed) {
      instance.emit("expand-change", row, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.includes(row);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const { data, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (!data.includes(oldCurrentRow) && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (currentRow.value === null) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree$1(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const instance = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys2 = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys2.length)
      return res;
    keys2.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (Array.isArray(children)) {
        res[parentId] = {
          children: children.map((row) => getRowIdentity(row, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll = ((_a) => (_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value)()) => {
    var _a2;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys2 = Object.keys(nested);
    const newTreeData = {};
    if (keys2.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys2.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_a2 = instance.store) == null ? void 0 : _a2.updateTableScrollY();
  };
  watch(() => expandRowKeys.value, () => {
    updateTreeData(true);
  });
  watch(() => normalizedData.value, () => {
    updateTreeData();
  });
  watch(() => normalizedLazyNode.value, () => {
    updateTreeData();
  });
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row, expanded);
      }
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = treeData.value[id];
    if (lazy.value && data && "loaded" in data && !data.loaded) {
      loadData(row, id, data);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data) => {
        if (!Array.isArray(data)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance.emit("expand-change", row, true);
      });
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName
    }
  };
}
const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === "string") {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  watch(data, () => instance.state && scheduleLayout(false), {
    deep: true
  });
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateChildFixed = (column) => {
    var _a2;
    (_a2 = column.children) == null ? void 0 : _a2.forEach((childColumn) => {
      childColumn.fixed = column.fixed;
      updateChildFixed(childColumn);
    });
  };
  const updateColumns = () => {
    _columns.value.forEach((column) => {
      updateChildFixed(column);
    });
    fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
      _columns.value[0].fixed = true;
      fixedColumns.value.unshift(_columns.value[0]);
    }
    const notFixedColumns = _columns.value.filter((column) => !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    return selection.value.includes(row);
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    if (oldSelection.length) {
      selection.value = [];
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const selectedMap = getKeysMap(selection.value, rowKey.value);
      const dataMap = getKeysMap(data.value, rowKey.value);
      for (const key in selectedMap) {
        if (hasOwn(selectedMap, key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => !deleted.includes(item));
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row, selected = void 0, emitChange = true) => {
    const changed = toggleRowStatus(selection.value, row, selected);
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a2, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
    data.value.forEach((row, index) => {
      const rowIndex = index + childrenCount;
      if (selectable.value) {
        if (selectable.value.call(null, row, rowIndex) && toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
    });
    if (selectionChanged) {
      instance.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance.emit("select-all", selection.value);
  };
  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value);
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value);
      const rowInfo = selectedMap[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row;
      }
    });
  };
  const updateAllSelected = () => {
    var _a2, _b, _c;
    if (((_a2 = data.value) == null ? void 0 : _a2.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    let selectedMap;
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value);
    }
    const isSelected2 = function(row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey.value)];
      } else {
        return selection.value.includes(row);
      }
    };
    let isAllSelected_ = true;
    let selectedCount = 0;
    let childrenCount = 0;
    for (let i = 0, j = (data.value || []).length; i < j; i++) {
      const keyProp = (_c = (_b = instance == null ? void 0 : instance.store) == null ? void 0 : _b.states) == null ? void 0 : _c.rowKey.value;
      const rowIndex = i + childrenCount;
      const item = data.value[i];
      const isRowSelectable = selectable.value && selectable.value.call(null, item, rowIndex);
      if (!isSelected2(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false;
          break;
        }
      } else {
        selectedCount++;
      }
      childrenCount += getChildrenCount(getRowIdentity(item, keyProp));
    }
    if (selectedCount === 0)
      isAllSelected_ = false;
    isAllSelected.value = isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a2;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (columns2, values) => {
    if (!Array.isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) => column.filterMethod.call(null, value, row, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys2 = Object.keys(panels);
    if (!keys2.length)
      return;
    if (typeof columnKeys === "string") {
      columnKeys = [columnKeys];
    }
    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys2.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys2.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    loadOrToggle,
    states: treeStates
  } = useTree$1({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    states: {
      tableSize,
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}
function replaceColumn(array, column) {
  return array.map((item) => {
    var _a;
    if (item.id === column.id) {
      return column;
    } else if ((_a = item.children) == null ? void 0 : _a.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array) {
  array.forEach((item) => {
    var _a, _b;
    item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns2 = useNamespace("table");
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
        instance.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent) {
      const array = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array.push(column);
        newColumns = array;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        newColumns = replaceColumn(array, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    removeColumn(states, column, parent) {
      const array = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        if (parent.children.length === 0) {
          delete parent.children;
        }
        states._columns.value = replaceColumn(array, parent);
      } else {
        const index = array.indexOf(column);
        if (index > -1) {
          array.splice(index, 1);
          states._columns.value = array;
        }
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find((column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn, sortProp, sortOrder } = states;
      const columnValue = unref(sortingColumn), propValue = unref(sortProp), orderValue = unref(sortOrder);
      if (orderValue === null) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ignore = { filter: true };
      instance.store.execQuery(ignore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: columnValue,
          prop: propValue,
          order: orderValue
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance.store.toggleAllSelection();
    },
    rowSelectedChanged(_states, row) {
      instance.store.toggleRowSelection(row);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(_states, row) {
      instance.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [instance.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns: ns2,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}
const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function createStore(table2, props) {
  if (!table2) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(() => getArrKeysValue(props, key), (value) => {
      handleValue(value, key, store);
    });
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (typeof InitialStateMap[propsKey] === "object") {
    storeKey = storeKey.key;
    newVal = newVal || InitialStateMap[propsKey].default;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys2) {
  if (keys2.includes(".")) {
    const keyList = keys2.split(".");
    let value = props;
    keyList.forEach((key) => {
      value = value[key];
    });
    return value;
  } else {
    return props[keys2];
  }
}
class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (height === null)
      return false;
    const scrollBarRef = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && scrollBarRef) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    if (!isClient)
      return;
    const el = this.table.vnode.el;
    value = parseHeight(value);
    this.height.value = Number(value);
    if (!el && (value || value === 0))
      return nextTick(() => this.setHeight(value, prop));
    if (typeof value === "number") {
      el.style[prop] = `${value}px`;
      this.updateElsHeight();
    } else if (typeof value === "string") {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!isClient)
      return;
    const fit = this.fit;
    const bodyWidth = this.table.vnode.el.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    const flexColumns = flattenColumns.filter((column) => typeof column.width !== "number");
    flattenColumns.forEach((column) => {
      if (typeof column.width === "number" && column.realWidth)
        column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += Number(column.width || column.minWidth || 80);
      });
      if (bodyMinWidth <= bodyWidth) {
        this.scrollX.value = false;
        const totalFlexWidth = bodyWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index) => {
            if (index === 0)
              return;
            const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = Number(column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        this.scrollX.value = true;
        flexColumns.forEach((column) => {
          column.realWidth = Number(column.minWidth);
        });
      }
      this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
      this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = Number(column.width || column.minWidth);
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX.value = bodyMinWidth > bodyWidth;
      this.bodyWidth.value = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns.value;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach((column) => {
        fixedWidth += Number(column.realWidth || column.width);
      });
      this.fixedWidth.value = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns.value;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach((column) => {
        rightFixedWidth += Number(column.realWidth || column.width);
      });
      this.rightFixedWidth.value = rightFixedWidth;
    }
    this.notifyObservers("columns");
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a, _b;
      switch (event) {
        case "columns":
          (_a = observer.state) == null ? void 0 : _a.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
const _sfc_main$z = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrow_down_default,
    ArrowUp: arrow_up_default
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const ns2 = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip2 = ref(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterValue = computed({
      get: () => {
        var _a;
        return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter2) => {
      return filter2.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltip2.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      ns: ns2,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip: tooltip2
    };
  }
});
const _hoisted_1$e = { key: 0 };
const _hoisted_2$6 = ["disabled"];
const _hoisted_3$1 = ["label", "onClick"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltip",
    visible: _ctx.tooltipVisible,
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": _ctx.ns.b(),
    persistent: ""
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$e, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          createVNode(_component_el_scrollbar, {
            "wrap-class": _ctx.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox_group, {
                modelValue: _ctx.filteredValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
                class: normalizeClass(_ctx.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter2) => {
                    return openBlock(), createBlock(_component_el_checkbox, {
                      key: filter2.value,
                      label: filter2.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter2.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.ns.e("bottom"))
        }, [
          createBaseVNode("button", {
            class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
            disabled: _ctx.filteredValue.length === 0,
            type: "button",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
          }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_2$6),
          createBaseVNode("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
          }, toDisplayString(_ctx.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("list"))
      }, [
        createBaseVNode("li", {
          class: normalizeClass([
            _ctx.ns.e("list-item"),
            {
              [_ctx.ns.is("active")]: _ctx.filterValue === void 0 || _ctx.filterValue === null
            }
          ]),
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null))
        }, toDisplayString(_ctx.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter2) => {
          return openBlock(), createElementBlock("li", {
            key: filter2.value,
            class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter2))]),
            label: filter2.value,
            onClick: ($event) => _ctx.handleSelect(filter2.value)
          }, toDisplayString(filter2.text), 11, _hoisted_3$1);
        }), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
          `${_ctx.ns.namespace.value}-none-outline`
        ]),
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showFilterPanel && _ctx.showFilterPanel(...args))
      }, [
        createVNode(_component_el_icon, null, {
          default: withCtx(() => [
            _ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function useLayoutObserver(root2) {
  const instance = getCurrentInstance();
  onBeforeMount(() => {
    tableLayout.value.addObserver(instance);
  });
  onMounted(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance);
  });
  const tableLayout = computed(() => {
    const layout = root2.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a;
    const cols = ((_a = root2.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      const name = col.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a, _b;
    const cols = ((_a = root2.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root2.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
const TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
  const instance = getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  const dragState = ref({});
  const handleMouseDown = (event, column) => {
    if (!isClient)
      return;
    if (column.children && column.children.length > 0)
      return;
    if (draggingColumn.value && props.border) {
      dragging.value = true;
      const table2 = parent;
      emit("set-drag-visible", true);
      const tableEl = table2 == null ? void 0 : table2.vnode.el;
      const tableLeft = tableEl.getBoundingClientRect().left;
      const columnEl = instance.vnode.el.querySelector(`th.${column.id}`);
      const columnRect = columnEl.getBoundingClientRect();
      const minLeft = columnRect.left - tableLeft + 30;
      addClass(columnEl, "noclick");
      dragState.value = {
        startMouseLeft: event.clientX,
        startLeft: columnRect.right - tableLeft,
        startColumnLeft: columnRect.left - tableLeft,
        tableLeft
      };
      const resizeProxy = table2 == null ? void 0 : table2.refs.resizeProxy;
      resizeProxy.style.left = `${dragState.value.startLeft}px`;
      document.onselectstart = function() {
        return false;
      };
      document.ondragstart = function() {
        return false;
      };
      const handleMouseMove2 = (event2) => {
        const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
        const proxyLeft = dragState.value.startLeft + deltaLeft;
        resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
      };
      const handleMouseUp = () => {
        if (dragging.value) {
          const { startColumnLeft, startLeft } = dragState.value;
          const finalLeft = Number.parseInt(resizeProxy.style.left, 10);
          const columnWidth = finalLeft - startColumnLeft;
          column.width = column.realWidth = columnWidth;
          table2 == null ? void 0 : table2.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
          requestAnimationFrame(() => {
            props.store.scheduleLayout(false, true);
          });
          document.body.style.cursor = "";
          dragging.value = false;
          draggingColumn.value = null;
          dragState.value = {};
          emit("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", handleMouseMove2);
        document.removeEventListener("mouseup", handleMouseUp);
        document.onselectstart = null;
        document.ondragstart = null;
        setTimeout(() => {
          removeClass(columnEl, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", handleMouseMove2);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };
  const handleMouseMove = (event, column) => {
    var _a;
    if (column.children && column.children.length > 0)
      return;
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (!column || !column.resizable)
      return;
    if (!dragging.value && props.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = document.body.style;
      if (rect.width > 12 && rect.right - event.pageX < 8) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    if (!isClient)
      return;
    document.body.style.cursor = "";
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index = sortOrders.indexOf(order || null);
    return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    var _a;
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (target) {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns2 = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (typeof headerRowStyle === "function") {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (typeof headerRowClassName === "string") {
      classes.push(headerRowClassName);
    } else if (typeof headerRowClassName === "function") {
      classes.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    var _a;
    let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
    if (typeof headerCellStyles === "function") {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = getFixedColumnsClass(ns2.b(), columnIndex, column.fixed, props.store, row);
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (typeof headerCellClassName === "string") {
      classes.push(headerCellClassName);
    } else if (typeof headerCellClassName === "function") {
      classes.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns2.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col) => col.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
var TableHeader = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns2 = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    onMounted(async () => {
      await nextTick();
      await nextTick();
      const { prop, order } = props.defaultSort;
      parent == null ? void 0 : parent.store.commit("sort", { prop, order, init: true });
    });
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns: ns2,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    const {
      ns: ns2,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent
    } = this;
    let rowSpan = 1;
    return h$1("thead", {
      class: { [ns2.is("group")]: isGroup }
    }, columnRows.map((subColumns, rowIndex) => h$1("tr", {
      class: getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => {
      if (column.rowSpan > rowSpan) {
        rowSpan = column.rowSpan;
      }
      return h$1("th", {
        class: getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowspan: column.rowSpan,
        style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => handleHeaderClick($event, column),
        onContextmenu: ($event) => handleHeaderContextMenu($event, column),
        onMousedown: ($event) => handleMouseDown($event, column),
        onMousemove: ($event) => handleMouseMove($event, column),
        onMouseout: handleMouseOut
      }, [
        h$1("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store,
            _self: $parent
          }) : column.label,
          column.sortable && h$1("span", {
            onClick: ($event) => handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            h$1("i", {
              onClick: ($event) => handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            h$1("i", {
              onClick: ($event) => handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && h$1(FilterPanel, {
            store,
            placement: column.filterPlacement || "bottom-start",
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          })
        ])
      ]);
    }))));
  }
});
function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h$1("div"));
  const handleEvent = (event, row, name) => {
    var _a;
    const table2 = parent;
    const cell = getCell(event);
    let column;
    const namespace2 = (_a = table2 == null ? void 0 : table2.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace2);
      if (column) {
        table2 == null ? void 0 : table2.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table2 == null ? void 0 : table2.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce((index) => {
    props.store.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce(() => {
    props.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row, tooltipEffect) => {
    var _a;
    const table2 = parent;
    const cell = getCell(event);
    const namespace2 = (_a = table2 == null ? void 0 : table2.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      const column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace2);
      const hoverState = table2.hoverState = { cell, column, row };
      table2 == null ? void 0 : table2.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, `${namespace2}-tooltip`) && cellChild.childNodes.length)) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range.getBoundingClientRect().width;
    const padding = (Number.parseInt(getStyle(cellChild, "paddingLeft"), 10) || 0) + (Number.parseInt(getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      createTablePopper(parent == null ? void 0 : parent.refs.tableWrapper, cell, cell.innerText || cell.textContent, {
        placement: "top",
        strategy: "fixed"
      }, tooltipEffect);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns2 = useNamespace("table");
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (typeof rowStyle === "function") {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex) => {
    const classes = [ns2.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === props.store.states.currentRow.value) {
      classes.push("current-row");
    }
    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns2.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (typeof rowClassName === "string") {
      classes.push(rowClassName);
    } else if (typeof rowClassName === "function") {
      classes.push(rowClassName.call(null, {
        row,
        rowIndex
      }));
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (typeof cellStyle === "function") {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row, column, offset) => {
    const fixedClasses = getFixedColumnsClass(ns2.b(), columnIndex, props == null ? void 0 : props.fixed, props.store, void 0, offset);
    const classes = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (typeof cellClassName === "string") {
      classes.push(cellClassName);
    } else if (typeof cellClassName === "function") {
      classes.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns2.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn2 = parent == null ? void 0 : parent.props.spanMethod;
    if (typeof fn2 === "function") {
      const result = fn2({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (Array.isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (typeof result === "object") {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index) => {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
    return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}
function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns2 = useNamespace("table");
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  const firstDefaultColumnIndex = computed(() => {
    return props.store.states.columns.value.findIndex(({ type }) => type === "default");
  });
  const getKeyOfRow = (row, index) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index;
  };
  const rowRender = (row, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns2.em("row", `level-${treeRowData.level}`));
      display = treeRowData.display;
    }
    const displayStyle = display ? null : {
      display: "none"
    };
    return h$1("tr", {
      style: [displayStyle, getRowStyle(row, $index)],
      class: rowClasses,
      key: getKeyOfRow(row, $index),
      onDblclick: ($event) => handleDoubleClick($event, row),
      onClick: ($event) => handleClick($event, row),
      onContextmenu: ($event) => handleContextMenu($event, row),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = { ...column };
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data = {
        store: props.store,
        _self: props.context || parent,
        column: columnData,
        row,
        $index,
        cellIndex,
        expanded
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === "boolean") {
          data.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      const baseKey = `${$index},${cellIndex}`;
      const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
      const tdChildren = cellChildren(cellIndex, column, data);
      return h$1("td", {
        style: getCellStyle($index, cellIndex, row, column),
        class: getCellClass($index, cellIndex, row, column, colspan - 1),
        key: `${patchKey}${baseKey}`,
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, row, tooltipEffect),
        onMouseleave: handleCellMouseLeave
      }, [tdChildren]);
    }));
  };
  const cellChildren = (cellIndex, column, data) => {
    return column.renderCell(data);
  };
  const wrappedRowRender = (row, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, void 0, expanded);
      const renderExpanded = parent.renderExpanded;
      if (expanded) {
        if (!renderExpanded) {
          console.error("[Element Error]renderExpanded is required.");
          return tr;
        }
        return [
          [
            tr,
            h$1("tr", {
              key: `expanded-row__${tr.key}`
            }, [
              h$1("td", {
                colspan: columns.length,
                class: `${ns2.e("cell")} ${ns2.e("expanded-cell")}`
              }, [renderExpanded({ row, $index, store, expanded })])
            ])
          ]
        ];
      } else {
        return [[tr]];
      }
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (typeof cur.lazy === "boolean") {
          if (typeof cur.loaded === "boolean" && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, $index, treeRowData)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (childKey === void 0 || childKey === null) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (typeof cur.lazy === "boolean") {
                if (typeof cur.loaded === "boolean" && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}
const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns2 = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      if (!props.store.states.isComplex.value || !isClient)
        return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = (fn2) => window.setTimeout(fn2, 16);
      }
      raf(() => {
        const el = instance == null ? void 0 : instance.vnode.el;
        const rows = Array.from((el == null ? void 0 : el.children) || []).filter((e) => e == null ? void 0 : e.classList.contains(`${ns2.e("row")}`));
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    return {
      ns: ns2,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data = store.states.data.value || [];
    return h$1("tbody", {}, [
      data.reduce((acc, row) => {
        return acc.concat(wrappedRowRender(row, acc.length));
      }, [])
    ]);
  }
});
function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every((column) => column.width === void 0)) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h$1("colgroup", {}, columns.map((column) => h$1("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];
function useMapState() {
  const table2 = inject(TABLE_INJECTION_KEY);
  const store = table2 == null ? void 0 : table2.store;
  const leftFixedLeafCount = computed(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = computed(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = computed(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}
function useStyle$1(props) {
  const { columns } = useMapState();
  const ns2 = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes = [
      ns2.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns2.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns2.is("leaf"));
    }
    return classes;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}
var TableFooter = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
    const ns2 = useNamespace("table");
    return {
      ns: ns2,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const {
      columns,
      getCellStyles,
      getCellClasses,
      summaryMethod,
      sumText,
      ns: ns2
    } = this;
    const data = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data
      });
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = sumText;
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }
    return h$1("table", {
      class: ns2.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hColgroup({
        columns
      }),
      h$1("tbody", [
        h$1("tr", {}, [
          ...columns.map((column, cellIndex) => h$1("td", {
            key: cellIndex,
            colspan: column.colSpan,
            rowspan: column.rowSpan,
            class: getCellClasses(columns, cellIndex),
            style: getCellStyles(column, cellIndex)
          }, [
            h$1("div", {
              class: ["cell", column.labelClassName]
            }, [sums[cellIndex]])
          ]))
        ])
      ])
    ]);
  }
});
function useUtils(store) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row, selected) => {
    store.toggleRowSelection(row, selected, false);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort
  };
}
function useStyle(props, layout, store, table2) {
  const isHidden = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null,
    headerHeight: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  const tableScrollHeight = ref(0);
  const bodyScrollHeight = ref(0);
  const headerScrollHeight = ref(0);
  const footerScrollHeight = ref(0);
  watchEffect(() => {
    layout.setHeight(props.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!unref(rowKey) || !unref(currentRowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  watch(() => props.data, (data) => {
    table2.store.commit("setData", data);
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table2.store.commit("setHoverRow", null);
    if (table2.hoverState)
      table2.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table2.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    requestAnimationFrame(syncPosition);
  };
  onMounted(async () => {
    await nextTick();
    store.updateColumns();
    bindEvents();
    requestAnimationFrame(doLayout);
    const el = table2.vnode.el;
    const tableHeader = table2.refs.headerWrapper;
    if (props.flexible && el && el.parentElement) {
      el.parentElement.style.minWidth = "0";
    }
    resizeState.value = {
      width: tableWidth.value = el.offsetWidth,
      height: el.offsetHeight,
      headerHeight: props.showHeader && tableHeader ? tableHeader.offsetHeight : null
    };
    store.states.columns.value.forEach((column) => {
      if (column.filteredValue && column.filteredValue.length) {
        table2.store.commit("filterChange", {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    table2.$ready = true;
  });
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { tableWrapper } = table2.refs;
    setScrollClassByEl(tableWrapper, className);
  };
  const hasScrollClass = (className) => {
    const { tableWrapper } = table2.refs;
    return !!(tableWrapper && tableWrapper.classList.contains(className));
  };
  const syncPosition = function() {
    if (!table2.refs.scrollBarRef)
      return;
    if (!layout.scrollX.value) {
      const scrollingNoneClass = "is-scrolling-none";
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass);
      }
      return;
    }
    const scrollContainer = table2.refs.scrollBarRef.wrapRef;
    if (!scrollContainer)
      return;
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
    const { headerWrapper, footerWrapper } = table2.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  };
  const bindEvents = () => {
    if (!table2.refs.scrollBarRef)
      return;
    if (table2.refs.scrollBarRef.wrapRef) {
      useEventListener(table2.refs.scrollBarRef.wrapRef, "scroll", syncPosition, {
        passive: true
      });
    }
    if (props.fit) {
      useResizeObserver(table2.vnode.el, resizeListener);
    } else {
      useEventListener(window, "resize", resizeListener);
    }
    useResizeObserver(table2.refs.bodyWrapper, () => {
      var _a, _b;
      resizeListener();
      (_b = (_a = table2.refs) == null ? void 0 : _a.scrollBarRef) == null ? void 0 : _b.update();
    });
  };
  const resizeListener = () => {
    var _a, _b, _c;
    const el = table2.vnode.el;
    if (!table2.$ready || !el)
      return;
    let shouldUpdateLayout = false;
    const {
      width: oldWidth,
      height: oldHeight,
      headerHeight: oldHeaderHeight
    } = resizeState.value;
    const width = tableWidth.value = el.offsetWidth;
    if (oldWidth !== width) {
      shouldUpdateLayout = true;
    }
    const height = el.offsetHeight;
    if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
      shouldUpdateLayout = true;
    }
    const tableHeader = props.tableLayout === "fixed" ? table2.refs.headerWrapper : (_a = table2.refs.tableHeaderRef) == null ? void 0 : _a.$el;
    if (props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) !== oldHeaderHeight) {
      shouldUpdateLayout = true;
    }
    tableScrollHeight.value = ((_b = table2.refs.tableWrapper) == null ? void 0 : _b.scrollHeight) || 0;
    headerScrollHeight.value = (tableHeader == null ? void 0 : tableHeader.scrollHeight) || 0;
    footerScrollHeight.value = ((_c = table2.refs.footerWrapper) == null ? void 0 : _c.offsetHeight) || 0;
    bodyScrollHeight.value = tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value;
    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height,
        headerHeight: props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) || 0
      };
      doLayout();
    }
  };
  const tableSize = useSize();
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length)
      return null;
    let height = "100%";
    if (props.height && bodyScrollHeight.value) {
      height = `${bodyScrollHeight.value}px`;
    }
    const width = tableWidth.value;
    return {
      width: width ? `${width}px` : "",
      height
    };
  });
  const tableInnerStyle = computed(() => {
    if (props.height) {
      return {
        height: !Number.isNaN(Number(props.height)) ? `${props.height}px` : props.height
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: !Number.isNaN(Number(props.maxHeight)) ? `${props.maxHeight}px` : props.maxHeight
      };
    }
    return {};
  });
  const scrollbarStyle = computed(() => {
    if (props.height) {
      return {
        height: "100%"
      };
    }
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = props.maxHeight;
        const reachMaxHeight = tableScrollHeight.value >= Number(maxHeight);
        if (reachMaxHeight) {
          return {
            maxHeight: `${tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value}px`
          };
        }
      } else {
        return {
          maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
        };
      }
    }
    return {};
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table2.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    emptyBlockStyle,
    handleFixedMousewheel,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
    tableInnerStyle,
    scrollbarStyle
  };
}
var defaultProps$1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  },
  flexible: Boolean
};
const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar2 = scrollBarRef.value;
    if (scrollbar2) {
      scrollbar2.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar2 = scrollBarRef.value;
    if (scrollbar2 && isNumber(offset) && ["Top", "Left"].includes(position)) {
      scrollbar2[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};
let tableIdSeed = 1;
const _sfc_main$y = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(props) {
    const { t } = useLocale();
    const ns2 = useNamespace("table");
    const table2 = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table2);
    const store = createStore(table2, props);
    table2.store = store;
    const layout = new TableLayout({
      store: table2.store,
      table: table2,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table2.layout = layout;
    const isEmpty2 = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = useUtils(store);
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle
    } = useStyle(props, layout, store, table2);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce(doLayout, 50);
    const tableId = `${ns2.namespace.value}-table_${tableIdSeed++}`;
    table2.tableId = tableId;
    table2.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed(() => props.sumText || t("el.table.sumText"));
    const computedEmptyText = computed(() => {
      return props.emptyText || t("el.table.emptyText");
    });
    return {
      ns: ns2,
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty: isEmpty2,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t,
      setDragVisible,
      context: table2,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop
    };
  }
});
const _hoisted_1$d = ["data-prefix"];
const _hoisted_2$5 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_table_footer = resolveComponent("table-footer");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseLeave())
  }, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.ns.e("inner-wrapper")),
      style: normalizeStyle(_ctx.tableInnerStyle)
    }, [
      createBaseVNode("div", _hoisted_2$5, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(_ctx.ns.e("header-wrapper"))
      }, [
        createBaseVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(_ctx.ns.e("header")),
          style: normalizeStyle(_ctx.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_header, {
            ref: "tableHeaderRef",
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            onSetDragVisible: _ctx.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createBaseVNode("div", {
        ref: "bodyWrapper",
        class: normalizeClass(_ctx.ns.e("body-wrapper"))
      }, [
        createVNode(_component_el_scrollbar, {
          ref: "scrollBarRef",
          "view-style": _ctx.scrollbarViewStyle,
          "wrap-style": _ctx.scrollbarStyle,
          always: _ctx.scrollbarAlwaysOn
        }, {
          default: withCtx(() => [
            createBaseVNode("table", {
              ref: "tableBody",
              class: normalizeClass(_ctx.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: _ctx.bodyWidth,
                tableLayout: _ctx.tableLayout
              })
            }, [
              createVNode(_component_hColgroup, {
                columns: _ctx.store.states.columns.value,
                "table-layout": _ctx.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                key: 0,
                ref: "tableHeaderRef",
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                onSetDragVisible: _ctx.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(_component_table_body, {
                context: _ctx.context,
                highlight: _ctx.highlightCurrentRow,
                "row-class-name": _ctx.rowClassName,
                "tooltip-effect": _ctx.tooltipEffect,
                "row-style": _ctx.rowStyle,
                store: _ctx.store,
                stripe: _ctx.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "row-style", "store", "stripe"])
            ], 6),
            _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(_ctx.emptyBlockStyle),
              class: normalizeClass(_ctx.ns.e("empty-block"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.ns.e("empty-text"))
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(_ctx.ns.e("append-wrapper"))
            }, [
              renderSlot(_ctx.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      _ctx.showSummary ? withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        ref: "footerWrapper",
        class: normalizeClass(_ctx.ns.e("footer-wrapper"))
      }, [
        createVNode(_component_table_footer, {
          border: _ctx.border,
          "default-sort": _ctx.defaultSort,
          store: _ctx.store,
          style: normalizeStyle(_ctx.tableBodyStyles),
          "sum-text": _ctx.computedSumText,
          "summary-method": _ctx.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [vShow, !_ctx.isEmpty],
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 6),
    withDirectives(createBaseVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, _hoisted_1$d);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};
const getDefaultClassName = (type) => {
  return defaultClassNames[type] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h$1(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return h$1(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row)
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index = column.index;
      if (typeof index === "number") {
        i = $index + index;
      } else if (typeof index === "function") {
        i = index($index);
      }
      return h$1("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({
      row,
      store,
      expanded
    }) {
      const { ns: ns2 } = store;
      const classes = [ns2.e("expand-icon")];
      if (expanded) {
        classes.push(ns2.em("expand-icon", "expanded"));
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h$1("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            h$1(ElIcon, null, {
              default: () => {
                return [h$1(arrow_right_default)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a;
  const property2 = column.property;
  const value = property2 && getProp(row, property2).value;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}, createPlacehoder = false) {
  const { ns: ns2 } = store;
  if (!treeNode) {
    if (createPlacehoder) {
      return [
        h$1("span", {
          class: ns2.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    if (treeNode.loading) {
      return;
    }
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h$1("span", {
      class: ns2.e("indent"),
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns2.e("expand-icon"),
      treeNode.expanded ? ns2.em("expand-icon", "expanded") : ""
    ];
    let icon = arrow_right_default;
    if (treeNode.loading) {
      icon = loading_default;
    }
    ele.push(h$1("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h$1(ElIcon, { class: { [ns2.is("loading")]: treeNode.loading } }, {
            default: () => [h$1(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h$1("span", {
      class: ns2.e("placeholder")
    }));
  }
  return ele;
}
function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          let value = newVal;
          if (columnKey === "width" && key === "realWidth") {
            value = parseWidth(newVal);
          }
          if (columnKey === "minWidth" && key === "realMinWidth") {
            value = parseMinWidth(newVal);
          }
          instance.columnConfig.value[columnKey] = value;
          instance.columnConfig.value[key] = value;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "showOverflowTooltip"
    ];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance.columnConfig.value[key] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns2 = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!realWidth.value && realMinWidth.value) {
      column.width = void 0;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(column.width === void 0 ? column.minWidth : column.width);
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type = column.type;
    const source = cellForced[type] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && value !== void 0) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type);
    if (className) {
      const forceClass = `${unref(ns2.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (Array.isArray(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a;
      if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader)
      ;
    else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        const renderHeader = slots.header;
        return renderHeader ? renderHeader(scope) : column.label;
      };
    }
    let originRenderCell = column.renderCell;
    if (column.type === "expand") {
      column.renderCell = (data) => h$1("div", {
        class: "cell"
      }, [originRenderCell(data)]);
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data);
          children = vnodes.some((v2) => v2.type !== Comment) ? vnodes : originRenderCell(data);
        } else {
          children = originRenderCell(data);
        }
        const shouldCreatePlaceholder = hasTreeColumn.value && data.cellIndex === 0 && data.column.type !== "selection";
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns2.namespace)}-tooltip`;
          props2.style = {
            width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h$1("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex
  };
}
var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};
let columnIdSeed = 1;
var ElTableColumn$1 = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(owner, props);
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
    onBeforeMount(() => {
      isSubColumn.value = owner.value !== parent;
      const type = props.type || "default";
      const sortable = props.sortable === "" ? true : props.sortable;
      const defaults = {
        ...cellStarts[type],
        id: columnId.value,
        type,
        property: props.prop || props.property,
        align: realAlign,
        headerAlign: realHeaderAlign,
        showOverflowTooltip: props.showOverflowTooltip || props.showTooltipWhenOverflow,
        filterable: props.filters || props.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: false,
        isSubColumn: false,
        filterOpened: false,
        sortable,
        index: props.index,
        rawColumnKey: instance.vnode.key
      };
      const basicProps = [
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ];
      const sortProps = ["sortMethod", "sortBy", "sortOrders"];
      const selectProps = ["selectable", "reserveSelection"];
      const filterProps = [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ];
      let column = getPropsData(basicProps, sortProps, selectProps, filterProps);
      column = mergeOptions(defaults, column);
      const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps);
      column = chains(column);
      columnConfig.value = column;
      registerNormalWatchers();
      registerComplexWatchers();
    });
    onMounted(() => {
      var _a;
      const parent2 = columnOrTableParent.value;
      const children = isSubColumn.value ? parent2.vnode.el.children : (_a = parent2.refs.hiddenColumns) == null ? void 0 : _a.children;
      const getColumnIndex = () => getColumnElIndex(children || [], instance.vnode.el);
      columnConfig.value.getColumnIndex = getColumnIndex;
      const columnIndex = getColumnIndex();
      columnIndex > -1 && owner.value.store.commit("insertColumn", columnConfig.value, isSubColumn.value ? parent2.columnConfig.value : null);
    });
    onBeforeUnmount(() => {
      owner.value.store.commit("removeColumn", columnConfig.value, isSubColumn.value ? parent.columnConfig.value : null);
    });
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a, _b, _c;
    try {
      const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && Array.isArray(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h$1("div", children);
      return vnode;
    } catch (e) {
      return h$1("div", []);
    }
  }
});
const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);
const tabBarProps = buildProps({
  tabs: {
    type: definePropType(Array),
    default: () => mutable([])
  }
});
const COMPONENT_NAME$2 = "ElTabBar";
const __default__$s = defineComponent({
  name: COMPONENT_NAME$2
});
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  ...__default__$s,
  props: tabBarProps,
  setup(__props, { expose }) {
    const props = __props;
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
    const ns2 = useNamespace("tabs");
    const barRef = ref();
    const barStyle = ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      props.tabs.every((tab) => {
        var _a, _b, _c, _d;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.uid}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        tabSize = $el[`client${capitalize(sizeName)}`];
        const position = sizeDir === "x" ? "left" : "top";
        offset = $el[`offset${capitalize(position)}`] - ((_d = (_c = $el.parentElement) == null ? void 0 : _c[`offset${capitalize(position)}`]) != null ? _d : 0);
        const scrollwrapEl = $el.closest(".is-scrollable");
        if (scrollwrapEl) {
          const scrollWrapStyle = window.getComputedStyle(scrollwrapEl);
          offset += Number.parseFloat(scrollWrapStyle[`padding${capitalize(position)}`]);
        }
        const tabStyles = window.getComputedStyle($el);
        if (sizeName === "width") {
          if (props.tabs.length > 1) {
            tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
          }
          offset += Number.parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
    }, { immediate: true });
    useResizeObserver(barRef, () => update());
    expose({
      ref: barRef,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "barRef",
        ref: barRef,
        class: normalizeClass([unref(ns2).e("active-bar"), unref(ns2).is(unref(rootTabs).props.tabPosition)]),
        style: normalizeStyle(barStyle.value)
      }, null, 6);
    };
  }
});
var TabBar = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
const tabNavProps = buildProps({
  panes: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
const tabNavEmits = {
  tabClick: (tab, tabName, ev) => ev instanceof Event,
  tabRemove: (tab, ev) => ev instanceof Event
};
const COMPONENT_NAME$1 = "ElTabNav";
const TabNav = defineComponent({
  name: COMPONENT_NAME$1,
  props: tabNavProps,
  emits: tabNavEmits,
  setup(props, {
    expose,
    emit
  }) {
    const vm = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
    const ns2 = useNamespace("tabs");
    const visibility = useDocumentVisibility();
    const focused = useWindowFocus();
    const navScroll$ = ref();
    const nav$ = ref();
    const el$ = ref();
    const scrollable = ref(false);
    const navOffset = ref(0);
    const isFocus = ref(false);
    const focusable = ref(true);
    const sizeName = computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
    const navStyle = computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      if (!navScroll$.value)
        return;
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      if (!navScroll$.value || !nav$.value)
        return;
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = async () => {
      const nav = nav$.value;
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
        return;
      await nextTick();
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      if (!nav$.value || !navScroll$.value)
        return;
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        const currentOffset2 = navOffset.value;
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset2;
        scrollable.value.next = currentOffset2 + containerSize < navSize;
        if (navSize - currentOffset2 < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (e) => {
      const code = e.code;
      const {
        up,
        down,
        left,
        right
      } = EVENT_CODE;
      if (![up, down, left, right].includes(code))
        return;
      const tabList = Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
      const currentIndex = tabList.indexOf(e.target);
      let nextIndex;
      if (code === left || code === up) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus({
        preventScroll: true
      });
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value)
        isFocus.value = true;
    };
    const removeFocus = () => isFocus.value = false;
    watch(visibility, (visibility2) => {
      if (visibility2 === "hidden") {
        focusable.value = false;
      } else if (visibility2 === "visible") {
        setTimeout(() => focusable.value = true, 50);
      }
    });
    watch(focused, (focused2) => {
      if (focused2) {
        setTimeout(() => focusable.value = true, 50);
      } else {
        focusable.value = false;
      }
    });
    useResizeObserver(el$, update);
    onMounted(() => setTimeout(() => scrollToActiveTab(), 0));
    onUpdated(() => update());
    expose({
      scrollToActiveTab,
      removeFocus
    });
    watch(() => props.panes, () => vm.update(), {
      flush: "post"
    });
    return () => {
      const scrollBtn = scrollable.value ? [createVNode("span", {
        "class": [ns2.e("nav-prev"), ns2.is("disabled", !scrollable.value.prev)],
        "onClick": scrollPrev
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_left_default, null, null)]
      })]), createVNode("span", {
        "class": [ns2.e("nav-next"), ns2.is("disabled", !scrollable.value.next)],
        "onClick": scrollNext
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_right_default, null, null)]
      })])] : null;
      const tabs2 = props.panes.map((pane, index) => {
        var _a, _b, _c, _d;
        const uid = pane.uid;
        const disabled = pane.props.disabled;
        const tabName = (_b = (_a = pane.props.name) != null ? _a : pane.index) != null ? _b : `${index}`;
        const closable = !disabled && (pane.isClosable || props.editable);
        pane.index = `${index}`;
        const btnClose = closable ? createVNode(ElIcon, {
          "class": "is-icon-close",
          "onClick": (ev) => emit("tabRemove", pane, ev)
        }, {
          default: () => [createVNode(close_default, null, null)]
        }) : null;
        const tabLabelContent = ((_d = (_c = pane.slots).label) == null ? void 0 : _d.call(_c)) || pane.props.label;
        const tabindex = !disabled && pane.active ? 0 : -1;
        return createVNode("div", {
          "ref": `tab-${uid}`,
          "class": [ns2.e("item"), ns2.is(rootTabs.props.tabPosition), ns2.is("active", pane.active), ns2.is("disabled", disabled), ns2.is("closable", closable), ns2.is("focus", isFocus.value)],
          "id": `tab-${tabName}`,
          "key": `tab-${uid}`,
          "aria-controls": `pane-${tabName}`,
          "role": "tab",
          "aria-selected": pane.active,
          "tabindex": tabindex,
          "onFocus": () => setFocus(),
          "onBlur": () => removeFocus(),
          "onClick": (ev) => {
            removeFocus();
            emit("tabClick", pane, tabName, ev);
          },
          "onKeydown": (ev) => {
            if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
              emit("tabRemove", pane, ev);
            }
          }
        }, [...[tabLabelContent, btnClose]]);
      });
      return createVNode("div", {
        "ref": el$,
        "class": [ns2.e("nav-wrap"), ns2.is("scrollable", !!scrollable.value), ns2.is(rootTabs.props.tabPosition)]
      }, [scrollBtn, createVNode("div", {
        "class": ns2.e("nav-scroll"),
        "ref": navScroll$
      }, [createVNode("div", {
        "class": [ns2.e("nav"), ns2.is(rootTabs.props.tabPosition), ns2.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
        "ref": nav$,
        "style": navStyle.value,
        "role": "tablist",
        "onKeydown": changeTab
      }, [...[!props.type ? createVNode(TabBar, {
        "tabs": [...props.panes]
      }, null) : null, tabs2]])])]);
    };
  }
});
const tabsProps = buildProps({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number]
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: definePropType(Function),
    default: () => true
  },
  stretch: Boolean
});
const isPaneName = (value) => isString(value) || isNumber(value);
const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
  tabClick: (pane, ev) => ev instanceof Event,
  tabChange: (name) => isPaneName(name),
  edit: (paneName, action) => ["remove", "add"].includes(action),
  tabRemove: (name) => isPaneName(name),
  tabAdd: () => true
};
var Tabs = defineComponent({
  name: "ElTabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    var _a, _b;
    const ns2 = useNamespace("tabs");
    const {
      children: panes,
      addChild: registerPane,
      removeChild: unregisterPane
    } = useOrderedChildren(getCurrentInstance(), "ElTabPane");
    const nav$ = ref();
    const currentName = ref((_b = (_a = props.modelValue) != null ? _a : props.activeName) != null ? _b : "0");
    const changeCurrentName = (value) => {
      currentName.value = value;
      emit(UPDATE_MODEL_EVENT, value);
      emit("tabChange", value);
    };
    const setCurrentName = async (value) => {
      var _a2, _b2, _c;
      if (currentName.value === value || isUndefined(value))
        return;
      try {
        const canLeave = await ((_a2 = props.beforeLeave) == null ? void 0 : _a2.call(props, value, currentName.value));
        if (canLeave !== false) {
          changeCurrentName(value);
          (_c = (_b2 = nav$.value) == null ? void 0 : _b2.removeFocus) == null ? void 0 : _c.call(_b2);
        }
      } catch (e) {
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      setCurrentName(tabName);
      emit("tabClick", tab, event);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled || isUndefined(pane.props.name))
        return;
      ev.stopPropagation();
      emit("edit", pane.props.name, "remove");
      emit("tabRemove", pane.props.name);
    };
    const handleTabAdd = () => {
      emit("edit", void 0, "add");
      emit("tabAdd");
    };
    useDeprecated({
      from: '"activeName"',
      replacement: '"model-value" or "v-model"',
      scope: "ElTabs",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#attributes",
      type: "Attribute"
    }, computed(() => !!props.activeName));
    watch(() => props.activeName, (modelValue) => setCurrentName(modelValue));
    watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
    watch(currentName, async () => {
      var _a2;
      await nextTick();
      (_a2 = nav$.value) == null ? void 0 : _a2.scrollToActiveTab();
    });
    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane,
      unregisterPane
    });
    expose({
      currentName
    });
    return () => {
      const newButton = props.editable || props.addable ? createVNode("span", {
        "class": ns2.e("new-tab"),
        "tabindex": "0",
        "onClick": handleTabAdd,
        "onKeydown": (ev) => {
          if (ev.code === EVENT_CODE.enter)
            handleTabAdd();
        }
      }, [createVNode(ElIcon, {
        "class": ns2.is("icon-plus")
      }, {
        default: () => [createVNode(plus_default, null, null)]
      })]) : null;
      const header2 = createVNode("div", {
        "class": [ns2.e("header"), ns2.is(props.tabPosition)]
      }, [newButton, createVNode(TabNav, {
        "ref": nav$,
        "currentName": currentName.value,
        "editable": props.editable,
        "type": props.type,
        "panes": panes.value,
        "stretch": props.stretch,
        "onTabClick": handleTabClick,
        "onTabRemove": handleTabRemove
      }, null)]);
      const panels = createVNode("div", {
        "class": ns2.e("content")
      }, [renderSlot(slots, "default")]);
      return createVNode("div", {
        "class": [ns2.b(), ns2.m(props.tabPosition), {
          [ns2.m("card")]: props.type === "card",
          [ns2.m("border-card")]: props.type === "border-card"
        }]
      }, [...props.tabPosition !== "bottom" ? [header2, panels] : [panels, header2]]);
    };
  }
});
const tabPaneProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
const _hoisted_1$c = ["id", "aria-hidden", "aria-labelledby"];
const COMPONENT_NAME = "ElTabPane";
const __default__$r = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...__default__$r,
  props: tabPaneProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const slots = useSlots();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns2 = useNamespace("tab-pane");
    const index = ref();
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = computedEager(() => {
      var _a;
      return tabsRoot.currentName.value === ((_a = props.name) != null ? _a : index.value);
    });
    const loaded = ref(active.value);
    const paneName = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : index.value;
    });
    const shouldBeRender = computedEager(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const pane = reactive({
      uid: instance.uid,
      slots,
      props,
      paneName,
      active,
      index,
      isClosable
    });
    onMounted(() => {
      tabsRoot.registerPane(pane);
    });
    onUnmounted(() => {
      tabsRoot.unregisterPane(pane.uid);
    });
    return (_ctx, _cache) => {
      return unref(shouldBeRender) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: `pane-${unref(paneName)}`,
        class: normalizeClass(unref(ns2).b()),
        role: "tabpanel",
        "aria-hidden": !unref(active),
        "aria-labelledby": `tab-${unref(paneName)}`
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$c)), [
        [vShow, unref(active)]
      ]) : createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
const ElTabs = withInstall(Tabs, {
  TabPane
});
const ElTabPane = withNoopInstall(TabPane);
const NODE_KEY = "$treeNodeId";
const markNodeData = function(node, data) {
  if (!data || data[NODE_KEY])
    return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};
const getNodeKey = function(key, data) {
  if (!key)
    return data[NODE_KEY];
  return data[key];
};
const handleCurrentChange = (store, emit, setCurrent) => {
  const preCurrentNode = store.value.currentNode;
  setCurrent();
  const currentNode = store.value.currentNode;
  if (preCurrentNode === currentNode)
    return;
  emit("current-change", currentNode ? currentNode.data : null, currentNode);
};
const getChildState = (node) => {
  let all = true;
  let none = true;
  let allWithoutDisable = true;
  for (let i = 0, j = node.length; i < j; i++) {
    const n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }
  return { all, none, allWithoutDisable, half: !all && !none };
};
const reInitChecked = function(node) {
  if (node.childNodes.length === 0 || node.loading)
    return;
  const { all, none, half } = getChildState(node.childNodes);
  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }
  const parent = node.parent;
  if (!parent || parent.level === 0)
    return;
  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};
const getPropertyFromData = function(node, prop) {
  const props = node.store.props;
  const data = node.data || {};
  const config = props[prop];
  if (typeof config === "function") {
    return config(data, node);
  } else if (typeof config === "string") {
    return data[config];
  } else if (typeof config === "undefined") {
    const dataProp = data[prop];
    return dataProp === void 0 ? "" : dataProp;
  }
};
let nodeIdSeed = 0;
class Node {
  constructor(options) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;
    this.isCurrent = false;
    this.canFocus = false;
    for (const name in options) {
      if (hasOwn(options, name)) {
        this[name] = options[name];
      }
    }
    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;
    if (this.parent) {
      this.level = this.parent.level + 1;
    }
  }
  initialize() {
    const store = this.store;
    if (!store) {
      throw new Error("[Node]store is required!");
    }
    store.registerNode(this);
    const props = store.props;
    if (props && typeof props.isLeaf !== "undefined") {
      const isLeaf = getPropertyFromData(this, "isLeaf");
      if (typeof isLeaf === "boolean") {
        this.isLeafByUser = isLeaf;
      }
    }
    if (store.lazy !== true && this.data) {
      this.setData(this.data);
      if (store.defaultExpandAll) {
        this.expanded = true;
        this.canFocus = true;
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand();
    }
    if (!Array.isArray(this.data)) {
      markNodeData(this, this.data);
    }
    if (!this.data)
      return;
    const defaultExpandedKeys = store.defaultExpandedKeys;
    const key = store.key;
    if (key && defaultExpandedKeys && defaultExpandedKeys.includes(this.key)) {
      this.expand(null, store.autoExpandParent);
    }
    if (key && store.currentNodeKey !== void 0 && this.key === store.currentNodeKey) {
      store.currentNode = this;
      store.currentNode.isCurrent = true;
    }
    if (store.lazy) {
      store._initDefaultCheckedNode(this);
    }
    this.updateLeafState();
    if (this.parent && (this.level === 1 || this.parent.expanded === true))
      this.canFocus = true;
  }
  setData(data) {
    if (!Array.isArray(data)) {
      markNodeData(this, data);
    }
    this.data = data;
    this.childNodes = [];
    let children;
    if (this.level === 0 && Array.isArray(this.data)) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, "children") || [];
    }
    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  }
  get label() {
    return getPropertyFromData(this, "label");
  }
  get key() {
    const nodeKey = this.store.key;
    if (this.data)
      return this.data[nodeKey];
    return null;
  }
  get disabled() {
    return getPropertyFromData(this, "disabled");
  }
  get nextSibling() {
    const parent = this.parent;
    if (parent) {
      const index = parent.childNodes.indexOf(this);
      if (index > -1) {
        return parent.childNodes[index + 1];
      }
    }
    return null;
  }
  get previousSibling() {
    const parent = this.parent;
    if (parent) {
      const index = parent.childNodes.indexOf(this);
      if (index > -1) {
        return index > 0 ? parent.childNodes[index - 1] : null;
      }
    }
    return null;
  }
  contains(target, deep = true) {
    return (this.childNodes || []).some((child) => child === target || deep && child.contains(target));
  }
  remove() {
    const parent = this.parent;
    if (parent) {
      parent.removeChild(this);
    }
  }
  insertChild(child, index, batch) {
    if (!child)
      throw new Error("InsertChild error: child is required.");
    if (!(child instanceof Node)) {
      if (!batch) {
        const children = this.getChildren(true);
        if (!children.includes(child.data)) {
          if (typeof index === "undefined" || index < 0) {
            children.push(child.data);
          } else {
            children.splice(index, 0, child.data);
          }
        }
      }
      Object.assign(child, {
        parent: this,
        store: this.store
      });
      child = reactive(new Node(child));
      if (child instanceof Node) {
        child.initialize();
      }
    }
    child.level = this.level + 1;
    if (typeof index === "undefined" || index < 0) {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index, 0, child);
    }
    this.updateLeafState();
  }
  insertBefore(child, ref2) {
    let index;
    if (ref2) {
      index = this.childNodes.indexOf(ref2);
    }
    this.insertChild(child, index);
  }
  insertAfter(child, ref2) {
    let index;
    if (ref2) {
      index = this.childNodes.indexOf(ref2);
      if (index !== -1)
        index += 1;
    }
    this.insertChild(child, index);
  }
  removeChild(child) {
    const children = this.getChildren() || [];
    const dataIndex = children.indexOf(child.data);
    if (dataIndex > -1) {
      children.splice(dataIndex, 1);
    }
    const index = this.childNodes.indexOf(child);
    if (index > -1) {
      this.store && this.store.deregisterNode(child);
      child.parent = null;
      this.childNodes.splice(index, 1);
    }
    this.updateLeafState();
  }
  removeChildByData(data) {
    let targetNode = null;
    for (let i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i].data === data) {
        targetNode = this.childNodes[i];
        break;
      }
    }
    if (targetNode) {
      this.removeChild(targetNode);
    }
  }
  expand(callback, expandParent) {
    const done = () => {
      if (expandParent) {
        let parent = this.parent;
        while (parent.level > 0) {
          parent.expanded = true;
          parent = parent.parent;
        }
      }
      this.expanded = true;
      if (callback)
        callback();
      this.childNodes.forEach((item) => {
        item.canFocus = true;
      });
    };
    if (this.shouldLoadData()) {
      this.loadData((data) => {
        if (Array.isArray(data)) {
          if (this.checked) {
            this.setChecked(true, true);
          } else if (!this.store.checkStrictly) {
            reInitChecked(this);
          }
          done();
        }
      });
    } else {
      done();
    }
  }
  doCreateChildren(array, defaultProps2 = {}) {
    array.forEach((item) => {
      this.insertChild(Object.assign({ data: item }, defaultProps2), void 0, true);
    });
  }
  collapse() {
    this.expanded = false;
    this.childNodes.forEach((item) => {
      item.canFocus = false;
    });
  }
  shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== "undefined") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const childNodes = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !childNodes || childNodes.length === 0;
      return;
    }
    this.isLeaf = false;
  }
  setChecked(value, deep, recursion, passValue) {
    this.indeterminate = value === "half";
    this.checked = value === true;
    if (this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all, allWithoutDisable } = getChildState(this.childNodes);
      if (!this.isLeaf && !all && allWithoutDisable) {
        this.checked = false;
        value = false;
      }
      const handleDescendants = () => {
        if (deep) {
          const childNodes = this.childNodes;
          for (let i = 0, j = childNodes.length; i < j; i++) {
            const child = childNodes[i];
            passValue = passValue || value !== false;
            const isCheck = child.disabled ? child.checked : passValue;
            child.setChecked(isCheck, deep, true, passValue);
          }
          const { half, all: all2 } = getChildState(childNodes);
          if (!all2) {
            this.checked = all2;
            this.indeterminate = half;
          }
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          handleDescendants();
          reInitChecked(this);
        }, {
          checked: value !== false
        });
        return;
      } else {
        handleDescendants();
      }
    }
    const parent = this.parent;
    if (!parent || parent.level === 0)
      return;
    if (!recursion) {
      reInitChecked(parent);
    }
  }
  getChildren(forceInit = false) {
    if (this.level === 0)
      return this.data;
    const data = this.data;
    if (!data)
      return null;
    const props = this.store.props;
    let children = "children";
    if (props) {
      children = props.children || "children";
    }
    if (data[children] === void 0) {
      data[children] = null;
    }
    if (forceInit && !data[children]) {
      data[children] = [];
    }
    return data[children];
  }
  updateChildren() {
    const newData = this.getChildren() || [];
    const oldData = this.childNodes.map((node) => node.data);
    const newDataMap = {};
    const newNodes = [];
    newData.forEach((item, index) => {
      const key = item[NODE_KEY];
      const isNodeExists = !!key && oldData.findIndex((data) => data[NODE_KEY] === key) >= 0;
      if (isNodeExists) {
        newDataMap[key] = { index, data: item };
      } else {
        newNodes.push({ index, data: item });
      }
    });
    if (!this.store.lazy) {
      oldData.forEach((item) => {
        if (!newDataMap[item[NODE_KEY]])
          this.removeChildByData(item);
      });
    }
    newNodes.forEach(({ index, data }) => {
      this.insertChild({ data }, index);
    });
    this.updateLeafState();
  }
  loadData(callback, defaultProps2 = {}) {
    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps2).length)) {
      this.loading = true;
      const resolve2 = (children) => {
        this.childNodes = [];
        this.doCreateChildren(children, defaultProps2);
        this.loaded = true;
        this.loading = false;
        this.updateLeafState();
        if (callback) {
          callback.call(this, children);
        }
      };
      this.store.load(this, resolve2);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  }
}
class TreeStore {
  constructor(options) {
    this.currentNode = null;
    this.currentNodeKey = null;
    for (const option2 in options) {
      if (hasOwn(options, option2)) {
        this[option2] = options[option2];
      }
    }
    this.nodesMap = {};
  }
  initialize() {
    this.root = new Node({
      data: this.data,
      store: this
    });
    this.root.initialize();
    if (this.lazy && this.load) {
      const loadFn = this.load;
      loadFn(this.root, (data) => {
        this.root.doCreateChildren(data);
        this._initDefaultCheckedNodes();
      });
    } else {
      this._initDefaultCheckedNodes();
    }
  }
  filter(value) {
    const filterNodeMethod = this.filterNodeMethod;
    const lazy = this.lazy;
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        child.visible = filterNodeMethod.call(child, value, child.data, child);
        traverse(child);
      });
      if (!node.visible && childNodes.length) {
        let allHidden = true;
        allHidden = !childNodes.some((child) => child.visible);
        if (node.root) {
          node.root.visible = allHidden === false;
        } else {
          node.visible = allHidden === false;
        }
      }
      if (!value)
        return;
      if (node.visible && !node.isLeaf && !lazy)
        node.expand();
    };
    traverse(this);
  }
  setData(newVal) {
    const instanceChanged = newVal !== this.root.data;
    if (instanceChanged) {
      this.root.setData(newVal);
      this._initDefaultCheckedNodes();
    } else {
      this.root.updateChildren();
    }
  }
  getNode(data) {
    if (data instanceof Node)
      return data;
    const key = isObject$3(data) ? getNodeKey(this.key, data) : data;
    return this.nodesMap[key] || null;
  }
  insertBefore(data, refData) {
    const refNode = this.getNode(refData);
    refNode.parent.insertBefore({ data }, refNode);
  }
  insertAfter(data, refData) {
    const refNode = this.getNode(refData);
    refNode.parent.insertAfter({ data }, refNode);
  }
  remove(data) {
    const node = this.getNode(data);
    if (node && node.parent) {
      if (node === this.currentNode) {
        this.currentNode = null;
      }
      node.parent.removeChild(node);
    }
  }
  append(data, parentData) {
    const parentNode = parentData ? this.getNode(parentData) : this.root;
    if (parentNode) {
      parentNode.insertChild({ data });
    }
  }
  _initDefaultCheckedNodes() {
    const defaultCheckedKeys = this.defaultCheckedKeys || [];
    const nodesMap = this.nodesMap;
    defaultCheckedKeys.forEach((checkedKey) => {
      const node = nodesMap[checkedKey];
      if (node) {
        node.setChecked(true, !this.checkStrictly);
      }
    });
  }
  _initDefaultCheckedNode(node) {
    const defaultCheckedKeys = this.defaultCheckedKeys || [];
    if (defaultCheckedKeys.includes(node.key)) {
      node.setChecked(true, !this.checkStrictly);
    }
  }
  setDefaultCheckedKey(newVal) {
    if (newVal !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newVal;
      this._initDefaultCheckedNodes();
    }
  }
  registerNode(node) {
    const key = this.key;
    if (!node || !node.data)
      return;
    if (!key) {
      this.nodesMap[node.id] = node;
    } else {
      const nodeKey = node.key;
      if (nodeKey !== void 0)
        this.nodesMap[node.key] = node;
    }
  }
  deregisterNode(node) {
    const key = this.key;
    if (!key || !node || !node.data)
      return;
    node.childNodes.forEach((child) => {
      this.deregisterNode(child);
    });
    delete this.nodesMap[node.key];
  }
  getCheckedNodes(leafOnly = false, includeHalfChecked = false) {
    const checkedNodes = [];
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
          checkedNodes.push(child.data);
        }
        traverse(child);
      });
    };
    traverse(this);
    return checkedNodes;
  }
  getCheckedKeys(leafOnly = false) {
    return this.getCheckedNodes(leafOnly).map((data) => (data || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const nodes = [];
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        if (child.indeterminate) {
          nodes.push(child.data);
        }
        traverse(child);
      });
    };
    traverse(this);
    return nodes;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((data) => (data || {})[this.key]);
  }
  _getAllNodes() {
    const allNodes = [];
    const nodesMap = this.nodesMap;
    for (const nodeKey in nodesMap) {
      if (hasOwn(nodesMap, nodeKey)) {
        allNodes.push(nodesMap[nodeKey]);
      }
    }
    return allNodes;
  }
  updateChildren(key, data) {
    const node = this.nodesMap[key];
    if (!node)
      return;
    const childNodes = node.childNodes;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      const child = childNodes[i];
      this.remove(child.data);
    }
    for (let i = 0, j = data.length; i < j; i++) {
      const child = data[i];
      this.append(child, node.data);
    }
  }
  _setCheckedKeys(key, leafOnly = false, checkedKeys) {
    const allNodes = this._getAllNodes().sort((a2, b2) => b2.level - a2.level);
    const cache = /* @__PURE__ */ Object.create(null);
    const keys2 = Object.keys(checkedKeys);
    allNodes.forEach((node) => node.setChecked(false, false));
    for (let i = 0, j = allNodes.length; i < j; i++) {
      const node = allNodes[i];
      const nodeKey = node.data[key].toString();
      const checked = keys2.includes(nodeKey);
      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false);
        }
        continue;
      }
      let parent = node.parent;
      while (parent && parent.level > 0) {
        cache[parent.data[key]] = true;
        parent = parent.parent;
      }
      if (node.isLeaf || this.checkStrictly) {
        node.setChecked(true, false);
        continue;
      }
      node.setChecked(true, true);
      if (leafOnly) {
        node.setChecked(false, false);
        const traverse = function(node2) {
          const childNodes = node2.childNodes;
          childNodes.forEach((child) => {
            if (!child.isLeaf) {
              child.setChecked(false, false);
            }
            traverse(child);
          });
        };
        traverse(node);
      }
    }
  }
  setCheckedNodes(array, leafOnly = false) {
    const key = this.key;
    const checkedKeys = {};
    array.forEach((item) => {
      checkedKeys[(item || {})[key]] = true;
    });
    this._setCheckedKeys(key, leafOnly, checkedKeys);
  }
  setCheckedKeys(keys2, leafOnly = false) {
    this.defaultCheckedKeys = keys2;
    const key = this.key;
    const checkedKeys = {};
    keys2.forEach((key2) => {
      checkedKeys[key2] = true;
    });
    this._setCheckedKeys(key, leafOnly, checkedKeys);
  }
  setDefaultExpandedKeys(keys2) {
    keys2 = keys2 || [];
    this.defaultExpandedKeys = keys2;
    keys2.forEach((key) => {
      const node = this.getNode(key);
      if (node)
        node.expand(null, this.autoExpandParent);
    });
  }
  setChecked(data, checked, deep) {
    const node = this.getNode(data);
    if (node) {
      node.setChecked(!!checked, deep);
    }
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(currentNode) {
    const prevCurrentNode = this.currentNode;
    if (prevCurrentNode) {
      prevCurrentNode.isCurrent = false;
    }
    this.currentNode = currentNode;
    this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(node, shouldAutoExpandParent = true) {
    const key = node[this.key];
    const currNode = this.nodesMap[key];
    this.setCurrentNode(currNode);
    if (shouldAutoExpandParent && this.currentNode.level > 1) {
      this.currentNode.parent.expand(null, true);
    }
  }
  setCurrentNodeKey(key, shouldAutoExpandParent = true) {
    if (key === null || key === void 0) {
      this.currentNode && (this.currentNode.isCurrent = false);
      this.currentNode = null;
      return;
    }
    const node = this.getNode(key);
    if (node) {
      this.setCurrentNode(node);
      if (shouldAutoExpandParent && this.currentNode.level > 1) {
        this.currentNode.parent.expand(null, true);
      }
    }
  }
}
const _sfc_main$v = defineComponent({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const ns2 = useNamespace("tree");
    const nodeInstance = inject("NodeInstance");
    const tree2 = inject("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(h$1, { _self: nodeInstance, node, data, store }) : h$1("span", { class: ns2.be("node", "label") }, [
        tree2.ctx.slots.default ? tree2.ctx.slots.default({ node, data }) : node.label
      ]);
    };
  }
});
var NodeContent = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function useNodeExpandEventBroadcast(props) {
  const parentNodeMap = inject("TreeNodeMap", null);
  const currentNodeMap = {
    treeNodeExpand: (node) => {
      if (props.node !== node) {
        props.node.collapse();
      }
    },
    children: []
  };
  if (parentNodeMap) {
    parentNodeMap.children.push(currentNodeMap);
  }
  provide("TreeNodeMap", currentNodeMap);
  return {
    broadcastExpanded: (node) => {
      if (!props.accordion)
        return;
      for (const childNode of currentNodeMap.children) {
        childNode.treeNodeExpand(node);
      }
    }
  };
}
const dragEventsKey = Symbol("dragEvents");
function useDragNodeHandler({ props, ctx, el$, dropIndicator$, store }) {
  const ns2 = useNamespace("tree");
  const dragState = ref({
    showDropIndicator: false,
    draggingNode: null,
    dropNode: null,
    allowDrop: true,
    dropType: null
  });
  const treeNodeDragStart = ({ event, treeNode }) => {
    if (typeof props.allowDrag === "function" && !props.allowDrag(treeNode.node)) {
      event.preventDefault();
      return false;
    }
    event.dataTransfer.effectAllowed = "move";
    try {
      event.dataTransfer.setData("text/plain", "");
    } catch (e) {
    }
    dragState.value.draggingNode = treeNode;
    ctx.emit("node-drag-start", treeNode.node, event);
  };
  const treeNodeDragOver = ({ event, treeNode }) => {
    const dropNode = treeNode;
    const oldDropNode = dragState.value.dropNode;
    if (oldDropNode && oldDropNode !== dropNode) {
      removeClass(oldDropNode.$el, ns2.is("drop-inner"));
    }
    const draggingNode = dragState.value.draggingNode;
    if (!draggingNode || !dropNode)
      return;
    let dropPrev = true;
    let dropInner = true;
    let dropNext = true;
    let userAllowDropInner = true;
    if (typeof props.allowDrop === "function") {
      dropPrev = props.allowDrop(draggingNode.node, dropNode.node, "prev");
      userAllowDropInner = dropInner = props.allowDrop(draggingNode.node, dropNode.node, "inner");
      dropNext = props.allowDrop(draggingNode.node, dropNode.node, "next");
    }
    event.dataTransfer.dropEffect = dropInner || dropPrev || dropNext ? "move" : "none";
    if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
      if (oldDropNode) {
        ctx.emit("node-drag-leave", draggingNode.node, oldDropNode.node, event);
      }
      ctx.emit("node-drag-enter", draggingNode.node, dropNode.node, event);
    }
    if (dropPrev || dropInner || dropNext) {
      dragState.value.dropNode = dropNode;
    }
    if (dropNode.node.nextSibling === draggingNode.node) {
      dropNext = false;
    }
    if (dropNode.node.previousSibling === draggingNode.node) {
      dropPrev = false;
    }
    if (dropNode.node.contains(draggingNode.node, false)) {
      dropInner = false;
    }
    if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
      dropPrev = false;
      dropInner = false;
      dropNext = false;
    }
    const targetPosition = dropNode.$el.getBoundingClientRect();
    const treePosition = el$.value.getBoundingClientRect();
    let dropType;
    const prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
    const nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;
    let indicatorTop = -9999;
    const distance = event.clientY - targetPosition.top;
    if (distance < targetPosition.height * prevPercent) {
      dropType = "before";
    } else if (distance > targetPosition.height * nextPercent) {
      dropType = "after";
    } else if (dropInner) {
      dropType = "inner";
    } else {
      dropType = "none";
    }
    const iconPosition = dropNode.$el.querySelector(`.${ns2.be("node", "expand-icon")}`).getBoundingClientRect();
    const dropIndicator = dropIndicator$.value;
    if (dropType === "before") {
      indicatorTop = iconPosition.top - treePosition.top;
    } else if (dropType === "after") {
      indicatorTop = iconPosition.bottom - treePosition.top;
    }
    dropIndicator.style.top = `${indicatorTop}px`;
    dropIndicator.style.left = `${iconPosition.right - treePosition.left}px`;
    if (dropType === "inner") {
      addClass(dropNode.$el, ns2.is("drop-inner"));
    } else {
      removeClass(dropNode.$el, ns2.is("drop-inner"));
    }
    dragState.value.showDropIndicator = dropType === "before" || dropType === "after";
    dragState.value.allowDrop = dragState.value.showDropIndicator || userAllowDropInner;
    dragState.value.dropType = dropType;
    ctx.emit("node-drag-over", draggingNode.node, dropNode.node, event);
  };
  const treeNodeDragEnd = (event) => {
    const { draggingNode, dropType, dropNode } = dragState.value;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (draggingNode && dropNode) {
      const draggingNodeCopy = { data: draggingNode.node.data };
      if (dropType !== "none") {
        draggingNode.node.remove();
      }
      if (dropType === "before") {
        dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
      } else if (dropType === "after") {
        dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
      } else if (dropType === "inner") {
        dropNode.node.insertChild(draggingNodeCopy);
      }
      if (dropType !== "none") {
        store.value.registerNode(draggingNodeCopy);
      }
      removeClass(dropNode.$el, ns2.is("drop-inner"));
      ctx.emit("node-drag-end", draggingNode.node, dropNode.node, dropType, event);
      if (dropType !== "none") {
        ctx.emit("node-drop", draggingNode.node, dropNode.node, dropType, event);
      }
    }
    if (draggingNode && !dropNode) {
      ctx.emit("node-drag-end", draggingNode.node, null, dropType, event);
    }
    dragState.value.showDropIndicator = false;
    dragState.value.draggingNode = null;
    dragState.value.dropNode = null;
    dragState.value.allowDrop = true;
  };
  provide(dragEventsKey, {
    treeNodeDragStart,
    treeNodeDragOver,
    treeNodeDragEnd
  });
  return {
    dragState
  };
}
const _sfc_main$u = defineComponent({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: _CollapseTransition,
    ElCheckbox,
    NodeContent,
    ElIcon,
    Loading: loading_default
  },
  props: {
    node: {
      type: Node,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  emits: ["node-expand"],
  setup(props, ctx) {
    const ns2 = useNamespace("tree");
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const tree2 = inject("RootTree");
    const expanded = ref(false);
    const childNodeRendered = ref(false);
    const oldChecked = ref(null);
    const oldIndeterminate = ref(null);
    const node$ = ref(null);
    const dragEvents = inject(dragEventsKey);
    const instance = getCurrentInstance();
    provide("NodeInstance", instance);
    if (props.node.expanded) {
      expanded.value = true;
      childNodeRendered.value = true;
    }
    const childrenKey = tree2.props["children"] || "children";
    watch(() => {
      const children = props.node.data[childrenKey];
      return children && [...children];
    }, () => {
      props.node.updateChildren();
    });
    watch(() => props.node.indeterminate, (val) => {
      handleSelectChange(props.node.checked, val);
    });
    watch(() => props.node.checked, (val) => {
      handleSelectChange(val, props.node.indeterminate);
    });
    watch(() => props.node.expanded, (val) => {
      nextTick(() => expanded.value = val);
      if (val) {
        childNodeRendered.value = true;
      }
    });
    const getNodeKey$1 = (node) => {
      return getNodeKey(tree2.props.nodeKey, node.data);
    };
    const getNodeClass = (node) => {
      const nodeClassFunc = props.props.class;
      if (!nodeClassFunc) {
        return {};
      }
      let className;
      if (isFunction(nodeClassFunc)) {
        const { data } = node;
        className = nodeClassFunc(data, node);
      } else {
        className = nodeClassFunc;
      }
      if (isString(className)) {
        return { [className]: true };
      } else {
        return className;
      }
    };
    const handleSelectChange = (checked, indeterminate) => {
      if (oldChecked.value !== checked || oldIndeterminate.value !== indeterminate) {
        tree2.ctx.emit("check-change", props.node.data, checked, indeterminate);
      }
      oldChecked.value = checked;
      oldIndeterminate.value = indeterminate;
    };
    const handleClick = (e) => {
      handleCurrentChange(tree2.store, tree2.ctx.emit, () => tree2.store.value.setCurrentNode(props.node));
      tree2.currentNode.value = props.node;
      if (tree2.props.expandOnClickNode) {
        handleExpandIconClick();
      }
      if (tree2.props.checkOnClickNode && !props.node.disabled) {
        handleCheckChange(null, {
          target: { checked: !props.node.checked }
        });
      }
      tree2.ctx.emit("node-click", props.node.data, props.node, instance, e);
    };
    const handleContextMenu = (event) => {
      if (tree2.instance.vnode.props["onNodeContextmenu"]) {
        event.stopPropagation();
        event.preventDefault();
      }
      tree2.ctx.emit("node-contextmenu", event, props.node.data, props.node, instance);
    };
    const handleExpandIconClick = () => {
      if (props.node.isLeaf)
        return;
      if (expanded.value) {
        tree2.ctx.emit("node-collapse", props.node.data, props.node, instance);
        props.node.collapse();
      } else {
        props.node.expand();
        ctx.emit("node-expand", props.node.data, props.node, instance);
      }
    };
    const handleCheckChange = (value, ev) => {
      props.node.setChecked(ev.target.checked, !tree2.props.checkStrictly);
      nextTick(() => {
        const store = tree2.store.value;
        tree2.ctx.emit("check", props.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys()
        });
      });
    };
    const handleChildNodeExpand = (nodeData, node, instance2) => {
      broadcastExpanded(node);
      tree2.ctx.emit("node-expand", nodeData, node, instance2);
    };
    const handleDragStart = (event) => {
      if (!tree2.props.draggable)
        return;
      dragEvents.treeNodeDragStart({ event, treeNode: props });
    };
    const handleDragOver = (event) => {
      event.preventDefault();
      if (!tree2.props.draggable)
        return;
      dragEvents.treeNodeDragOver({
        event,
        treeNode: { $el: node$.value, node: props.node }
      });
    };
    const handleDrop = (event) => {
      event.preventDefault();
    };
    const handleDragEnd = (event) => {
      if (!tree2.props.draggable)
        return;
      dragEvents.treeNodeDragEnd(event);
    };
    return {
      ns: ns2,
      node$,
      tree: tree2,
      expanded,
      childNodeRendered,
      oldChecked,
      oldIndeterminate,
      getNodeKey: getNodeKey$1,
      getNodeClass,
      handleSelectChange,
      handleClick,
      handleContextMenu,
      handleExpandIconClick,
      handleCheckChange,
      handleChildNodeExpand,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleDragEnd,
      CaretRight: caret_right_default
    };
  }
});
const _hoisted_1$b = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"];
const _hoisted_2$4 = ["aria-expanded"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_loading = resolveComponent("loading");
  const _component_node_content = resolveComponent("node-content");
  const _component_el_tree_node = resolveComponent("el-tree-node");
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "node$",
    class: normalizeClass([
      _ctx.ns.b("node"),
      _ctx.ns.is("expanded", _ctx.expanded),
      _ctx.ns.is("current", _ctx.node.isCurrent),
      _ctx.ns.is("hidden", !_ctx.node.visible),
      _ctx.ns.is("focusable", !_ctx.node.disabled),
      _ctx.ns.is("checked", !_ctx.node.disabled && _ctx.node.checked),
      _ctx.getNodeClass(_ctx.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": _ctx.expanded,
    "aria-disabled": _ctx.node.disabled,
    "aria-checked": _ctx.node.checked,
    draggable: _ctx.tree.props.draggable,
    "data-key": _ctx.getNodeKey(_ctx.node),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onContextmenu: _cache[2] || (_cache[2] = (...args) => _ctx.handleContextMenu && _ctx.handleContextMenu(...args)),
    onDragstart: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.handleDragStart && _ctx.handleDragStart(...args), ["stop"])),
    onDragover: _cache[4] || (_cache[4] = withModifiers((...args) => _ctx.handleDragOver && _ctx.handleDragOver(...args), ["stop"])),
    onDragend: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.handleDragEnd && _ctx.handleDragEnd(...args), ["stop"])),
    onDrop: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.handleDrop && _ctx.handleDrop(...args), ["stop"]))
  }, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.ns.be("node", "content")),
      style: normalizeStyle({ paddingLeft: (_ctx.node.level - 1) * _ctx.tree.props.indent + "px" })
    }, [
      _ctx.tree.props.icon || _ctx.CaretRight ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: normalizeClass([
          _ctx.ns.be("node", "expand-icon"),
          _ctx.ns.is("leaf", _ctx.node.isLeaf),
          {
            expanded: !_ctx.node.isLeaf && _ctx.expanded
          }
        ]),
        onClick: withModifiers(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tree.props.icon || _ctx.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
      _ctx.showCheckbox ? (openBlock(), createBlock(_component_el_checkbox, {
        key: 1,
        "model-value": _ctx.node.checked,
        indeterminate: _ctx.node.indeterminate,
        disabled: !!_ctx.node.disabled,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        onChange: _ctx.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : createCommentVNode("v-if", true),
      _ctx.node.loading ? (openBlock(), createBlock(_component_el_icon, {
        key: 2,
        class: normalizeClass([_ctx.ns.be("node", "loading-icon"), _ctx.ns.is("loading")])
      }, {
        default: withCtx(() => [
          createVNode(_component_loading)
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("v-if", true),
      createVNode(_component_node_content, {
        node: _ctx.node,
        "render-content": _ctx.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    createVNode(_component_el_collapse_transition, null, {
      default: withCtx(() => [
        !_ctx.renderAfterExpand || _ctx.childNodeRendered ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.ns.be("node", "children")),
          role: "group",
          "aria-expanded": _ctx.expanded
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.node.childNodes, (child) => {
            return openBlock(), createBlock(_component_el_tree_node, {
              key: _ctx.getNodeKey(child),
              "render-content": _ctx.renderContent,
              "render-after-expand": _ctx.renderAfterExpand,
              "show-checkbox": _ctx.showCheckbox,
              node: child,
              accordion: _ctx.accordion,
              props: _ctx.props,
              onNodeExpand: _ctx.handleChildNodeExpand
            }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]);
          }), 128))
        ], 10, _hoisted_2$4)), [
          [vShow, _ctx.expanded]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 1
    })
  ], 42, _hoisted_1$b)), [
    [vShow, _ctx.node.visible]
  ]);
}
var ElTreeNode = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function useKeydown({ el$ }, store) {
  const ns2 = useNamespace("tree");
  const treeItems = shallowRef([]);
  const checkboxItems = shallowRef([]);
  onMounted(() => {
    initTabIndex();
  });
  onUpdated(() => {
    treeItems.value = Array.from(el$.value.querySelectorAll("[role=treeitem]"));
    checkboxItems.value = Array.from(el$.value.querySelectorAll("input[type=checkbox]"));
  });
  watch(checkboxItems, (val) => {
    val.forEach((checkbox2) => {
      checkbox2.setAttribute("tabindex", "-1");
    });
  });
  const handleKeydown = (ev) => {
    const currentItem = ev.target;
    if (!currentItem.className.includes(ns2.b("node")))
      return;
    const code = ev.code;
    treeItems.value = Array.from(el$.value.querySelectorAll(`.${ns2.is("focusable")}[role=treeitem]`));
    const currentIndex = treeItems.value.indexOf(currentItem);
    let nextIndex;
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      ev.preventDefault();
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex === -1 ? 0 : currentIndex !== 0 ? currentIndex - 1 : treeItems.value.length - 1;
        const startIndex = nextIndex;
        while (true) {
          if (store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus)
            break;
          nextIndex--;
          if (nextIndex === startIndex) {
            nextIndex = -1;
            break;
          }
          if (nextIndex < 0) {
            nextIndex = treeItems.value.length - 1;
          }
        }
      } else {
        nextIndex = currentIndex === -1 ? 0 : currentIndex < treeItems.value.length - 1 ? currentIndex + 1 : 0;
        const startIndex = nextIndex;
        while (true) {
          if (store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus)
            break;
          nextIndex++;
          if (nextIndex === startIndex) {
            nextIndex = -1;
            break;
          }
          if (nextIndex >= treeItems.value.length) {
            nextIndex = 0;
          }
        }
      }
      nextIndex !== -1 && treeItems.value[nextIndex].focus();
    }
    if ([EVENT_CODE.left, EVENT_CODE.right].includes(code)) {
      ev.preventDefault();
      currentItem.click();
    }
    const hasInput = currentItem.querySelector('[type="checkbox"]');
    if ([EVENT_CODE.enter, EVENT_CODE.space].includes(code) && hasInput) {
      ev.preventDefault();
      hasInput.click();
    }
  };
  useEventListener(el$, "keydown", handleKeydown);
  const initTabIndex = () => {
    var _a;
    treeItems.value = Array.from(el$.value.querySelectorAll(`.${ns2.is("focusable")}[role=treeitem]`));
    checkboxItems.value = Array.from(el$.value.querySelectorAll("input[type=checkbox]"));
    const checkedItem = el$.value.querySelectorAll(`.${ns2.is("checked")}[role=treeitem]`);
    if (checkedItem.length) {
      checkedItem[0].setAttribute("tabindex", "0");
      return;
    }
    (_a = treeItems.value[0]) == null ? void 0 : _a.setAttribute("tabindex", "0");
  };
}
const _sfc_main$t = defineComponent({
  name: "ElTree",
  components: { ElTreeNode },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: iconPropType
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(props, ctx) {
    const { t } = useLocale();
    const ns2 = useNamespace("tree");
    const store = ref(new TreeStore({
      key: props.nodeKey,
      data: props.data,
      lazy: props.lazy,
      props: props.props,
      load: props.load,
      currentNodeKey: props.currentNodeKey,
      checkStrictly: props.checkStrictly,
      checkDescendants: props.checkDescendants,
      defaultCheckedKeys: props.defaultCheckedKeys,
      defaultExpandedKeys: props.defaultExpandedKeys,
      autoExpandParent: props.autoExpandParent,
      defaultExpandAll: props.defaultExpandAll,
      filterNodeMethod: props.filterNodeMethod
    }));
    store.value.initialize();
    const root2 = ref(store.value.root);
    const currentNode = ref(null);
    const el$ = ref(null);
    const dropIndicator$ = ref(null);
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const { dragState } = useDragNodeHandler({
      props,
      ctx,
      el$,
      dropIndicator$,
      store
    });
    useKeydown({ el$ }, store);
    const isEmpty2 = computed(() => {
      const { childNodes } = root2.value;
      return !childNodes || childNodes.length === 0 || childNodes.every(({ visible }) => !visible);
    });
    watch(() => props.currentNodeKey, (newVal) => {
      store.value.setCurrentNodeKey(newVal);
    });
    watch(() => props.defaultCheckedKeys, (newVal) => {
      store.value.setDefaultCheckedKey(newVal);
    });
    watch(() => props.defaultExpandedKeys, (newVal) => {
      store.value.setDefaultExpandedKeys(newVal);
    });
    watch(() => props.data, (newVal) => {
      store.value.setData(newVal);
    }, { deep: true });
    watch(() => props.checkStrictly, (newVal) => {
      store.value.checkStrictly = newVal;
    });
    const filter2 = (value) => {
      if (!props.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      store.value.filter(value);
    };
    const getNodeKey$1 = (node) => {
      return getNodeKey(props.nodeKey, node.data);
    };
    const getNodePath = (data) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const node = store.value.getNode(data);
      if (!node)
        return [];
      const path = [node.data];
      let parent = node.parent;
      while (parent && parent !== root2.value) {
        path.push(parent.data);
        parent = parent.parent;
      }
      return path.reverse();
    };
    const getCheckedNodes = (leafOnly, includeHalfChecked) => {
      return store.value.getCheckedNodes(leafOnly, includeHalfChecked);
    };
    const getCheckedKeys = (leafOnly) => {
      return store.value.getCheckedKeys(leafOnly);
    };
    const getCurrentNode = () => {
      const currentNode2 = store.value.getCurrentNode();
      return currentNode2 ? currentNode2.data : null;
    };
    const getCurrentKey = () => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const currentNode2 = getCurrentNode();
      return currentNode2 ? currentNode2[props.nodeKey] : null;
    };
    const setCheckedNodes = (nodes, leafOnly) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      store.value.setCheckedNodes(nodes, leafOnly);
    };
    const setCheckedKeys = (keys2, leafOnly) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      store.value.setCheckedKeys(keys2, leafOnly);
    };
    const setChecked = (data, checked, deep) => {
      store.value.setChecked(data, checked, deep);
    };
    const getHalfCheckedNodes = () => {
      return store.value.getHalfCheckedNodes();
    };
    const getHalfCheckedKeys = () => {
      return store.value.getHalfCheckedKeys();
    };
    const setCurrentNode = (node, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      handleCurrentChange(store, ctx.emit, () => store.value.setUserCurrentNode(node, shouldAutoExpandParent));
    };
    const setCurrentKey = (key, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      handleCurrentChange(store, ctx.emit, () => store.value.setCurrentNodeKey(key, shouldAutoExpandParent));
    };
    const getNode = (data) => {
      return store.value.getNode(data);
    };
    const remove2 = (data) => {
      store.value.remove(data);
    };
    const append = (data, parentNode) => {
      store.value.append(data, parentNode);
    };
    const insertBefore = (data, refNode) => {
      store.value.insertBefore(data, refNode);
    };
    const insertAfter = (data, refNode) => {
      store.value.insertAfter(data, refNode);
    };
    const handleNodeExpand = (nodeData, node, instance) => {
      broadcastExpanded(node);
      ctx.emit("node-expand", nodeData, node, instance);
    };
    const updateKeyChildren = (key, data) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      store.value.updateChildren(key, data);
    };
    provide("RootTree", {
      ctx,
      props,
      store,
      root: root2,
      currentNode,
      instance: getCurrentInstance()
    });
    provide(formItemContextKey, void 0);
    return {
      ns: ns2,
      store,
      root: root2,
      currentNode,
      dragState,
      el$,
      dropIndicator$,
      isEmpty: isEmpty2,
      filter: filter2,
      getNodeKey: getNodeKey$1,
      getNodePath,
      getCheckedNodes,
      getCheckedKeys,
      getCurrentNode,
      getCurrentKey,
      setCheckedNodes,
      setCheckedKeys,
      setChecked,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      setCurrentNode,
      setCurrentKey,
      t,
      getNode,
      remove: remove2,
      append,
      insertBefore,
      insertAfter,
      handleNodeExpand,
      updateKeyChildren
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_tree_node = resolveComponent("el-tree-node");
  return openBlock(), createElementBlock("div", {
    ref: "el$",
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.is("dragging", !!_ctx.dragState.draggingNode),
      _ctx.ns.is("drop-not-allow", !_ctx.dragState.allowDrop),
      _ctx.ns.is("drop-inner", _ctx.dragState.dropType === "inner"),
      { [_ctx.ns.m("highlight-current")]: _ctx.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.root.childNodes, (child) => {
      return openBlock(), createBlock(_component_el_tree_node, {
        key: _ctx.getNodeKey(child),
        node: child,
        props: _ctx.props,
        accordion: _ctx.accordion,
        "render-after-expand": _ctx.renderAfterExpand,
        "show-checkbox": _ctx.showCheckbox,
        "render-content": _ctx.renderContent,
        onNodeExpand: _ctx.handleNodeExpand
      }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]);
    }), 128)),
    _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.e("empty-block"))
    }, [
      createBaseVNode("span", {
        class: normalizeClass(_ctx.ns.e("empty-text"))
      }, toDisplayString((_a = _ctx.emptyText) != null ? _a : _ctx.t("el.tree.emptyText")), 3)
    ], 2)) : createCommentVNode("v-if", true),
    withDirectives(createBaseVNode("div", {
      ref: "dropIndicator$",
      class: normalizeClass(_ctx.ns.e("drop-indicator"))
    }, null, 2), [
      [vShow, _ctx.dragState.showDropIndicator]
    ])
  ], 2);
}
var Tree = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
Tree.install = (app) => {
  app.component(Tree.name, Tree);
};
const _Tree = Tree;
const useSelect = (props, { attrs }, {
  tree: tree2,
  key
}) => {
  const ns2 = useNamespace("tree-select");
  const result = {
    ...pick$1(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns2.e("popper")];
      if (props.popperClass)
        classes.push(props.popperClass);
      return classes.join(" ");
    }),
    filterMethod: (keyword = "") => {
      if (props.filterMethod)
        props.filterMethod(keyword);
      nextTick(() => {
        var _a;
        (_a = tree2.value) == null ? void 0 : _a.filter(keyword);
      });
    },
    onVisibleChange: (visible) => {
      var _a;
      (_a = attrs.onVisibleChange) == null ? void 0 : _a.call(attrs, visible);
      if (props.filterable && visible) {
        result.filterMethod();
      }
    }
  };
  return result;
};
const component = defineComponent({
  extends: ElOption,
  setup(props, ctx) {
    const result = ElOption.setup(props, ctx);
    delete result.selectOptionClick;
    const vm = getCurrentInstance().proxy;
    nextTick(() => {
      if (!result.select.cachedOptions.get(vm.value)) {
        result.select.onOptionCreate(vm);
      }
    });
    return result;
  },
  methods: {
    selectOptionClick() {
      this.$el.parentElement.click();
    }
  }
});
function isValidValue(val) {
  return val || val === 0;
}
function isValidArray(val) {
  return Array.isArray(val) && val.length;
}
function toValidArray(val) {
  return Array.isArray(val) ? val : isValidValue(val) ? [val] : [];
}
function treeFind(treeData, findCallback, getChildren, resultCallback, parent) {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i];
    if (findCallback(data, i, treeData, parent)) {
      return resultCallback ? resultCallback(data, i, treeData, parent) : data;
    } else {
      const children = getChildren(data);
      if (isValidArray(children)) {
        const find = treeFind(children, findCallback, getChildren, resultCallback, data);
        if (find)
          return find;
      }
    }
  }
}
const useTree = (props, { attrs, slots, emit }, {
  select: select2,
  tree: tree2,
  key
}) => {
  watch(() => props.modelValue, () => {
    if (props.showCheckbox) {
      nextTick(() => {
        const treeInstance = tree2.value;
        if (treeInstance && !isEqual(treeInstance.getCheckedKeys(), toValidArray(props.modelValue))) {
          treeInstance.setCheckedKeys(toValidArray(props.modelValue));
        }
      });
    }
  }, {
    immediate: true,
    deep: true
  });
  const propsMap = computed(() => ({
    value: key.value,
    ...props.props
  }));
  const getNodeValByProp = (prop, data) => {
    var _a;
    const propVal = propsMap.value[prop];
    if (isFunction(propVal)) {
      return propVal(data, (_a = tree2.value) == null ? void 0 : _a.getNode(getNodeValByProp("value", data)));
    } else {
      return data[propVal];
    }
  };
  const defaultExpandedParentKeys = toValidArray(props.modelValue).map((value) => {
    return treeFind(props.data || [], (data) => getNodeValByProp("value", data) === value, (data) => getNodeValByProp("children", data), (data, index, array, parent) => parent && getNodeValByProp("value", parent));
  }).filter((item) => isValidValue(item));
  return {
    ...pick$1(toRefs(props), Object.keys(_Tree.props)),
    ...attrs,
    nodeKey: key,
    expandOnClickNode: computed(() => {
      return !props.checkStrictly && props.expandOnClickNode;
    }),
    defaultExpandedKeys: computed(() => {
      return props.defaultExpandedKeys ? props.defaultExpandedKeys.concat(defaultExpandedParentKeys) : defaultExpandedParentKeys;
    }),
    renderContent: (h2, { node, data, store }) => {
      return h2(component, {
        value: getNodeValByProp("value", data),
        label: getNodeValByProp("label", data),
        disabled: getNodeValByProp("disabled", data)
      }, props.renderContent ? () => props.renderContent(h2, { node, data, store }) : slots.default ? () => slots.default({ node, data, store }) : void 0);
    },
    filterNodeMethod: (value, data, node) => {
      var _a;
      if (props.filterNodeMethod)
        return props.filterNodeMethod(value, data, node);
      if (!value)
        return true;
      return (_a = getNodeValByProp("label", data)) == null ? void 0 : _a.includes(value);
    },
    onNodeClick: (data, node, e) => {
      var _a, _b, _c;
      (_a = attrs.onNodeClick) == null ? void 0 : _a.call(attrs, data, node, e);
      if (props.showCheckbox && props.checkOnClickNode)
        return;
      if (!props.showCheckbox && (props.checkStrictly || node.isLeaf)) {
        if (!getNodeValByProp("disabled", data)) {
          const option2 = (_b = select2.value) == null ? void 0 : _b.options.get(getNodeValByProp("value", data));
          (_c = select2.value) == null ? void 0 : _c.handleOptionSelect(option2, true);
        }
      } else if (props.expandOnClickNode) {
        e.proxy.handleExpandIconClick();
      }
    },
    onCheck: (data, params) => {
      var _a;
      (_a = attrs.onCheck) == null ? void 0 : _a.call(attrs, data, params);
      const dataValue = getNodeValByProp("value", data);
      if (props.checkStrictly) {
        emit(UPDATE_MODEL_EVENT, props.multiple ? params.checkedKeys : params.checkedKeys.includes(dataValue) ? dataValue : void 0);
      } else {
        if (props.multiple) {
          emit(UPDATE_MODEL_EVENT, tree2.value.getCheckedKeys(true));
        } else {
          const firstLeaf = treeFind([data], (data2) => !isValidArray(getNodeValByProp("children", data2)) && !getNodeValByProp("disabled", data2), (data2) => getNodeValByProp("children", data2));
          const firstLeafKey = firstLeaf ? getNodeValByProp("value", firstLeaf) : void 0;
          const hasCheckedChild = isValidValue(props.modelValue) && !!treeFind([data], (data2) => getNodeValByProp("value", data2) === props.modelValue, (data2) => getNodeValByProp("children", data2));
          emit(UPDATE_MODEL_EVENT, firstLeafKey === props.modelValue || hasCheckedChild ? void 0 : firstLeafKey);
        }
      }
    }
  };
};
const _sfc_main$s = defineComponent({
  name: "ElTreeSelect",
  inheritAttrs: false,
  props: {
    ...ElSelect.props,
    ..._Tree.props
  },
  setup(props, context) {
    const { slots, expose } = context;
    const select2 = ref();
    const tree2 = ref();
    const key = computed(() => props.nodeKey || props.valueKey || "value");
    const selectProps = useSelect(props, context, { select: select2, tree: tree2, key });
    const treeProps = useTree(props, context, { select: select2, tree: tree2, key });
    const methods = reactive({});
    expose(methods);
    onMounted(() => {
      Object.assign(methods, {
        ...pick$1(tree2.value, [
          "filter",
          "updateKeyChildren",
          "getCheckedNodes",
          "setCheckedNodes",
          "getCheckedKeys",
          "setCheckedKeys",
          "setChecked",
          "getHalfCheckedNodes",
          "getHalfCheckedKeys",
          "getCurrentKey",
          "getCurrentNode",
          "setCurrentKey",
          "setCurrentNode",
          "getNode",
          "remove",
          "append",
          "insertBefore",
          "insertAfter"
        ]),
        ...pick$1(select2.value, ["focus", "blur"])
      });
    });
    return () => h$1(ElSelect, reactive({
      ...selectProps,
      ref: (ref2) => select2.value = ref2
    }), {
      ...slots,
      default: () => h$1(_Tree, reactive({
        ...treeProps,
        ref: (ref2) => tree2.value = ref2
      }))
    });
  }
});
var TreeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);
TreeSelect.install = (app) => {
  app.component(TreeSelect.name, TreeSelect);
};
const _TreeSelect = TreeSelect;
const ElTreeSelect = _TreeSelect;
const _sfc_main$r = defineComponent({
  name: "ElMessageBox",
  directives: {
    TrapFocus
  },
  components: {
    ElButton,
    ElFocusTrap,
    ElInput,
    ElOverlay,
    ElIcon,
    ...TypeComponents
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String,
      validator: isValidComponentSize
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    center: Boolean,
    draggable: Boolean,
    roundButton: {
      default: false,
      type: Boolean
    },
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(props, { emit }) {
    const { t } = useLocale();
    const ns2 = useNamespace("message-box");
    const visible = ref(false);
    const { nextZIndex } = useZIndex();
    const state = reactive({
      autofocus: true,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      icon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: null,
      inputValidator: null,
      inputErrorMessage: "",
      message: null,
      modalFade: true,
      modalClass: "",
      showCancelButton: false,
      showConfirmButton: true,
      type: "",
      title: void 0,
      showInput: false,
      action: "",
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonDisabled: false,
      editorErrorMessage: "",
      validateError: false,
      zIndex: nextZIndex()
    });
    const typeClass = computed(() => {
      const type = state.type;
      return { [ns2.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const contentId = useId();
    const inputId = useId();
    const btnSize = useSize(computed(() => props.buttonSize), { prop: true, form: true, formItem: true });
    const iconComponent = computed(() => state.icon || TypeComponentsMap[state.type] || "");
    const hasMessage = computed(() => !!state.message);
    const rootRef = ref();
    const headerRef = ref();
    const focusStartRef = ref();
    const inputRef = ref();
    const confirmRef = ref();
    const confirmButtonClasses = computed(() => state.confirmButtonClass);
    watch(() => state.inputValue, async (val) => {
      await nextTick();
      if (props.boxType === "prompt" && val !== null) {
        validate();
      }
    }, { immediate: true });
    watch(() => visible.value, (val) => {
      var _a, _b;
      if (val) {
        if (props.boxType !== "prompt") {
          if (state.autofocus) {
            focusStartRef.value = (_b = (_a = confirmRef.value) == null ? void 0 : _a.$el) != null ? _b : rootRef.value;
          } else {
            focusStartRef.value = rootRef.value;
          }
        }
        state.zIndex = nextZIndex();
      }
      if (props.boxType !== "prompt")
        return;
      if (val) {
        nextTick().then(() => {
          var _a2;
          if (inputRef.value && inputRef.value.$el) {
            if (state.autofocus) {
              focusStartRef.value = (_a2 = getInputElement()) != null ? _a2 : rootRef.value;
            } else {
              focusStartRef.value = rootRef.value;
            }
          }
        });
      } else {
        state.editorErrorMessage = "";
        state.validateError = false;
      }
    });
    const draggable = computed(() => props.draggable);
    useDraggable(rootRef, headerRef, draggable);
    onMounted(async () => {
      await nextTick();
      if (props.closeOnHashChange) {
        window.addEventListener("hashchange", doClose);
      }
    });
    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        window.removeEventListener("hashchange", doClose);
      }
    });
    function doClose() {
      if (!visible.value)
        return;
      visible.value = false;
      nextTick(() => {
        if (state.action)
          emit("action", state.action);
      });
    }
    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? "close" : "cancel");
      }
    };
    const overlayEvent = useSameTarget(handleWrapperClick);
    const handleInputEnter = (e) => {
      if (state.inputType !== "textarea") {
        e.preventDefault();
        return handleAction("confirm");
      }
    };
    const handleAction = (action) => {
      var _a;
      if (props.boxType === "prompt" && action === "confirm" && !validate()) {
        return;
      }
      state.action = action;
      if (state.beforeClose) {
        (_a = state.beforeClose) == null ? void 0 : _a.call(state, action, state, doClose);
      } else {
        doClose();
      }
    };
    const validate = () => {
      if (props.boxType === "prompt") {
        const inputPattern = state.inputPattern;
        if (inputPattern && !inputPattern.test(state.inputValue || "")) {
          state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
          state.validateError = true;
          return false;
        }
        const inputValidator = state.inputValidator;
        if (typeof inputValidator === "function") {
          const validateResult = inputValidator(state.inputValue);
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
            state.validateError = true;
            return false;
          }
          if (typeof validateResult === "string") {
            state.editorErrorMessage = validateResult;
            state.validateError = true;
            return false;
          }
        }
      }
      state.editorErrorMessage = "";
      state.validateError = false;
      return true;
    };
    const getInputElement = () => {
      const inputRefs = inputRef.value.$refs;
      return inputRefs.input || inputRefs.textarea;
    };
    const handleClose = () => {
      handleAction("close");
    };
    const onCloseRequested = () => {
      if (props.closeOnPressEscape) {
        handleClose();
      }
    };
    if (props.lockScroll) {
      useLockscreen(visible);
    }
    useRestoreActive(visible);
    return {
      ...toRefs(state),
      ns: ns2,
      overlayEvent,
      visible,
      hasMessage,
      typeClass,
      contentId,
      inputId,
      btnSize,
      iconComponent,
      confirmButtonClasses,
      rootRef,
      focusStartRef,
      headerRef,
      inputRef,
      confirmRef,
      doClose,
      handleClose,
      onCloseRequested,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      t
    };
  }
});
const _hoisted_1$a = ["aria-label", "aria-describedby"];
const _hoisted_2$3 = ["aria-label"];
const _hoisted_3 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_overlay = resolveComponent("el-overlay");
  return openBlock(), createBlock(Transition, {
    name: "fade-in-linear",
    onAfterLeave: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("vanish")),
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createVNode(_component_el_overlay, {
        "z-index": _ctx.zIndex,
        "overlay-class": [_ctx.ns.is("message-box"), _ctx.modalClass],
        mask: _ctx.modal
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            role: "dialog",
            "aria-label": _ctx.title,
            "aria-modal": "true",
            "aria-describedby": !_ctx.showInput ? _ctx.contentId : void 0,
            class: normalizeClass(`${_ctx.ns.namespace.value}-overlay-message-box`),
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
            onMousedown: _cache[9] || (_cache[9] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
            onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
          }, [
            createVNode(_component_el_focus_trap, {
              loop: "",
              trapped: _ctx.visible,
              "focus-trap-el": _ctx.rootRef,
              "focus-start-el": _ctx.focusStartRef,
              onReleaseRequested: _ctx.onCloseRequested
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  ref: "rootRef",
                  class: normalizeClass([
                    _ctx.ns.b(),
                    _ctx.customClass,
                    _ctx.ns.is("draggable", _ctx.draggable),
                    { [_ctx.ns.m("center")]: _ctx.center }
                  ]),
                  style: normalizeStyle(_ctx.customStyle),
                  tabindex: "-1",
                  onClick: _cache[7] || (_cache[7] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  _ctx.title !== null && _ctx.title !== void 0 ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref: "headerRef",
                    class: normalizeClass(_ctx.ns.e("header"))
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.ns.e("title"))
                    }, [
                      _ctx.iconComponent && _ctx.center ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true),
                      createBaseVNode("span", null, toDisplayString(_ctx.title), 1)
                    ], 2),
                    _ctx.showClose ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: normalizeClass(_ctx.ns.e("headerbtn")),
                      "aria-label": _ctx.t("el.messagebox.close"),
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel")),
                      onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
                    }, [
                      createVNode(_component_el_icon, {
                        class: normalizeClass(_ctx.ns.e("close"))
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_close)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, _hoisted_2$3)) : createCommentVNode("v-if", true)
                  ], 2)) : createCommentVNode("v-if", true),
                  createBaseVNode("div", {
                    id: _ctx.contentId,
                    class: normalizeClass(_ctx.ns.e("content"))
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.ns.e("container"))
                    }, [
                      _ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true),
                      _ctx.hasMessage ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(_ctx.ns.e("message"))
                      }, [
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
                            key: 0,
                            for: _ctx.showInput ? _ctx.inputId : void 0
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(!_ctx.dangerouslyUseHTMLString ? _ctx.message : ""), 1)
                            ]),
                            _: 1
                          }, 8, ["for"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
                            key: 1,
                            for: _ctx.showInput ? _ctx.inputId : void 0,
                            innerHTML: _ctx.message
                          }, null, 8, ["for", "innerHTML"]))
                        ])
                      ], 2)) : createCommentVNode("v-if", true)
                    ], 2),
                    withDirectives(createBaseVNode("div", {
                      class: normalizeClass(_ctx.ns.e("input"))
                    }, [
                      createVNode(_component_el_input, {
                        id: _ctx.inputId,
                        ref: "inputRef",
                        modelValue: _ctx.inputValue,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.inputValue = $event),
                        type: _ctx.inputType,
                        placeholder: _ctx.inputPlaceholder,
                        "aria-invalid": _ctx.validateError,
                        class: normalizeClass({ invalid: _ctx.validateError }),
                        onKeydown: withKeys(_ctx.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      createBaseVNode("div", {
                        class: normalizeClass(_ctx.ns.e("errormsg")),
                        style: normalizeStyle({
                          visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, toDisplayString(_ctx.editorErrorMessage), 7)
                    ], 2), [
                      [vShow, _ctx.showInput]
                    ])
                  ], 10, _hoisted_3),
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.ns.e("btns"))
                  }, [
                    _ctx.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      loading: _ctx.cancelButtonLoading,
                      class: normalizeClass([_ctx.cancelButtonClass]),
                      round: _ctx.roundButton,
                      size: _ctx.btnSize,
                      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleAction("cancel")),
                      onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.handleAction("cancel"), ["prevent"]), ["enter"]))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "size"])) : createCommentVNode("v-if", true),
                    withDirectives(createVNode(_component_el_button, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: _ctx.confirmButtonLoading,
                      class: normalizeClass([_ctx.confirmButtonClasses]),
                      round: _ctx.roundButton,
                      disabled: _ctx.confirmButtonDisabled,
                      size: _ctx.btnSize,
                      onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleAction("confirm")),
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.handleAction("confirm"), ["prevent"]), ["enter"]))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "disabled", "size"]), [
                      [vShow, _ctx.showConfirmButton]
                    ])
                  ], 2)
                ], 6)
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ], 42, _hoisted_1$a)
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}
var MessageBoxConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);
const messageInstance = /* @__PURE__ */ new Map();
const getAppendToElement = (props) => {
  let appendTo = document.body;
  if (props.appendTo) {
    if (isString(props.appendTo)) {
      appendTo = document.querySelector(props.appendTo);
    }
    if (isElement(props.appendTo)) {
      appendTo = props.appendTo;
    }
    if (!isElement(appendTo)) {
      appendTo = document.body;
    }
  }
  return appendTo;
};
const initInstance = (props, container2, appContext = null) => {
  const vnode = createVNode(MessageBoxConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = appContext;
  render(vnode, container2);
  getAppendToElement(props).appendChild(container2.firstElementChild);
  return vnode.component;
};
const genContainer = () => {
  return document.createElement("div");
};
const showMessage = (options, appContext) => {
  const container2 = genContainer();
  options.onVanish = () => {
    render(null, container2);
    messageInstance.delete(vm);
  };
  options.onAction = (action) => {
    const currentMsg = messageInstance.get(vm);
    let resolve2;
    if (options.showInput) {
      resolve2 = { value: vm.inputValue, action };
    } else {
      resolve2 = action;
    }
    if (options.callback) {
      options.callback(resolve2, instance.proxy);
    } else {
      if (action === "cancel" || action === "close") {
        if (options.distinguishCancelAndClose && action !== "cancel") {
          currentMsg.reject("close");
        } else {
          currentMsg.reject("cancel");
        }
      } else {
        currentMsg.resolve(resolve2);
      }
    }
  };
  const instance = initInstance(options, container2, appContext);
  const vm = instance.proxy;
  for (const prop in options) {
    if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
      vm[prop] = options[prop];
    }
  }
  vm.visible = true;
  return vm;
};
function MessageBox(options, appContext = null) {
  if (!isClient)
    return Promise.reject();
  let callback;
  if (isString(options) || isVNode(options)) {
    options = {
      message: options
    };
  } else {
    callback = options.callback;
  }
  return new Promise((resolve2, reject) => {
    const vm = showMessage(options, appContext != null ? appContext : MessageBox._context);
    messageInstance.set(vm, {
      options,
      callback,
      resolve: resolve2,
      reject
    });
  });
}
const MESSAGE_BOX_VARIANTS = ["alert", "confirm", "prompt"];
const MESSAGE_BOX_DEFAULT_OPTS = {
  alert: { closeOnPressEscape: false, closeOnClickModal: false },
  confirm: { showCancelButton: true },
  prompt: { showCancelButton: true, showInput: true }
};
MESSAGE_BOX_VARIANTS.forEach((boxType) => {
  MessageBox[boxType] = messageBoxFactory(boxType);
});
function messageBoxFactory(boxType) {
  return (message, title, options, appContext) => {
    let titleOrOpts = "";
    if (isObject$3(title)) {
      options = title;
      titleOrOpts = "";
    } else if (isUndefined(title)) {
      titleOrOpts = "";
    } else {
      titleOrOpts = title;
    }
    return MessageBox(Object.assign({
      title: titleOrOpts,
      message,
      type: "",
      ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
    }, options, {
      boxType
    }), appContext);
  };
}
MessageBox.close = () => {
  messageInstance.forEach((_2, vm) => {
    vm.doClose();
  });
  messageInstance.clear();
};
MessageBox._context = null;
const _MessageBox = MessageBox;
_MessageBox.install = (app) => {
  _MessageBox._context = app._context;
  app.config.globalProperties.$msgbox = _MessageBox;
  app.config.globalProperties.$messageBox = _MessageBox;
  app.config.globalProperties.$alert = _MessageBox.alert;
  app.config.globalProperties.$confirm = _MessageBox.confirm;
  app.config.globalProperties.$prompt = _MessageBox.prompt;
};
const ElMessageBox = _MessageBox;
const tabs = "";
const tabPane = "";
const tag = "";
const option = "";
const optionGroup = "";
const scrollbar = "";
const popper = "";
const select = "";
const _hoisted_1$9 = {
  class: "locale-changer"
};
const __default__$q = {
  name: "locale-changer"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$q,
  setup(__props) {
    const {
      locale
    } = useI18n();
    const langs = [{
      value: "zh_CN",
      label: "\u7B80\u4F53\u4E2D\u6587"
    }, {
      value: "en_US",
      label: "English"
    }];
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const langChanged = (lang) => {
      logUtil.logInfo("langChanged=>", lang);
      localStorage.Lang = lang;
      locale.value = lang;
    };
    onMounted(() => {
      if (localStorage.Lang != null)
        locale.value = localStorage.Lang;
    });
    return (_ctx, _cache) => {
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1$9, [createVNode(_component_el_form, {
        "label-width": "120px"
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("lang.choose")
        }, {
          default: withCtx(() => [createVNode(_component_el_select, {
            placeholder: _ctx.$t("lang.choose.placeholder"),
            modelValue: _ctx.$i18n.locale,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.$i18n.locale = $event),
            onChange: langChanged
          }, {
            default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(langs, (lang, i) => {
              return createVNode(_component_el_option, {
                key: i,
                label: lang.label,
                value: lang.value
              }, null, 8, ["label", "value"]);
            }), 64))]),
            _: 1
          }, 8, ["placeholder", "modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("theme.mode.choose")
        }, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(isDark) ? _ctx.$t("theme.mode.light") : _ctx.$t("theme.mode.dark")), 1)]),
            _: 1
          })]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      })]);
    };
  }
});
const _switch = "";
const SWITCH_VUEPRESS_KEY = "switch-vuepress";
const SWITCH_JVUE_KEY = "switch-jvue";
const SWITCH_CONF_KEY = "switch-conf";
const SWITCH_CNBLOGS_KEY = "switch-cnblogs";
const SWITCH_WORDPRESS_KEY = "switch-wordpress";
const SWITCH_LIANDI_KEY = "switch-liandi";
const SWITCH_YUQUE_KEY = "switch-yuque";
const SWITCH_KMS_KEY = "switch-kms";
const SWITCH_CONSTSNTS = {
  SWITCH_VUEPRESS_KEY,
  SWITCH_JVUE_KEY,
  SWITCH_CONF_KEY,
  SWITCH_CNBLOGS_KEY,
  SWITCH_WORDPRESS_KEY,
  SWITCH_LIANDI_KEY,
  SWITCH_YUQUE_KEY,
  SWITCH_KMS_KEY
};
const useTabCountStore = defineStore("tabCount", () => {
  const tabCount = ref(0);
  function resetCount() {
    tabCount.value = 0;
  }
  function incrementIf(isAdd) {
    if (isAdd) {
      tabCount.value++;
    }
  }
  return {
    tabCount,
    resetCount,
    incrementIf
  };
});
function useTabCount() {
  const tabCountStore = useTabCountStore();
  const vuepressEnabled = ref(false);
  const jvueEnabled = ref(false);
  const confEnabled = ref(false);
  const cnblogsEnabled = ref(false);
  const wordpressEnabled = ref(false);
  const liandiEnabled = ref(false);
  const yuqueEnabled = ref(false);
  const kmsEnabled = ref(false);
  let switchFormData = reactive({
    dynamicConfigArray: []
  });
  function doCount() {
    tabCountStore.resetCount();
    vuepressEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_VUEPRESS_KEY);
    tabCountStore.incrementIf(vuepressEnabled.value);
    jvueEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_JVUE_KEY);
    tabCountStore.incrementIf(jvueEnabled.value);
    confEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_CONF_KEY);
    tabCountStore.incrementIf(confEnabled.value);
    cnblogsEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_CNBLOGS_KEY);
    tabCountStore.incrementIf(cnblogsEnabled.value);
    wordpressEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_WORDPRESS_KEY);
    tabCountStore.incrementIf(wordpressEnabled.value);
    liandiEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_LIANDI_KEY);
    tabCountStore.incrementIf(liandiEnabled.value);
    yuqueEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_YUQUE_KEY);
    tabCountStore.incrementIf(yuqueEnabled.value);
    kmsEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_KMS_KEY);
    tabCountStore.incrementIf(kmsEnabled.value);
    const dynamicJsonCfg = getDynamicJsonCfg();
    const results = dynamicJsonCfg.totalCfg || [];
    switchFormData.dynamicConfigArray = [];
    results.forEach((item) => {
      const switchKey = "switch-" + item.plantformKey;
      const switchValue = getConf(switchKey);
      item.modelValue = item.plantformKey + "_" + switchValue;
      const dynEnabled = switchValue.toLowerCase() === "true";
      tabCountStore.incrementIf(dynEnabled);
      switchFormData.dynamicConfigArray.push(item);
    });
  }
  return {
    tabCountStore,
    vuepressEnabled,
    jvueEnabled,
    confEnabled,
    cnblogsEnabled,
    wordpressEnabled,
    liandiEnabled,
    yuqueEnabled,
    kmsEnabled,
    switchFormData,
    doCount
  };
}
const _hoisted_1$8 = {
  key: 1
};
const __default__$p = {
  name: "ServiceSwitch"
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$p,
  setup(__props) {
    useI18n();
    const {
      tabCountStore,
      vuepressEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      switchFormData,
      doCount
    } = useTabCount();
    let showSwitchTip = ref(false);
    const vuepressOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_VUEPRESS_KEY, val);
      initConf();
    };
    const jvueOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_JVUE_KEY, val);
      initConf();
    };
    const confOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_CONF_KEY, val);
      initConf();
    };
    const cnblogsOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_CNBLOGS_KEY, val);
      initConf();
    };
    const wordpressOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_WORDPRESS_KEY, val);
      initConf();
    };
    const liandiOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_LIANDI_KEY, val);
      initConf();
    };
    const yuqueOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_YUQUE_KEY, val);
      initConf();
    };
    const kmsOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_KMS_KEY, val);
      initConf();
    };
    const dynamicOnChange = (val) => {
      logUtil.logWarn("dynamicOnChange,val=>", val);
      const valArr = val.split("_");
      const switchKey = "switch-" + valArr[0];
      const switchStatus = valArr[1];
      setBooleanConf(switchKey, switchStatus);
      initConf();
    };
    const initConf = () => {
      doCount();
      if (tabCountStore.tabCount == 0) {
        showSwitchTip.value = true;
      } else {
        showSwitchTip.value = false;
      }
    };
    onMounted(() => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_switch = ElSwitch;
      const _component_el_form_item = ElFormItem;
      const _component_el_alert = ElAlert;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "100px",
        inline: ""
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.vuepress")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(vuepressEnabled),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(vuepressEnabled) ? vuepressEnabled.value = $event : null),
            onChange: vuepressOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), false ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("service.switch.jvue")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(jvueEnabled),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(jvueEnabled) ? jvueEnabled.value = $event : null),
            onChange: jvueOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.conf")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(confEnabled),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(confEnabled) ? confEnabled.value = $event : null),
            onChange: confOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(cnblogsEnabled),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(cnblogsEnabled) ? cnblogsEnabled.value = $event : null),
            onChange: cnblogsOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.wordpress")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(wordpressEnabled),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(wordpressEnabled) ? wordpressEnabled.value = $event : null),
            onChange: wordpressOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.liandi")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(liandiEnabled),
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(liandiEnabled) ? liandiEnabled.value = $event : null),
            onChange: liandiOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.yuque")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(yuqueEnabled),
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(yuqueEnabled) ? yuqueEnabled.value = $event : null),
            onChange: yuqueOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.kms")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(kmsEnabled),
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(kmsEnabled) ? kmsEnabled.value = $event : null),
            onChange: kmsOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(switchFormData).dynamicConfigArray, (cfg) => {
          return openBlock(), createBlock(_component_el_form_item, {
            label: cfg.plantformName + "_" + cfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(_component_el_switch, {
              modelValue: cfg.modelValue,
              "onUpdate:modelValue": ($event) => cfg.modelValue = $event,
              "active-value": cfg.plantformKey + "_true",
              "inactive-value": cfg.plantformKey + "_false",
              onChange: dynamicOnChange
            }, null, 8, ["modelValue", "onUpdate:modelValue", "active-value", "inactive-value"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256)), unref(showSwitchTip) ? (openBlock(), createElementBlock("div", _hoisted_1$8, [createBaseVNode("p", null, [createVNode(_component_el_alert, {
          title: _ctx.$t("plantform.must.select.one"),
          type: "error",
          closable: false
        }, null, 8, ["title"])])])) : createCommentVNode("", true)]),
        _: 1
      });
    };
  }
});
var PageType = /* @__PURE__ */ ((PageType2) => {
  PageType2[PageType2["Markdown"] = 0] = "Markdown";
  PageType2[PageType2["Html"] = 1] = "Html";
  return PageType2;
})(PageType || {});
class MetaweblogCfg {
  constructor(home, apiUrl, username, password) {
    __publicField(this, "apiStatus");
    __publicField(this, "blogName");
    __publicField(this, "posidKey");
    __publicField(this, "previewUrl");
    __publicField(this, "pageType");
    this.home = home;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this.home = home;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this.apiStatus = false;
    this.blogName = "";
    this.posidKey = "";
    this.previewUrl = "";
    this.pageType = PageType.Markdown;
  }
}
class DynamicMCfg extends MetaweblogCfg {
  constructor(postidKey) {
    super("", "", "", "");
    this.posidKey = postidKey;
    this.previewUrl = "/p/[postid].html";
    this.pageType = PageType.Html;
  }
}
class DynamicWCfg extends MetaweblogCfg {
  constructor(postidKey) {
    super("http://localhost:8000", "http://localhost:8000/xmlrpc.php", "", "");
    this.posidKey = postidKey;
    this.previewUrl = "/?p=[postid]";
    this.pageType = PageType.Html;
  }
}
const CNBLOGS_POSTID_KEY = "custom-cnblogs-post-id";
const WORDPRESS_POSTID_KEY = "custom-wordpress-post-id";
const CONFLUENCE_POSTID_KEY = "custom-conf-post-id";
const JVUE_POSTID_KEY = "custom-jvue-post-id";
const YUQUE_POSTID_KEY = "custom-yuque-post-id";
const WECHAT_POSTID_KEY = "custom-wechat-post-id";
const LIANDI_POSTID_KEY = "custom-liandi-post-id";
const VUEPRESS_POSTID_KEY = "custom-vuepress-slug";
const KMS_POSTID_KEY = "custom-kms-post-id";
const POSTID_KEY_CONSTANTS = {
  CNBLOGS_POSTID_KEY,
  WORDPRESS_POSTID_KEY,
  CONFLUENCE_POSTID_KEY,
  JVUE_POSTID_KEY,
  YUQUE_POSTID_KEY,
  WECHAT_POSTID_KEY,
  LIANDI_POSTID_KEY,
  VUEPRESS_POSTID_KEY,
  KMS_POSTID_KEY
};
class JVueCfg extends MetaweblogCfg {
  constructor() {
    super("https://[your-jvue-site]", "https://[your-jvue-site]/xmlrpc", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY;
    this.previewUrl = "/post/[postid].html";
    this.pageType = PageType.Markdown;
  }
}
const radioGroup = "";
const radio = "";
const __default__$o = {
  name: "MetaweblogSetting"
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$o,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: MetaweblogCfg,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    const ptype_md = parseInt(PageType.Markdown.toString());
    parseInt(PageType.Html.toString());
    const home = ref("");
    const apiUrl = ref("");
    const previewUrl = ref("");
    const username = ref("");
    const password = ref("");
    const ptype = ref(ptype_md);
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ");
    const valiConf = async () => {
      isLoading.value = true;
      try {
        saveConf(true);
        const cfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const usersBlogs = await api.getUsersBlogs();
        if (usersBlogs && usersBlogs.length > 0) {
          const userBlog = usersBlogs[0];
          cfg.apiStatus = true;
          apiStatus.value = true;
          cfg.blogName = userBlog.blogName;
          blogName.value = userBlog.blogName;
          setJSONConf(props.apiType, cfg);
        } else {
          cfg.apiStatus = false;
          apiStatus.value = false;
          setJSONConf(props.apiType, cfg);
        }
      } catch (e) {
        console.error(e);
      }
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.error"));
      } else {
        ElMessage.success(t("main.opt.success"));
      }
      isLoading.value = false;
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u9A8C\u8BC1\u5B8C\u6BD5");
    };
    const saveConf = (hideTip) => {
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u4FDD\u5B58\u914D\u7F6E");
      const cfg = props.cfg;
      cfg.home = home.value;
      cfg.username = username.value;
      cfg.password = password.value;
      cfg.apiUrl = apiUrl.value;
      cfg.previewUrl = previewUrl.value;
      cfg.apiStatus = apiStatus.value;
      cfg.blogName = blogName.value;
      cfg.pageType = ptype.value;
      setJSONConf(props.apiType, cfg);
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u914D\u7F6E\u521D\u59CB\u5316");
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        logUtil.logInfo("get setting conf=>", conf);
        home.value = conf.home;
        apiUrl.value = conf.apiUrl;
        previewUrl.value = conf.previewUrl;
        username.value = conf.username;
        password.value = conf.password;
        apiStatus.value = conf.apiStatus;
        blogName.value = conf.blogName;
        ptype.value = conf.pageType;
      }
    };
    onMounted(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px"
      }, {
        default: withCtx(() => [createVNode(_component_el_alert, {
          class: "top-version-tip",
          title: apiTypeInfo.value + blogName.value,
          type: "info",
          closable: false
        }, null, 8, ["title"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.url")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: home.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => home.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.username")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: username.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.password")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: password.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
            "show-password": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.apiurl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: apiUrl.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => apiUrl.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.previewUrl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: previewUrl.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => previewUrl.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.pageType")
        }, {
          default: withCtx(() => [createVNode(_component_el_radio_group, {
            modelValue: ptype.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ptype.value = $event),
            class: "ml-4"
          }, {
            default: withCtx(() => [createVNode(_component_el_radio, {
              label: 0,
              size: "large"
            }, {
              default: withCtx(() => [createTextVNode("Markdown")]),
              _: 1
            }), createVNode(_component_el_radio, {
              label: 1,
              size: "large"
            }, {
              default: withCtx(() => [createTextVNode("HTML")]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: valiConf,
            loading: isLoading.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(isLoading.value ? _ctx.$t("setting.blog.vali.ing") : _ctx.$t("setting.blog.vali")), 1)]),
            _: 1
          }, 8, ["loading"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "warning",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            title: _ctx.$t("setting.blog.vali.ok.metaweblog"),
            type: "success",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: saveConf
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, null, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const __default__$n = {
  name: "JVueSetting",
  components: {
    MetaweblogSetting: _sfc_main$o
  }
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JVUE);
    const cfg = ref(new JVueCfg());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof browser$1 === "object" && "version" in browser$1) {
    return `Node.js/${browser$1.version.substr(1)} (${browser$1.platform}; ${browser$1.arch})`;
  }
  return "<environment undetectable>";
}
var beforeAfterHook = { exports: {} };
var register_1 = register$1;
function register$1(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }
  if (!options) {
    options = {};
  }
  if (Array.isArray(name)) {
    return name.reverse().reduce(function(callback, name2) {
      return register$1.bind(null, state, name2, callback, options);
    }, method)();
  }
  return Promise.resolve().then(function() {
    if (!state.registry[name]) {
      return method(options);
    }
    return state.registry[name].reduce(function(method2, registered) {
      return registered.hook.bind(null, method2, options);
    }, method)();
  });
}
var add = addHook$1;
function addHook$1(state, kind, name, hook2) {
  var orig = hook2;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }
  if (kind === "before") {
    hook2 = function(method, options) {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }
  if (kind === "after") {
    hook2 = function(method, options) {
      var result;
      return Promise.resolve().then(method.bind(null, options)).then(function(result_) {
        result = result_;
        return orig(result, options);
      }).then(function() {
        return result;
      });
    };
  }
  if (kind === "error") {
    hook2 = function(method, options) {
      return Promise.resolve().then(method.bind(null, options)).catch(function(error) {
        return orig(error, options);
      });
    };
  }
  state.registry[name].push({
    hook: hook2,
    orig
  });
}
var remove = removeHook$1;
function removeHook$1(state, name, method) {
  if (!state.registry[name]) {
    return;
  }
  var index = state.registry[name].map(function(registered) {
    return registered.orig;
  }).indexOf(method);
  if (index === -1) {
    return;
  }
  state.registry[name].splice(index, 1);
}
var register = register_1;
var addHook = add;
var removeHook = remove;
var bind = Function.bind;
var bindable = bind.bind(bind);
function bindApi(hook2, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(
    null,
    name ? [state, name] : [state]
  );
  hook2.api = { remove: removeHookRef };
  hook2.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach(function(kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook2[kind] = hook2.api[kind] = bindable(addHook, null).apply(null, args);
  });
}
function HookSingular() {
  var singularHookName = "h";
  var singularHookState = {
    registry: {}
  };
  var singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}
function HookCollection() {
  var state = {
    registry: {}
  };
  var hook2 = register.bind(null, state);
  bindApi(hook2, state);
  return hook2;
}
var collectionHookDeprecationMessageDisplayed = false;
function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn(
      '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
    );
    collectionHookDeprecationMessageDisplayed = true;
  }
  return HookCollection();
}
Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();
beforeAfterHook.exports = Hook;
beforeAfterHook.exports.Hook = Hook;
beforeAfterHook.exports.Singular = Hook.Singular;
var Collection = beforeAfterHook.exports.Collection = Hook.Collection;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject(o2) {
  var ctor, prot;
  if (isObject(o2) === false)
    return false;
  ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function lowercaseKeys(object) {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}
function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach((key) => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults))
        Object.assign(result, { [key]: options[key] });
      else
        result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, { [key]: options[key] });
    }
  });
  return result;
}
function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? { method, url } : { url: method }, options);
  } else {
    options = Object.assign({}, route);
  }
  options.headers = lowercaseKeys(options.headers);
  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options);
  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter((preview) => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }
  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
  return mergedOptions;
}
function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);
  if (names.length === 0) {
    return url;
  }
  return url + separator + names.map((name) => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }
    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}
const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);
  if (!matches) {
    return [];
  }
  return matches.map(removeNonChars).reduce((a2, b2) => a2.concat(b2), []);
}
function omit(object, keysToOmit) {
  return Object.keys(object).filter((option2) => !keysToOmit.includes(option2)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(encodeValue(operator, value2, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}
function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_2, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];
      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }
      expression.split(/,/g).forEach(function(variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });
      if (operator && operator !== "+") {
        var separator = ",";
        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }
        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}
function parse(options) {
  let method = options.method.toUpperCase();
  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);
  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }
  const omittedParameters = Object.keys(options).filter((option2) => urlVariableNames.includes(option2)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      headers.accept = headers.accept.split(/,/).map((preview) => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }
    if (options.mediaType.previews.length) {
      const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview) => {
        const format2 = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
        return `application/vnd.github.${preview}-preview${format2}`;
      }).join(",");
    }
  }
  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      }
    }
  }
  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  }
  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  }
  return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}
function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}
function withDefaults$2(oldDefaults, newDefaults) {
  const DEFAULTS2 = merge(oldDefaults, newDefaults);
  const endpoint2 = endpointWithDefaults.bind(null, DEFAULTS2);
  return Object.assign(endpoint2, {
    DEFAULTS: DEFAULTS2,
    defaults: withDefaults$2.bind(null, DEFAULTS2),
    merge: merge.bind(null, DEFAULTS2),
    parse
  });
}
const VERSION$3 = "7.0.3";
const userAgent = `octokit-endpoint.js/${VERSION$3} ${getUserAgent()}`;
const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};
const endpoint = withDefaults$2(null, DEFAULTS);
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var global = typeof self !== "undefined" ? self : commonjsGlobal;
  var __self__ = function() {
    function F2() {
      this.fetch = false;
      this.DOMException = global.DOMException;
    }
    F2.prototype = global;
    return new F2();
  }();
  (function(self2) {
    (function(exports2) {
      var support = {
        searchParams: "URLSearchParams" in self2,
        iterable: "Symbol" in self2 && "iterator" in Symbol,
        blob: "FileReader" in self2 && "Blob" in self2 && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in self2,
        arrayBuffer: "ArrayBuffer" in self2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header2) {
            this.append(header2[0], header2[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve2, reject) {
          reader.onload = function() {
            resolve2(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = "statusText" in options ? options.statusText : "OK";
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = self2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch2(input, init) {
        return new Promise(function(resolve2, reject) {
          var request2 = new Request(input, init);
          if (request2.signal && request2.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            resolve2(new Response(body, options));
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.onabort = function() {
            reject(new exports2.DOMException("Aborted", "AbortError"));
          };
          xhr.open(request2.method, request2.url, true);
          if (request2.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request2.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr && support.blob) {
            xhr.responseType = "blob";
          }
          request2.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request2.signal) {
            request2.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request2.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request2._bodyInit === "undefined" ? null : request2._bodyInit);
        });
      }
      fetch2.polyfill = true;
      if (!self2.fetch) {
        self2.fetch = fetch2;
        self2.Headers = Headers;
        self2.Request = Request;
        self2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__self__);
  __self__.fetch.ponyfill = true;
  delete __self__.fetch.polyfill;
  var ctx = __self__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
const fetch$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfill.exports);
class Deprecation extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "Deprecation";
  }
}
var once$1 = { exports: {} };
var wrappy_1 = wrappy$1;
function wrappy$1(fn2, cb) {
  if (fn2 && cb)
    return wrappy$1(fn2)(cb);
  if (typeof fn2 !== "function")
    throw new TypeError("need wrapper function");
  Object.keys(fn2).forEach(function(k) {
    wrapper[k] = fn2[k];
  });
  return wrapper;
  function wrapper() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    var ret = fn2.apply(this, args);
    var cb2 = args[args.length - 1];
    if (typeof ret === "function" && ret !== cb2) {
      Object.keys(cb2).forEach(function(k) {
        ret[k] = cb2[k];
      });
    }
    return ret;
  }
}
var wrappy = wrappy_1;
once$1.exports = wrappy(once);
once$1.exports.strict = wrappy(onceStrict);
once.proto = once(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return onceStrict(this);
    },
    configurable: true
  });
});
function once(fn2) {
  var f2 = function() {
    if (f2.called)
      return f2.value;
    f2.called = true;
    return f2.value = fn2.apply(this, arguments);
  };
  f2.called = false;
  return f2;
}
function onceStrict(fn2) {
  var f2 = function() {
    if (f2.called)
      throw new Error(f2.onceError);
    f2.called = true;
    return f2.value = fn2.apply(this, arguments);
  };
  var name = fn2.name || "Function wrapped with `once`";
  f2.onceError = name + " shouldn't be called more than once";
  f2.called = false;
  return f2;
}
const logOnceCode = once$1.exports((deprecation) => console.warn(deprecation));
const logOnceHeaders = once$1.exports((deprecation) => console.warn(deprecation));
class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "HttpError";
    this.status = statusCode;
    let headers;
    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }
    if ("response" in options) {
      this.response = options.response;
      headers = options.response.headers;
    }
    const requestCopy = Object.assign({}, options.request);
    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }
    requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
    Object.defineProperty(this, "code", {
      get() {
        logOnceCode(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }
    });
    Object.defineProperty(this, "headers", {
      get() {
        logOnceHeaders(new Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
        return headers || {};
      }
    });
  }
}
const VERSION$2 = "6.2.2";
function getBufferResponse(response) {
  return response.arrayBuffer();
}
function fetchWrapper(requestOptions) {
  const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;
  if (isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }
  let headers = {};
  let status;
  let url;
  const fetch2 = requestOptions.request && requestOptions.request.fetch || globalThis.fetch || fetch$1;
  return fetch2(requestOptions.url, Object.assign(
    {
      method: requestOptions.method,
      body: requestOptions.body,
      headers: requestOptions.headers,
      redirect: requestOptions.redirect
    },
    requestOptions.request
  )).then(async (response) => {
    url = response.url;
    status = response.status;
    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }
    if ("deprecation" in headers) {
      const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
      const deprecationLink = matches && matches.pop();
      log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
    }
    if (status === 204 || status === 205) {
      return;
    }
    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }
      throw new RequestError(response.statusText, status, {
        response: {
          url,
          status,
          headers,
          data: void 0
        },
        request: requestOptions
      });
    }
    if (status === 304) {
      throw new RequestError("Not modified", status, {
        response: {
          url,
          status,
          headers,
          data: await getResponseData(response)
        },
        request: requestOptions
      });
    }
    if (status >= 400) {
      const data = await getResponseData(response);
      const error = new RequestError(toErrorMessage(data), status, {
        response: {
          url,
          status,
          headers,
          data
        },
        request: requestOptions
      });
      throw error;
    }
    return getResponseData(response);
  }).then((data) => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch((error) => {
    if (error instanceof RequestError)
      throw error;
    else if (error.name === "AbortError")
      throw error;
    throw new RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}
async function getResponseData(response) {
  const contentType = response.headers.get("content-type");
  if (/application\/json/.test(contentType)) {
    return response.json();
  }
  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }
  return getBufferResponse(response);
}
function toErrorMessage(data) {
  if (typeof data === "string")
    return data;
  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
    }
    return data.message;
  }
  return `Unknown error: ${JSON.stringify(data)}`;
}
function withDefaults$1(oldEndpoint, newDefaults) {
  const endpoint2 = oldEndpoint.defaults(newDefaults);
  const newApi = function(route, parameters) {
    const endpointOptions = endpoint2.merge(route, parameters);
    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint2.parse(endpointOptions));
    }
    const request2 = (route2, parameters2) => {
      return fetchWrapper(endpoint2.parse(endpoint2.merge(route2, parameters2)));
    };
    Object.assign(request2, {
      endpoint: endpoint2,
      defaults: withDefaults$1.bind(null, endpoint2)
    });
    return endpointOptions.request.hook(request2, endpointOptions);
  };
  return Object.assign(newApi, {
    endpoint: endpoint2,
    defaults: withDefaults$1.bind(null, endpoint2)
  });
}
const request = withDefaults$1(endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION$2} ${getUserAgent()}`
  }
});
const VERSION$1 = "5.0.4";
function _buildMessageForResponseErrors(data) {
  return `Request failed due to following response errors:
` + data.errors.map((e) => ` - ${e.message}`).join("\n");
}
class GraphqlResponseError extends Error {
  constructor(request2, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request2;
    this.headers = headers;
    this.response = response;
    this.name = "GraphqlResponseError";
    this.errors = response.errors;
    this.data = response.data;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
const NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request2, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }
    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
        continue;
      return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
    }
  }
  const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
  const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }
    if (!result.variables) {
      result.variables = {};
    }
    result.variables[key] = parsedOptions[key];
    return result;
  }, {});
  const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }
  return request2(requestOptions).then((response) => {
    if (response.data.errors) {
      const headers = {};
      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }
      throw new GraphqlResponseError(requestOptions, headers, response.data);
    }
    return response.data.data;
  });
}
function withDefaults(request2, newDefaults) {
  const newRequest = request2.defaults(newDefaults);
  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };
  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: newRequest.endpoint
  });
}
withDefaults(request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION$1} ${getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}
const REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const REGEX_IS_INSTALLATION = /^ghs_/;
const REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
  const isApp = token.split(/\./).length === 3;
  const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
  const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}
async function hook(token, request2, route, parameters) {
  const endpoint2 = request2.endpoint.merge(route, parameters);
  endpoint2.headers.authorization = withAuthorizationPrefix(token);
  return request2(endpoint2);
}
const createTokenAuth = function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }
  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};
const VERSION = "4.1.0";
class Octokit {
  constructor(options = {}) {
    const hook2 = new Collection();
    const requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        hook: hook2.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    requestDefaults.headers["user-agent"] = [
      options.userAgent,
      `octokit-core.js/${VERSION} ${getUserAgent()}`
    ].filter(Boolean).join(" ");
    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }
    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }
    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }
    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {
      },
      info: () => {
      },
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook2;
    if (!options.authStrategy) {
      if (!options.auth) {
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        const auth2 = createTokenAuth(options.auth);
        hook2.wrap("request", auth2.hook);
        this.auth = auth2;
      }
    } else {
      const { authStrategy, ...otherOptions } = options;
      const auth2 = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth));
      hook2.wrap("request", auth2.hook);
      this.auth = auth2;
    }
    const classConstructor = this.constructor;
    classConstructor.plugins.forEach((plugin) => {
      Object.assign(this, plugin(this, options));
    });
  }
  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};
        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }
        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: `${options.userAgent} ${defaults.userAgent}`
        } : null));
      }
    };
    return OctokitWithDefaults;
  }
  static plugin(...newPlugins) {
    var _a;
    const currentPlugins = this.plugins;
    const NewOctokit = (_a = class extends this {
    }, _a.plugins = currentPlugins.concat(newPlugins.filter((plugin) => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }
}
Octokit.VERSION = VERSION;
Octokit.plugins = [];
class VuepressApiV1 {
  constructor(vuepressCfg, octokit) {
    __publicField(this, "vuepressCfg", {});
    __publicField(this, "octokit", {});
    this.vuepressCfg = vuepressCfg;
    this.octokit = octokit;
  }
  async getPageSha(docPath) {
    let sha;
    const data = await this.getPageData(docPath);
    if (data) {
      sha = data.sha;
    }
    return sha;
  }
  async getPageData(docPath) {
    let data;
    let res;
    try {
      const route = "GET /repos/" + this.vuepressCfg.githubUser + "/" + this.vuepressCfg.githubRepo + "/contents/" + docPath;
      logUtil.logInfo("getPage route=>", route);
      res = await this.octokit.request(route, {
        owner: this.vuepressCfg.githubUser,
        repo: this.vuepressCfg.githubRepo,
        path: docPath
      });
      logUtil.logInfo("getPage res=>", res);
    } catch (e) {
      logUtil.logError("getPage error=>", e);
    }
    if (res) {
      data = res.data;
    }
    return data;
  }
  async createOrUpdatePage(docPath, mdContent, sha) {
    let res;
    try {
      const base64 = gBase64.toBase64(mdContent);
      const route = "PUT /repos/" + this.vuepressCfg.githubUser + "/" + this.vuepressCfg.githubRepo + "/contents/" + docPath;
      let options = {
        owner: this.vuepressCfg.githubUser,
        repo: this.vuepressCfg.githubRepo,
        path: docPath,
        message: this.vuepressCfg.defaultMsg,
        committer: {
          name: this.vuepressCfg.author,
          email: this.vuepressCfg.email
        },
        content: base64
      };
      if (sha) {
        Object.assign(options, {
          sha
        });
      }
      res = await this.octokit.request(route, options);
      logUtil.logInfo("createOrUpdatePage res=>", res);
    } catch (e) {
      logUtil.logError("createOrUpdatePage error=>", e);
    }
    return res;
  }
  async deletePage(docPath, sha) {
    let res;
    try {
      const route = "DELETE /repos/" + this.vuepressCfg.githubUser + "/" + this.vuepressCfg.githubRepo + "/contents/" + docPath;
      let options = {
        owner: this.vuepressCfg.githubUser,
        repo: this.vuepressCfg.githubRepo,
        path: docPath,
        message: this.vuepressCfg.defaultMsg,
        committer: {
          name: this.vuepressCfg.author,
          email: this.vuepressCfg.email
        },
        sha
      };
      res = await this.octokit.request(route, options);
      logUtil.logInfo("deletePage res=>", res);
    } catch (e) {
      logUtil.logError("deletePage error=>", e);
    }
    return res;
  }
}
async function publishPage(vuepressCfg, docPath, mdContent) {
  const octokit = new Octokit({
    auth: vuepressCfg.githubToken
  });
  const v1 = new VuepressApiV1(vuepressCfg, octokit);
  const sha = void 0;
  let res;
  res = await v1.createOrUpdatePage(docPath, mdContent, sha);
  logUtil.logInfo("Vuepress V1 publishPage,res=>", res);
  return res;
}
async function deletePage(vuepressCfg, docPath) {
  const octokit = new Octokit({
    auth: vuepressCfg.githubToken
  });
  const v1 = new VuepressApiV1(vuepressCfg, octokit);
  const sha = await v1.getPageSha(docPath);
  let res;
  res = await v1.deletePage(docPath, sha);
  logUtil.logInfo("Vuepress V1 deletePage,res=>", res);
  return res;
}
async function getPageTreeNode(vuepressCfg, docPath) {
  const octokit = new Octokit({
    auth: vuepressCfg.githubToken
  });
  const v1 = new VuepressApiV1(vuepressCfg, octokit);
  const data = await v1.getPageData(docPath);
  let treeNode = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.name.indexOf(".vuepress") > -1) {
        continue;
      }
      if (item.name.indexOf("@pages") > -1) {
        continue;
      }
      if (item.name.indexOf("_posts") > -1) {
        continue;
      }
      let node = {
        value: item.path,
        label: item.name,
        isLeaf: item.name.indexOf(".md") > -1
      };
      treeNode.push(node);
    }
    logUtil.logInfo("getPageTreeNode,data=>", data);
  }
  return treeNode;
}
class VuepressCfg {
  constructor(githubUser, githubRepo, githubToken, defaultBranch, defaultPath, defaultMsg, author, email) {
    __publicField(this, "posidKey", "");
    this.githubUser = githubUser;
    this.githubRepo = githubRepo;
    this.githubToken = githubToken;
    this.defaultBranch = defaultBranch;
    this.defaultPath = defaultPath;
    this.defaultMsg = defaultMsg;
    this.author = author;
    this.email = email;
    this.githubUser = githubUser;
    this.githubRepo = githubRepo;
    this.githubToken = githubToken;
    this.defaultBranch = defaultBranch;
    this.defaultPath = defaultPath;
    this.defaultMsg = defaultMsg;
    this.author = author;
    this.email = email;
    this.posidKey = POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY;
  }
}
const API_STATUS_VUEPRESS = "vuepress-status";
const API_STATUS_CNBLPGS = "cnblogs-status";
const API_STATUS_WORDPRESS = "wordpress-status";
const API_STATUS_CONFLUENCE = "confluence-status";
const API_STATUS_JVUE = "jvue-status";
const API_STATUS_YUQUE = "yuque-status";
const API_STATUS_WECHAT = "wechat-status";
const API_STATUS_LIANDI = "liandi-status";
const API_STATUS_CONSTANTS = {
  API_STATUS_VUEPRESS,
  API_STATUS_CNBLPGS,
  API_STATUS_WORDPRESS,
  API_STATUS_CONFLUENCE,
  API_STATUS_JVUE,
  API_STATUS_YUQUE,
  API_STATUS_WECHAT,
  API_STATUS_LIANDI
};
const _hoisted_1$7 = {
  href: "https://github.com/settings/tokens/new",
  target: "_blank"
};
const _hoisted_2$2 = ["href"];
const __default__$m = {
  name: "VuepressSetting"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  setup(__props) {
    const {
      t
    } = useI18n();
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const autoDeleteTest = ref(true);
    const formSize = ref("default");
    const formRef = ref();
    const formData = reactive({
      githubUser: "",
      githubRepo: "",
      githubToken: "",
      defaultBranch: "main",
      defaultPath: "docs/_posts/",
      msg: "auto published by sy-post-publisher",
      author: "terwer",
      email: "youweics@163.com",
      previewUrl: "#preview"
    });
    const rules = reactive({
      githubUser: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      githubRepo: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      githubToken: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      defaultBranch: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      defaultPath: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      msg: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      author: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      email: [{
        required: true,
        message: () => t("form.validate.name.required")
      }]
    });
    const testOnChange = (val) => {
      autoDeleteTest.value = val;
    };
    const submitForm = async (formEl) => {
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
      const vuepressCfg = new VuepressCfg(formData.githubUser, formData.githubRepo, formData.githubToken, formData.defaultBranch, formData.defaultPath, formData.msg, formData.author, formData.email);
      setJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS, vuepressCfg);
      ElMessage.success(t("main.opt.success"));
    };
    const valiConf = async () => {
      isLoading.value = true;
      const vuepressCfg = new VuepressCfg(formData.githubUser, formData.githubRepo, formData.githubToken, formData.defaultBranch, formData.defaultPath, formData.msg, formData.author, formData.email);
      const testFile = "test.md";
      const docPath = formData.defaultPath + testFile;
      const mdContent = "Hello World!" + formatIsoToZhDate(new Date().toISOString(), true);
      const res = await publishPage(vuepressCfg, docPath, mdContent);
      isLoading.value = false;
      if (!res) {
        apiStatus.value = false;
        setBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS, apiStatus.value);
        ElMessage.error(t("main.opt.failure"));
        return;
      }
      if (autoDeleteTest.value) {
        await deletePage(vuepressCfg, docPath);
      }
      apiStatus.value = true;
      setBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS, apiStatus.value);
      formData.previewUrl = "https://github.com/" + formData.githubUser + "/" + formData.githubRepo + "/blob/" + formData.defaultBranch + "/" + formData.defaultPath + testFile;
      ElMessage.success(t("main.opt.success"));
    };
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
    };
    const initConf = () => {
      logUtil.logInfo("Vuepress\u914D\u7F6E\u521D\u59CB\u5316");
      const conf = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
      if (conf) {
        logUtil.logInfo("vuepress conf=>", conf);
        formData.githubUser = conf.githubUser;
        formData.githubRepo = conf.githubRepo;
        formData.githubToken = conf.githubToken;
        formData.defaultBranch = conf.defaultBranch;
        formData.defaultPath = conf.defaultPath;
        formData.msg = conf.defaultMsg;
        formData.author = conf.author;
        formData.email = conf.email;
      }
      apiStatus.value = getBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS);
    };
    onBeforeMount(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_switch = ElSwitch;
      const _component_el_button = ElButton;
      const _component_el_alert = ElAlert;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px",
        ref_key: "formRef",
        ref: formRef,
        model: formData,
        rules,
        size: formSize.value,
        "status-icon": ""
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.user"),
          prop: "githubUser"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.githubUser,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.githubUser = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.user.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.repo"),
          prop: "githubRepo"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.githubRepo,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.githubRepo = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.repo.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.token"),
          prop: "githubToken"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: formData.githubToken,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.githubToken = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.token.tip"),
            "show-password": ""
          }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("a", _hoisted_1$7, toDisplayString(_ctx.$t("setting.blog.type.vuepress.github.token.gen")), 1)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.default.path"),
          prop: "defaultPath"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.defaultPath,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.defaultPath = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.default.path.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.default.branch"),
          prop: "defaultBranch"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.defaultBranch,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.defaultBranch = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.default.branch.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.msg"),
          prop: "msg"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.msg,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.msg = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.msg.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.author"),
          prop: "author"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.author,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.author = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.author.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.email"),
          prop: "email"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.email,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.email = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.email.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("form.validate.vuepress.auto.delete")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: autoDeleteTest.value,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => autoDeleteTest.value = $event),
            onChange: testOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: valiConf,
            loading: isLoading.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(isLoading.value ? _ctx.$t("setting.blog.vali.ing") : _ctx.$t("setting.blog.vali")), 1)]),
            _: 1
          }, 8, ["loading"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            title: _ctx.$t("setting.blog.vali.tip"),
            type: "warning",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            title: _ctx.$t("setting.blog.vali.ok"),
            type: "success",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[9] || (_cache[9] = ($event) => submitForm(formRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, {
            onClick: _cache[10] || (_cache[10] = ($event) => resetForm(formRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createBaseVNode("a", {
            href: formData.previewUrl,
            target: "_blank"
          }, toDisplayString(formData.previewUrl), 9, _hoisted_2$2)]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules", "size"]);
    };
  }
});
const VuepressSetting_vue_vue_type_style_index_0_scoped_4e3b2b18_lang = "";
const VuepressSetting = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__scopeId", "data-v-4e3b2b18"]]);
class CnblogsCfg extends MetaweblogCfg {
  constructor() {
    super("https://www.cnblogs.com/[yourblog]", "https://rpc.cnblogs.com/metaweblog/[yourblog]", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY;
    this.previewUrl = "/p/[postid].html";
    this.pageType = PageType.Markdown;
  }
}
const __default__$l = {
  name: "CnblogsSetting",
  components: {
    MetaweblogSetting: _sfc_main$o
  }
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CNBLOGS);
    const cnblogsCfg = new CnblogsCfg();
    const cfg = ref(cnblogsCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class ConfCfg extends MetaweblogCfg {
  constructor() {
    super("https://youweics.atlassian.net/wiki/spaces/[spaceKey]", "http://localhost:3000/api/xmlrpc", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY;
    this.previewUrl = "pages/[postid]";
    this.pageType = PageType.Html;
  }
}
const __default__$k = {
  name: "ConfluenceSetting"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE);
    const cfg = ref(new ConfCfg());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class CommonblogCfg {
  constructor() {
    __publicField(this, "home");
    __publicField(this, "apiUrl");
    __publicField(this, "username");
    __publicField(this, "password");
    __publicField(this, "token");
    __publicField(this, "apiStatus");
    __publicField(this, "blogName");
    __publicField(this, "blogid");
    __publicField(this, "posidKey");
    __publicField(this, "previewUrl");
    __publicField(this, "pageType");
    __publicField(this, "tokenSettingUrl");
    this.home = "";
    this.apiUrl = "";
    this.username = "";
    this.password = "";
    this.token = "";
    this.apiStatus = false;
    this.blogName = "";
    this.blogid = "";
    this.posidKey = "";
    this.previewUrl = "";
    this.pageType = PageType.Markdown;
    this.tokenSettingUrl = "";
  }
}
class LiandiCfg extends CommonblogCfg {
  constructor() {
    super();
    this.home = "https://ld246.com/";
    this.apiUrl = "https://ld246.com/api/v2";
    this.tokenSettingUrl = "https://ld246.com/settings/account";
    this.posidKey = POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY;
    this.previewUrl = "/article/[postid]";
    this.pageType = PageType.Markdown;
  }
}
const _hoisted_1$6 = ["href"];
const _hoisted_2$1 = ["href"];
const __default__$j = {
  name: "CommonBlogSetting"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: CommonblogCfg,
      default: null
    },
    usernameEnabled: {
      type: Boolean,
      default: false
    },
    passwordEnabled: {
      type: Boolean,
      default: false
    },
    tokenEnabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    const home = ref("");
    const apiUrl = ref("");
    const username = ref("");
    const password = ref("");
    const token = ref("");
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const blogName = ref("");
    const blogid = ref("");
    const tokenSettingUrl = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.common") + props.apiType + " ");
    const valiConf = async () => {
      isLoading.value = true;
      try {
        saveConf(true);
        const cfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const usersBlogs = await api.getUsersBlogs();
        if (usersBlogs && usersBlogs.length > 0) {
          const userBlog = usersBlogs[0];
          cfg.apiStatus = true;
          apiStatus.value = true;
          cfg.blogName = userBlog.blogName;
          blogName.value = userBlog.blogName;
          cfg.blogid = userBlog.blogid;
          blogid.value = userBlog.blogid;
          setJSONConf(props.apiType, cfg);
        } else {
          cfg.apiStatus = false;
          apiStatus.value = false;
          setJSONConf(props.apiType, cfg);
        }
      } catch (e) {
        console.error(e);
      }
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.error"));
      } else {
        ElMessage.success(t("main.opt.success"));
      }
      isLoading.value = false;
      logUtil.logInfo("\u901A\u7528Setting\u9A8C\u8BC1\u5B8C\u6BD5");
    };
    const saveConf = (hideTip) => {
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u4FDD\u5B58\u914D\u7F6E");
      const cfg = props.cfg;
      cfg.home = home.value;
      cfg.username = username.value;
      cfg.password = password.value;
      cfg.token = token.value;
      cfg.apiUrl = apiUrl.value;
      cfg.apiStatus = apiStatus.value;
      cfg.blogName = blogName.value;
      cfg.blogid = blogid.value;
      setJSONConf(props.apiType, cfg);
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      logUtil.logInfo("\u901A\u7528Setting\u914D\u7F6E\u521D\u59CB\u5316");
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        logUtil.logInfo("get setting conf=>", conf);
        home.value = conf.home || "";
        apiUrl.value = conf.apiUrl || "";
        username.value = conf.username || "";
        password.value = conf.password || "";
        token.value = conf.token || "";
        apiStatus.value = conf.apiStatus || false;
        blogName.value = conf.blogName || "";
        blogid.value = conf.blogid || "";
        tokenSettingUrl.value = conf.tokenSettingUrl || "";
      }
    };
    onMounted(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px"
      }, {
        default: withCtx(() => [createVNode(_component_el_alert, {
          class: "top-version-tip",
          title: apiTypeInfo.value + blogName.value,
          type: "info",
          closable: false
        }, null, 8, ["title"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.common.home")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: home.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => home.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), props.usernameEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("setting.common.username")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: username.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), props.passwordEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 1,
          label: _ctx.$t("setting.common.password")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: password.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
            "show-password": ""
          }, null, 8, ["modelValue"]), createBaseVNode("a", {
            href: tokenSettingUrl.value,
            target: "_blank"
          }, toDisplayString(_ctx.$t("setting.common.username.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_1$6)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), props.tokenEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 2,
          label: _ctx.$t("setting.common.token")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: token.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => token.value = $event),
            "show-password": ""
          }, null, 8, ["modelValue"]), createBaseVNode("a", {
            href: tokenSettingUrl.value,
            target: "_blank"
          }, toDisplayString(_ctx.$t("setting.common.token.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_2$1)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.common.apiurl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: apiUrl.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => apiUrl.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: valiConf,
            loading: isLoading.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(isLoading.value ? _ctx.$t("setting.blog.vali.ing") : _ctx.$t("setting.blog.vali")), 1)]),
            _: 1
          }, 8, ["loading"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "warning",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            title: _ctx.$t("setting.blog.vali.ok.metaweblog"),
            type: "success",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: saveConf
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, null, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const __default__$i = {
  name: "LiandiSetting",
  components: {
    CommonBlogSetting: _sfc_main$j
  }
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    const liandiCfg = new LiandiCfg();
    const cfg = ref(liandiCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$j, {
        "api-type": apiType.value,
        "username-enabled": true,
        "token-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class YuqueCfg extends CommonblogCfg {
  constructor() {
    super();
    this.home = "https://www.yuque.com/";
    this.apiUrl = "https://www.yuque.com/api/v2";
    this.tokenSettingUrl = "https://www.yuque.com/settings/tokens";
    this.posidKey = POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY;
    this.previewUrl = "/[notebook]/[postid]";
    this.pageType = PageType.Markdown;
  }
}
const __default__$h = {
  name: "YuqueSetting",
  components: {
    CommonBlogSetting: _sfc_main$j
  }
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    const yuqueCfg = new YuqueCfg();
    const cfg = ref(yuqueCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$j, {
        "api-type": apiType.value,
        "username-enabled": true,
        "token-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class KmsCfg extends CommonblogCfg {
  constructor() {
    super();
    this.home = "http://localhost:9564/kms16_release/kms/multidoc";
    this.apiUrl = "http://localhost:9564/kms16_release/api/kms-multidoc/kmsMultidocKnowledgeRestService";
    this.tokenSettingUrl = "http://localhost:9564/kms16_release/sys/profile/index.jsp#integrate/RestService/";
    this.posidKey = POSTID_KEY_CONSTANTS.KMS_POSTID_KEY;
    this.previewUrl = "/kms_multidoc_knowledge/kmsMultidocKnowledge.do?method=view&fdId=[postid]";
    this.pageType = PageType.Html;
  }
}
const __default__$g = {
  name: "KmsSetting",
  components: {
    CommonBlogSetting: _sfc_main$j
  }
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_KMS);
    const kmsCfg = new KmsCfg();
    const cfg = ref(kmsCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$j, {
        "api-type": apiType.value,
        "username-enabled": true,
        "password-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class WordpressCfg extends MetaweblogCfg {
  constructor() {
    super("http://localhost:8000", "http://localhost:8000/xmlrpc.php", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY;
    this.previewUrl = "/?p=[postid]";
    this.pageType = PageType.Markdown;
  }
}
const __default__$f = {
  name: "WordpressSetting",
  components: {
    MetaweblogSetting: _sfc_main$o
  }
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: MetaweblogCfg,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_WORDPRESS);
    const cfg = ref(new WordpressCfg());
    if (props.apiType) {
      apiType.value = props.apiType;
    }
    if (props.cfg) {
      cfg.value = props.cfg;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
const _hoisted_1$5 = {
  key: 1
};
const __default__$e = {
  name: "PlantformSetting",
  components: {
    VuepressSetting,
    JVueSetting: _sfc_main$n,
    CnblogsSetting: _sfc_main$l,
    ConfluenceSetting: _sfc_main$k,
    LiandiSetting: _sfc_main$i,
    YuqueSetting: _sfc_main$h,
    KmsSetting: _sfc_main$g,
    MetaweblogSetting: _sfc_main$o,
    WordpressSetting: _sfc_main$f
  }
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: {
    isReload: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const {
      tabCountStore,
      vuepressEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    let formData = reactive({
      dynamicConfigArray: [],
      metaweblogArray: [],
      wordpressArray: []
    });
    const createMCfg = ref((mcfg) => {
      return new DynamicMCfg("custom-" + mcfg.plantformKey + "-post-id");
    });
    const createWCfg = ref((wcfg) => {
      return new DynamicWCfg("custom-" + wcfg.plantformKey + "-post-id");
    });
    const initDynCfg = (dynCfg) => {
      const newCfg = [];
      dynCfg.forEach((item) => {
        const newItem = new DynamicConfig(item.plantformType, item.plantformKey, item.plantformName);
        const switchKey = "switch-" + item.plantformKey;
        const switchValue = getBooleanConf(switchKey);
        newItem.modelValue = switchValue;
        if (switchValue) {
          newCfg.push(newItem);
        }
      });
      return newCfg;
    };
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      formData.dynamicConfigArray = initDynCfg(dynamicJsonCfg.totalCfg || []);
      formData.metaweblogArray = initDynCfg(dynamicJsonCfg.metaweblogCfg || []);
      formData.wordpressArray = initDynCfg(dynamicJsonCfg.wordpressCfg || []);
      logUtil.logInfo("dynamicJsonCfg=>");
      logUtil.logInfo(JSON.stringify(dynamicJsonCfg));
      logUtil.logInfo("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    watch(() => props.isReload, (oldValue, newValue) => {
      initConf();
      logUtil.logInfo("plantform-setting\u521D\u59CB\u5316");
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_alert = ElAlert;
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_tabs, {
        key: 0,
        type: "border-card"
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("setting.vuepress")
        }, {
          default: withCtx(() => [createVNode(VuepressSetting)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("setting.jvue")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$n)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("setting.conf")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$k)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("setting.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$l)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("setting.wordpress")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$f)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("setting.liandi")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$i)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("setting.yuque")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$h)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("setting.kms")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$g)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).metaweblogArray, (mcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: mcfg.plantformName + "_" + mcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(_sfc_main$o, {
              "api-type": mcfg.plantformKey,
              cfg: createMCfg.value(mcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).wordpressArray, (wcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: wcfg.plantformName + "_" + wcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(_sfc_main$f, {
              "api-type": wcfg.plantformKey,
              cfg: createWCfg.value(wcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256))]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const _hoisted_1$4 = {
  key: 1
};
const __default__$d = {
  name: "PostBind"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    const {
      tabCountStore,
      vuepressEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    let formData = reactive({
      dynamicConfigArray: []
    });
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      const results = dynamicJsonCfg.totalCfg || [];
      formData.dynamicConfigArray = [];
      results.forEach((item) => {
        const switchKey = "switch-" + item.plantformKey;
        const switchValue = getBooleanConf(switchKey);
        item.modelValue = switchValue;
        formData.dynamicConfigArray.push(item);
      });
      logUtil.logInfo(formData.dynamicConfigArray);
      logUtil.logInfo("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    watch(() => props.isReload, async (oldValue, newValue) => {
      initConf();
      await initPage();
    });
    onBeforeMount(async () => {
      initConf();
      await initPage();
    });
    onMounted(() => {
    });
    const siyuanData = {
      pageId: "",
      meta: {}
    };
    const formSize = ref("default");
    const ruleFormRef = ref();
    const ruleForm = reactive({
      vuepressSlug: "",
      jvuePostid: "",
      cnblogsPostid: "",
      confPostid: "",
      wordpressPostid: "",
      liandiPostid: "",
      yuquePostid: "",
      kmsPostid: ""
    });
    const rules = reactive({});
    async function initPage() {
      const pageId = await getPageId(true, props.pageId);
      logUtil.logInfo("PostBind pageId=>", pageId);
      if (!pageId || pageId == "") {
        return;
      }
      const meta = await getPageAttrs(pageId);
      siyuanData.pageId = pageId;
      siyuanData.meta = meta;
      ruleForm.vuepressSlug = meta[POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY];
      ruleForm.jvuePostid = meta[POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY];
      ruleForm.confPostid = meta[POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY];
      ruleForm.cnblogsPostid = meta[POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY];
      ruleForm.wordpressPostid = meta[POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY];
      ruleForm.liandiPostid = meta[POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY];
      ruleForm.yuquePostid = meta[POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY];
      ruleForm.kmsPostid = meta[POSTID_KEY_CONSTANTS.KMS_POSTID_KEY];
      const results = formData.dynamicConfigArray;
      formData.dynamicConfigArray = [];
      results.forEach((item) => {
        const posidKey = "custom-" + item.plantformKey + "-post-id";
        item.posid = meta[posidKey] || "";
        formData.dynamicConfigArray.push(item);
      });
    }
    const assignPostid = (enabled, customAttr, key, value) => {
      if (enabled && !isEmptyString(value)) {
        Object.assign(customAttr, {
          [key]: value
        });
      } else {
        Object.assign(customAttr, {
          [key]: ""
        });
      }
    };
    const submitForm = async (formEl) => {
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
      const customAttr = {};
      assignPostid(vuepressEnabled.value, customAttr, POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY, ruleForm.vuepressSlug);
      assignPostid(jvueEnabled.value, customAttr, POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY, ruleForm.jvuePostid);
      assignPostid(confEnabled.value, customAttr, POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY, ruleForm.confPostid);
      assignPostid(cnblogsEnabled.value, customAttr, POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY, ruleForm.cnblogsPostid);
      assignPostid(wordpressEnabled.value, customAttr, POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY, ruleForm.wordpressPostid);
      assignPostid(liandiEnabled.value, customAttr, POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY, ruleForm.liandiPostid);
      assignPostid(yuqueEnabled.value, customAttr, POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY, ruleForm.yuquePostid);
      assignPostid(kmsEnabled.value, customAttr, POSTID_KEY_CONSTANTS.KMS_POSTID_KEY, ruleForm.kmsPostid);
      formData.dynamicConfigArray.forEach((item) => {
        const posidKey = "custom-" + item.plantformKey + "-post-id";
        assignPostid(item.modelValue, customAttr, posidKey, item.posid);
      });
      logUtil.logInfo("PostBind\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      await setPageAttrs(siyuanData.pageId, customAttr);
      ElMessage.success(t("main.opt.success"));
    };
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_alert = ElAlert;
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_form, {
        key: 0,
        "label-width": "125px",
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: ruleForm,
        rules,
        size: formSize.value,
        "status-icon": ""
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("post.bind.vuepress.slug"),
          prop: "vuepressSlug"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.vuepressSlug,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.vuepressSlug = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 1,
          label: _ctx.$t("post.bind.jvue.postid"),
          prop: "jvuePostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.jvuePostid,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.jvuePostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 2,
          label: _ctx.$t("post.bind.conf.postid"),
          prop: "confPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.confPostid,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ruleForm.confPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 3,
          label: _ctx.$t("post.bind.cnblogs.postid"),
          prop: "cnblogsPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.cnblogsPostid,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ruleForm.cnblogsPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 4,
          label: _ctx.$t("post.bind.wordpress.postid"),
          prop: "wordpressPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.wordpressPostid,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ruleForm.wordpressPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 5,
          label: _ctx.$t("post.bind.liandi.postid"),
          prop: "liandiPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.liandiPostid,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ruleForm.liandiPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 6,
          label: _ctx.$t("post.bind.yuque.postid"),
          prop: "yuquePostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.yuquePostid,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => ruleForm.yuquePostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 7,
          label: _ctx.$t("post.bind.kms.postid"),
          prop: "kmsPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.kmsPostid,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => ruleForm.kmsPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).dynamicConfigArray, (cfg) => {
          return withDirectives((openBlock(), createBlock(_component_el_form_item, {
            label: cfg.plantformName + "_" + cfg.plantformType.toUpperCase().substring(0, 1) + " ID"
          }, {
            default: withCtx(() => [createVNode(_component_el_input, {
              modelValue: cfg.posid,
              "onUpdate:modelValue": ($event) => cfg.posid = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
            _: 2
          }, 1032, ["label"])), [[vShow, cfg.modelValue]]);
        }), 256)), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[8] || (_cache[8] = ($event) => submitForm(ruleFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.bind.conf.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, {
            onClick: _cache[9] || (_cache[9] = ($event) => resetForm(ruleFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.bind.conf.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules", "size"])) : (openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const skeleton = "";
const skeletonItem = "";
const container = "";
const aside = "";
const header = "";
const main = "";
const tree = "";
const checkbox = "";
const treeSelect = "";
const datePicker = "";
const checkboxGroup = "";
const buttonGroup = "";
const SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY = "custom-slug";
const SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY = "custom-desc";
const SIYUAN_PAGE_ATTR_KEY = {
  SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY
};
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.ariaHidden = "true";
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
var bitwise = function(str) {
  var hash = 0;
  if (str.length == 0)
    return hash;
  for (var i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
};
var binaryTransfer = function(integer, binary) {
  var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  binary = binary || 62;
  var stack = [];
  var num;
  var result = "";
  var sign = integer < 0 ? "-" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    stack.push(dictionary[num]);
  }
  if (integer > 0) {
    stack.push(dictionary[integer]);
  }
  for (var i = stack.length - 1; i >= 0; i--) {
    result += stack[i];
  }
  return sign + result;
};
var shortHash = function(text) {
  var type = typeof text;
  if (type === "string" || type === "number") {
    var id = binaryTransfer(bitwise(String(text)), 61);
    return id.replace("-", "Z");
  } else {
    throw new Error("Unexpected input type");
  }
};
var dist = shortHash;
const _hoisted_1$3 = ["href", "title"];
const _hoisted_2 = ["href", "title"];
const __default__$c = {
  name: "VuepressMain"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    watch(() => props.isReload, async (oldValue, newValue) => {
      await initPage();
      logUtil.logInfo("VuepressMain\u68C0\u6D4B\u5230\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    onBeforeMount(async () => {
      await initPage();
    });
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoadding = ref(false);
    const editMode = ref(false);
    const slugHashEnabled = ref(false);
    const vuepressGithubEnabled = ref(false);
    const useDefaultPath = ref(true);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const previewRealUrl = ref("");
    const forceRefresh = ref(false);
    const tagSwitch = ref(false);
    const formData = ref({
      title: "",
      customSlug: "",
      desc: "",
      created: "",
      checkList: ["1"],
      tag: {
        inputValue: "",
        dynamicTags: [],
        inputVisible: false
      },
      customPath: "",
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"]
    });
    const siyuanData = ref({
      pageId: "",
      meta: {
        tags: ""
      }
    });
    const vuepressData = ref({
      yamlObj: {
        title: "",
        date: new Date(),
        permalink: "/post/convert-npm-dependencies-to-local.html",
        meta: [{
          name: "keywords",
          content: ""
        }, {
          name: "description",
          content: ""
        }],
        categories: [],
        tags: [],
        author: {
          name: "terwer",
          link: "https://github.com/terwer"
        }
      },
      formatter: "",
      vuepressContent: "",
      vuepressFullContent: ""
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    const convertDocPathToCategories = (docPath) => {
      const docPathArray = docPath.split("/");
      if (docPathArray.length > 1) {
        formData.value.categories = [];
        for (let i = 1; i < docPathArray.length - 1; i++) {
          const docCat = removeTitleNumber(docPathArray[i]);
          formData.value.categories.push(docCat);
        }
      }
    };
    async function initPage() {
      isInitLoadding.value = true;
      const pageId = await getPageId(true, props.pageId);
      logUtil.logInfo("VuepressMain pageId=>", pageId);
      if (!pageId || pageId == "") {
        isInitLoadding.value = false;
        return;
      }
      const page = await getPage(pageId);
      if (!page) {
        isInitLoadding.value = false;
        ElMessage.error(t("config.error.msg") + "_vuepress");
        throw new Error(t("config.error.msg") + "_vuepress");
      }
      logUtil.logInfo("VuepressMain\u83B7\u53D6\u4E3B\u6587\u6863", page);
      siyuanData.value.pageId = pageId;
      siyuanData.value.meta = await getPageAttrs(pageId);
      formData.value.title = page.content + ".md";
      formData.value.customSlug = siyuanData.value.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.value.desc = siyuanData.value.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.value.created = formatNumToZhDate(page.created);
      formData.value.tag.dynamicTags = [];
      const tagstr = siyuanData.value.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg != "") {
          formData.value.tag.dynamicTags.push(tgarr[i]);
        }
      }
      const isOk = getBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS);
      vuepressGithubEnabled.value = isOk;
      slugHashEnabled.value = true;
      logUtil.logInfo("Vuepress\u7684api\u72B6\u6001=>");
      logUtil.logInfo(isOk);
      isPublished.value = getPublishStatus(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS, siyuanData.value.meta);
      if (isPublished.value) {
        const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
        const docPath = getDocPath();
        useDefaultPath.value = false;
        formData.value.customPath = docPath;
        convertDocPathToCategories(docPath);
        convertAttrToYAML();
        const vdomain = "https://terwer.space/";
        previewUrl.value = "https://github.com/" + vuepressCfg.githubUser + "/" + vuepressCfg.githubRepo + "/blob/" + vuepressCfg.defaultBranch + "/" + docPath;
        previewRealUrl.value = vdomain + vuepressData.value.yamlObj.permalink;
      } else {
        convertAttrToYAML();
      }
      let content;
      const data = await getPageMd(siyuanData.value.pageId);
      const md = data.content;
      content = removeMdWidgetTag(md);
      vuepressData.value.vuepressContent = content;
      vuepressData.value.vuepressFullContent = vuepressData.value.formatter + "\n" + vuepressData.value.vuepressContent;
      isInitLoadding.value = false;
    }
    function getDocPath() {
      const postidKey = getApiParams(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS).posidKey;
      const meta = siyuanData.value.meta;
      const docPath = meta[postidKey] || "";
      return docPath;
    }
    function checkForce() {
      if (isEmptyString(formData.value.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logUtil.logInfo(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    async function makeSlug(hideTip) {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await getPage(siyuanData.value.pageId);
      logUtil.logInfo("page=>", page);
      let fmtTitle = page.content;
      fmtTitle = mdFileToTitle(fmtTitle);
      logUtil.logInfo("fmtTitle=>", fmtTitle);
      if (formData.value.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logUtil.logInfo("result=>", result);
        if (result) {
          formData.value.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.value.customSlug = await pingyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.value.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    async function makeDesc(hideTip) {
      isDescLoading.value = true;
      const data = await getPageMd(siyuanData.value.pageId);
      const md = data.content;
      let html = mdToPlainText(md);
      formData.value.desc = parseHtml(html, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const createTimeChanged = (val) => {
      logUtil.logInfo("createTimeChanged=>", val);
    };
    const tagHandleClose = (tag2) => {
      formData.value.tag.dynamicTags.splice(formData.value.tag.dynamicTags.indexOf(tag2), 1);
    };
    const tagRefInput = ref();
    const tagShowInput = () => {
      formData.value.tag.inputVisible = true;
      nextTick(() => {
        tagRefInput.value.focus();
      });
    };
    const tagHandleInputConfirm = () => {
      if (formData.value.tag.inputValue) {
        formData.value.tag.dynamicTags.push(formData.value.tag.inputValue);
      }
      formData.value.tag.inputVisible = false;
      formData.value.tag.inputValue = "";
    };
    async function fetchTag(hideTip) {
      if (!tagSwitch.value) {
        ElMessage.warning(t("main.tag.auto.switch.no.tip"));
        return;
      }
      isTagLoading.value = true;
      const data = await getPageMd(siyuanData.value.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logUtil.logInfo("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logUtil.logInfo("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.value.tag.dynamicTags.includes(hotTags[i])) {
          formData.value.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    async function saveAttrToSiyuan(hideTip) {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.value.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.value.desc,
        tags: formData.value.tag.dynamicTags.join(",")
      };
      await setPageAttrs(siyuanData.value.pageId, customAttr);
      logUtil.logInfo("VuepressMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip != true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    }
    const mdFileToTitle = (fmtTitle) => {
      if (fmtTitle.indexOf(".md") > -1) {
        fmtTitle = fmtTitle.replace(/\.md/g, "");
      }
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      return fmtTitle;
    };
    const convertAttrToYAML = () => {
      logUtil.logInfo("convertAttrToYAML,formData=>", formData);
      let fmtTitle = formData.value.title;
      fmtTitle = mdFileToTitle(fmtTitle);
      vuepressData.value.yamlObj.title = fmtTitle;
      vuepressData.value.yamlObj.permalink = "/post/" + formData.value.customSlug + ".html";
      vuepressData.value.yamlObj.date = covertStringToDate(formData.value.created);
      const meta = [{
        name: "keywords",
        content: formData.value.tag.dynamicTags.join(" ")
      }, {
        name: "description",
        content: formData.value.desc
      }];
      vuepressData.value.yamlObj.meta = meta;
      vuepressData.value.yamlObj.tags = formData.value.tag.dynamicTags;
      vuepressData.value.yamlObj.categories = formData.value.categories;
      let yaml = obj2yaml(vuepressData.value.yamlObj);
      yaml = formatIsoToZhDate(yaml, true);
      vuepressData.value.formatter = yaml;
      vuepressData.value.vuepressFullContent = vuepressData.value.formatter;
    };
    const convertYAMLToAttr = () => {
      vuepressData.value.formatter = vuepressData.value.vuepressFullContent;
      vuepressData.value.yamlObj = yaml2Obj(vuepressData.value.formatter);
      logUtil.logInfo("convertYAMLToAttr,yamlObj=>", vuepressData.value.yamlObj);
      formData.value.title = vuepressData.value.yamlObj.title + ".md";
      formData.value.customSlug = vuepressData.value.yamlObj.permalink.replace("/pages/", "").replace("/post/", "").replace(".html", "").replace("/", "");
      formData.value.created = formatIsoToZhDate(vuepressData.value.yamlObj.date.toISOString(), false);
      const yamlMeta = vuepressData.value.yamlObj.meta;
      for (let i = 0; i < yamlMeta.length; i++) {
        const m2 = yamlMeta[i];
        if (m2.name === "description") {
          formData.value.desc = m2.content;
          break;
        }
      }
      for (let j = 0; j < vuepressData.value.yamlObj.tags.length; j++) {
        const tag2 = vuepressData.value.yamlObj.tags[j];
        if (!formData.value.tag.dynamicTags.includes(tag2) && tag2 != "") {
          formData.value.tag.dynamicTags.push(tag2);
        }
      }
      formData.value.categories = vuepressData.value.yamlObj.categories;
    };
    const fmtRefInput = ref();
    const copyToClipboard$1 = () => {
      nextTick(() => {
        fmtRefInput.value.focus();
        copyToClipboard(vuepressData.value.vuepressFullContent);
        ElMessage.success(t("main.opt.success"));
      });
    };
    const githubOnChange = (val) => {
      slugHashEnabled.value = val;
      vuepressGithubEnabled.value = val;
    };
    const defaultPathOnChange = (val) => {
      useDefaultPath.value = val;
    };
    const customProps = {
      label: "label",
      children: "children",
      isLeaf: "isLeaf"
    };
    const customLoad = async (node, resolve2) => {
      if (node.isLeaf)
        return resolve2([]);
      logUtil.logInfo("\u76EE\u524D\u5DF2\u4FDD\u5B58\u8DEF\u5F84=>", formData.value.customPath);
      logUtil.logInfo("\u5F53\u524D\u8282\u70B9=>", node.data);
      const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
      let docPath;
      let parentDocPath = node.data.value || "";
      if (parentDocPath == "") {
        parentDocPath = "docs/";
      }
      docPath = parentDocPath;
      const treeNode = await getPageTreeNode(vuepressCfg, docPath);
      resolve2(treeNode);
    };
    async function doPublish() {
      isPublishLoading.value = true;
      await doCancel(false);
      const fmtTitle = mdFileToTitle(formData.value.title);
      if (/[\s*|\\.]/g.test(fmtTitle)) {
        logUtil.logInfo("fmtTitle=>", fmtTitle);
        ElMessage.error("\u6587\u4EF6\u540D\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u8005\u7279\u6B8A\u5B57\u7B26");
        return;
      }
      await oneclickAttr(true);
      const isOk = getBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS);
      if (!isOk && vuepressGithubEnabled.value) {
        await initPage();
        isPublishLoading.value = false;
        ElMessage.error("\u68C0\u6D4B\u5230api\u4E0D\u53EF\u7528\u6216\u8005\u914D\u7F6E\u9519\u8BEF\uFF0C\u65E0\u6CD5\u53D1\u5E03\u5230Github\uFF0C\u8BF7\u81EA\u884C\u590D\u5236\u6587\u672C");
        return;
      } else if (isOk && vuepressGithubEnabled.value) {
        logUtil.logInfo("\u5F00\u59CB\u771F\u6B63\u8C03\u7528api\u53D1\u5E03\u5230Github");
        const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
        const mdFile = formData.value.title;
        let docPath = vuepressCfg.defaultPath + mdFile;
        if (!useDefaultPath.value) {
          if (formData.value.customPath.indexOf(".md") > -1) {
            docPath = formData.value.customPath;
            logUtil.logInfo("\u5DF2\u7ECF\u6709\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4E0D\u62FC\u63A5");
          } else {
            docPath = formData.value.customPath + "/" + mdFile;
          }
          logUtil.logInfo(formData.value.customPath);
          logUtil.logInfo("\u6587\u7AE0\u8BB2\u53D1\u5E03\u4E8E\u4EE5\u4E0B\u8DEF\u5F84=>", docPath);
          convertDocPathToCategories(docPath);
        }
        const data = await getPageMd(siyuanData.value.pageId);
        const md = removeMdWidgetTag(data.content);
        const mdContent = vuepressData.value.formatter + "\n" + md;
        vuepressData.value.vuepressContent = md;
        vuepressData.value.vuepressFullContent = mdContent;
        logUtil.logInfo("\u5373\u5C06\u53D1\u5E03\u7684\u5185\u5BB9\uFF0CmdContent=>", {
          "mdContent": mdContent
        });
        const res = await publishPage(vuepressCfg, docPath, mdContent);
        if (!res) {
          isPublishLoading.value = false;
          await initPage();
          ElMessage.error(t("main.publish.vuepress.failure"));
          return;
        }
        const customAttr = {
          [POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY]: docPath
        };
        await setPageAttrs(siyuanData.value.pageId, customAttr);
        logUtil.logInfo("VuepressMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58\u8DEF\u5F84,meta=>", customAttr);
        await initPage();
        logUtil.logInfo("\u6587\u7AE0\u9884\u89C8\u94FE\u63A5=>", previewUrl);
      } else {
        await initPage();
      }
      logUtil.logInfo("\u53D1\u5E03\u5185\u5BB9\u5B8C\u6210");
      isPublishLoading.value = false;
      ElMessage.success(t("main.opt.status.publish"));
    }
    async function oneclickAttr(hideTip) {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      convertAttrToYAML();
      await saveAttrToSiyuan(true);
      logUtil.logInfo("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.publish.oneclick.attr.finish"));
      }
    }
    async function cancelPublish() {
      isCancelLoading.value = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await doCancel(true);
        isCancelLoading.value = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch(() => {
        isCancelLoading.value = false;
        logUtil.logInfo("\u64CD\u4F5C\u5DF2\u53D6\u6D88");
      });
    }
    async function doCancel(isInit) {
      const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
      const docPath = getDocPath();
      logUtil.logInfo("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0CdocPath=>", docPath);
      await deletePage(vuepressCfg, docPath);
      const customAttr = {
        [POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY]: ""
      };
      await setPageAttrs(siyuanData.value.pageId, customAttr);
      logUtil.logInfo("VuepressMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      if (isInit) {
        await initPage();
      }
    }
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_switch = ElSwitch;
      const _component_el_input = ElInput;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup$1;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_tag = ElTag;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_form = ElForm;
      const _component_el_aside = ElAside;
      const _component_el_main = ElMain;
      const _component_el_container = ElContainer;
      const _component_el_skeleton = ElSkeleton;
      return openBlock(), createElementBlock(Fragment, null, [!isInitLoadding.value ? (openBlock(), createBlock(_component_el_container, {
        key: 0
      }, {
        default: withCtx(() => [createVNode(_component_el_aside, {
          width: "45%",
          class: "p-aside"
        }, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-version-tip",
            title: _ctx.$t("main.publish.vuepress.tip"),
            type: "info",
            closable: false
          }, null, 8, ["title"]), false ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            class: "top-version-tip",
            title: _ctx.$t("main.publish.vuepress.error.tip"),
            type: "error",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "100px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.complex")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.force.refresh")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: forceRefresh.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => forceRefresh.value = $event)
              }, null, 8, ["modelValue"]), !forceRefresh.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.force.refresh.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: _ctx.$t("main.slug")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.value.customSlug,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.value.checkList,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.checkList = $event)
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox, {
                  label: "1"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.use.google.translate")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3,
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: slugHashEnabled.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => slugHashEnabled.value = $event)
              }, null, 8, ["modelValue"]), !slugHashEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                class: "make-slug-btn",
                onClick: makeSlug,
                loading: isSlugLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isSlugLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.slug")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 5,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                type: "textarea",
                modelValue: formData.value.desc,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.desc = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 6
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: makeDesc,
                loading: isDescLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isDescLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.desc")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 7,
              label: _ctx.$t("main.create.time")
            }, {
              default: withCtx(() => [createVNode(_component_el_date_picker, {
                type: "datetime",
                modelValue: formData.value.created,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                onChange: createTimeChanged,
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.value.tag.dynamicTags, (tag2) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag2,
                  class: "mx-1",
                  closable: "",
                  "disable-transitions": false,
                  onClose: ($event) => tagHandleClose(tag2)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag2), 1)]),
                  _: 2
                }, 1032, ["onClose"]);
              }), 128)), formData.value.tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref_key: "tagRefInput",
                ref: tagRefInput,
                modelValue: formData.value.tag.inputValue,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.tag.inputValue = $event),
                class: "ml-1 w-20",
                size: "small",
                onKeyup: withKeys(tagHandleInputConfirm, ["enter"]),
                onBlur: tagHandleInputConfirm
              }, null, 8, ["modelValue", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "button-new-tag ml-1 el-tag",
                size: "small",
                onClick: tagShowInput
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.tag.new")), 1)]),
                _: 1
              }))]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 8
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: fetchTag,
                loading: isTagLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isTagLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.tag")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.github")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: vuepressGithubEnabled.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vuepressGithubEnabled.value = $event),
                onChange: githubOnChange
              }, null, 8, ["modelValue"]), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.publish.vuepress.github.tip"),
                type: "info",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true), !vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 1,
                title: _ctx.$t("main.publish.vuepress.github.no.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 9,
              label: _ctx.$t("main.publish.vuepress.choose.path.use.default")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: useDefaultPath.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => useDefaultPath.value = $event),
                onChange: defaultPathOnChange
              }, null, 8, ["modelValue"]), useDefaultPath.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.publish.vuepress.choose.path.use.default.tip"),
                type: "info",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), vuepressGithubEnabled.value && !useDefaultPath.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 10,
              label: _ctx.$t("main.publish.vuepress.choose.path")
            }, {
              default: withCtx(() => [createVNode(_component_el_tree_select, {
                modelValue: formData.value.customPath,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.value.customPath = $event),
                lazy: "",
                "check-strictly": true,
                load: customLoad,
                placeholder: _ctx.$t("main.cat.select"),
                "empty-text": _ctx.$t("main.cat.empty"),
                "no-data-text": _ctx.$t("main.cat.empty"),
                props: customProps
              }, null, 8, ["modelValue", "placeholder", "empty-text", "no-data-text"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 11,
              label: _ctx.$t("main.publish.vuepress.choose.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.value.title,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => formData.value.title = $event)
              }, null, 8, ["modelValue"]), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.publish.vuepress.choose.title.tip"),
                type: "error",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: doPublish,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                onClick: cancelPublish,
                loading: isCancelLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "danger",
                text: "",
                disabled: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublished.value ? _ctx.$t("main.publish.status.published") : _ctx.$t("main.publish.status.unpublish")), 1)]),
                _: 1
              }), isPublished.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: previewUrl.value,
                title: previewUrl.value,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.md.preview")), 9, _hoisted_1$3)) : createCommentVNode("", true)]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [isPublished.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: previewRealUrl.value,
                title: previewRealUrl.value,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.real.preview")), 9, _hoisted_2)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), createVNode(_component_el_main, null, {
          default: withCtx(() => [createVNode(_component_el_form, {
            "label-width": "75px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_alert, {
                class: "top-data-tip",
                title: _ctx.$t("main.yaml.formatter"),
                type: "info",
                closable: false
              }, null, 8, ["title"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: vuepressData.value.vuepressFullContent,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => vuepressData.value.vuepressFullContent = $event),
                autosize: {
                  minRows: 5,
                  maxRows: 8
                },
                onFocus: _cache[13] || (_cache[13] = ($event) => $event.target.select()),
                ref_key: "fmtRefInput",
                ref: fmtRefInput,
                type: "textarea"
              }, null, 8, ["modelValue"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: convertAttrToYAML
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.siyuan.to.yaml")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: convertYAMLToAttr
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.yaml.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: copyToClipboard$1
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.copy")), 1)]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
        loading: isInitLoadding.value,
        rows: 5,
        animated: ""
      }, null, 8, ["loading"])], 64);
    };
  }
});
const VuepressMain_vue_vue_type_style_index_0_scoped_00aea964_lang = "";
const VuepressMain = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-00aea964"]]);
const _hoisted_1$2 = ["href", "title"];
const __default__$b = {
  name: "MetaweblogMain"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    useAdaptor: {
      type: Boolean,
      default: false
    },
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ");
    const apiStatus = ref(false);
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoadding = ref(false);
    const editMode = ref(false);
    const forceRefresh = ref(false);
    const slugHashEnabled = ref(false);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const tagSwitch = ref(false);
    const formData = reactive({
      postid: "",
      title: "",
      customSlug: "",
      desc: "",
      created: "",
      checkList: ["1"],
      tag: {
        inputValue: "",
        dynamicTags: [],
        inputVisible: false
      },
      cat: {
        categorySelected: [],
        categoryList: []
      },
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"]
    });
    const siyuanData = reactive({
      pageId: "",
      meta: {
        tags: ""
      }
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    const initPage = async () => {
      isInitLoadding.value = true;
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      let conf = getJSONConf(props.apiType);
      if (!isEmptyObject(conf)) {
        blogName.value = conf.blogName;
      }
      slugHashEnabled.value = true;
      siyuanData.pageId = pageId;
      siyuanData.meta = await getPageAttrs(pageId);
      const page = await getPage(pageId);
      if (!page) {
        isInitLoadding.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logUtil.logInfo("MetaweblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
      formData.title = page.content;
      formData.customSlug = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.desc = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.created = formatNumToZhDate(page.created);
      formData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg != "") {
          formData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      isPublished.value = getPublishStatus(props.apiType, siyuanData.meta);
      const metaweblogCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[metaweblogCfg.posidKey];
        previewUrl.value = await api.getPrevireUrl(formData.postid.toString());
        try {
          const post = await api.getPost(formData.postid.toString());
          catData = post.categories;
          logUtil.logInfo("postid=>", formData.postid);
          logUtil.logInfo("post=>", post);
          logUtil.logInfo("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
        } catch (e) {
          ElMessage.error(t("post.delete.by.platform"));
          isInitLoadding.value = false;
          logUtil.logError("\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
        }
      }
      let catInfo = [];
      try {
        catInfo = await api.getCategories();
      } catch (e) {
        isInitLoadding.value = false;
        logUtil.logError("\u5206\u7C7B\u83B7\u53D6\u5931\u8D25", e);
      }
      logUtil.logInfo("catInfo=>", catInfo);
      let catArr = [];
      if (catInfo && catInfo.length && catInfo.length > 0) {
        catInfo.forEach((item) => {
          const cat = {
            value: item.description,
            label: item.description
          };
          catArr.push(cat);
        });
        formData.cat.categoryList = catArr;
      }
      formData.cat.categorySelected = catData;
      formData.categories = catData;
      apiStatus.value = conf.apiStatus;
      isInitLoadding.value = false;
    };
    onMounted(async () => {
      await initPage();
    });
    function checkForce() {
      if (isEmptyString(formData.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logUtil.logInfo(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    const makeSlug = async (hideTip) => {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await getPage(siyuanData.pageId);
      logUtil.logInfo("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logUtil.logInfo("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logUtil.logInfo("result=>", result);
        if (result) {
          formData.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.customSlug = await pingyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const makeDesc = async (hideTip) => {
      isDescLoading.value = true;
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      const plainText = mdToPlainText(md);
      formData.desc = parseHtml(plainText, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const tagHandleClose = (tag2) => {
      formData.tag.dynamicTags.splice(formData.tag.dynamicTags.indexOf(tag2), 1);
    };
    const tagRefInput = ref();
    const tagShowInput = () => {
      formData.tag.inputVisible = true;
      nextTick(() => {
        tagRefInput.value.focus();
      });
    };
    const tagHandleInputConfirm = () => {
      if (formData.tag.inputValue) {
        formData.tag.dynamicTags.push(formData.tag.inputValue);
      }
      formData.tag.inputVisible = false;
      formData.tag.inputValue = "";
    };
    async function fetchTag(hideTip) {
      if (!tagSwitch.value) {
        ElMessage.warning(t("main.tag.auto.switch.no.tip"));
        return;
      }
      isTagLoading.value = true;
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logUtil.logInfo("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logUtil.logInfo("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.tag.dynamicTags.includes(hotTags[i])) {
          formData.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("MetaweblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip != true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    };
    const handleCatNodeClick = (event, data, node, nodeItem) => {
    };
    const handleCatNodeCheck = (data, status) => {
      console.log("data=>", data);
      console.log("status=>", status);
      let cats = [];
      const values = status.checkedKeys;
      values.forEach((item) => {
        cats.push(item.toString());
      });
      formData.categories = cats;
      logUtil.logInfo(" formData.categories=>", formData.categories);
    };
    const oneclickAttr = async (hideTip) => {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      await saveAttrToSiyuan(true);
      logUtil.logInfo("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.publish.oneclick.attr.finish"));
      }
    };
    const doPublish = async () => {
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.tip.metaweblog"));
        return;
      }
      isPublishLoading.value = true;
      try {
        await oneclickAttr(true);
        const metaweblogCfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        let fmtTitle = removeTitleNumber(formData.title);
        let content;
        const data = await getPageMd(siyuanData.pageId);
        const md = data.content;
        if (PageType.Html == metaweblogCfg.pageType) {
          const html = mdToHtml(md);
          content = removeWidgetTag(html);
        } else {
          content = removeMdWidgetTag(md);
        }
        const post = new Post();
        post.title = fmtTitle;
        post.wp_slug = formData.customSlug;
        post.description = content;
        post.categories = formData.categories;
        post.mt_keywords = formData.tag.dynamicTags.join(",");
        if (props.apiType == API_TYPE_CONSTANTS.API_TYPE_CNBLOGS) {
          post.categories.push("[Markdown]");
        }
        post.dateCreated = new Date();
        const publish = true;
        let postid;
        if (isPublished.value) {
          postid = formData.postid;
          const flag = await api.editPost(postid, post, true);
          if (!flag) {
            ElMessage.error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25");
            throw new Error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25=>" + postid);
          }
          logUtil.logInfo("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          logUtil.logInfo("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", metaweblogCfg.posidKey);
          const customAttr = {
            [metaweblogCfg.posidKey]: postid
          };
          await setPageAttrs(siyuanData.pageId, customAttr);
          logUtil.logInfo("MetaweblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logUtil.logInfo("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        logUtil.logError("\u53D1\u5E03\u5F02\u5E38");
        ElMessage.error(t("main.opt.failure"));
        throw new Error(e);
      }
      isPublishLoading.value = false;
    };
    const cancelPublish = async () => {
      isCancelLoading.value = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await doCancel(true);
        isCancelLoading.value = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch((e) => {
        ElMessage({
          type: "error",
          message: t("main.opt.failure")
        });
        isCancelLoading.value = false;
        throw new Error(e);
      });
    };
    const doCancel = async (isInit) => {
      const metaweblogCfg = getJSONConf(props.apiType);
      logUtil.logInfo("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [metaweblogCfg.posidKey]: ""
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logUtil.logError("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_switch = ElSwitch;
      const _component_el_input = ElInput;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup$1;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_tag = ElTag;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_form = ElForm;
      const _component_el_main = ElMain;
      const _component_el_skeleton = ElSkeleton;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [!isInitLoadding.value ? (openBlock(), createBlock(_component_el_main, {
          key: 0,
          class: "blog-main"
        }, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-version-tip",
            title: apiTypeInfo.value + blogName.value,
            type: "info",
            closable: false
          }, null, 8, ["title"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            class: "top-version-tip",
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "error",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), __props.useAdaptor ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            class: "top-version-tip",
            title: _ctx.$t("setting.conf.tip"),
            type: "info",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "120px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.complex")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.force.refresh")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: forceRefresh.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => forceRefresh.value = $event)
              }, null, 8, ["modelValue"]), !forceRefresh.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.force.refresh.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: _ctx.$t("main.slug")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.customSlug,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.checkList,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.checkList = $event)
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox, {
                  label: "1"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.use.google.translate")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                class: "make-slug-btn",
                onClick: makeSlug,
                loading: isSlugLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isSlugLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.slug")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4,
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: slugHashEnabled.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => slugHashEnabled.value = $event)
              }, null, 8, ["modelValue"]), !slugHashEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 5,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                type: "textarea",
                modelValue: formData.desc,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.desc = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 6
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: makeDesc,
                loading: isDescLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isDescLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.desc")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 7,
              label: _ctx.$t("main.create.time")
            }, {
              default: withCtx(() => [createVNode(_component_el_date_picker, {
                type: "datetime",
                modelValue: formData.created,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.tag.dynamicTags, (tag2) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag2,
                  class: "mx-1",
                  closable: "",
                  "disable-transitions": false,
                  onClose: ($event) => tagHandleClose(tag2)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag2), 1)]),
                  _: 2
                }, 1032, ["onClose"]);
              }), 128)), formData.tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref_key: "tagRefInput",
                ref: tagRefInput,
                modelValue: formData.tag.inputValue,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.tag.inputValue = $event),
                class: "ml-1 w-20",
                size: "small",
                onKeyup: withKeys(tagHandleInputConfirm, ["enter"]),
                onBlur: tagHandleInputConfirm
              }, null, 8, ["modelValue", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "button-new-tag ml-1 el-tag",
                size: "small",
                onClick: tagShowInput
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.tag.new")), 1)]),
                _: 1
              }))]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 8
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: fetchTag,
                loading: isTagLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isTagLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.tag")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.cat"),
              style: {
                "width": "100%"
              }
            }, {
              default: withCtx(() => [createVNode(_component_el_tree_select, {
                style: {
                  "width": "100%"
                },
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.cat.categorySelected = $event),
                data: formData.cat.categoryList,
                multiple: "",
                "tag-type": "info",
                "check-on-click-node": true,
                "render-after-expand": false,
                "show-checkbox": "",
                placeholder: _ctx.$t("main.cat.select"),
                "empty-text": _ctx.$t("main.cat.empty"),
                "no-data-text": _ctx.$t("main.cat.empty"),
                onNodeClick: handleCatNodeClick,
                onCheck: handleCatNodeCheck
              }, null, 8, ["modelValue", "data", "placeholder", "empty-text", "no-data-text"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, {
              label: ""
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: doPublish,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_el_button, {
                onClick: cancelPublish,
                loading: isCancelLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "danger",
                text: "",
                disabled: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublished.value ? _ctx.$t("main.publish.status.published") : _ctx.$t("main.publish.status.unpublish")), 1)]),
                _: 1
              }), isPublished.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: previewUrl.value,
                title: previewUrl.value,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.preview")), 9, _hoisted_1$2)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
          loading: isInitLoadding.value,
          rows: 5,
          animated: ""
        }, null, 8, ["loading"])]),
        _: 1
      });
    };
  }
});
const MetaweblogMain_vue_vue_type_style_index_0_scoped_cf227a33_lang = "";
const MetaweblogMain = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__scopeId", "data-v-cf227a33"]]);
const __default__$a = {
  name: "JVueMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JVUE);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$9 = {
  name: "CnblogsMain"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CNBLOGS);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$8 = {
  name: "ConfluenceMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "use-adaptor": true,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$7 = {
  name: "WordpressMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_WORDPRESS);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
function normalizeArray(parts, allowAboveRoot) {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === ".") {
      parts.splice(i, 1);
    } else if (last === "..") {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift("..");
    }
  }
  return parts;
}
function resolve() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : "/";
    if (typeof path !== "string") {
      throw new TypeError("Arguments to path.resolve must be strings");
    } else if (!path) {
      continue;
    }
    resolvedPath = path + "/" + resolvedPath;
    resolvedAbsolute = path.charAt(0) === "/";
  }
  resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p2) {
    return !!p2;
  }), !resolvedAbsolute).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
}
function filter(xs, f2) {
  if (xs.filter)
    return xs.filter(f2);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (f2(xs[i], i, xs))
      res.push(xs[i]);
  }
  return res;
}
const imageRegex = new RegExp(".(gif|jpe?g|tiff?|png|webp|bmp|ico)$", "i");
async function imageToBase64(image) {
  let base64 = "";
  if (image.uri) {
    const uri = new URL(image.uri);
    const imageBuffer = await (await fetch$1(uri)).buffer();
    base64 = imageBuffer.toString("base64");
  } else if (image.path && imageRegex.test(image.path)) {
    let isFile;
    isFile = (await (void 0)(image.path)).isFile();
    if (isFile) {
      const imageBuffer = await (void 0)(resolve(image.path));
      base64 = imageBuffer.toString("base64");
    }
  } else {
    throw new Error("Didn't get an image or a good uri for the appropriate param");
  }
  return {
    base64
  };
}
class ImageParser {
  hasExtenalImages(content) {
    let flag = false;
    const imgRegex = /!\[.*]\((http|https):\/.*\/.*\)/g;
    const matches = content.match(imgRegex);
    if (matches && matches.length > 0) {
      return true;
    }
    const imgBase64Regex = /!\[.*]\((data:image):\/.*\/.*\)/g;
    const base64Matches = content.match(imgBase64Regex);
    if (base64Matches && base64Matches.length > 0) {
      return true;
    }
    return flag;
  }
  removeImages(content) {
    let newcontent = content;
    newcontent = newcontent.replace(/!\[.*]\((http|https):\/.*\/.*\)/g, "");
    return newcontent;
  }
  async replaceImagesWithBase64(content) {
    var _a;
    let newcontent = content;
    const imgRegex = /!\[.*]\((http|https):\/.*\/.*\)/g;
    const matches = newcontent.match(imgRegex);
    if (matches == null || matches.length == 0) {
      return newcontent;
    }
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      logUtil.logInfo("img=>", match);
      const src = match.replace(/!\[]\(/g, "").replace(/\)/, "");
      logUtil.logInfo("src=>", src);
      let newImg;
      if (inSiyuan()) {
        let imageBase64WithURI = await imageToBase64({
          uri: src
        });
        newImg = (imageBase64WithURI == null ? void 0 : imageBase64WithURI.base64) || "no pic";
      } else {
        const middleWareUrl = getEnv("VITE_MIDDLEWARE_URL") || "/api/middleware";
        const middleApiUrl = middleWareUrl + "/imageToBase64";
        const data = {
          fetchParams: {
            imgUrl: src
          }
        };
        let middleFetchOption = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        };
        logUtil.logInfo("middleApiUrl=>");
        logUtil.logInfo(middleApiUrl);
        logUtil.logInfo("middleFetchOption=>");
        logUtil.logInfo(middleFetchOption);
        let resJson;
        const response = await fetch(middleApiUrl, middleFetchOption);
        resJson = await response.json();
        logUtil.logInfo("resJson=>");
        logUtil.logInfo(resJson);
        newImg = ((_a = resJson == null ? void 0 : resJson.body) == null ? void 0 : _a.base64str) || "parse error";
      }
      newImg = '<img src="data:image/png;base64,' + newImg + '"  alt="base64Image"/>';
      newcontent = newcontent.replace(match, newImg);
    }
    return newcontent;
  }
  replaceImagesWithAscii(content) {
    let newcontent = content;
    return newcontent;
  }
  replaceImagesWithColorAscii(content) {
    let newcontent = content;
    return newcontent;
  }
  async uploadImageToBeds(content) {
    let newcontent = content;
    return newcontent;
  }
  async dounloadMdWithImages() {
  }
  async dounloadImagesToSiyuan() {
    throw new Error("\u601D\u6E90\u7B14\u8BB0\u5DF2\u7ECF\u6709\u6B64\u529F\u80FD\uFF0C\u65E0\u9700\u91CD\u65B0\u5B9E\u73B0");
  }
}
const _hoisted_1$1 = ["href", "title"];
const __default__$6 = {
  name: "CommonBlogMain"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    useCat: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: CommonblogCfg,
      default: null
    },
    pageId: {
      type: String,
      default: void 0
    },
    limitRate: {
      type: Boolean,
      default: false
    },
    limitSeconds: {
      type: Number,
      default: 5
    },
    imageToBase64: {
      type: Boolean,
      default: false
    },
    removeImage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.common") + props.apiType + " ");
    const apiStatus = ref(false);
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoadding = ref(false);
    const editMode = ref(false);
    const forceRefresh = ref(false);
    const slugHashEnabled = ref(false);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const tagSwitch = ref(false);
    const catEnabled = ref(false);
    const imageParser = new ImageParser();
    const formData = reactive({
      postid: "",
      title: "",
      customSlug: "",
      desc: "",
      created: "",
      checkList: ["1"],
      tag: {
        inputValue: "",
        dynamicTags: [],
        inputVisible: false
      },
      cat: {
        categorySelected: "",
        categoryList: []
      },
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"],
      cat_slugs: []
    });
    const siyuanData = reactive({
      pageId: "",
      meta: {
        tags: ""
      }
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    const initPage = async () => {
      isInitLoadding.value = true;
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      const conf = getJSONConf(props.apiType);
      if (!isEmptyObject(conf)) {
        blogName.value = conf.blogName || "";
      }
      slugHashEnabled.value = true;
      siyuanData.pageId = pageId;
      siyuanData.meta = await getPageAttrs(pageId);
      let page;
      try {
        page = await getPage(pageId);
      } catch (e) {
        isInitLoadding.value = false;
        logUtil.logError("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25", e);
        throw new Error("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25");
      }
      if (!page) {
        isInitLoadding.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logUtil.logInfo("CommonblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
      formData.title = page.content;
      formData.customSlug = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.desc = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.created = formatNumToZhDate(page.created);
      formData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg != "") {
          formData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      isPublished.value = getPublishStatus(props.apiType, siyuanData.meta);
      catEnabled.value = !isPublished.value;
      const commonCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      let catSlugData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[commonCfg.posidKey || ""];
        previewUrl.value = await api.getPrevireUrl(formData.postid.toString());
        if (props.useCat) {
          try {
            const post = await api.getPost(formData.postid.toString());
            catData = post.categories;
            catSlugData = post.cate_slugs;
            logUtil.logInfo("postid=>", formData.postid);
            logUtil.logInfo("post=>", post);
            logUtil.logInfo("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
          } catch (e) {
            ElMessage.error(t("post.delete.by.platform"));
            isInitLoadding.value = false;
            logUtil.logError("\u5E73\u53F0\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
          }
        }
      } else {
        if (props.useCat && !isEmptyString(commonCfg.blogName)) {
          const defaultCats = [];
          const defaultCatSlugs = [];
          defaultCats.push(commonCfg.blogName);
          catData = defaultCats;
          defaultCatSlugs.push(commonCfg.blogid);
          catSlugData = defaultCatSlugs;
        }
      }
      if (props.useCat) {
        let catInfo = [];
        try {
          catInfo = await api.getCategories();
        } catch (e) {
          isInitLoadding.value = false;
          logUtil.logError("\u5206\u7C7B\u83B7\u53D6\u5931\u8D25", e);
        }
        logUtil.logInfo("catInfo=>", catInfo);
        let catArr = [];
        if (catInfo && catInfo.length && catInfo.length > 0) {
          catInfo.forEach((item) => {
            const cat = {
              value: item.categoryId,
              label: item.description
            };
            catArr.push(cat);
          });
          formData.cat.categoryList = catArr;
        }
        formData.cat.categorySelected = catData.length > 0 ? catData[0] : "";
        blogName.value = formData.cat.categorySelected;
        formData.categories = catData;
        formData.cat_slugs = catSlugData;
      }
      apiStatus.value = conf.apiStatus || false;
      isInitLoadding.value = false;
    };
    onMounted(async () => {
      await initPage();
    });
    function checkForce() {
      if (isEmptyString(formData.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logUtil.logInfo(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    const makeSlug = async (hideTip) => {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await getPage(siyuanData.pageId);
      logUtil.logInfo("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logUtil.logInfo("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logUtil.logInfo("result=>", result);
        if (result) {
          formData.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.customSlug = await pingyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const makeDesc = async (hideTip) => {
      isDescLoading.value = true;
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      let html = mdToPlainText(md);
      formData.desc = parseHtml(html, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const tagHandleClose = (tag2) => {
      formData.tag.dynamicTags.splice(formData.tag.dynamicTags.indexOf(tag2), 1);
    };
    const tagRefInput = ref();
    const tagShowInput = () => {
      formData.tag.inputVisible = true;
      nextTick(() => {
        tagRefInput.value.focus();
      });
    };
    const tagHandleInputConfirm = () => {
      if (formData.tag.inputValue) {
        formData.tag.dynamicTags.push(formData.tag.inputValue);
      }
      formData.tag.inputVisible = false;
      formData.tag.inputValue = "";
    };
    async function fetchTag(hideTip) {
      if (!tagSwitch.value) {
        ElMessage.warning(t("main.tag.auto.switch.no.tip"));
        return;
      }
      isTagLoading.value = true;
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logUtil.logInfo("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logUtil.logInfo("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.tag.dynamicTags.includes(hotTags[i])) {
          formData.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const handleCatNodeSingleCheck = (val) => {
      logUtil.logInfo("val=>", val);
      const conf = getJSONConf(props.apiType);
      let cats = [];
      let catSlugs = [];
      cats.push(val.label);
      formData.categories = cats;
      catSlugs.push(conf.username + "/" + val.value);
      formData.cat_slugs = catSlugs;
      blogName.value = val.label;
      logUtil.logInfo(" formData.categories=>", formData.categories);
      logUtil.logInfo(" formData.cat_slugs=>", formData.cat_slugs);
    };
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("CommonblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip != true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    };
    const oneclickAttr = async (hideTip) => {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      await saveAttrToSiyuan(true);
      logUtil.logInfo("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.publish.oneclick.attr.finish"));
      }
    };
    const cheeckLimit = (lastmodKey) => {
      let flag = false;
      let lastmodDate = getConf(lastmodKey);
      if (isEmptyString(lastmodDate)) {
        return false;
      }
      logUtil.logInfo("cheeckLimit lastmodKey=>", lastmodKey);
      logUtil.logInfo("cheeckLimit lastmodDate=>", lastmodDate);
      const s2 = calcLastSeconds(lastmodDate);
      if (s2 <= props.limitSeconds) {
        ElMessage.error("\u7531\u4E8E\u3010" + props.apiType + "\u3011\u5E73\u53F0\u7684\u9650\u5236\uFF0C\u6BCF6\u5206\u949F\u4E4B\u5185\u53EA\u80FD\u53D1\u5E03\u6216\u8005\u66F4\u65B0\u4E00\u6B21\u6587\u7AE0\uFF0C\u8DDD\u79BB\u4E0A\u4E00\u6B21\u53D1\u5E03\u65F6\u95F4\u4E3A\uFF1A" + s2 + "\u79D2\uFF0C\u4ECD\u9700\u7B49\u5F85\uFF1A" + (props.limitSeconds - s2) + "\u79D2");
        return true;
      }
      return flag;
    };
    const publishConfirm = async () => {
      const data = await getPageMd(siyuanData.pageId);
      let md = data.content;
      if (props.removeImage && imageParser.hasExtenalImages(md)) {
        ElMessageBox.confirm("\u68C0\u6D4B\u5230\u5916\u94FE\u56FE\u7247\uFF0C\u7531\u4E8E\u5E73\u53F0\u9650\u5236\uFF0C\u7EE7\u7EED\u53D1\u5E03\u5C06\u5254\u9664\u8FD9\u4E9B\u56FE\u7247\uFF0C\u4EE5\u7EAF\u6587\u672C\u53D1\u5E03\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
          confirmButtonText: t("main.opt.ok"),
          cancelButtonText: t("main.opt.cancel"),
          type: "warning"
        }).then(async () => {
          await doPublish();
        }).catch(() => {
          logUtil.logInfo("\u64CD\u4F5C\u5DF2\u53D6\u6D88");
        });
      } else {
        await doPublish();
      }
    };
    const doPublish = async () => {
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.tip.metaweblog"));
        return;
      }
      isPublishLoading.value = true;
      try {
        const lastmodKey = props.apiType + "_PUBLISH_LIMIT";
        if (cheeckLimit(lastmodKey)) {
          isPublishLoading.value = false;
          return;
        }
        logUtil.logInfo("\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u66F4\u65B0\u53D1\u5E03\u65F6\u95F4");
        const lastmodDate = new Date().toISOString();
        setConf(lastmodKey, lastmodDate);
        await oneclickAttr(true);
        const commonblogCfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        let fmtTitle = removeTitleNumber(formData.title);
        let content;
        const data = await getPageMd(siyuanData.pageId);
        let md = data.content;
        if (props.removeImage) {
          md = imageParser.removeImages(md);
        }
        if (PageType.Html == commonblogCfg.pageType) {
          const html = mdToHtml(md);
          content = removeWidgetTag(html);
        } else {
          content = removeMdWidgetTag(md);
        }
        const post = new Post();
        post.title = fmtTitle;
        post.wp_slug = formData.customSlug;
        post.description = content;
        post.categories = formData.categories;
        post.cate_slugs = formData.cat_slugs;
        post.mt_keywords = formData.tag.dynamicTags.join(",");
        post.dateCreated = new Date();
        const publish = true;
        let postid;
        if (isPublished.value) {
          postid = formData.postid;
          const flag = await api.editPost(postid, post, true);
          if (!flag) {
            ElMessage.error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25");
            throw new Error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25=>" + postid);
          }
          logUtil.logInfo("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          if (post.cate_slugs && post.cate_slugs.length > 0) {
            const repo = post.cate_slugs[0];
            postid = postid + "_" + repo;
          }
          logUtil.logInfo("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", commonblogCfg.posidKey);
          const customAttr = {
            [commonblogCfg.posidKey || ""]: postid
          };
          await setPageAttrs(siyuanData.pageId, customAttr);
          logUtil.logInfo("CommonblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logUtil.logInfo("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        isPublishLoading.value = false;
        logUtil.logError("\u53D1\u5E03\u5F02\u5E38", e);
        ElMessage.error({
          dangerouslyUseHTMLString: true,
          message: t("main.opt.failure") + "=>" + e.toString()
        });
      }
      isPublishLoading.value = false;
    };
    const cancelPublish = async () => {
      isCancelLoading.value = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await doCancel(true);
        isCancelLoading.value = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch((e) => {
        ElMessage({
          type: "error",
          message: t("main.opt.failure")
        });
        isCancelLoading.value = false;
        throw new Error(e);
      });
    };
    const doCancel = async (isInit) => {
      const commonblogCfg = getJSONConf(props.apiType);
      logUtil.logInfo("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [commonblogCfg.posidKey || ""]: ""
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
          throw new Error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logUtil.logError("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_switch = ElSwitch;
      const _component_el_input = ElInput;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup$1;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_tag = ElTag;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_form = ElForm;
      const _component_el_main = ElMain;
      const _component_el_skeleton = ElSkeleton;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [!isInitLoadding.value ? (openBlock(), createBlock(_component_el_main, {
          key: 0,
          class: "common-main"
        }, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-version-tip",
            title: apiTypeInfo.value + blogName.value,
            type: "info",
            closable: false
          }, null, 8, ["title"]), __props.useCat && isPublished.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            class: "top-version-tip",
            title: "\u4EC5\u652F\u6301\u65B0\u5EFA\u4FEE\u6539\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u7F16\u8F91\u6240\u5C5E\u77E5\u8BC6\u5E93\u3002\u5982\u679C\u60A8\u60F3\u79FB\u52A8\u6587\u6863\uFF0C\u8BF7\u5148\u70B9\u51FB\u53D6\u6D88\u5220\u9664\u8BE5\u6587\u6863\uFF0C\u7136\u540E\u91CD\u65B0\u9009\u62E9\u65B0\u7684\u77E5\u8BC6\u5E93\u53D1\u5E03\u3002",
            type: "warning",
            closable: false
          })) : createCommentVNode("", true), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            class: "top-version-tip",
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "error",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "120px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.complex")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.force.refresh")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: forceRefresh.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => forceRefresh.value = $event)
              }, null, 8, ["modelValue"]), !forceRefresh.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.force.refresh.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: _ctx.$t("main.slug")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.customSlug,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.checkList,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.checkList = $event)
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox, {
                  label: "1"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.use.google.translate")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                class: "make-slug-btn",
                onClick: makeSlug,
                loading: isSlugLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isSlugLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.slug")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4,
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: slugHashEnabled.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => slugHashEnabled.value = $event)
              }, null, 8, ["modelValue"]), !slugHashEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 5,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                type: "textarea",
                modelValue: formData.desc,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.desc = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 6
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: makeDesc,
                loading: isDescLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isDescLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.desc")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 7,
              label: _ctx.$t("main.create.time")
            }, {
              default: withCtx(() => [createVNode(_component_el_date_picker, {
                type: "datetime",
                modelValue: formData.created,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.tag.dynamicTags, (tag2) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag2,
                  class: "mx-1",
                  closable: "",
                  "disable-transitions": false,
                  onClose: ($event) => tagHandleClose(tag2)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag2), 1)]),
                  _: 2
                }, 1032, ["onClose"]);
              }), 128)), formData.tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref_key: "tagRefInput",
                ref: tagRefInput,
                modelValue: formData.tag.inputValue,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.tag.inputValue = $event),
                class: "ml-1 w-20",
                size: "small",
                onKeyup: withKeys(tagHandleInputConfirm, ["enter"]),
                onBlur: tagHandleInputConfirm
              }, null, 8, ["modelValue", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "button-new-tag ml-1 el-tag",
                size: "small",
                onClick: tagShowInput
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.tag.new")), 1)]),
                _: 1
              }))]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 8
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: fetchTag,
                loading: isTagLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isTagLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.tag")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), props.useCat ? (openBlock(), createBlock(_component_el_form_item, {
              key: 9,
              label: _ctx.$t("main.cat"),
              style: {
                "width": "100%"
              }
            }, {
              default: withCtx(() => [catEnabled.value ? (openBlock(), createBlock(_component_el_select, {
                key: 0,
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.cat.categorySelected = $event),
                placeholder: "\u8BF7\u9009\u62E9",
                "no-data-text": "\u6682\u65E0\u6570\u636E",
                class: "m-2",
                size: "default",
                onChange: handleCatNodeSingleCheck
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.cat.categoryList, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])) : (openBlock(), createBlock(_component_el_select, {
                key: 1,
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.cat.categorySelected = $event),
                disabled: "",
                placeholder: "\u8BF7\u9009\u62E9",
                "no-data-text": "\u6682\u65E0\u6570\u636E",
                class: "m-2",
                size: "default",
                onChange: handleCatNodeSingleCheck
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.cat.categoryList, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"]))]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, {
              label: ""
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: publishConfirm,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_el_button, {
                onClick: cancelPublish,
                loading: isCancelLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "danger",
                text: "",
                disabled: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublished.value ? _ctx.$t("main.publish.status.published") : _ctx.$t("main.publish.status.unpublish")), 1)]),
                _: 1
              }), isPublished.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: previewUrl.value,
                title: previewUrl.value,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.preview")), 9, _hoisted_1$1)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
          loading: isInitLoadding.value,
          rows: 5,
          animated: ""
        }, null, 8, ["loading"])]),
        _: 1
      });
    };
  }
});
const CommonBlogMain_vue_vue_type_style_index_0_scoped_6dbc2b05_lang = "";
const CommonBlogMain = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-6dbc2b05"]]);
const __default__$5 = {
  name: "LiandiMain"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CommonBlogMain, {
        "api-type": apiType.value,
        "page-id": props.pageId,
        "limit-rate": true,
        "limit-seconds": 360,
        "remove-image": true
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$4 = {
  name: "YuqueMain"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CommonBlogMain, {
        "api-type": apiType.value,
        "page-id": props.pageId,
        "use-cat": true
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$3 = {
  name: "KmsMain"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_KMS);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CommonBlogMain, {
        "api-type": apiType.value,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const _hoisted_1 = {
  key: 1
};
const __default__$2 = {
  name: "PlantformMain",
  components: {
    VuepressMain,
    JVueMain: _sfc_main$a,
    CnblogsMain: _sfc_main$9,
    ConfluenceMain: _sfc_main$8,
    WordpressMain: _sfc_main$7,
    LiandiMain: _sfc_main$5,
    YuqueMain: _sfc_main$4,
    KmsMain: _sfc_main$3,
    MetaweblogMain
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const {
      tabCountStore,
      vuepressEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    let formData = reactive({
      dynamicConfigArray: [],
      metaweblogArray: [],
      wordpressArray: []
    });
    const initDynCfg = (dynCfg) => {
      const newCfg = [];
      dynCfg.forEach((item) => {
        const newItem = new DynamicConfig(item.plantformType, item.plantformKey, item.plantformName);
        const switchKey = "switch-" + item.plantformKey;
        const switchValue = getBooleanConf(switchKey);
        newItem.modelValue = switchValue;
        if (switchValue) {
          newCfg.push(newItem);
        }
      });
      return newCfg;
    };
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      formData.dynamicConfigArray = initDynCfg(dynamicJsonCfg.totalCfg || []);
      formData.metaweblogArray = initDynCfg(dynamicJsonCfg.metaweblogCfg || []);
      formData.wordpressArray = initDynCfg(dynamicJsonCfg.wordpressCfg || []);
      logUtil.logInfo("dynamicJsonCfg=>");
      logUtil.logInfo(JSON.stringify(dynamicJsonCfg));
      logUtil.logInfo("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    const isReloadVuepressMain = ref(false);
    watch(() => props.isReload, (oldValue, newValue) => {
      initConf();
      logUtil.logInfo("plantform-main\u521D\u59CB\u5316");
    });
    onMounted(() => {
      initConf();
      logUtil.logInfo("plantform-main\u521D\u59CB\u5316 onMounted");
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_alert = ElAlert;
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_tabs, {
        key: 0,
        type: "border-card"
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("main.publish.to.vuepress")
        }, {
          default: withCtx(() => [createVNode(VuepressMain, {
            "is-reload": isReloadVuepressMain.value,
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("main.publish.to.jvue")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$a, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("main.publish.to.conf")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$8, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("main.publish.to.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$9, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("main.publish.to.wordpress")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$7, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("main.publish.to.liandi")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$5, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("main.publish.to.yuque")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$4, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("main.publish.to.kms")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$3, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).metaweblogArray, (mcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: mcfg.plantformName + "_" + mcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(MetaweblogMain, {
              "api-type": mcfg.plantformKey,
              "page-id": props.pageId
            }, null, 8, ["api-type", "page-id"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).wordpressArray, (wcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: wcfg.plantformName + "_" + wcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(MetaweblogMain, {
              "api-type": wcfg.plantformKey,
              "page-id": props.pageId
            }, null, 8, ["api-type", "page-id"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256))]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const table = "";
const tooltip = "";
const tableColumn = "";
const __default__$1 = {
  name: "DynamicPlantform"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const {
      t
    } = useI18n();
    const pType = ref();
    pType.value = PlantformType.Metaweblog;
    const showForm = ref(true);
    let dynamicConfigArray = reactive([]);
    const formRef = ref();
    const formData = reactive(new DynamicConfig(PlantformType.Metaweblog, "", ""));
    const rules = reactive({
      plantformKey: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      plantformName: [{
        required: true,
        message: () => t("form.validate.name.required")
      }]
    });
    const onPlantformTypeChange = (val) => {
      pType.value = val;
      showForm.value = pType.value == PlantformType.Metaweblog || pType.value == PlantformType.Wordpress || pType.value == PlantformType.Github;
      logUtil.logInfo(pType.value);
    };
    const submitForm = async (formEl) => {
      if (pType.value == "") {
        ElMessage.error(t("dynamic.platform.opt.noselect"));
        return;
      }
      const pkey = formData.plantformKey;
      const ptypeKey = pType.value.toLowerCase() + "-" + formData.plantformKey;
      logUtil.logInfo("\u5C06\u8981\u4FDD\u5B58\u7684\u5E73\u53F0key", ptypeKey);
      if (isDynamicKeyExists(ptypeKey)) {
        ElMessage.error(t("dynamic.platform.opt.key.exist"));
        return;
      }
      const switchKey = "switch-" + ptypeKey;
      const postidKey = "custom-" + ptypeKey + "-post-id";
      if (checkKeyExists(pkey) || checkKeyExists(ptypeKey) || checkKeyExists(switchKey) || checkKeyExists(postidKey)) {
        ElMessage.error(t("dynamic.platform.opt.key.exist"));
        return;
      }
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
      const newCfg = new DynamicConfig(pType.value, ptypeKey, formData.plantformName);
      dynamicConfigArray.push(newCfg);
      setDynamicJsonCfg(dynamicConfigArray);
      reloadPage();
      ElMessage.success(t("main.opt.success"));
    };
    const tableData = [];
    const num = ref(0);
    const currentRow = ref();
    const currentTip = ref(t("dynamic.platform.opt.item.select"));
    const handleCurrentChange2 = (val) => {
      currentRow.value = val;
      currentTip.value = t("dynamic.platform.opt.item.select.tip") + currentRow.value.plantformName;
      logUtil.logInfo(currentRow.value);
    };
    const isDynamicKeyExists = (key) => {
      let flag = false;
      logUtil.logInfo("isDynamicKeyExists,dynamicConfigArray=>");
      logUtil.logInfo(dynamicConfigArray);
      for (let i = 0; i < dynamicConfigArray.length; i++) {
        if (dynamicConfigArray[i].plantformKey == key) {
          flag = true;
          break;
        }
      }
      return flag;
    };
    const delRow = async () => {
      if (!currentRow.value || !currentRow.value.plantformKey) {
        ElMessage.error(t("dynamic.platform.opt.item.no.select.tip"));
      }
      for (let i = 0; i < dynamicConfigArray.length; i++) {
        logUtil.logInfo(currentRow.value.plantformKey);
        logUtil.logInfo(dynamicConfigArray[i].plantformKey);
        logUtil.logInfo("------------------------");
        if (currentRow.value.plantformKey == dynamicConfigArray[i].plantformKey) {
          dynamicConfigArray.splice(i, 1);
        }
      }
      setDynamicJsonCfg(dynamicConfigArray);
      reloadPage();
      ElMessage.success(t("main.opt.success"));
    };
    const initPage = async () => {
      dynamicConfigArray = getDynamicJsonCfg().totalCfg || [];
      for (let i = 0; i < dynamicConfigArray.length; i++) {
        tableData.push(dynamicConfigArray[i]);
      }
      num.value = dynamicConfigArray.length;
      logUtil.logInfo("dynamic init page=>", dynamicConfigArray);
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_form = ElForm;
      const _component_el_header = ElHeader;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _component_el_main = ElMain;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [createVNode(_component_el_header, {
          height: "250px",
          class: "publish-dyn-header"
        }, {
          default: withCtx(() => [createVNode(_component_el_form, {
            "label-width": "180px",
            ref_key: "formRef",
            ref: formRef,
            model: formData,
            rules
          }, {
            default: withCtx(() => [createVNode(_component_el_alert, {
              class: "top-version-tip",
              title: _ctx.$t("dynamic.platform.tip"),
              type: "info",
              closable: false
            }, null, 8, ["title"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("dynamic.platform.type")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: pType.value === unref(PlantformType).Metaweblog ? "primary" : "",
                  onClick: _cache[0] || (_cache[0] = ($event) => onPlantformTypeChange(unref(PlantformType).Metaweblog))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.metaweblog")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: pType.value === unref(PlantformType).Wordpress ? "primary" : "",
                  onClick: _cache[1] || (_cache[1] = ($event) => onPlantformTypeChange(unref(PlantformType).Wordpress))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.wordpress")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: pType.value === unref(PlantformType).Github ? "primary" : "",
                  onClick: _cache[2] || (_cache[2] = ($event) => onPlantformTypeChange(unref(PlantformType).Github))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.github")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: pType.value === unref(PlantformType).Custom ? "primary" : "",
                  onClick: _cache[3] || (_cache[3] = ($event) => onPlantformTypeChange(unref(PlantformType).Custom))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.custom")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), !showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0
            }, {
              default: withCtx(() => [createVNode(_component_el_alert, {
                title: "\u656C\u8BF7\u671F\u5F85",
                type: "info",
                closable: false
              })]),
              _: 1
            })) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: pType.value + _ctx.$t("dynamic.platform.key"),
              prop: "plantformKey"
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.plantformKey,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.plantformKey = $event),
                placeholder: _ctx.$t("dynamic.platform.key.tip")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2,
              label: pType.value + _ctx.$t("dynamic.platform.name"),
              prop: "plantformName"
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.plantformName,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.plantformName = $event),
                placeholder: _ctx.$t("dynamic.platform.name.tip")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[6] || (_cache[6] = ($event) => submitForm(formRef.value))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.opt.add")), 1)]),
                _: 1
              })]),
              _: 1
            })) : createCommentVNode("", true)]),
            _: 1
          }, 8, ["model", "rules"])]),
          _: 1
        }), createVNode(_component_el_main, null, {
          default: withCtx(() => [createVNode(_component_el_form_item, null, {
            default: withCtx(() => [currentRow.value ? (openBlock(), createBlock(_component_el_alert, {
              key: 0,
              class: "top-version-tip",
              title: currentTip.value,
              type: "info",
              closable: false
            }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_button, {
              type: "danger",
              onClick: delRow
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.opt.del.select")), 1)]),
              _: 1
            })]),
            _: 1
          }), (openBlock(), createBlock(_component_el_table, {
            data: tableData,
            key: num.value,
            border: "",
            stripe: "",
            "highlight-current-row": "",
            "empty-text": "\u6682\u65E0\u6570\u636E",
            onCurrentChange: handleCurrentChange2
          }, {
            default: withCtx(() => [createVNode(_component_el_table_column, {
              prop: "plantformType",
              label: _ctx.$t("dynamic.platform.type")
            }, null, 8, ["label"]), createVNode(_component_el_table_column, {
              prop: "plantformKey",
              label: _ctx.$t("dynamic.platform.key")
            }, null, 8, ["label"]), createVNode(_component_el_table_column, {
              prop: "plantformName",
              label: _ctx.$t("dynamic.platform.name")
            }, null, 8, ["label"])]),
            _: 1
          }))]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const __default__ = {
  name: "PublishService",
  components: {
    PlantformSetting: _sfc_main$e,
    ServiceSwitch: _sfc_main$p,
    ChangeLocale: _sfc_main$q,
    PostBind: _sfc_main$d,
    PlantformMain: _sfc_main$2,
    DynamicPlantform: _sfc_main$1
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    let defaultTab = ref("plantform-main");
    let isReloadSetting = ref(false);
    let isReloadMain = ref(false);
    let isReloadPostBind = ref(false);
    const serviceTabChange = (name) => {
      logUtil.logInfo("serviceTabChange=>", name);
      if ("plantform-setting" == name) {
        isReloadSetting.value = !isReloadSetting.value;
        logUtil.logInfo("plantform-setting change=>");
      } else if ("plantform-main" == name) {
        isReloadMain.value = !isReloadMain.value;
        logUtil.logInfo("plantform-main change=>");
      } else if ("post-bind" == name) {
        isReloadPostBind.value = !isReloadPostBind.value;
        logUtil.logInfo("post-bind change=>");
      }
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return openBlock(), createBlock(_component_el_tabs, {
        "model-value": unref(defaultTab),
        "tab-position": "left",
        onTabChange: serviceTabChange
      }, {
        default: withCtx(() => [createVNode(_component_el_tab_pane, {
          name: "plantform-main",
          label: _ctx.$t("service.tab.publish.service")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$2, {
            "is-reload": unref(isReloadMain),
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "plantform-setting",
          label: _ctx.$t("service.tab.publish.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$e, {
            "is-reload": unref(isReloadSetting)
          }, null, 8, ["is-reload"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "post-bind",
          label: _ctx.$t("service.tab.post.bind")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$d, {
            "is-reload": unref(isReloadPostBind),
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "service-switch",
          label: _ctx.$t("service.tab.service.switch")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$p)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "dynamicp-platform",
          label: _ctx.$t("dynamic.platform.new")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$1)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "change-local",
          label: _ctx.$t("service.tab.change.local")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$q)]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
export {
  ElScrollbar as E,
  _sfc_main as _,
  ElTooltip as a,
  ElOption as b,
  ElSelect as c,
  debounce as d,
  ElTableColumn as e,
  ElTable as f,
  generateId as g,
  ElMessageBox as h,
  isEqual as i,
  useTooltipContentProps as u
};
