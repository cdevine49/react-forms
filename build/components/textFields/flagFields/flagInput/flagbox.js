'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flag = require('../shared/flag');

var _flag2 = _interopRequireDefault(_flag);

var _countries = require('../shared/countries');

var _countries2 = _interopRequireDefault(_countries);

var _countries3 = require('../countries');

var _countries4 = _interopRequireDefault(_countries3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlagBox = function (_React$Component) {
  _inherits(FlagBox, _React$Component);

  function FlagBox() {
    _classCallCheck(this, FlagBox);

    var _this = _possibleConstructorReturn(this, (FlagBox.__proto__ || Object.getPrototypeOf(FlagBox)).call(this));

    _this.state = {
      selectingCountry: false
    };

    _this.toggleSelecting = _this.toggleSelecting.bind(_this);
    _this.selectCountry = _this.selectCountry.bind(_this);
    return _this;
  }

  _createClass(FlagBox, [{
    key: 'toggleSelecting',
    value: function toggleSelecting() {
      this.setState(function (prevState, props) {
        return { selectingCountry: !prevState.selectingCountry };
      });
    }
  }, {
    key: 'selectCountry',
    value: function selectCountry() {
      var _this2 = this;

      return function (i) {
        _this2.setState({ selectingCountry: false }, function () {
          _this2.flagButton && _this2.flagButton.focus();
          _this2.props.onChange(i);
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var selectingCountry = this.state.selectingCountry;
      var _props = this.props,
          countryInfoIndex = _props.countryInfoIndex,
          countryIndex = _props.countryIndex;

      var _FlagArray$countryInd = _slicedToArray(_countries2.default[countryIndex], 1),
          offset = _FlagArray$countryInd[0];

      return _react2.default.createElement(
        'div',
        { className: 'flagbox-container' },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            'aria-pressed': selectingCountry,
            className: 'flagbox',
            onClick: this.toggleSelecting,
            ref: function ref(button) {
              _this3.flagButton = button;
            } },
          _react2.default.createElement(_flag2.default, { offset: offset }),
          _react2.default.createElement('img', { src: '/images/select-box-button.png', className: 'select-box-button' })
        ),
        selectingCountry && _react2.default.createElement(_countries4.default, {
          countryInfoIndex: countryInfoIndex,
          countryIndex: countryIndex,
          onClick: this.selectCountry() })
      );
    }
  }]);

  return FlagBox;
}(_react2.default.Component);

exports.default = FlagBox;
;

FlagBox.defaultProps = {
  countryInfoIndex: 2,
  countryIndex: 0,
  onChange: function onChange() {}
};