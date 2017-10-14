'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _setClassName = require('../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

    _this.state = {
      displayErrors: false,
      submittable: []
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.mapChildren = _this.mapChildren.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.Children.map(this.props.children, this.mapChildren);
    }
  }, {
    key: 'mapChildren',
    value: function mapChildren(child, idx) {
      if (child.props.required || child.props.errors && child.props.errors.length > 0) {
        return _react2.default.cloneElement(child, { displayErrors: this.state.displayErrors, validate: this.validate(idx) });
      } else {
        return child;
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      if (this.state.submittable.every(function (field) {
        return field;
      })) {
        this.props.onSubmit();
      } else {
        this.setState({ displayErrors: true });
      }
    }
  }, {
    key: 'validate',
    value: function validate(idx) {
      var that = this;
      return function (bool) {
        var submittable = that.state.submittable;
        submittable[idx] = bool;
        that.setState(submittable);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          defaultStyle = _props.defaultStyle,
          onSubmit = _props.onSubmit,
          props = _objectWithoutProperties(_props, ['className', 'defaultStyle', 'onSubmit']);

      return _react2.default.createElement(
        'form',
        _extends({
          className: (0, _setClassName2.default)(['react-form', className]),
          onSubmit: this.handleSubmit
        }, props),
        this.renderChildren()
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;


Form.defaultProps = {
  noValidate: true,
  onSubmit: function onSubmit() {}
};