"use strict";

var _api = require("./api.js");

// 绑定事件
document.getElementById('get_note').addEventListener('click', function () {
  read();
});

function read() {
  var present_block_data;
  return regeneratorRuntime.async(function read$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 获取当前块信息和文字
          present_block_data = info_present_blocks().then(function (res) {
            var resLength = res.length;
            var all_character = '';

            for (var i = 0; i < resLength; i++) {
              if (res[i].content) {
                all_character += res[i].content + '\n';
              }
            }

            document.getElementById('texts').value = all_character;
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function info_present_blocks() {
  var self, self_id, page_id, sql_sentence, res;
  return regeneratorRuntime.async(function info_present_blocks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          self = window.frameElement.parentElement.parentElement;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _api.getBlockByID)(self.getAttribute('data-node-id')));

        case 3:
          self_id = _context2.sent;

          if (self_id) {
            page_id = self_id.root_id;
          } else {
            alert("暂未获取到ID，请等待几秒再试。。。");
          }

          sql_sentence = "select * from blocks where type = 'p' and (root_id = '" + page_id + "'" + " or path like '%" + page_id + "%')"; //console.log(sql_sentence);

          _context2.next = 8;
          return regeneratorRuntime.awrap((0, _api.sql)(sql_sentence));

        case 8:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}