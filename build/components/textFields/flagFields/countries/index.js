'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

var _countries2 = require('../shared/countries');

var _countries3 = _interopRequireDefault(_countries2);

var _scrollView = require('../../../scrollView');

var _scrollView2 = _interopRequireDefault(_scrollView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countries = function (_React$Component) {
  _inherits(Countries, _React$Component);

  function Countries() {
    _classCallCheck(this, Countries);

    var _this = _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).call(this));

    _this.state = {
      query: '',
      hovered: false
    };
    _this.selectCountry = _this.selectCountry.bind(_this);
    _this.update = _this.update.bind(_this);
    return _this;
  }

  _createClass(Countries, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.searchInput.focus();
    }
  }, {
    key: 'selectCountry',
    value: function selectCountry(i) {
      var _this2 = this;

      return function () {
        _this2.props.onClick(i);
        _this2.setState({ hovered: false });
      };
    }
  }, {
    key: '_countries',
    value: function _countries() {
      var _this3 = this;

      var query = this.state.query.toLowerCase();
      return _countries3.default.reduce(function (acc, flag, i) {
        var _flag = _slicedToArray(flag, 2),
            offset = _flag[0],
            name = _flag[1];

        var value = flag[_this3.props.countryInfoIndex];
        var start = name.slice(0, query.length).toLowerCase();
        if (start === query || query.length < 1) {
          acc.push(_react2.default.createElement(_country2.default, { key: i,
            focus: i === _this3.props.countryIndex,
            className: i === _this3.props.countryIndex && !_this3.state.hovered ? 'hover-style' : '',
            offset: _this3.props.flag && offset,
            name: _this3.props.name && name,
            value: value,
            onClick: _this3.selectCountry(i) }));
        }
        return acc;
      }, []);
    }
  }, {
    key: 'update',
    value: function update(field) {
      var that = this;
      return function (e) {
        that.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: 'hoverState',
    value: function hoverState(bool) {
      var that = this;
      return function (e) {
        that.setState({ hovered: bool });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this,
          _React$createElement;

      var countries = this._countries();
      var bottom = void 0,
          height = void 0;
      if (countries.length > 5) {
        bottom = 166;
        height = 125;
      } else {
        height = countries.length * 24 + 1;
        bottom = countries.length * 24 + 42;
      }
      return _react2.default.createElement(
        'div',
        { className: 'countries-container', style: { bottom: '-' + bottom + 'px' } },
        _react2.default.createElement('input', (_React$createElement = { type: 'text',
          ref: function ref(input) {
            return _this4.searchInput = input;
          },
          onClick: this.hoverState(true),
          placeholder: 'Search Countries',
          className: 'country-search',
          onChange: this.update("query")
        }, _defineProperty(_React$createElement, 'ref', function ref(input) {
          _this4.searchInput = input;
        }), _defineProperty(_React$createElement, 'value', this.state.query), _React$createElement)),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(
          _scrollView2.default,
          {
            index: this.props.countryIndex,
            className: 'countries',
            onMouseOver: this.hoverState(true),
            style: { height: height + 'px' } },
          countries
        )
      );
    }
  }]);

  return Countries;
}(_react2.default.Component);

Countries.defaultProps = {
  countryIndex: 0,
  flag: true,
  name: true,
  code: false

  // export default scrollable(Countries);
};exports.default = Countries;