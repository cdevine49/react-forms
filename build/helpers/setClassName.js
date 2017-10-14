"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setClassName = function setClassName(classArray) {
  var filtered = classArray.filter(function (argument) {
    return argument;
  });
  if (filtered.length > 0) {
    return filtered.join(" ");
  }
};

exports.default = setClassName;