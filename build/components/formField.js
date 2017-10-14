'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = function (_React$Component) {
  _inherits(FormField, _React$Component);

  function FormField() {
    _classCallCheck(this, FormField);

    var _this = _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this));

    _this.state = {
      errorMessage: ''
    };
    _this.displayErrors = _this.displayErrors.bind(_this);
    _this._displayErrors = _this._displayErrors.bind(_this);
    _this._hideErrors = _this._hideErrors.bind(_this);
    return _this;
  }

  _createClass(FormField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.validate && this.props.validate(!this._getErrorMessage());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          displayErrors = _props.displayErrors,
          value = _props.value;
      var nextDisplayErrors = nextProps.displayErrors,
          nextValue = nextProps.value;

      (!displayErrors && nextDisplayErrors || value !== nextValue && this.state.errorMessage) && this._displayErrors(nextValue);
    }
  }, {
    key: '_getErrorMessage',
    value: function _getErrorMessage(value) {
      var _props2 = this.props,
          errors = _props2.errors,
          required = _props2.required;

      var errorMessage = '';
      if (required && !value) {
        errorMessage = "You can't leave this empty";
      } else if (errors) {
        for (var i = 0; i < errors.length; i++) {
          var error = errors[i];
          if (error._handle(value)) {
            errorMessage = error.message;
            break;
          }
        }
      }

      return errorMessage;
    }
  }, {
    key: 'displayErrors',
    value: function displayErrors() {
      this._displayErrors(this.props.value);
    }
  }, {
    key: '_displayErrors',
    value: function _displayErrors(value) {
      var errorMessage = this._getErrorMessage(value);
      this.props.validate && this.props.validate(!errorMessage);
      this.setState({ errorMessage: errorMessage });
    }
  }, {
    key: '_hideErrors',
    value: function _hideErrors() {
      this.setState({ errorMessage: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var errorMessage = this.state.errorMessage;

      return children(errorMessage, this.displayErrors, this._hideErrors);
    }
  }]);

  return FormField;
}(_react2.default.Component);

exports.default = FormField;