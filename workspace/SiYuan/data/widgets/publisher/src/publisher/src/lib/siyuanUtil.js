import {getBlockByID, sql} from './siYuanApi.js';

/**
 * 获取当前文档
 * @returns {Promise<*>}
 */
export async function getPage() {
    const self = window.frameElement.parentElement.parentElement;
    return await getBlockByID(self.getAttribute('data-node-id'));
}

/**
 * 获取文档ID
 * @returns {Promise<*|string>}
 */
// eslint-disable-next-line no-unused-vars
async function getPageId() {
    const self = window.frameElement.parentElement.parentElement;
    // eslint-disable-next-line no-undef
    const page = await get_page(self.getAttribute('data-node-id'))
    if (!page) {
        alert("未获取到文档信息，请等待几秒再试。。。");
    }
    return page.root_id || "";
}

/**
 * 获取文档中的所有块
 * @returns {Promise<*|null>}
 */
// eslint-disable-next-line no-unused-vars
async function getInfoBlocks() {
    // eslint-disable-next-line no-undef
    let page_id = await get_page_id();

    const sql_sentence = "select * from blocks where type = 'p' and (root_id = " + "'" + page_id + "'" + " or path like '%" + page_id + "%')";
    //console.log(sql_sentence);
    //console.log(res);
    return await sql(sql_sentence);
}

/**
 * 获取文档中的所有信息
 * @returns {Promise<string>}
 */
// eslint-disable-next-line no-unused-vars
async function getPageContent() {
    // 获取当前块信息和文字
    // eslint-disable-next-line no-undef
    const res = await info_present_blocks()
    const resLength = res.length;
    let all_character = '';
    for (let i = 0; i < resLength; i++) {
        if (res[i].content) {
            all_character += res[i].content + '\n';
        }
    }
    return all_character;
}