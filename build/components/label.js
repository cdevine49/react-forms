"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      required = _ref.required,
      props = _objectWithoutProperties(_ref, ["children", "required"]);

  if (children) {
    return _react2.default.createElement(
      "label",
      props,
      children,
      required && _react2.default.createElement(
        "span",
        { className: "required" },
        "*"
      )
    );
  } else {
    return null;
  }
};

exports.default = Label;