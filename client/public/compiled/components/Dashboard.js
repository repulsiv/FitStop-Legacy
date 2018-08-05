'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _History = require('./History.jsx');

var _History2 = _interopRequireDefault(_History);

require('./../css/style.css');

var _pizzablue = require('./images/pizzablue.png');

var _pizzablue2 = _interopRequireDefault(_pizzablue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard(props) {
  return _react2.default.createElement(
    'div',
    { className: 'dashboard' },
    _react2.default.createElement(
      'h1',
      null,
      'Start Workout'
    ),
    _react2.default.createElement(
      'div',
      { className: 'startButton' },
      _react2.default.createElement('img', { onClick: props.goToCountdown, src: _pizzablue2.default, alt: 'Start' })
    ),
    _react2.default.createElement(_History2.default, { workoutHistory: props.workoutHistory, workoutDate: props.workoutDate, workoutLength: props.workoutLength, loggedIn: props.loggedIn })
  );
};

exports.default = Dashboard;
// window.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJnb1RvQ291bnRkb3duIiwiaW1nIiwid29ya291dEhpc3RvcnkiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRMZW5ndGgiLCJsb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBRUEsNkNBQUssU0FBVUEsTUFBTUMsYUFBckIsRUFBb0MsS0FBS0MsbUJBQXpDLEVBQThDLEtBQUksT0FBbEQ7QUFGQSxLQUZGO0FBT0Usa0NBQUMsaUJBQUQsSUFBUyxnQkFBZ0JGLE1BQU1HLGNBQS9CLEVBQStDLGFBQWFILE1BQU1JLFdBQWxFLEVBQStFLGVBQWVKLE1BQU1LLGFBQXBHLEVBQW1ILFVBQVVMLE1BQU1NLFFBQW5JO0FBUEYsR0FEYztBQUFBLENBQWhCOztrQkFZZVAsUztBQUNmIiwiZmlsZSI6IkRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuL0hpc3RvcnkuanN4JztcbmltcG9ydCAnLi8uLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBpbWcgZnJvbSAnLi9pbWFnZXMvcGl6emFibHVlLnBuZyc7XG5cbnZhciBEYXNoYm9hcmQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cbiAgICA8aDE+U3RhcnQgV29ya291dDwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydEJ1dHRvblwiPlxuICB7LyogICA8aW1nIG9uQ2xpY2s9IHtwcm9wcy5nb1RvQ291bnRkb3dufSBzcmM9e1wiLi9pbWFnZXMvcGl6emFibHVlLnBuZ1wifSBhbHQ9XCJTdGFydFwiLz4gKi99XG4gICAgPGltZyBvbkNsaWNrPSB7cHJvcHMuZ29Ub0NvdW50ZG93bn0gc3JjPXtpbWd9IGFsdD1cIlN0YXJ0XCIvPlxuXG4gICAgPC9kaXY+XG4gICAgPEhpc3Rvcnkgd29ya291dEhpc3Rvcnk9e3Byb3BzLndvcmtvdXRIaXN0b3J5fSB3b3Jrb3V0RGF0ZT17cHJvcHMud29ya291dERhdGV9IHdvcmtvdXRMZW5ndGg9e3Byb3BzLndvcmtvdXRMZW5ndGh9IGxvZ2dlZEluPXtwcm9wcy5sb2dnZWRJbn0vPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbi8vIHdpbmRvdy5EYXNoYm9hcmQgPSBEYXNoYm9hcmQ7XG4iXX0=