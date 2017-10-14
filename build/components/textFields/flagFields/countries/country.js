'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flag = require('../shared/flag');

var _flag2 = _interopRequireDefault(_flag);

var _setClassName = require('../../../../helpers/setClassName');

var _setClassName2 = _interopRequireDefault(_setClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Country = function Country(_ref) {
  var offset = _ref.offset,
      name = _ref.name,
      value = _ref.value,
      onClick = _ref.onClick,
      className = _ref.className;

  return _react2.default.createElement(
    'li',
    { className: (0, _setClassName2.default)(['country', className]) },
    _react2.default.createElement(
      'button',
      { onClick: onClick },
      _react2.default.createElement(_flag2.default, { offset: offset }),
      name && _react2.default.createElement(
        'span',
        { className: 'name' },
        name
      ),
      value && _react2.default.createElement(
        'span',
        { className: 'value' },
        value
      )
    )
  );
};

Country.defaultProps = {
  onClick: function onClick() {}
};

exports.default = Country;