'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _legend = require('../legend');

var _legend2 = _interopRequireDefault(_legend);

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

var _underline = require('../underline');

var _underline2 = _interopRequireDefault(_underline);

var _setClassName = require('../../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioGroup = function RadioGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      currentValue = _ref.currentValue,
      errorMessage = _ref.errorMessage,
      _ref$errorProps = _ref.errorProps,
      errorClass = _ref$errorProps.errorClass,
      errorProps = _objectWithoutProperties(_ref$errorProps, ['errorClass']),
      hideErrors = _ref.hideErrors,
      legend = _ref.legend,
      _ref$legendProps = _ref.legendProps,
      legendClass = _ref$legendProps.className,
      legendProps = _objectWithoutProperties(_ref$legendProps, ['className']),
      _onChange = _ref.onChange,
      underline = _ref.underline,
      _ref$underlineProps = _ref.underlineProps,
      underlineClass = _ref$underlineProps.underlineClass,
      underlineProps = _objectWithoutProperties(_ref$underlineProps, ['underlineClass']),
      props = _objectWithoutProperties(_ref, ['children', 'className', 'currentValue', 'errorMessage', 'errorProps', 'hideErrors', 'legend', 'legendProps', 'onChange', 'underline', 'underlineProps']);

  var _onKeyPress = function _onKeyPress(e, index) {
    switch (e.keyCode) {
      case 37:
        _onPrev(index);
        break;
      case 38:
        _onPrev(index);
        break;
      case 39:
        _onNext(index);
        break;
      case 40:
        _onNext(index);
        break;
      default:
        break;
    }
  };

  var _onNext = function _onNext(index) {
    var nextIndex = void 0;
    var lastIndex = children.length - 1;
    if (index === lastIndex) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }
    _onChange(children[nextIndex].props.value);
  };

  var _onPrev = function _onPrev(index) {
    var prevIndex = void 0;
    if (index === 0) {
      prevIndex = children.length - 1;
    } else {
      prevIndex = index - 1;
    }
    _onChange(children[prevIndex].props.value);
  };

  return _react2.default.createElement(
    'fieldset',
    _extends({ className: (0, _setClassName2.default)(['radio-button-container', className]) }, props),
    _react2.default.createElement(
      _legend2.default,
      _extends({ className: (0, _setClassName2.default)(['radio-group-legend', legendClass]) }, legendProps),
      legend
    ),
    children.map(function (child, index) {
      return _react2.default.cloneElement(child, {
        key: 'radio-button-' + index,
        checked: currentValue === child.props.value,
        onChange: function onChange() {
          return _onChange(child.props.value);
        },
        onKeyPress: function onKeyPress(e) {
          _onKeyPress(e, index);
        }
      });
    }),
    _react2.default.createElement(
      _error2.default,
      _extends({ className: (0, _setClassName2.default)(['radio-group-error', errorClass]) }, errorProps),
      errorMessage
    ),
    _react2.default.createElement(
      _underline2.default,
      _extends({ className: (0, _setClassName2.default)(['radio-group-underline', underlineClass]) }, underlineProps),
      underline
    )
  );
};

RadioGroup.defaultProps = {
  children: [],
  errorProps: {},
  legendProps: {},
  underlineProps: {}
};

exports.default = RadioGroup;