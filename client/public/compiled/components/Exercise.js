'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Exercise = function Exercise(props) {
  return _react2.default.createElement(
    'div',
    { className: 'exercise' },
    _react2.default.createElement(
      'div',
      { className: 'exerciseDescription' },
      _react2.default.createElement('img', { className: 'exerciseImage', src: props.exercise.picture }),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'span',
          { className: 'exerciseName' },
          props.exercise.name
        )
      ),
      props.exercise.description
    )
  );
};

exports.default = Exercise;
// window.Exercise = Exercise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0V4ZXJjaXNlLmpzeCJdLCJuYW1lcyI6WyJFeGVyY2lzZSIsInByb3BzIiwiZXhlcmNpc2UiLCJwaWN0dXJlIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBR0EsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUscUJBQWY7QUFDRSw2Q0FBSyxXQUFVLGVBQWYsRUFBK0IsS0FBS0EsTUFBTUMsUUFBTixDQUFlQyxPQUFuRCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBLFlBQU0sV0FBVSxjQUFoQjtBQUFnQ0YsZ0JBQU1DLFFBQU4sQ0FBZUU7QUFBL0M7QUFBSCxPQUZGO0FBR0dILFlBQU1DLFFBQU4sQ0FBZUc7QUFIbEI7QUFERixHQURhO0FBQUEsQ0FBZjs7a0JBVWVMLFE7QUFDZiIsImZpbGUiOiJFeGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vLi4vY3NzL3N0eWxlLmNzcyc7XG5cblxudmFyIEV4ZXJjaXNlID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlRGVzY3JpcHRpb25cIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXhlcmNpc2VJbWFnZVwiIHNyYz17cHJvcHMuZXhlcmNpc2UucGljdHVyZX0gLz5cbiAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImV4ZXJjaXNlTmFtZVwiPntwcm9wcy5leGVyY2lzZS5uYW1lfTwvc3Bhbj48L3A+XG4gICAgICB7cHJvcHMuZXhlcmNpc2UuZGVzY3JpcHRpb259XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhlcmNpc2U7XG4vLyB3aW5kb3cuRXhlcmNpc2UgPSBFeGVyY2lzZTtcbiJdfQ==