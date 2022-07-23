import {getBlockByID} from './siYuanApi.js';

/**
 * 获取挂件所在的块ID
 * @returns {Promise<string>}
 */
export async function getWidgetId() {
    const self = window.frameElement.parentElement.parentElement;
    return self.getAttribute('data-node-id');
}

/**
 * 发送请求获取当前文档
 * @returns {Promise<*>}
 */
export async function getPage(widgetId) {
    return await getBlockByID(widgetId);
}

/**
 * 获取文档ID
 * @returns {Promise<*|string>}
 */
// eslint-disable-next-line no-unused-vars
// async function getPageId(widgetId) {
//     // eslint-disable-next-line no-undef
//     const page = await getPage(widgetId)
//     if (!page) {
//         alert("未获取到文档信息，请等待几秒再试。。。");
//     }
//     return page.root_id || "";
// }

/**
 * 获取文档中的所有块
 * @returns {Promise<*|null>}
 */
// eslint-disable-next-line no-unused-vars
// async function getInfoBlocks(widgetId) {
//     // eslint-disable-next-line no-undef
//     let page_id = await getPageId(widgetId);
//
//     const sql_sentence = "select * from blocks where type = 'p' and (root_id = " + "'" + page_id + "'" + " or path like '%" + page_id + "%')";
//     //console.log(sql_sentence);
//     //console.log(res);
//     return await sql(sql_sentence);
// }

/**
 * 获取文档中的所有信息
 * @returns {Promise<string>}
 */
// eslint-disable-next-line no-unused-vars
// async function getPageContent(widgetId) {
//     // 获取当前块信息和文字
//     // eslint-disable-next-line no-undef
//     const res = await getInfoBlocks(widgetId)
//     const resLength = res.length;
//     let all_character = '';
//     for (let i = 0; i < resLength; i++) {
//         if (res[i].content) {
//             all_character += res[i].content + '\n';
//         }
//     }
//     return all_character;
// }