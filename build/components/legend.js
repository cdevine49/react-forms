'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Legend = function Legend(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  if (children) {
    return _react2.default.createElement(
      'legend',
      props,
      children
    );
  } else {
    return null;
  }
};

exports.default = Legend;