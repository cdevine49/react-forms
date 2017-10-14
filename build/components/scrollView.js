'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _setClassName = require('../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cancelScrollEvent = function cancelScrollEvent(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.returnValue = false;
  return false;
};

var addScrollEventListener = function addScrollEventListener(node, handler) {
  node.addEventListener('wheel', handler, false);
};

var removeScrollEventListener = function removeScrollEventListener(node, handler) {
  node.removeEventListener('wheel', handler, false);
};

var ScrollView = function (_React$Component) {
  _inherits(ScrollView, _React$Component);

  function ScrollView() {
    _classCallCheck(this, ScrollView);

    return _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this));
  }

  _createClass(ScrollView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollRemove = this.scrollLock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scrollRemove();
    }
  }, {
    key: 'scrollLock',
    value: function scrollLock(node) {
      var _this2 = this;

      node = node || this.scrollView;
      this._setScrollTop(node);
      this.scrollNode = node;
      addScrollEventListener(node, this.onScrollHandler);
      return function (el) {
        el = el || _this2.scrollNode;
        removeScrollEventListener(el, _this2.onScrollHandler);
      };
    }
  }, {
    key: 'onScrollHandler',
    value: function onScrollHandler(e) {
      var node = this;
      var scrollTop = node.scrollTop;
      var scrollHeight = node.scrollHeight;
      var height = node.clientHeight;
      var wheelDelta = e.deltaY;
      var isDeltaPositive = wheelDelta > 0;

      if (isDeltaPositive && wheelDelta > scrollHeight - height - scrollTop) {
        node.scrollTop = scrollHeight;
        return cancelScrollEvent(e);
      } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
        node.scrollTop = 0;
        return cancelScrollEvent(e);
      }
    }
  }, {
    key: '_setScrollTop',
    value: function _setScrollTop(node) {
      var index = this.props.index;

      var i = index > 0 ? index - 1 : 0;
      var scrollTop = node.children[i].offsetTop;
      node.scrollTop = scrollTop;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          index = _props.index,
          props = _objectWithoutProperties(_props, ['className', 'children', 'index']);

      return _react2.default.createElement(
        'ul',
        _extends({
          className: (0, _setClassName2.default)(["scroll-view", className]),
          ref: function ref(scrollView) {
            return _this3.scrollView = scrollView;
          }
        }, props),
        children
      );
    }
  }]);

  return ScrollView;
}(_react2.default.Component);

exports.default = ScrollView;