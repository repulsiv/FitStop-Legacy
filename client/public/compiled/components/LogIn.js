'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(props) {
  return _react2.default.createElement(
    'div',
    { className: 'loginPage' },
    _react2.default.createElement(
      'h1',
      null,
      'Log In'
    ),
    _react2.default.createElement(
      'form',
      { onSubmit: props.login },
      _react2.default.createElement(
        'label',
        { htmlFor: 'username' },
        'Username:'
      ),
      _react2.default.createElement('input', { id: 'username', type: 'text', name: 'username' }),
      _react2.default.createElement(
        'label',
        { htmlFor: 'password' },
        'Password:'
      ),
      _react2.default.createElement('input', { id: 'password', type: 'password', name: 'password' }),
      _react2.default.createElement('input', { type: 'submit', value: 'Log In' })
    )
  );
};

exports.default = Login;
// window.Login = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ0luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sVUFBVUEsTUFBTUMsS0FBdEI7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSwrQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxNQUExQixFQUFpQyxNQUFLLFVBQXRDLEdBRkY7QUFHRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BSEY7QUFJRSwrQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxNQUFLLFVBQTFDLEdBSkY7QUFLRSwrQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUxGO0FBRkYsR0FEVTtBQUFBLENBQVo7O2tCQWFlRixLO0FBQ2YiLCJmaWxlIjoiTG9nSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5cbnZhciBMb2dpbiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luUGFnZVwiPlxuICAgIDxoMT5Mb2cgSW48L2gxPlxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5sb2dpbn0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIi8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZyBJblwiLz5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4vLyB3aW5kb3cuTG9naW4gPSBMb2dpbjtcbiJdfQ==