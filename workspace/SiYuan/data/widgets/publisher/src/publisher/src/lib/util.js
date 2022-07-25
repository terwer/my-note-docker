import {getPage, getWidgetId} from "../lib/siyuanUtil";
import {getConf, setConf} from "../lib/config";
import {getApiParams} from "../lib/publish/publishUtil";
import {slugify} from 'transliteration';
import jsYaml from "js-yaml";

/**
 * 获取本地缓存的思源笔记页面ID
 * @param force
 * true 强制调用查询不获取缓存
 * false 优先读取本地缓存，缓存不存在再去查询
 * @returns {Promise<*|string>}
 */
export async function getSiyuanPageId(force) {
    const page = await getSiyuanPage(force);

    const pageId = page.root_id || ""
    console.log("获取思源笔记页面ID=>", pageId)
    return pageId
}

/**
 * 获取本地缓存的思源笔记页面信息（不是实时的）
 * @param force true代表强制调用查询不获取缓存
 * @returns {Promise<any>}
 */
export async function getSiyuanPage(force) {
    const widgetId = await getWidgetId()
    // 默认读取缓存
    const pageObj = getConf(widgetId);
    if (!force && pageObj) {
        console.log("获取本地缓存的思源笔记页面信息（不是实时的）=>", pageObj)
        return pageObj;
    }

    // 如果本地不存在，或者需要强制读取，调用api查询
    const page = await getPage(widgetId);
    if (page) {
        await setConf(widgetId, page)
        console.warn("调用API设置查询思源页面信息并更新本地缓存", page)
    }
    return page;
}

/**
 * 根据平台类型获取发布状态
 * @param apiType 平台类型
 * @param meta 元数据
 */
export function getPublishStatus(apiType, meta) {
    const postidKey = getApiParams(apiType).postidKey;
    const postId = meta[postidKey] || "";
    return postId === "";
}

/**
 * 中文翻译成英文别名
 * @param q
 * @returns {Promise<unknown>}
 */
export async function zhSlugify(q) {
    const v = await fetch('https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=en-US&q=' + q);
    let json = await v.json()
    let res = json[0][0];
    res = res.replaceAll(/-/g, "");
    console.log("res=>", res)
    return slugify(res);
}

export function yaml2Obj(yaml) {
    let doc = "";
    // Get document, or throw exception on error
    try {
        yaml = yaml.replace("---\n", "")
        yaml = yaml.replace("---", "")
        doc = jsYaml.load(yaml);
        // console.log(doc);
    } catch (e) {
        console.error(e);
    }
    return doc;
}

export function obj2yaml(obj) {
    // https://npmmirror.com/package/js-yaml
    let res = jsYaml.dump(obj, {
        'styles': {
            '!!null': 'canonical' // dump null as ~
        },
        'sortKeys': true        // sort object keys
    });

    res = "---\n" + res + "---"
    return res;
}

function test() {
    const obj = {
        test: "aaa"
    };
    const yamlResult = obj2yaml(obj)
    console.log("yamlResult=>")
    console.log(yamlResult)

    const objResult = yaml2Obj(yamlResult)
    console.log("objResult=>")
    console.log(objResult)
}

test()

// babel-node src/lib/util.js
