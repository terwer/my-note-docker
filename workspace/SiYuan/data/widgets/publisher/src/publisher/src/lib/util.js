import {getPage} from "@/lib/siyuanUtil";

/**
 * 获取本地缓存的思源笔记页面ID
 * @param force true代表强制调用查询不获取缓存
 * @returns {Promise<*|string>}
 */
export async function getSiyuanPageId(force) {
    const page = await getSiyuanPage(force);
    console.log("getSiyuanPageId.getSiyuanPage.result=>", page)

    const pageId = page.root_id || ""
    console.log("获取本地缓存的思源笔记页面ID=>", pageId)
    return pageId
}

/**
 * 获取本地缓存的思源笔记页面信息（不是实时的，获取有变化的属性不要使用此方法，实时页面请将force传递为true）
 * @param force true代表强制调用查询不获取缓存
 * @returns {Promise<any>}
 */
export async function getSiyuanPage(force) {
    // 默认读取缓存
    if (!force && localStorage.siyuanPage) {
        const pageObj = JSON.parse(localStorage.siyuanPage);
        console.log("获取本地缓存的思源笔记页面信息（不是实时的，获取有变化的属性不要使用此方法，实时页面请将force传递为true=>", pageObj)
        return pageObj;
    }

    // 如果本地不存在，或者需要强制读取，调用api查询
    const page = await getPage();
    if (page) {
        localStorage.siyuanPage = JSON.stringify(page);
        console.warn("调用API设置查询思源页面信息并更新本地缓存", page)
    }
    return page;
}