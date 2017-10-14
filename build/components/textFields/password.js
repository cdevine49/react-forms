'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textField = require('../textField');

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Password = function Password(props) {
  return _react2.default.createElement(_textField2.default, props);
};

Password.defaultProps = {
  label: 'Password',
  type: 'password',
  errors: [{
    _handle: function _handle(v) {
      return v.length < 8;
    }, message: "Password must have at least 8 characters"
  }, {
    _handle: function _handle(v) {
      return v.length > 100;
    }, message: "Password must be shorter than 100 characters"
  }, {
    _handle: function _handle(v) {
      return !/\d/.test(v);
    }, message: "Password must include at least one number"
  }, {
    _handle: function _handle(v) {
      return !/[a-z]/.test(v);
    }, message: "Password must include at least one lowercase letter"
  }, {
    _handle: function _handle(v) {
      return !/[A-Z]/.test(v);
    }, message: "Password must include at least one uppercase letter"
  }]
};

exports.default = Password;