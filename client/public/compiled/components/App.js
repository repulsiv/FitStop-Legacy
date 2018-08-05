'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header.jsx');

var _Header2 = _interopRequireDefault(_Header);

var _Dashboard = require('./Dashboard.jsx');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Login = require('./Login.jsx');

var _Login2 = _interopRequireDefault(_Login);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Countdown = require('./Countdown.jsx');

var _Countdown2 = _interopRequireDefault(_Countdown);

var _PastWorkout = require('./PastWorkout.jsx');

var _PastWorkout2 = _interopRequireDefault(_PastWorkout);

var _SignUp = require('./SignUp.jsx');

var _SignUp2 = _interopRequireDefault(_SignUp);

var _Workout = require('./Workout.jsx');

var _Workout2 = _interopRequireDefault(_Workout);

var _Summary = require('./Summary.jsx');

var _Summary2 = _interopRequireDefault(_Summary);

var _exampleExerciseData = require('./exampleExerciseData');

var _exampleExerciseData2 = _interopRequireDefault(_exampleExerciseData);

require('./../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      currentState: 'Dashboard',
      currentWorkout: _exampleExerciseData2.default,
      currentExercise: 0,
      workoutDate: null,
      workoutHistory: [],
      username: null,
      loggedIn: false,
      countdown: 3,
      time: null,
      showButtons: true,
      workoutLengthInMins: 15
    };

    _this.goToWorkout = _this.goToWorkout.bind(_this);
    _this.goToSummary = _this.goToSummary.bind(_this);
    _this.goToDashboard = _this.goToDashboard.bind(_this);
    _this.goToCountdown = _this.goToCountdown.bind(_this);
    _this.goToLogin = _this.goToLogin.bind(_this);
    _this.goToSignUp = _this.goToSignUp.bind(_this);
    _this.getWorkoutHistory = _this.getWorkoutHistory.bind(_this);
    _this.sendWorkoutData = _this.sendWorkoutData.bind(_this);
    _this.logOut = _this.logOut.bind(_this);
    _this.login = _this.login.bind(_this);
    _this.signup = _this.signup.bind(_this);

    return _this;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * *
    The following functions change the view on the app
  * * * * * * * * * * * * * * * * * * * * * * * * * * */

  _createClass(App, [{
    key: 'goToDashboard',
    value: function goToDashboard() {
      this.setState({ currentState: 'Dashboard' });
      this.setState({ showButtons: true });
      if (this.state.loggedIn) {
        this.getWorkoutHistory();
      }
      if (this.state.interval) {
        clearInterval(this.state.interval);
      }
    }
  }, {
    key: 'goToLogin',
    value: function goToLogin() {
      this.setState({ currentState: 'Login' });
    }
  }, {
    key: 'goToSignUp',
    value: function goToSignUp() {
      this.setState({ currentState: 'SignUp' });
    }
  }, {
    key: 'goToCountdown',
    value: function goToCountdown() {
      this.setState({ currentState: 'Countdown' });
      this.setState({ showButtons: false });
      this.setState({ currentExercise: 0 });
      // this.getExercises(); //uncomment to fetch from db
      this.startCountdown();
    }
  }, {
    key: 'goToWorkout',
    value: function goToWorkout() {
      this.setState({ currentState: 'Workout' });
      this.startTimer();
    }
  }, {
    key: 'goToSummary',
    value: function goToSummary() {
      this.setState({ currentState: 'Summary' });
      this.setState({ showButtons: true });
      var currentDate = Date();
      this.setState({ workoutDate: currentDate });
      clearInterval(this.state.interval);
      if (this.state.loggedIn) {
        this.sendWorkoutData();
      }
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      The following functions send requests to the server
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'getWorkoutHistory',
    value: function getWorkoutHistory() {
      var _this2 = this;

      _jquery2.default.ajax({
        method: 'GET',
        url: '/history',
        dataType: 'json',
        data: {
          username: this.state.username
        },
        complete: function complete(data) {
          var firstFive = JSON.parse(data.responseText).slice(0, 5);
          _this2.setState({ workoutHistory: firstFive });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'getExercises',
    value: function getExercises() {
      var _this3 = this;

      _jquery2.default.ajax({
        method: 'GET',
        url: '/workout',
        dataType: 'json',
        data: {
          lengthOfWorkout: this.state.workoutLengthInMins
        },
        complete: function complete(data) {
          console.log('exercise data:', data);
          _this3.setState({ currentWorkout: JSON.parse(data.responseText) });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'sendWorkoutData',
    value: function sendWorkoutData() {
      _jquery2.default.ajax({
        type: 'POST',
        url: '/addWorkout',
        data: JSON.stringify({
          username: this.state.username,
          date: Date(),
          currentWorkout: this.state.currentWorkout,
          lengthOfWorkout: this.state.workoutLengthInMins
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: function success(data) {
          console.log('succesfully posted data!');
        }
      });
    }
  }, {
    key: 'login',
    value: function login(event) {
      var _this4 = this;

      event.preventDefault();
      var data = new FormData(event.target);
      var username = data.get('username');
      var password = data.get('password');

      _jquery2.default.ajax({
        type: "POST",
        url: '/login',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json',
        dataType: 'json',
        complete: function complete(data) {
          if (data.responseText === "Log in success") {
            _this4.setState({ username: username });
            _this4.setState({ loggedIn: true });
            _this4.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this4.goToLogin();
          }
        }
      });
    }
  }, {
    key: 'signup',
    value: function signup(event) {
      var _this5 = this;

      event.preventDefault();
      var data = new FormData(event.target);
      var username = data.get('username');
      var password = data.get('password');

      _jquery2.default.ajax({
        type: "POST",
        url: '/signup',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json',
        dataType: 'json',
        complete: function complete(data) {
          if (data.responseText === "User Created") {
            _this5.setState({ username: username });
            _this5.setState({ loggedIn: true });
            _this5.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this5.goToSignUp();
          }
        }
      });
    }
  }, {
    key: 'logOut',
    value: function logOut() {
      this.setState({ loggedIn: false });
      this.setState({ username: null });
      this.goToDashboard();
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Countdown and Timer Functions
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'startCountdown',
    value: function startCountdown() {
      this.setState({ countdown: 3 });
      var interval = setInterval(this.countdown.bind(this), 1000);
      this.setState({ interval: interval });
    }
  }, {
    key: 'countdown',
    value: function countdown() {
      var current = this.state.countdown;
      current--;
      this.setState({ countdown: current });
      if (this.state.countdown === 0) {
        clearInterval(this.state.interval);
        this.goToWorkout();
      }
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      var current = this.state.workoutLengthInMins * 60;
      this.setState({ time: current });
      var interval = setInterval(this.timer.bind(this), 1000);
      this.setState({ interval: interval });
    }
  }, {
    key: 'timer',
    value: function timer() {
      var current = this.state.time;
      current--;
      this.setState({ time: current });
      if (this.state.time <= 0) {
        this.goToSummary();
      } else if (this.state.time % 60 === 0) {
        var next = this.state.currentExercise;
        next++;
        this.setState({ currentExercise: next });
        this.refs.workoutPage.highlightActiveTitle();
      }
    }
  }, {
    key: 'formatTime',
    value: function formatTime(seconds) {
      var mm = Math.floor(seconds / 60);
      var ss = seconds % 60;
      if (ss < 10) {
        ss = '0' + ss;
      }
      return mm + ':' + ss;
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Renders the components based ot the current state
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var toBeRendered = function toBeRendered() {
        if (_this6.state.currentState === 'Dashboard') {
          return _react2.default.createElement(_Dashboard2.default, { goToCountdown: _this6.goToCountdown, workoutHistory: _this6.state.workoutHistory, loggedIn: _this6.state.loggedIn });
        }
        if (_this6.state.currentState === 'Login') {
          return _react2.default.createElement(_Login2.default, { login: _this6.login });
        }
        if (_this6.state.currentState === 'SignUp') {
          return _react2.default.createElement(_SignUp2.default, { signup: _this6.signup });
        }
        if (_this6.state.currentState === 'Countdown') {
          return _react2.default.createElement(_Countdown2.default, { countdown: _this6.state.countdown });
        }
        if (_this6.state.currentState === 'Workout') {
          return _react2.default.createElement(_Workout2.default, { exercise: _this6.state.currentWorkout[_this6.state.currentExercise], timer: _this6.formatTime(_this6.state.time), countdown: _this6.state.countdown, goToSummary: _this6.goToSummary, goToDashboard: _this6.goToDashboard, ref: 'workoutPage' });
        }
        if (_this6.state.currentState === 'Summary') {
          return _react2.default.createElement(_Summary2.default, { goToDashboard: _this6.goToDashboard, currentWorkout: _this6.state.currentWorkout, workoutDate: _this6.state.workoutDate, workoutLengthInMins: _this6.state.workoutLengthInMins, loggedIn: _this6.state.loggedIn });
        }
      };

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_Header2.default, { username: this.state.username, goToLogin: this.goToLogin, goToSignUp: this.goToSignUp, loggedIn: this.state.loggedIn, logOut: this.logOut, showButtons: this.state.showButtons }),
        toBeRendered()
      );
    }
  }]);

  return App;
}(_react2.default.Component); // End of Class

exports.default = App;
// window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsImV4YW1wbGVFeGVyY2lzZURhdGEiLCJjdXJyZW50RXhlcmNpc2UiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRIaXN0b3J5IiwidXNlcm5hbWUiLCJsb2dnZWRJbiIsImNvdW50ZG93biIsInRpbWUiLCJzaG93QnV0dG9ucyIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJnb1RvV29ya291dCIsImJpbmQiLCJnb1RvU3VtbWFyeSIsImdvVG9EYXNoYm9hcmQiLCJnb1RvQ291bnRkb3duIiwiZ29Ub0xvZ2luIiwiZ29Ub1NpZ25VcCIsImdldFdvcmtvdXRIaXN0b3J5Iiwic2VuZFdvcmtvdXREYXRhIiwibG9nT3V0IiwibG9naW4iLCJzaWdudXAiLCJzZXRTdGF0ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YVR5cGUiLCJkYXRhIiwiY29tcGxldGUiLCJmaXJzdEZpdmUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzbGljZSIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxlbmd0aE9mV29ya291dCIsImxvZyIsInR5cGUiLCJzdHJpbmdpZnkiLCJkYXRlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwicGFzc3dvcmQiLCJhbGVydCIsInNldEludGVydmFsIiwiY3VycmVudCIsInRpbWVyIiwibmV4dCIsInJlZnMiLCJ3b3Jrb3V0UGFnZSIsImhpZ2hsaWdodEFjdGl2ZVRpdGxlIiwic2Vjb25kcyIsIm1tIiwiTWF0aCIsImZsb29yIiwic3MiLCJ0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SUFBM0IsQ0FBakYsRUFBbUgsV0FBVyxPQUFLVixLQUFMLENBQVdTLFNBQXpJLEVBQW9KLGFBQWEsT0FBS00sV0FBdEssRUFBbUwsZUFBZSxPQUFLQyxhQUF2TSxFQUFzTixLQUFJLGFBQTFOLEdBQVI7QUFDRDtBQUNELFlBQUksT0FBS2hCLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixTQUFoQyxFQUEyQztBQUN6QyxpQkFBUSw4QkFBQyxpQkFBRCxJQUFTLGVBQWUsT0FBS2UsYUFBN0IsRUFBNEMsZ0JBQWdCLE9BQUtoQixLQUFMLENBQVdFLGNBQXZFLEVBQXVGLGFBQWEsT0FBS0YsS0FBTCxDQUFXSyxXQUEvRyxFQUE0SCxxQkFBcUIsT0FBS0wsS0FBTCxDQUFXWSxtQkFBNUosRUFBaUwsVUFBVSxPQUFLWixLQUFMLENBQVdRLFFBQXRNLEdBQVI7QUFDRDtBQUNGLE9BbkJEOztBQXFCQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDRSxzQ0FBQyxnQkFBRCxJQUFRLFVBQVUsS0FBS1IsS0FBTCxDQUFXTyxRQUE3QixFQUF1QyxXQUFXLEtBQUtXLFNBQXZELEVBQWtFLFlBQVksS0FBS0MsVUFBbkYsRUFBK0YsVUFBVSxLQUFLbkIsS0FBTCxDQUFXUSxRQUFwSCxFQUE4SCxRQUFRLEtBQUtjLE1BQTNJLEVBQW1KLGFBQWEsS0FBS3RCLEtBQUwsQ0FBV1csV0FBM0ssR0FERjtBQUVHOEQ7QUFGSCxPQURGO0FBTUQ7Ozs7RUE1UmVFLGdCQUFNQyxTLEdBOFJ0Qjs7a0JBRWE3RSxHO0FBQ2YiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIuanN4JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQuanN4JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLmpzeCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL0NvdW50ZG93bi5qc3gnO1xuaW1wb3J0IFBhc3RXb3Jrb3V0IGZyb20gJy4vUGFzdFdvcmtvdXQuanN4JztcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAuanN4JztcbmltcG9ydCBXb3Jrb3V0IGZyb20gJy4vV29ya291dC5qc3gnO1xuaW1wb3J0IFN1bW1hcnkgZnJvbSAnLi9TdW1tYXJ5LmpzeCc7XG5pbXBvcnQgZXhhbXBsZUV4ZXJjaXNlRGF0YSBmcm9tICcuL2V4YW1wbGVFeGVyY2lzZURhdGEnO1xuaW1wb3J0ICcuLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnLFxuICAgICAgY3VycmVudFdvcmtvdXQ6IGV4YW1wbGVFeGVyY2lzZURhdGEsXG4gICAgICBjdXJyZW50RXhlcmNpc2U6IDAsXG4gICAgICB3b3Jrb3V0RGF0ZTogbnVsbCxcbiAgICAgIHdvcmtvdXRIaXN0b3J5OiBbXSxcbiAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgbG9nZ2VkSW46IGZhbHNlLFxuICAgICAgY291bnRkb3duOiAzLFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIHNob3dCdXR0b25zOiB0cnVlLFxuICAgICAgd29ya291dExlbmd0aEluTWluczogMTVcbiAgICB9O1xuXG4gICAgdGhpcy5nb1RvV29ya291dCA9IHRoaXMuZ29Ub1dvcmtvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9TdW1tYXJ5ID0gdGhpcy5nb1RvU3VtbWFyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCA9IHRoaXMuZ29Ub0Rhc2hib2FyZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub0NvdW50ZG93biA9IHRoaXMuZ29Ub0NvdW50ZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub0xvZ2luID0gdGhpcy5nb1RvTG9naW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9TaWduVXAgPSB0aGlzLmdvVG9TaWduVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFdvcmtvdXRIaXN0b3J5ID0gdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZFdvcmtvdXREYXRhID0gdGhpcy5zZW5kV29ya291dERhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ251cCA9IHRoaXMuc2lnbnVwLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBjaGFuZ2UgdGhlIHZpZXcgb24gdGhlIGFwcFxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgZ29Ub0Rhc2hib2FyZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0J1dHRvbnM6IHRydWV9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbikge1xuICAgICAgdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnTG9naW4nfSlcbiAgfVxuXG4gIGdvVG9TaWduVXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU2lnblVwJ30pXG4gIH1cblxuICBnb1RvQ291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ0NvdW50ZG93bid9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IDB9KTtcbiAgIC8vIHRoaXMuZ2V0RXhlcmNpc2VzKCk7IC8vdW5jb21tZW50IHRvIGZldGNoIGZyb20gZGJcbiAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XG4gIH1cblxuICBnb1RvV29ya291dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdXb3Jrb3V0J30pO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgZ29Ub1N1bW1hcnkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU3VtbWFyeSd9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogdHJ1ZX0pO1xuICAgIHZhciBjdXJyZW50RGF0ZSA9IERhdGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0RGF0ZTogY3VycmVudERhdGV9KTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnNlbmRXb3Jrb3V0RGF0YSgpO1xuICAgIH1cbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBzZW5kIHJlcXVlc3RzIHRvIHRoZSBzZXJ2ZXJcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIGdldFdvcmtvdXRIaXN0b3J5KCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2hpc3RvcnknLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIGZpcnN0Rml2ZSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZVRleHQpLnNsaWNlKDAsIDUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0SGlzdG9yeTogZmlyc3RGaXZlfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEV4ZXJjaXNlcygpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy93b3Jrb3V0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGVyY2lzZSBkYXRhOicsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50V29ya291dDogSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlVGV4dCl9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VuZFdvcmtvdXREYXRhKCkge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvYWRkV29ya291dCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICBkYXRlOiBEYXRlKCksXG4gICAgICAgIGN1cnJlbnRXb3Jrb3V0OiB0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0LFxuICAgICAgICBsZW5ndGhPZldvcmtvdXQ6IHRoaXMuc3RhdGUud29ya291dExlbmd0aEluTWluc1xuICAgICAgfSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNmdWxseSBwb3N0ZWQgZGF0YSEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBsb2dpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIHZhciBwYXNzd29yZCA9IGRhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb21wbGV0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gXCJMb2cgaW4gc3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IHVzZXJuYW1lfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9nZ2VkSW46IHRydWV9KTtcbiAgICAgICAgICB0aGlzLmdvVG9EYXNoYm9hcmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlVzZXJuYW1lIGFuZCBQYXNzd29yZCBJbnZhbGlkXCIpO1xuICAgICAgICAgIHRoaXMuZ29Ub0xvZ2luKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNpZ251cChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIHZhciBwYXNzd29yZCA9IGRhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29tcGxldGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09IFwiVXNlciBDcmVhdGVkXCIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xuICAgICAgICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3N3b3JkIEludmFsaWRcIik7XG4gICAgICAgICAgdGhpcy5nb1RvU2lnblVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvZ091dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogbnVsbH0pO1xuICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIENvdW50ZG93biBhbmQgVGltZXIgRnVuY3Rpb25zXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuICBzdGFydENvdW50ZG93bigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IDN9KTtcbiAgICB2YXIgaW50ZXJ2YWw9IHNldEludGVydmFsKHRoaXMuY291bnRkb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgIHRoaXMuc2V0U3RhdGUoe2ludGVydmFsOiBpbnRlcnZhbH0pO1xuICB9XG5cbiAgY291bnRkb3duKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jb3VudGRvd247XG4gICAgY3VycmVudC0tO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogY3VycmVudH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZG93biA9PT0gMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICAgIHRoaXMuZ29Ub1dvcmtvdXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zICogNjA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGltZXIuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICB0aW1lcigpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUudGltZTtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpbWUgPD0gMCkge1xuICAgICAgdGhpcy5nb1RvU3VtbWFyeSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50aW1lICUgNjAgPT09IDApIHtcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2U7XG4gICAgICBuZXh0Kys7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IG5leHR9KTtcbiAgICAgIHRoaXMucmVmcy53b3Jrb3V0UGFnZS5oaWdobGlnaHRBY3RpdmVUaXRsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICAgIHZhciBtbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICB2YXIgc3MgPSBzZWNvbmRzICUgNjA7XG4gICAgaWYgKHNzIDwgMTApIHtcbiAgICAgIHNzID0gJzAnICsgc3M7XG4gICAgfVxuICAgIHJldHVybiBtbSArICc6JyArIHNzO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFJlbmRlcnMgdGhlIGNvbXBvbmVudHMgYmFzZWQgb3QgdGhlIGN1cnJlbnQgc3RhdGVcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9CZVJlbmRlcmVkID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnRGFzaGJvYXJkJykge1xuICAgICAgICByZXR1cm4gKDxEYXNoYm9hcmQgZ29Ub0NvdW50ZG93bj17dGhpcy5nb1RvQ291bnRkb3dufSB3b3Jrb3V0SGlzdG9yeT17dGhpcy5zdGF0ZS53b3Jrb3V0SGlzdG9yeX0gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ0xvZ2luJykge1xuICAgICAgICAgIHJldHVybiAoPExvZ2luIGxvZ2luPXt0aGlzLmxvZ2lufSAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdTaWduVXAnKSB7XG4gICAgICAgICAgcmV0dXJuICg8U2lnblVwIHNpZ251cD17dGhpcy5zaWdudXB9ICAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdDb3VudGRvd24nKSB7XG4gICAgICAgICAgcmV0dXJuICg8Q291bnRkb3duIGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1dvcmtvdXQnKSB7XG4gICAgICAgIHJldHVybiAoPFdvcmtvdXQgZXhlcmNpc2U9e3RoaXMuc3RhdGUuY3VycmVudFdvcmtvdXRbdGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2VdfSB0aW1lcj17dGhpcy5mb3JtYXRUaW1lKHRoaXMuc3RhdGUudGltZSl9IGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IGdvVG9TdW1tYXJ5PXt0aGlzLmdvVG9TdW1tYXJ5fSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IHJlZj1cIndvcmtvdXRQYWdlXCIgLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU3VtbWFyeScpIHtcbiAgICAgICAgcmV0dXJuICg8U3VtbWFyeSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IGN1cnJlbnRXb3Jrb3V0PXt0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0fSB3b3Jrb3V0RGF0ZT17dGhpcy5zdGF0ZS53b3Jrb3V0RGF0ZX0gd29ya291dExlbmd0aEluTWlucz17dGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zfSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gLz4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgIDxIZWFkZXIgdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IGdvVG9Mb2dpbj17dGhpcy5nb1RvTG9naW59IGdvVG9TaWduVXA9e3RoaXMuZ29Ub1NpZ25VcH0gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IGxvZ091dD17dGhpcy5sb2dPdXR9IHNob3dCdXR0b25zPXt0aGlzLnN0YXRlLnNob3dCdXR0b25zfS8+XG4gICAgICAgIHt0b0JlUmVuZGVyZWQoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59IC8vIEVuZCBvZiBDbGFzc1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4vLyB3aW5kb3cuQXBwID0gQXBwOyJdfQ==