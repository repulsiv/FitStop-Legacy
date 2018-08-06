'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Summary = function Summary(props) {
  return _react2.default.createElement(
    'div',
    { className: 'summary' },
    _react2.default.createElement(
      'h1',
      null,
      'Workout Summary'
    ),
    _react2.default.createElement(
      'span',
      { className: 'summaryCongrats congratulations' },
      'All Done! Congratulations! \uD83C\uDF89'
    ),
    ' ',
    _react2.default.createElement('br', null),
    !props.loggedIn && _react2.default.createElement(
      'span',
      { className: 'alert' },
      '\u26A0\uFE0F  You are currently not logged in. Workout Summary data will not be saved.'
    ),
    _react2.default.createElement(
      'div',
      { className: 'summaryStats' },
      _react2.default.createElement(
        'h3',
        { className: 'summaryTitle' },
        ' Date: '
      ),
      ' ',
      props.workoutDate,
      _react2.default.createElement(
        'h3',
        { className: 'summaryTitle' },
        ' Length of Workout: '
      ),
      ' ',
      props.workoutLengthInMins,
      ' minutes',
      _react2.default.createElement(
        'h3',
        { className: 'summaryTitle' },
        ' Warmup: '
      ),
      props.currentWorkout[0].name,
      ', ',
      props.currentWorkout[1].name,
      ', ',
      props.currentWorkout[2].name,
      _react2.default.createElement(
        'h3',
        { className: 'summaryTitle' },
        ' Workout: '
      ),
      props.currentWorkout[3].name,
      ', ',
      props.currentWorkout[4].name,
      ', ',
      props.currentWorkout[5].name,
      ', ',
      props.currentWorkout[6].name,
      ', ',
      props.currentWorkout[7].name,
      ', ',
      props.currentWorkout[8].name,
      ', ',
      props.currentWorkout[9].name,
      ', ',
      props.currentWorkout[10].name,
      ', ',
      props.currentWorkout[11].name,
      _react2.default.createElement(
        'h3',
        { className: 'summaryTitle' },
        ' Cooldown: '
      ),
      props.currentWorkout[12].name,
      ', ',
      props.currentWorkout[13].name,
      ', ',
      props.currentWorkout[14].name
    ),
    _react2.default.createElement(
      'span',
      { className: 'summaryQuote' },
      '"Good things come to those who sweat."'
    ),
    _react2.default.createElement(
      'button',
      { onClick: props.goToDashboard, className: 'blackButton' },
      'Back To Dashboard'
    )
  );
};

exports.default = Summary;
// window.Summary = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N1bW1hcnkuanN4Il0sIm5hbWVzIjpbIlN1bW1hcnkiLCJwcm9wcyIsImxvZ2dlZEluIiwid29ya291dERhdGUiLCJ3b3Jrb3V0TGVuZ3RoSW5NaW5zIiwiY3VycmVudFdvcmtvdXQiLCJuYW1lIiwiZ29Ub0Rhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUdBLElBQUlBLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFEO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxXQUFVLGlDQUFoQjtBQUFBO0FBQUEsS0FGRjtBQUFBO0FBRXlGLDZDQUZ6RjtBQUdHLEtBQUNBLE1BQU1DLFFBQVAsSUFBb0I7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FIdkI7QUFJRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLE9BREY7QUFBQTtBQUM2Q0QsWUFBTUUsV0FEbkQ7QUFFRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLE9BRkY7QUFBQTtBQUUwREYsWUFBTUcsbUJBRmhFO0FBQUE7QUFHRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLE9BSEY7QUFHOENILFlBQU1JLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JDLElBSHRFO0FBQUE7QUFHOEVMLFlBQU1JLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JDLElBSHRHO0FBQUE7QUFHOEdMLFlBQU1JLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JDLElBSHRJO0FBSUU7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQUE7QUFBQSxPQUpGO0FBSStDTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2RTtBQUFBO0FBSStFTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2RztBQUFBO0FBSStHTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2STtBQUFBO0FBSStJTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2SztBQUFBO0FBSStLTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2TTtBQUFBO0FBSStNTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2TztBQUFBO0FBSStPTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUp2UTtBQUFBO0FBSStRTCxZQUFNSSxjQUFOLENBQXFCLEVBQXJCLEVBQXlCQyxJQUp4UztBQUFBO0FBSWdUTCxZQUFNSSxjQUFOLENBQXFCLEVBQXJCLEVBQXlCQyxJQUp6VTtBQUtFO0FBQUE7QUFBQSxVQUFJLFdBQVUsY0FBZDtBQUFBO0FBQUEsT0FMRjtBQUtnREwsWUFBTUksY0FBTixDQUFxQixFQUFyQixFQUF5QkMsSUFMekU7QUFBQTtBQUtpRkwsWUFBTUksY0FBTixDQUFxQixFQUFyQixFQUF5QkMsSUFMMUc7QUFBQTtBQUtrSEwsWUFBTUksY0FBTixDQUFxQixFQUFyQixFQUF5QkM7QUFMM0ksS0FKRjtBQVdFO0FBQUE7QUFBQSxRQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBLEtBWEY7QUFZRTtBQUFBO0FBQUEsUUFBUSxTQUFTTCxNQUFNTSxhQUF2QixFQUFzQyxXQUFVLGFBQWhEO0FBQUE7QUFBQTtBQVpGLEdBRFk7QUFBQSxDQUFkOztrQkFrQmVQLE87QUFDZiIsImZpbGUiOiJTdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuXG52YXIgU3VtbWFyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICA8aDE+V29ya291dCBTdW1tYXJ5PC9oMT5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdW1tYXJ5Q29uZ3JhdHMgY29uZ3JhdHVsYXRpb25zXCI+QWxsIERvbmUhIENvbmdyYXR1bGF0aW9ucyEg8J+OiTwvc3Bhbj4gPGJyIC8+XG4gICAgeyFwcm9wcy5sb2dnZWRJbiAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiYWxlcnRcIj7imqDvuI8gIFlvdSBhcmUgY3VycmVudGx5IG5vdCBsb2dnZWQgaW4uIFdvcmtvdXQgU3VtbWFyeSBkYXRhIHdpbGwgbm90IGJlIHNhdmVkLjwvc3Bhbj4pfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVN0YXRzXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IERhdGU6IDwvaDM+IHtwcm9wcy53b3Jrb3V0RGF0ZX1cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJzdW1tYXJ5VGl0bGVcIj4gTGVuZ3RoIG9mIFdvcmtvdXQ6IDwvaDM+IHtwcm9wcy53b3Jrb3V0TGVuZ3RoSW5NaW5zfSBtaW51dGVzXG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IFdhcm11cDogPC9oMz57cHJvcHMuY3VycmVudFdvcmtvdXRbMF0ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFsxXS5uYW1lfSwge3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzJdLm5hbWV9XG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IFdvcmtvdXQ6IDwvaDM+e3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzNdLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbNF0ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFs1XS5uYW1lfSwge3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzZdLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbN10ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFs4XS5uYW1lfSwge3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzldLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbMTBdLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbMTFdLm5hbWV9XG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IENvb2xkb3duOiA8L2gzPntwcm9wcy5jdXJyZW50V29ya291dFsxMl0ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFsxM10ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFsxNF0ubmFtZX1cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdW1tYXJ5UXVvdGVcIj5cIkdvb2QgdGhpbmdzIGNvbWUgdG8gdGhvc2Ugd2hvIHN3ZWF0LlwiPC9zcGFuPlxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ29Ub0Rhc2hib2FyZH0gY2xhc3NOYW1lPVwiYmxhY2tCdXR0b25cIj5CYWNrIFRvIERhc2hib2FyZDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeTtcbi8vIHdpbmRvdy5TdW1tYXJ5ID0gU3VtbWFyeTtcbiJdfQ==