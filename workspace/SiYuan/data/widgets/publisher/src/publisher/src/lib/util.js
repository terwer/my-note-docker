/**
 * 获取本地缓存的思源笔记页面ID
 * @returns {string|*}
 */
export function getLocalSiyuanPageID() {
    if (localStorage.siyuanPage) {
        console.log("获取本地缓存的思源笔记页面ID=>", localStorage.siyuanPage.root_id)
        return localStorage.siyuanPage.root_id
    }
    return "";
}

/**
 * 获取本地缓存的思源笔记页面信息（不是实时的，获取有变化的属性不要使用此方法，实时页面使用siyuanUtil.getPage）
 * @returns {string|*}
 */
export function getLocalSiyuanPage() {
    if (localStorage.siyuanPage) {
        console.log("获取本地缓存的思源笔记页面信息（不是实时的，获取有变化的属性不要使用此方法，实时页面使用siyuanUtil.getPage）=>", localStorage.siyuanPage)
        return localStorage.siyuanPage
    }
    return null;
}