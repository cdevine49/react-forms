'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textField = require('../textField');

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Email = function Email(props) {
  return _react2.default.createElement(_textField2.default, props);
};

Email.defaultProps = {
  label: 'Email',
  errors: [{ _handle: function _handle(v) {
      return !v.match(/@/);
    }, message: "Not a valid email" }]
};

exports.default = Email;