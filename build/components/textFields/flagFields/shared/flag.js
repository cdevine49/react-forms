'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _setClassName = require('../../../../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = function Flag(_ref) {
  var className = _ref.className,
      offset = _ref.offset;

  var style = offset ? {
    'backgroundImage': "url(/images/flags.png)",
    'backgroundPositionX': '0px',
    'backgroundPositionY': offset
  } : {};
  return _react2.default.createElement('div', { className: (0, _setClassName2.default)(['flag', className]), style: style });
};

exports.default = Flag;