'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formField = require('./formField');

var _formField2 = _interopRequireDefault(_formField);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

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

var TextField = function TextField(_ref) {
  var displayErrors = _ref.displayErrors,
      errors = _ref.errors,
      required = _ref.required,
      validate = _ref.validate,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['displayErrors', 'errors', 'required', 'validate', 'value']);

  return _react2.default.createElement(
    _formField2.default,
    {
      displayErrors: displayErrors,
      errors: errors,
      required: required,
      validate: validate,
      value: value
    },
    function (errorMessage, displayErrors) {
      return _react2.default.createElement(_TextInput2.default, _extends({
        errorMessage: errorMessage,
        onBlur: displayErrors,
        required: required,
        value: value
      }, props));
    }
  );
};

TextField.defaultProps = {
  type: 'text',
  value: '',
  onChange: function onChange() {},
  containerProps: {},
  errorProps: {},
  labelProps: {},
  underlineProps: {}
};

exports.default = TextField;