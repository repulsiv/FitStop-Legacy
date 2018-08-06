'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countdown = function Countdown(props) {
  return _react2.default.createElement(
    'div',
    { className: 'countdown' },
    _react2.default.createElement(
      'h1',
      null,
      'Get Ready!'
    ),
    _react2.default.createElement(
      'div',
      { className: 'countdownCircle' },
      _react2.default.createElement(
        'span',
        { className: 'countdownNumber' },
        props.countdown
      )
    )
  );
};

exports.default = Countdown;
// window.Countdown = Countdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi5qc3giXSwibmFtZXMiOlsiQ291bnRkb3duIiwicHJvcHMiLCJjb3VudGRvd24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsaUJBQWhCO0FBQW1DQSxjQUFNQztBQUF6QztBQURGO0FBRkYsR0FEYztBQUFBLENBQWhCOztrQkFTZUYsUztBQUNmIiwiZmlsZSI6IkNvdW50ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vLi4vY3NzL3N0eWxlLmNzcyc7XG5cblxudmFyIENvdW50ZG93biA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPlxuICAgIDxoMT5HZXQgUmVhZHkhPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bkNpcmNsZVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duTnVtYmVyXCI+e3Byb3BzLmNvdW50ZG93bn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xuLy8gd2luZG93LkNvdW50ZG93biA9IENvdW50ZG93bjtcbiJdfQ==