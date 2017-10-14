'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input$defaultProps;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _setClassName = require('../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

var _withErrors = require('./withErrors');

var _withErrors2 = _interopRequireDefault(_withErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['onChange', 'onFocus', 'onBlur', 'className']);

  return _react2.default.createElement('input', _extends({
    className: (0, _setClassName2.default)([className, props.errorMessage && 'error']),
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }, props));
};

Input.defaultProps = (_Input$defaultProps = {
  type: 'text',
  value: '',
  className: '',
  required: false,
  errors: [],
  onChange: function onChange() {},
  onFocus: function onFocus() {}
}, _defineProperty(_Input$defaultProps, 'onFocus', function onFocus() {}), _defineProperty(_Input$defaultProps, 'validate', function validate() {}), _Input$defaultProps);

exports.default = (0, _withErrors2.default)(Input);