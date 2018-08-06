'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = function SignUp(props) {
  return _react2.default.createElement(
    'div',
    { className: 'signupPage' },
    _react2.default.createElement(
      'h1',
      null,
      'Sign Up'
    ),
    _react2.default.createElement(
      'form',
      { onSubmit: props.signup },
      _react2.default.createElement(
        'label',
        { htmlFor: 'username' },
        'Username:  '
      ),
      _react2.default.createElement('input', { id: 'username', type: 'text', name: 'username' }),
      _react2.default.createElement(
        'label',
        { htmlFor: 'password' },
        'Password:'
      ),
      _react2.default.createElement('input', { id: 'password', type: 'password', name: 'password' }),
      _react2.default.createElement('input', { type: 'submit', value: 'Sign Up' })
    )
  );
};

exports.default = SignUp;
// window.SignUp = SignUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZ25VcC5qc3giXSwibmFtZXMiOlsiU2lnblVwIiwicHJvcHMiLCJzaWdudXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sVUFBVUEsTUFBTUMsTUFBdEI7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSwrQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxNQUExQixFQUFpQyxNQUFLLFVBQXRDLEdBRkY7QUFHRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BSEY7QUFJRSwrQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxNQUFLLFVBQTFDLEdBSkY7QUFLRSwrQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxTQUEzQjtBQUxGO0FBRkYsR0FEVztBQUFBLENBQWI7O2tCQWFlRixNO0FBQ2YiLCJmaWxlIjoiU2lnblVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuXG52YXIgU2lnblVwID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwUGFnZVwiPlxuICAgIDxoMT5TaWduIFVwPC9oMT5cbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuc2lnbnVwfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTogIDwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWduIFVwXCIvPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4vLyB3aW5kb3cuU2lnblVwID0gU2lnblVwO1xuIl19