'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FitBarChart = require('./FitBarChart.jsx');

var _FitBarChart2 = _interopRequireDefault(_FitBarChart);

var _FitBarMonthChart = require('./FitBarMonthChart.jsx');

var _FitBarMonthChart2 = _interopRequireDefault(_FitBarMonthChart);

var _FitBarYearChart = require('./FitBarYearChart.jsx');

var _FitBarYearChart2 = _interopRequireDefault(_FitBarYearChart);

var _PastWorkout = require('./PastWorkout.jsx');

var _PastWorkout2 = _interopRequireDefault(_PastWorkout);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import $ from 'jquery';

// var showMonth = {

// };
// var showYear = {

// };
// {
// class History extends React.Component{
//   constructor(props) {
//     this.state = {
//       classname: 
//     };
//     this.changeClass = this.changeClass.bind(this);
//   }

//   changeClass() {

//   }

//   render () {
//     return (
//       <div className="history">
//         <h1> History </h1>
//         {props.loggedIn && props.workoutHistory.map(indivWorkout => <PastWorkout date={indivWorkout.date} lengthOfWorkout={indivWorkout.lengthOfWorkout} key={indivWorkout._id}/>)}
//         {props.loggedIn && 
//           <div>
//             <button onClick={this.hangeClass}>Current Month Fitness Trend</button>
//             <button onClick={this.changeClass}>Current Year Fitness Trend</button>
//             <FitBarChart className="" workoutHistory={props.workoutHistory} />
//             <FitBarMonthChart className="" workoutHistory={props.workoutHistory} />
//             <FitBarYearChart className="" workoutHistory={props.workoutHistory} />
//           </div>
//         }
//         {!props.loggedIn && (<span className='historyNotLoggedIn'>You are not currently logged in. Please Log In or Sign Up to view Workout History.</span>)}
//       </div>)
//     )
//   }
// }
// );

var History = function History(props) {
  return _react2.default.createElement(
    'div',
    { className: 'history' },
    _react2.default.createElement(
      'h1',
      null,
      ' History '
    ),
    console.log('HISTORY', props),
    props.loggedIn && props.workoutHistory.map(function (indivWorkout) {
      return _react2.default.createElement(_PastWorkout2.default, { date: indivWorkout.date, lengthOfWorkout: indivWorkout.lengthOfWorkout, key: indivWorkout._id });
    }),
    props.loggedIn && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        null,
        'Current Month Fitness Trend'
      ),
      _react2.default.createElement(
        'button',
        null,
        'Current Year Fitness Trend'
      )
    ),
    props.loggedIn && _react2.default.createElement(_FitBarChart2.default, { workoutHistory: props.workoutHistory }),
    props.loggedIn && _react2.default.createElement(_FitBarMonthChart2.default, { workoutHistory: props.workoutHistory }),
    props.loggedIn && _react2.default.createElement(_FitBarYearChart2.default, { workoutHistory: props.workoutHistory }),
    !props.loggedIn && _react2.default.createElement(
      'span',
      { className: 'historyNotLoggedIn' },
      'You are not currently logged in. Please Log In or Sign Up to view Workout History.'
    )
  );
};
// import FitChart from './FitChart.jsx';
exports.default = History;
// window.History = History;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hpc3RvcnkuanN4Il0sIm5hbWVzIjpbIkhpc3RvcnkiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJsb2dnZWRJbiIsIndvcmtvdXRIaXN0b3J5IiwibWFwIiwiaW5kaXZXb3Jrb3V0IiwiZGF0ZSIsImxlbmd0aE9mV29ya291dCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUdDLFlBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixLQUF2QixDQUZIO0FBR0dBLFVBQU1HLFFBQU4sSUFBa0JILE1BQU1JLGNBQU4sQ0FBcUJDLEdBQXJCLENBQXlCO0FBQUEsYUFBZ0IsOEJBQUMscUJBQUQsSUFBYSxNQUFNQyxhQUFhQyxJQUFoQyxFQUFzQyxpQkFBaUJELGFBQWFFLGVBQXBFLEVBQXFGLEtBQUtGLGFBQWFHLEdBQXZHLEdBQWhCO0FBQUEsS0FBekIsQ0FIckI7QUFJR1QsVUFBTUcsUUFBTixJQUFrQjtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUw7QUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURpQixLQUpyQjtBQU1HSCxVQUFNRyxRQUFOLElBQW1CLDhCQUFDLHFCQUFELElBQWEsZ0JBQWdCSCxNQUFNSSxjQUFuQyxHQU50QjtBQU9HSixVQUFNRyxRQUFOLElBQW1CLDhCQUFDLDBCQUFELElBQWtCLGdCQUFnQkgsTUFBTUksY0FBeEMsR0FQdEI7QUFRR0osVUFBTUcsUUFBTixJQUFtQiw4QkFBQyx5QkFBRCxJQUFpQixnQkFBZ0JILE1BQU1JLGNBQXZDLEdBUnRCO0FBU0csS0FBQ0osTUFBTUcsUUFBUCxJQUFvQjtBQUFBO0FBQUEsUUFBTSxXQUFVLG9CQUFoQjtBQUFBO0FBQUE7QUFUdkIsR0FEWTtBQUFBLENBQWQ7QUFoREE7a0JBK0RlSixPO0FBQ2YiLCJmaWxlIjoiSGlzdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgRml0Q2hhcnQgZnJvbSAnLi9GaXRDaGFydC5qc3gnO1xuaW1wb3J0IEZpdEJhckNoYXJ0IGZyb20gJy4vRml0QmFyQ2hhcnQuanN4JztcbmltcG9ydCBGaXRCYXJNb250aENoYXJ0IGZyb20gJy4vRml0QmFyTW9udGhDaGFydC5qc3gnO1xuaW1wb3J0IEZpdEJhclllYXJDaGFydCBmcm9tICcuL0ZpdEJhclllYXJDaGFydC5qc3gnO1xuaW1wb3J0IFBhc3RXb3Jrb3V0IGZyb20gJy4vUGFzdFdvcmtvdXQuanN4JztcbmltcG9ydCAnLi8uLi9jc3Mvc3R5bGUuY3NzJztcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIHZhciBzaG93TW9udGggPSB7XG4gIFxuLy8gfTtcbi8vIHZhciBzaG93WWVhciA9IHtcblxuLy8gfTtcbi8vIHtcbi8vIGNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgIGNsYXNzbmFtZTogXG4vLyAgICAgfTtcbi8vICAgICB0aGlzLmNoYW5nZUNsYXNzID0gdGhpcy5jaGFuZ2VDbGFzcy5iaW5kKHRoaXMpO1xuLy8gICB9XG5cbi8vICAgY2hhbmdlQ2xhc3MoKSB7XG4gICAgXG4vLyAgIH1cblxuLy8gICByZW5kZXIgKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpc3RvcnlcIj5cbi8vICAgICAgICAgPGgxPiBIaXN0b3J5IDwvaDE+XG4vLyAgICAgICAgIHtwcm9wcy5sb2dnZWRJbiAmJiBwcm9wcy53b3Jrb3V0SGlzdG9yeS5tYXAoaW5kaXZXb3Jrb3V0ID0+IDxQYXN0V29ya291dCBkYXRlPXtpbmRpdldvcmtvdXQuZGF0ZX0gbGVuZ3RoT2ZXb3Jrb3V0PXtpbmRpdldvcmtvdXQubGVuZ3RoT2ZXb3Jrb3V0fSBrZXk9e2luZGl2V29ya291dC5faWR9Lz4pfVxuLy8gICAgICAgICB7cHJvcHMubG9nZ2VkSW4gJiYgXG4vLyAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5nZUNsYXNzfT5DdXJyZW50IE1vbnRoIEZpdG5lc3MgVHJlbmQ8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jaGFuZ2VDbGFzc30+Q3VycmVudCBZZWFyIEZpdG5lc3MgVHJlbmQ8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDxGaXRCYXJDaGFydCBjbGFzc05hbWU9XCJcIiB3b3Jrb3V0SGlzdG9yeT17cHJvcHMud29ya291dEhpc3Rvcnl9IC8+XG4vLyAgICAgICAgICAgICA8Rml0QmFyTW9udGhDaGFydCBjbGFzc05hbWU9XCJcIiB3b3Jrb3V0SGlzdG9yeT17cHJvcHMud29ya291dEhpc3Rvcnl9IC8+XG4vLyAgICAgICAgICAgICA8Rml0QmFyWWVhckNoYXJ0IGNsYXNzTmFtZT1cIlwiIHdvcmtvdXRIaXN0b3J5PXtwcm9wcy53b3Jrb3V0SGlzdG9yeX0gLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICB7IXByb3BzLmxvZ2dlZEluICYmICg8c3BhbiBjbGFzc05hbWU9J2hpc3RvcnlOb3RMb2dnZWRJbic+WW91IGFyZSBub3QgY3VycmVudGx5IGxvZ2dlZCBpbi4gUGxlYXNlIExvZyBJbiBvciBTaWduIFVwIHRvIHZpZXcgV29ya291dCBIaXN0b3J5Ljwvc3Bhbj4pfVxuLy8gICAgICAgPC9kaXY+KVxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuLy8gKTtcblxudmFyIEhpc3RvcnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoaXN0b3J5XCI+XG4gICAgPGgxPiBIaXN0b3J5IDwvaDE+XG4gICAge2NvbnNvbGUubG9nKCdISVNUT1JZJywgcHJvcHMpfVxuICAgIHtwcm9wcy5sb2dnZWRJbiAmJiBwcm9wcy53b3Jrb3V0SGlzdG9yeS5tYXAoaW5kaXZXb3Jrb3V0ID0+IDxQYXN0V29ya291dCBkYXRlPXtpbmRpdldvcmtvdXQuZGF0ZX0gbGVuZ3RoT2ZXb3Jrb3V0PXtpbmRpdldvcmtvdXQubGVuZ3RoT2ZXb3Jrb3V0fSBrZXk9e2luZGl2V29ya291dC5faWR9Lz4pfVxuICAgIHtwcm9wcy5sb2dnZWRJbiAmJiA8ZGl2PjxidXR0b24+Q3VycmVudCBNb250aCBGaXRuZXNzIFRyZW5kPC9idXR0b24+XG4gICAgICA8YnV0dG9uPkN1cnJlbnQgWWVhciBGaXRuZXNzIFRyZW5kPC9idXR0b24+PC9kaXY+fVxuICAgIHtwcm9wcy5sb2dnZWRJbiAmJiAoPEZpdEJhckNoYXJ0IHdvcmtvdXRIaXN0b3J5PXtwcm9wcy53b3Jrb3V0SGlzdG9yeX0gLz4pfSBcbiAgICB7cHJvcHMubG9nZ2VkSW4gJiYgKDxGaXRCYXJNb250aENoYXJ0IHdvcmtvdXRIaXN0b3J5PXtwcm9wcy53b3Jrb3V0SGlzdG9yeX0gLz4pfSBcbiAgICB7cHJvcHMubG9nZ2VkSW4gJiYgKDxGaXRCYXJZZWFyQ2hhcnQgd29ya291dEhpc3Rvcnk9e3Byb3BzLndvcmtvdXRIaXN0b3J5fSAvPil9XG4gICAgeyFwcm9wcy5sb2dnZWRJbiAmJiAoPHNwYW4gY2xhc3NOYW1lPSdoaXN0b3J5Tm90TG9nZ2VkSW4nPllvdSBhcmUgbm90IGN1cnJlbnRseSBsb2dnZWQgaW4uIFBsZWFzZSBMb2cgSW4gb3IgU2lnbiBVcCB0byB2aWV3IFdvcmtvdXQgSGlzdG9yeS48L3NwYW4+KX1cbiAgPC9kaXY+XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhpc3Rvcnk7XG4vLyB3aW5kb3cuSGlzdG9yeSA9IEhpc3Rvcnk7XG4iXX0=