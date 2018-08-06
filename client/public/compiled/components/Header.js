'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    props.showButtons && props.loggedIn && _react2.default.createElement(
      'button',
      { className: 'blackButton', onClick: props.logOut },
      'Log Out'
    ),
    props.showButtons && !props.loggedIn && _react2.default.createElement(
      'button',
      { className: 'blackButton', onClick: props.goToLogin },
      'Log In'
    ),
    !props.loggedIn && props.showButtons && _react2.default.createElement(
      'button',
      { className: 'blackButton', onClick: props.goToSignUp },
      'Sign Up'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        ' FitStop ',
        _react2.default.createElement(
          'span',
          { className: 'username' },
          props.username
        )
      )
    )
  );
};

exports.default = Header;
// window.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzaG93QnV0dG9ucyIsImxvZ2dlZEluIiwibG9nT3V0IiwiZ29Ub0xvZ2luIiwiZ29Ub1NpZ25VcCIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBR0EsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNHQSxVQUFNQyxXQUFOLElBQXFCRCxNQUFNRSxRQUEzQixJQUF3QztBQUFBO0FBQUEsUUFBUSxXQUFVLGFBQWxCLEVBQWdDLFNBQVNGLE1BQU1HLE1BQS9DO0FBQUE7QUFBQSxLQUQzQztBQUVHSCxVQUFNQyxXQUFOLElBQXFCLENBQUNELE1BQU1FLFFBQTVCLElBQXlDO0FBQUE7QUFBQSxRQUFRLFdBQVUsYUFBbEIsRUFBZ0MsU0FBU0YsTUFBTUksU0FBL0M7QUFBQTtBQUFBLEtBRjVDO0FBR0csS0FBQ0osTUFBTUUsUUFBUCxJQUFtQkYsTUFBTUMsV0FBekIsSUFBeUM7QUFBQTtBQUFBLFFBQVEsV0FBVSxhQUFsQixFQUFnQyxTQUFTRCxNQUFNSyxVQUEvQztBQUFBO0FBQUEsS0FINUM7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFhO0FBQUE7QUFBQSxZQUFNLFdBQVUsVUFBaEI7QUFBNEJMLGdCQUFNTTtBQUFsQztBQUFiO0FBREY7QUFKRixHQURXO0FBQUEsQ0FBYjs7a0JBV2VQLE07QUFDZiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5cbnZhciBIZWFkZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICB7cHJvcHMuc2hvd0J1dHRvbnMgJiYgcHJvcHMubG9nZ2VkSW4gJiYgKDxidXR0b24gY2xhc3NOYW1lPSdibGFja0J1dHRvbicgb25DbGljaz17cHJvcHMubG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+KX1cbiAgICB7cHJvcHMuc2hvd0J1dHRvbnMgJiYgIXByb3BzLmxvZ2dlZEluICYmICg8YnV0dG9uIGNsYXNzTmFtZT0nYmxhY2tCdXR0b24nIG9uQ2xpY2s9e3Byb3BzLmdvVG9Mb2dpbn0+TG9nIEluPC9idXR0b24+KX1cbiAgICB7IXByb3BzLmxvZ2dlZEluICYmIHByb3BzLnNob3dCdXR0b25zICYmICg8YnV0dG9uIGNsYXNzTmFtZT0nYmxhY2tCdXR0b24nIG9uQ2xpY2s9e3Byb3BzLmdvVG9TaWduVXB9PlNpZ24gVXA8L2J1dHRvbj4pfVxuICAgIDxkaXY+XG4gICAgICA8aDE+IEZpdFN0b3AgPHNwYW4gY2xhc3NOYW1lPSd1c2VybmFtZSc+e3Byb3BzLnVzZXJuYW1lfTwvc3Bhbj48L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbi8vIHdpbmRvdy5IZWFkZXIgPSBIZWFkZXI7XG4iXX0=