'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _underline = require('./underline');

var _underline2 = _interopRequireDefault(_underline);

var _setClassName = require('../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextInput = function TextInput(_ref) {
  var _ref$containerProps = _ref.containerProps,
      containerClass = _ref$containerProps.className,
      containerProps = _objectWithoutProperties(_ref$containerProps, ['className']),
      label = _ref.label,
      labelProps = _ref.labelProps,
      id = _ref.id,
      className = _ref.className,
      required = _ref.required,
      errorMessage = _ref.errorMessage,
      _ref$errorProps = _ref.errorProps,
      errorId = _ref$errorProps.id,
      errorProps = _objectWithoutProperties(_ref$errorProps, ['id']),
      underline = _ref.underline,
      _ref$underlineProps = _ref.underlineProps,
      underlineId = _ref$underlineProps.id,
      underlineProps = _objectWithoutProperties(_ref$underlineProps, ['id']),
      props = _objectWithoutProperties(_ref, ['containerProps', 'label', 'labelProps', 'id', 'className', 'required', 'errorMessage', 'errorProps', 'underline', 'underlineProps']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _setClassName2.default)(['input-container', containerClass]) }, containerProps),
    _react2.default.createElement(
      _label2.default,
      _extends({ htmlFor: id, required: required }, labelProps),
      label
    ),
    _react2.default.createElement('input', _extends({
      id: id,
      className: (0, _setClassName2.default)([className, errorMessage && 'error']),
      'aria-describedby': (0, _setClassName2.default)([errorId, underlineId]),
      'aria-required': !!required,
      'aria-invalid': !!errorMessage
    }, props)),
    _react2.default.createElement(
      _error2.default,
      _extends({ id: errorId }, errorProps),
      errorMessage
    ),
    _react2.default.createElement(
      _underline2.default,
      _extends({ id: underlineId }, underlineProps),
      underline
    )
  );
};

exports.default = TextInput;


TextInput.defaultProps = {
  containerProps: {},
  errorProps: {},
  labelProps: {},
  underlineProps: {}
};