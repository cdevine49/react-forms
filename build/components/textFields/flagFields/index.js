'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flagbox = require('./flagInput/flagbox');

var _flagbox2 = _interopRequireDefault(_flagbox);

var _error = require('../../error');

var _error2 = _interopRequireDefault(_error);

var _label = require('../../label');

var _label2 = _interopRequireDefault(_label);

var _underline = require('../../underline');

var _underline2 = _interopRequireDefault(_underline);

var _formField = require('../../formField');

var _formField2 = _interopRequireDefault(_formField);

var _setClassName = require('../../../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlagField = function (_React$Component) {
  _inherits(FlagField, _React$Component);

  function FlagField() {
    _classCallCheck(this, FlagField);

    var _this = _possibleConstructorReturn(this, (FlagField.__proto__ || Object.getPrototypeOf(FlagField)).call(this));

    _this.onChangeCountry = _this.onChangeCountry.bind(_this);
    return _this;
  }

  _createClass(FlagField, [{
    key: 'onChangeCountry',
    value: function onChangeCountry() {
      var _this2 = this;

      return function (countryIndex) {
        _this2.props.onChangeCountry(countryIndex);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _props$fieldProps = _props.fieldProps,
          fieldClass = _props$fieldProps.className,
          fieldProps = _objectWithoutProperties(_props$fieldProps, ['className']),
          inputContainerProps = _props.inputContainerProps,
          label = _props.label,
          labelProps = _props.labelProps,
          errorProps = _props.errorProps,
          underline = _props.underline,
          underlineProps = _props.underlineProps,
          id = _props.id,
          countryInfoIndex = _props.countryInfoIndex,
          countryIndex = _props.countryIndex,
          onChangeCountry = _props.onChangeCountry,
          props = _objectWithoutProperties(_props, ['fieldProps', 'inputContainerProps', 'label', 'labelProps', 'errorProps', 'underline', 'underlineProps', 'id', 'countryInfoIndex', 'countryIndex', 'onChangeCountry']);

      return _react2.default.createElement(
        _formField2.default,
        null,
        function (errorMessage, displayErrors) {
          return _react2.default.createElement(
            'div',
            _extends({ className: (0, _setClassName2.default)(['input-container flag-container', fieldClass]) }, fieldProps),
            _react2.default.createElement(
              _label2.default,
              _extends({ htmlFor: id }, labelProps),
              label
            ),
            _react2.default.createElement(
              'div',
              _extends({ className: 'input-container flag-input-container', style: { position: 'relative' } }, inputContainerProps),
              _react2.default.createElement(_flagbox2.default, { countryIndex: countryIndex, countryInfoIndex: countryInfoIndex, onChange: _this3.onChangeCountry() }),
              _react2.default.createElement('input', _extends({
                id: id,
                onBlur: displayErrors
              }, props))
            ),
            _react2.default.createElement(
              _error2.default,
              errorProps,
              errorMessage
            ),
            _react2.default.createElement(
              _underline2.default,
              underlineProps,
              underline
            )
          );
        }
      );
    }
  }]);

  return FlagField;
}(_react2.default.Component);

exports.default = FlagField;


FlagField.defaultProps = {
  countryIndex: 0,
  onChange: function onChange() {},
  onChangeCountry: function onChangeCountry() {},
  value: '',
  errorProps: {},
  fieldProps: {},
  inputContainerProps: {},
  labelProps: {},
  underlineProps: {}
};