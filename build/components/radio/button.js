'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

var _setClassName = require('../../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
      _ref$containerProps = _ref.containerProps,
      containerClass = _ref$containerProps.className,
      containerProps = _objectWithoutProperties(_ref$containerProps, ['className']),
      id = _ref.id,
      label = _ref.label,
      _ref$labelProps = _ref.labelProps,
      labelClass = _ref$labelProps.className,
      labelProps = _objectWithoutProperties(_ref$labelProps, ['className']),
      onChangeCallback = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['className', 'containerProps', 'id', 'label', 'labelProps', 'onChange', 'value']);

  !id && console.warn("RadioButton expects an id");
  !value && console.warn("RadioButton expects a value");

  var onChange = function onChange(e) {
    e.stopPropagation();
    onChangeCallback();
  };

  var onClick = function onClick(e) {
    e.stopPropagation();
  };

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _setClassName2.default)(['radio-button', containerClass]), onClick: onChange }, containerProps),
    _react2.default.createElement('input', _extends({
      id: id,
      type: 'radio',
      className: (0, _setClassName2.default)(['radio-input', className]),
      onChange: onChange,
      onClick: onClick,
      value: value
    }, props)),
    _react2.default.createElement(
      _label2.default,
      _extends({ htmlFor: id, className: (0, _setClassName2.default)(['radio-label', labelClass]) }, labelProps),
      label || value
    )
  );
};
RadioButton.defaultProps = {
  containerProps: {},
  id: '',
  labelProps: {},
  value: ''
};

exports.default = RadioButton;