import {exportMdContent} from "@/lib/siYuanApi";

async function doPublish(id, type, meta, content) {
    console.log("doPublish params=>", {id, type, meta, content});
    // const apiParams = getApiParams(type);
    // console.log("doPublish apiParams=>", {
    //     "API_URL": apiParams.API_URL,
    //     "appKey": apiParams.appKey,
    //     "username": apiParams.username,
    //     "apiParams.postidKey": apiParams.postidKey
    // });
    //
    // // 设置自定义属性
    // const postidKey = apiParams.postidKey;
    // const customAttr = {
    //     "custom-slug": "",
    //     "custom-vuepress-slug": "",
    //     [postidKey]: "99999",
    // };
    //
    // // const wordpressApi = wordpressApiClient(type);
    // // const result2 = wordpressApi.getPosts(10);
    // // // @ts-ignore
    // // result2.then(function (reslove: any, reject: any) {
    // //     console.log("wordpress getPosts=>", reslove);
    // // });
    //
    // const metaWeblogApi = metaWeblogApiClient(type);
    // const result = metaWeblogApi.getRecentPosts(10);
    // result.then(function (posts) {
    //     console.log("metaweblog get recent posts=>", posts);
    //     msg.successMsg(window.siyuan.languages.successMsg);
    // }).catch(function (e) {
    //     console.error(e);
    //     msg.alertMsg(window.siyuan.languages.errorMsg);
    // });
    //
    // // fetchPost("/api/attr/setBlockAttrs", {
    // //     "id": id,
    // //     "attrs": customAttr
    // // }, (response) => {
    // //     const newmeta = response;
    // //     console.log("doPublish customAttr=>", customAttr);
    // //     // console.log("doPublish content=>", content);
    // // });
}

/**
 * 发布Markdown格式的文档
 * @param id 文档ID
 * @param type 文档类型
 * @param meta 文档属性
 * @returns {Promise<void>}
 */
export async function publishMdContent(id, type, meta) {
    const data = await exportMdContent(id);

    const content = data.content;

    console.log("发布Markdown格式的文档")
    return await doPublish(id, type, meta, content);
}

/**
 * 发布HTML格式的文档
 * @param id 文档ID
 * @param type 文档类型
 * @param meta 文档属性
 * @returns {Promise<void>}
 */
export async function publishHTMLContent(id, type, meta) {
    const data = await exportMdContent(id);

    const content = data.content;
    const html = content;

    console.log("发布HTML格式的文档")
    return await doPublish(id, type, meta, html);
}