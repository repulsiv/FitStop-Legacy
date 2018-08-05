'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PastWorkout = function PastWorkout(props) {
  return _react2.default.createElement(
    'div',
    { className: 'pastWorkout' },
    _react2.default.createElement(
      'p',
      null,
      ' ',
      _react2.default.createElement(
        'span',
        { className: 'dateAndTime' },
        props.date
      ),
      ' | ',
      _react2.default.createElement(
        'span',
        null,
        props.lengthOfWorkout,
        ' minutes'
      ),
      ' '
    )
  );
};

exports.default = PastWorkout;
// window.PastWorkout = PastWorkout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bhc3RXb3Jrb3V0LmpzeCJdLCJuYW1lcyI6WyJQYXN0V29ya291dCIsInByb3BzIiwiZGF0ZSIsImxlbmd0aE9mV29ya291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUdBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDaEI7QUFBQTtBQUFBLE1BQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsVUFBTSxXQUFVLGFBQWhCO0FBQStCQSxjQUFNQztBQUFyQyxPQUFKO0FBQUE7QUFBd0Q7QUFBQTtBQUFBO0FBQU9ELGNBQU1FLGVBQWI7QUFBQTtBQUFBLE9BQXhEO0FBQUE7QUFBQTtBQURGLEdBRGdCO0FBQUEsQ0FBbEI7O2tCQU1lSCxXO0FBQ2YiLCJmaWxlIjoiUGFzdFdvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5cbnZhciBQYXN0V29ya291dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhc3RXb3Jrb3V0XCI+XG4gICAgPHA+IDxzcGFuIGNsYXNzTmFtZT1cImRhdGVBbmRUaW1lXCI+e3Byb3BzLmRhdGV9PC9zcGFuPiB8IDxzcGFuPntwcm9wcy5sZW5ndGhPZldvcmtvdXR9IG1pbnV0ZXM8L3NwYW4+IDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0V29ya291dDtcbi8vIHdpbmRvdy5QYXN0V29ya291dCA9IFBhc3RXb3Jrb3V0O1xuXG4iXX0=