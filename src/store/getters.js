"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var transferTimeFormat = function transferTimeFormat(time) {
  var date = new Date(Date.parse(time)).toLocaleString();
  return date;
};

var roomDateFormat = exports.roomDateFormat = function roomDateFormat(state) {
  var start = transferTimeFormat(state.roomInfo.info.date_time_start);
  var end = transferTimeFormat(state.roomInfo.info.date_time_end);
  return {
    date_time_start: start,
    date_time_end: end
  };
};
//# sourceMappingURL=getters.js.map