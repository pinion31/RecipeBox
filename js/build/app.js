'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _RecipeHolder = require('./components/RecipeHolder');

var _RecipeHolder2 = _interopRequireDefault(_RecipeHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _RecipeHolder2.default,
    null,
    ' '
  )
), document.getElementById("app"));