'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Timer = require('./Timer.jsx');

var _Timer2 = _interopRequireDefault(_Timer);

var _Exercise = require('./Exercise.jsx');

var _Exercise2 = _interopRequireDefault(_Exercise);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Workout = function (_React$Component) {
  _inherits(Workout, _React$Component);

  function Workout(props) {
    _classCallCheck(this, Workout);

    var _this = _possibleConstructorReturn(this, (Workout.__proto__ || Object.getPrototypeOf(Workout)).call(this, props));

    _this.state = {
      warmupActive: false,
      workoutActive: false,
      cooldownActive: false
    };
    _this.highlightActiveTitle.bind(_this);
    return _this;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    sets css on mount and updates with current exercise (triggered on timer() on App.js)
  * * * * * * * * * * * * * * * * * * * * * * * * * *  * * * * * * * *  * * * * * * * * * * */

  _createClass(Workout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlightActiveTitle();
    }
  }, {
    key: 'highlightActiveTitle',
    value: function highlightActiveTitle() {
      if (this.props.exercise.type === 'warmup') {
        this.setState({ warmupActive: true, workoutActive: false, cooldownActive: false });
      } else if (this.props.exercise.type === 'workout') {
        this.setState({ warmupActive: false, workoutActive: true, cooldownActive: false });
      } else if (this.props.exercise.type === 'cooldown') {
        this.setState({ warmupActive: false, workoutActive: false, cooldownActive: true });
      } else {
        console.log('workout type does not exist');
      }
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Change css based on which exercise type
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'workout' },
        _react2.default.createElement(
          'span',
          { className: 'warmupTitle ' + (this.state.warmupActive ? 'activeTitle' : null) },
          'Warmup'
        ),
        _react2.default.createElement(
          'span',
          { className: 'workoutTitle ' + (this.state.workoutActive ? 'activeTitle' : null) },
          'Workout'
        ),
        _react2.default.createElement(
          'span',
          { className: 'cooldownTitle ' + (this.state.cooldownActive ? 'activeTitle' : null) },
          'Cooldown'
        ),
        _react2.default.createElement(_Timer2.default, { timer: this.props.timer }),
        _react2.default.createElement(_Exercise2.default, { exercise: this.props.exercise }),
        _react2.default.createElement(
          'button',
          { onClick: this.props.goToDashboard, className: 'blackButton' },
          'Quit & Back To Dashboard'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.props.goToSummary, className: 'blackButton' },
          'Summary'
        )
      );
    }
  }]);

  return Workout;
}(_react2.default.Component); // End of Class

exports.default = Workout;
// window.Workout = Workout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsInN0YXRlIiwid2FybXVwQWN0aXZlIiwid29ya291dEFjdGl2ZSIsImNvb2xkb3duQWN0aXZlIiwiaGlnaGxpZ2h0QWN0aXZlVGl0bGUiLCJiaW5kIiwiZXhlcmNpc2UiLCJ0eXBlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidGltZXIiLCJnb1RvRGFzaGJvYXJkIiwiZ29Ub1N1bW1hcnkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsS0FESDtBQUVYQyxxQkFBZSxLQUZKO0FBR1hDLHNCQUFnQjtBQUhMLEtBQWI7QUFLQSxVQUFLQyxvQkFBTCxDQUEwQkMsSUFBMUI7QUFQaUI7QUFRbEI7O0FBRUg7Ozs7Ozt3Q0FJc0I7QUFDbEIsV0FBS0Qsb0JBQUw7QUFDRDs7OzJDQUVzQjtBQUNyQixVQUFJLEtBQUtMLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkMsSUFBcEIsS0FBNkIsUUFBakMsRUFBMkM7QUFDekMsYUFBS0MsUUFBTCxDQUFjLEVBQUNQLGNBQWMsSUFBZixFQUFxQkMsZUFBZSxLQUFwQyxFQUEyQ0MsZ0JBQWdCLEtBQTNELEVBQWQ7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLSixLQUFMLENBQVdPLFFBQVgsQ0FBb0JDLElBQXBCLEtBQTZCLFNBQWpDLEVBQTRDO0FBQ2pELGFBQUtDLFFBQUwsQ0FBYyxFQUFDUCxjQUFjLEtBQWYsRUFBc0JDLGVBQWUsSUFBckMsRUFBMkNDLGdCQUFnQixLQUEzRCxFQUFkO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS0osS0FBTCxDQUFXTyxRQUFYLENBQW9CQyxJQUFwQixLQUE2QixVQUFqQyxFQUE2QztBQUNsRCxhQUFLQyxRQUFMLENBQWMsRUFBQ1AsY0FBYyxLQUFmLEVBQXNCQyxlQUFlLEtBQXJDLEVBQTRDQyxnQkFBZ0IsSUFBNUQsRUFBZDtBQUNELE9BRk0sTUFFQTtBQUNMTSxnQkFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0Q7QUFDRjs7QUFFSDs7Ozs7OzZCQUlZO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFXLGtCQUFrQixLQUFLVixLQUFMLENBQVdDLFlBQVgsR0FBMEIsYUFBMUIsR0FBMEMsSUFBNUQsQ0FBakI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFXLG1CQUFtQixLQUFLRCxLQUFMLENBQVdFLGFBQVgsR0FBMkIsYUFBM0IsR0FBMkMsSUFBOUQsQ0FBakI7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBTSxXQUFXLG9CQUFvQixLQUFLRixLQUFMLENBQVdHLGNBQVgsR0FBNEIsYUFBNUIsR0FBNEMsSUFBaEUsQ0FBakI7QUFBQTtBQUFBLFNBSEY7QUFLRSxzQ0FBQyxlQUFELElBQU8sT0FBUSxLQUFLSixLQUFMLENBQVdZLEtBQTFCLEdBTEY7QUFNRSxzQ0FBQyxrQkFBRCxJQUFVLFVBQVUsS0FBS1osS0FBTCxDQUFXTyxRQUEvQixHQU5GO0FBT0U7QUFBQTtBQUFBLFlBQVEsU0FBUyxLQUFLUCxLQUFMLENBQVdhLGFBQTVCLEVBQTJDLFdBQVUsYUFBckQ7QUFBQTtBQUFBLFNBUEY7QUFRRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtiLEtBQUwsQ0FBV2MsV0FBNUIsRUFBeUMsV0FBVSxhQUFuRDtBQUFBO0FBQUE7QUFSRixPQURGO0FBWUQ7Ozs7RUFoRG1CQyxnQkFBTUMsUyxHQWtEMUI7O2tCQUVhakIsTztBQUNmIiwiZmlsZSI6IldvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXIuanN4JztcbmltcG9ydCBFeGVyY2lzZSBmcm9tICcuL0V4ZXJjaXNlLmpzeCc7XG5pbXBvcnQgJy4vLi4vY3NzL3N0eWxlLmNzcyc7XG5cbmNsYXNzIFdvcmtvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2FybXVwQWN0aXZlOiBmYWxzZSxcbiAgICAgIHdvcmtvdXRBY3RpdmU6IGZhbHNlLFxuICAgICAgY29vbGRvd25BY3RpdmU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0QWN0aXZlVGl0bGUuYmluZCh0aGlzKTtcbiAgfVxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBzZXRzIGNzcyBvbiBtb3VudCBhbmQgdXBkYXRlcyB3aXRoIGN1cnJlbnQgZXhlcmNpc2UgKHRyaWdnZXJlZCBvbiB0aW1lcigpIG9uIEFwcC5qcylcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAgKiAqICogKiAqICogKiAqICAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRBY3RpdmVUaXRsZSgpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlVGl0bGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXhlcmNpc2UudHlwZSA9PT0gJ3dhcm11cCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3dhcm11cEFjdGl2ZTogdHJ1ZSwgd29ya291dEFjdGl2ZTogZmFsc2UsIGNvb2xkb3duQWN0aXZlOiBmYWxzZX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5leGVyY2lzZS50eXBlID09PSAnd29ya291dCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3dhcm11cEFjdGl2ZTogZmFsc2UsIHdvcmtvdXRBY3RpdmU6IHRydWUsIGNvb2xkb3duQWN0aXZlOiBmYWxzZX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5leGVyY2lzZS50eXBlID09PSAnY29vbGRvd24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXJtdXBBY3RpdmU6IGZhbHNlLCB3b3Jrb3V0QWN0aXZlOiBmYWxzZSwgY29vbGRvd25BY3RpdmU6IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3dvcmtvdXQgdHlwZSBkb2VzIG5vdCBleGlzdCcpXG4gICAgfVxuICB9XG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBDaGFuZ2UgY3NzIGJhc2VkIG9uIHdoaWNoIGV4ZXJjaXNlIHR5cGVcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya291dFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyd3YXJtdXBUaXRsZSAnICsgKHRoaXMuc3RhdGUud2FybXVwQWN0aXZlID8gJ2FjdGl2ZVRpdGxlJyA6IG51bGwpfT5XYXJtdXA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3dvcmtvdXRUaXRsZSAnICsgKHRoaXMuc3RhdGUud29ya291dEFjdGl2ZSA/ICdhY3RpdmVUaXRsZScgOiBudWxsKX0+V29ya291dDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnY29vbGRvd25UaXRsZSAnICsgKHRoaXMuc3RhdGUuY29vbGRvd25BY3RpdmUgPyAnYWN0aXZlVGl0bGUnIDogbnVsbCl9PkNvb2xkb3duPC9zcGFuPlxuXG4gICAgICAgIDxUaW1lciB0aW1lcj0ge3RoaXMucHJvcHMudGltZXJ9IC8+XG4gICAgICAgIDxFeGVyY2lzZSBleGVyY2lzZT17dGhpcy5wcm9wcy5leGVyY2lzZX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmdvVG9EYXNoYm9hcmR9IGNsYXNzTmFtZT1cImJsYWNrQnV0dG9uXCI+UXVpdCAmIEJhY2sgVG8gRGFzaGJvYXJkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5nb1RvU3VtbWFyeX0gY2xhc3NOYW1lPVwiYmxhY2tCdXR0b25cIj5TdW1tYXJ5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0gLy8gRW5kIG9mIENsYXNzXG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXQ7XG4vLyB3aW5kb3cuV29ya291dCA9IFdvcmtvdXQ7XG5cbiJdfQ==