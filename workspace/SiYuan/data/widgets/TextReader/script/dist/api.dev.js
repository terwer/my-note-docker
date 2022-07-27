"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = 向思源请求数据;
exports.sql = 以sql向思源请求块数据;
exports.getAnchor = 获取思源块链接锚文本;
exports.createNotebook = 新建思源笔记本;
exports.removeNotebook = 删除思源笔记本;
exports.setNotebookConf = 保存思源笔记本配置;
exports.lsNotebooks = 向思源请求笔记本列表;
exports.getNotebookConf = 获取思源笔记本配置;
exports.openNotebook = 打开思源笔记本;
exports.closeNotebook = 关闭思源笔记本;
exports.renameNotebook = 重命名思源笔记本;
exports.createDocWithMd = 通过markdown创建文档;
exports.removeDoc = 删除思源文档;
exports.renameDoc = 重命名思源文档;
exports.moveDoc = 移动思源文档;
exports.getDoc = 以id获取文档内容;
exports.getFocusedDoc = 以id获取文档聚焦内容;
exports.exportMdContent = 以id获取文档块markdown;
exports.getBlockAttrs = 以id获取思源块属性;
exports.setBlockAttrs = 设置思源块属性;
exports.getHPathByPath = 根据思源路径获取人类可读路径;
exports.listDocsByPath = 列出指定路径下文档;
exports.getBacklink = 以id获取反向链接;
exports.searchEmbedBlock = 以sql获取嵌入块内容;
exports.getTag = 获取标签列表;
exports.render = 渲染模板;
exports.getLocalGraph = 以id获取局部图谱;
exports.getGraph = 获取全局图谱;
exports.searchDocs = 以关键词搜索文档;
exports.searchBlock = 以关键词搜索块;
exports.searchTemplate = 以关键词搜索模板;
exports.insertBlock = 插入块;
exports.prependBlock = 插入前置子块;
exports.appendBlock = 插入后置子块;
exports.deleteBlock = 删除块;
exports.updateBlock = 更新块;
exports.getBlockByID = 以id获取思源块信息;

var _config = require("./config.js");

/* 思源 API 调用
   REF [cc-baselib/siYuanApi.js at main · leolee9086/cc-baselib](https://github.com/leolee9086/cc-baselib/blob/main/src/siYuanApi.js)
 */
function 向思源请求数据(url, data) {
  var resData;
  return regeneratorRuntime.async(function 向思源请求数据$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          resData = null;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
              Authorization: "Token ".concat(_config.config.token)
            }
          }).then(function (response) {
            resData = response.json();
          }));

        case 3:
          return _context.abrupt("return", resData);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function 解析响应体(response) {
  var r;
  return regeneratorRuntime.async(function 解析响应体$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(response);

        case 2:
          r = _context2.sent;
          return _context2.abrupt("return", r.code === 0 ? r.data : null);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function 以sql向思源请求块数据(sql) {
  var sqldata, url;
  return regeneratorRuntime.async(function 以sql向思源请求块数据$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          sqldata = {
            stmt: sql
          };
          url = '/api/query/sql';
          return _context3.abrupt("return", 解析响应体(向思源请求数据(url, sqldata)));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function 向思源请求笔记本列表() {
  var sqldata, url;
  return regeneratorRuntime.async(function 向思源请求笔记本列表$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          sqldata = {
            stmt: sql语句
          };
          url = '/api/notebook/lsNotebooks';
          return _context4.abrupt("return", 解析响应体(向思源请求数据(url, sqldata)));

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function 获取思源块链接锚文本(链接源文本) {
  var sql, 临时块属性, anchor;
  return regeneratorRuntime.async(function 获取思源块链接锚文本$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          链接源文本 = 链接源文本.replace("((", "").replace("))", "");
          sql = "select * from blocks where id = '".concat(链接源文本, "'");
          _context5.next = 4;
          return regeneratorRuntime.awrap(以sql向思源请求块数据(sql));

        case 4:
          临时块属性 = _context5.sent;
          //  console.log ("临时块属性",临时块属性)
          anchor = "";

          if (临时块属性) {
            try {
              if (临时块属性[0][name]) {
                anchor = 临时块属性[0][name];
              } else if (临时块属性[0]["content"]) {
                anchor = 临时块属性[0]["content"];
              } else {
                anchor = 链接源文本;
              }
            } catch (e) {
              anchor = "解析错误";
            }
          } //   console.log("锚文本",anchor)


          return _context5.abrupt("return", anchor);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function 打开思源笔记本(笔记本id) {
  var data, url;
  return regeneratorRuntime.async(function 打开思源笔记本$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          data = {
            notebook: 笔记本id
          };
          url = '/api/notebook/openNotebook';
          return _context6.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function 关闭思源笔记本(笔记本id) {
  var data, url;
  return regeneratorRuntime.async(function 关闭思源笔记本$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          data = {
            notebook: 笔记本id
          };
          url = '/api/notebook/closeNotebook';
          return _context7.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function 重命名思源笔记本(笔记本id, 笔记本的新名称) {
  var data, url;
  return regeneratorRuntime.async(function 重命名思源笔记本$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          data = {
            notebook: 笔记本id,
            name: 笔记本的新名称
          };
          url = '/api/notebook/renameNotebook';
          return _context8.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function 新建思源笔记本(笔记本名称) {
  var data, url;
  return regeneratorRuntime.async(function 新建思源笔记本$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          data = {
            name: 笔记本名称
          };
          url = '/api/notebook/createNotebook';
          return _context9.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
}

function 删除思源笔记本(笔记本id) {
  var data, url;
  return regeneratorRuntime.async(function 删除思源笔记本$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          data = {
            notebook: 笔记本id
          };
          url = '/api/notebook/removeNotebook';
          return _context10.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context10.stop();
      }
    }
  });
}

function 获取思源笔记本配置(笔记本id) {
  var data, url;
  return regeneratorRuntime.async(function 获取思源笔记本配置$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          data = {
            notebook: 笔记本id
          };
          url = '/api/notebook/getNotebookConf';
          return _context11.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context11.stop();
      }
    }
  });
}

function 保存思源笔记本配置(笔记本id) {
  var data, url;
  return regeneratorRuntime.async(function 保存思源笔记本配置$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          data = {
            notebook: 笔记本id
          };
          url = '/api/notebook/setNotebookConf';
          return _context12.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context12.stop();
      }
    }
  });
}

function 重命名思源文档(笔记本id, 文档路径, 文档新标题) {
  var data, url;
  return regeneratorRuntime.async(function 重命名思源文档$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          data = {
            notebook: 笔记本id,
            path: 文档路径,
            title: 文档新标题
          };
          url = '/api/filetree/renameDoc';
          return _context13.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context13.stop();
      }
    }
  });
}

function 删除思源文档(笔记本id, 文档路径) {
  var data, url;
  return regeneratorRuntime.async(function 删除思源文档$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          data = {
            notebook: 笔记本id,
            path: 文档路径
          };
          url = '/api/filetree/removeDoc';
          return _context14.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context14.stop();
      }
    }
  });
}

function 移动思源文档(源笔记本ID, 源路径, 目标笔记本ID, 目标路径) {
  var data, url;
  return regeneratorRuntime.async(function 移动思源文档$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          data = {
            fromNotebook: 源笔记本ID,
            fromPath: 源路径,
            toNotebook: 目标笔记本ID,
            toPath: 目标路径
          };
          url = '/api/filetree/moveDoc';
          return _context15.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context15.stop();
      }
    }
  });
}

function 根据思源路径获取人类可读路径(笔记本ID, 路径) {
  var data, url;
  return regeneratorRuntime.async(function 根据思源路径获取人类可读路径$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          data = {
            Notebook: 笔记本ID,
            Path: 路径
          };
          url = '/api/filetree/getHPathByPath';
          return _context16.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context16.stop();
      }
    }
  });
} //暂缺上传文件


function 以id获取思源块属性(内容块id) {
  var data, url;
  return regeneratorRuntime.async(function 以id获取思源块属性$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          data = {
            id: 内容块id
          };
          url = '/api/attr/getBlockAttrs';
          return _context17.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context17.stop();
      }
    }
  });
}

function 以id获取思源块信息(内容块id) {
  var sql, data;
  return regeneratorRuntime.async(function 以id获取思源块信息$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          sql = "select * from blocks where id ='".concat(内容块id, "'");
          _context18.next = 3;
          return regeneratorRuntime.awrap(以sql向思源请求块数据(sql));

        case 3:
          data = _context18.sent;
          return _context18.abrupt("return", data[0]);

        case 5:
        case "end":
          return _context18.stop();
      }
    }
  });
}

function 设置思源块属性(内容块id, 属性对象) {
  var url;
  return regeneratorRuntime.async(function 设置思源块属性$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          url = '/api/attr/setBlockAttrs';
          return _context19.abrupt("return", 解析响应体(向思源请求数据(url, {
            id: 内容块id,
            attrs: 属性对象
          })));

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  });
}

function 以id获取文档块markdown(文档id) {
  var data, url;
  return regeneratorRuntime.async(function 以id获取文档块markdown$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          data = {
            id: 文档id
          };
          url = '/api/export/exportMdContent';
          return _context20.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context20.stop();
      }
    }
  });
}

function 列出指定路径下文档(路径) {
  var data, url;
  return regeneratorRuntime.async(function 列出指定路径下文档$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          data = {
            path: 路径
          };
          url = '/api/filetree/listDocsByPath';
          return _context21.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context21.stop();
      }
    }
  });
}

function html转义(原始字符串) {
  var 临时元素 = document.createElement("div");
  临时元素.innerHTML = 原始字符串;
  var output = 临时元素.innerText || 临时元素.textContent;
  临时元素 = null; // console.log(output)

  return output;
}

function 以id获取反向链接(id) {
  var data, url;
  return regeneratorRuntime.async(function 以id获取反向链接$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          data = {
            id: id,
            beforeLen: 10,
            k: "",
            mk: ""
          };
          url = '/api/ref/getBacklink';
          return _context22.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context22.stop();
      }
    }
  });
}

function 以sql获取嵌入块内容(外部id数组, sql) {
  var data, url;
  return regeneratorRuntime.async(function 以sql获取嵌入块内容$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          data = {
            stmt: sql,
            excludeIDs: 外部id数组
          };
          url = '/api/search/searchEmbedBlock';
          return _context23.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context23.stop();
      }
    }
  });
}

function 以id获取文档内容(id) {
  var data, url;
  return regeneratorRuntime.async(function 以id获取文档内容$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          data = {
            id: id,
            k: "",
            mode: 2,
            size: 36
          };
          url = '/api/filetree/getDoc';
          return _context24.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context24.stop();
      }
    }
  });
}

function 以id获取文档聚焦内容(id) {
  var data, url;
  return regeneratorRuntime.async(function 以id获取文档聚焦内容$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          data = {
            id: id,
            k: "",
            mode: 0,
            size: 36
          };
          url = '/api/filetree/getDoc';
          return _context25.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context25.stop();
      }
    }
  });
}

function 获取标签列表() {
  var data, url;
  return regeneratorRuntime.async(function 获取标签列表$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          data = {};
          url = '/api/tag/getTag';
          return _context26.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context26.stop();
      }
    }
  });
}

function 以id获取局部图谱(k, id, conf, reqId) {
  var data, url;
  return regeneratorRuntime.async(function 以id获取局部图谱$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          data = {
            id: id,
            k: k,
            conf: conf,
            reqId: reqId
          };
          url = '/api/graph/getLocalGraph';
          return _context27.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context27.stop();
      }
    }
  });
}

function 获取全局图谱(k, conf, reqId) {
  var data, url;
  return regeneratorRuntime.async(function 获取全局图谱$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          data = {
            k: k,
            conf: conf,
            reqId: reqId
          };
          url = '/api/graph/getGraph';
          return _context28.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context28.stop();
      }
    }
  });
}

function 以关键词搜索文档(k) {
  var data, url;
  return regeneratorRuntime.async(function 以关键词搜索文档$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          data = {
            k: k
          };
          url = '/api/filetree/searchDocs';
          return _context29.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context29.stop();
      }
    }
  });
}

function 以关键词搜索块(query) {
  var data, url;
  return regeneratorRuntime.async(function 以关键词搜索块$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          data = {
            "query": query
          };
          url = '/api/search/searchBlock';
          return _context30.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context30.stop();
      }
    }
  });
}

function 以关键词搜索模板(k) {
  var data, url;
  return regeneratorRuntime.async(function 以关键词搜索模板$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          data = {
            k: k
          };
          url = '/api/search/searchTemplate';
          return _context31.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context31.stop();
      }
    }
  });
}

function 通过markdown创建文档(notebook, path, markdown) {
  var data, url;
  return regeneratorRuntime.async(function 通过markdown创建文档$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          data = {
            notebook: notebook,
            path: path,
            markdown: markdown
          };
          url = '/api/filetree/createDocWithMd';
          return _context32.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 3:
        case "end":
          return _context32.stop();
      }
    }
  });
}

function 渲染模板(data) {
  var url;
  return regeneratorRuntime.async(function 渲染模板$(_context33) {
    while (1) {
      switch (_context33.prev = _context33.next) {
        case 0:
          url = '/api/template/render';
          return _context33.abrupt("return", 解析响应体(向思源请求数据(url, data)));

        case 2:
        case "end":
          return _context33.stop();
      }
    }
  });
}

function 插入块(previousID, dataType, data) {
  var url;
  return regeneratorRuntime.async(function 插入块$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          url = '/api/block/insertBlock';
          return _context34.abrupt("return", 解析响应体(向思源请求数据(url = url, data = {
            previousID: previousID,
            dataType: dataType,
            data: data
          })));

        case 2:
        case "end":
          return _context34.stop();
      }
    }
  });
}

function 插入前置子块(parentID, dataType, data) {
  var url;
  return regeneratorRuntime.async(function 插入前置子块$(_context35) {
    while (1) {
      switch (_context35.prev = _context35.next) {
        case 0:
          url = '/api/block/prependBlock';
          return _context35.abrupt("return", 解析响应体(向思源请求数据(url = url, data = {
            parentID: parentID,
            dataType: dataType,
            data: data
          })));

        case 2:
        case "end":
          return _context35.stop();
      }
    }
  });
}

function 插入后置子块(parentID, dataType, data) {
  var url;
  return regeneratorRuntime.async(function 插入后置子块$(_context36) {
    while (1) {
      switch (_context36.prev = _context36.next) {
        case 0:
          url = '/api/block/appendBlock';
          return _context36.abrupt("return", 解析响应体(向思源请求数据(url = url, data = {
            parentID: parentID,
            dataType: dataType,
            data: data
          })));

        case 2:
        case "end":
          return _context36.stop();
      }
    }
  });
}

function 更新块(id, dataType, data) {
  var url;
  return regeneratorRuntime.async(function 更新块$(_context37) {
    while (1) {
      switch (_context37.prev = _context37.next) {
        case 0:
          url = '/api/block/updateBlock';
          return _context37.abrupt("return", 解析响应体(向思源请求数据(url = url, data = {
            id: id,
            dataType: dataType,
            data: data
          })));

        case 2:
        case "end":
          return _context37.stop();
      }
    }
  });
}

function 删除块(id) {
  var url;
  return regeneratorRuntime.async(function 删除块$(_context38) {
    while (1) {
      switch (_context38.prev = _context38.next) {
        case 0:
          url = '/api/block/deleteBlock';
          return _context38.abrupt("return", 解析响应体(向思源请求数据(url = url, data = {
            id: id
          })));

        case 2:
        case "end":
          return _context38.stop();
      }
    }
  });
}