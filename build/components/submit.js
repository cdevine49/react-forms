'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _setClassName = require('../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Submit = function Submit(_ref) {
  var className = _ref.className,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['className', 'value']);

  return _react2.default.createElement(
    'button',
    _extends({
      type: 'submit',
      className: (0, _setClassName2.default)(['react-form-submit', className])
    }, props),
    value
  );
};

Submit.defaultProps = {
  value: 'Submit'
};

exports.default = Submit;