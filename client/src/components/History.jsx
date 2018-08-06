import React from 'react';
// import FitChart from './FitChart.jsx';
import FitBarChart from './FitBarChart.jsx';
import FitBarMonthChart from './FitBarMonthChart.jsx';
import FitBarYearChart from './FitBarYearChart.jsx';
import PastWorkout from './PastWorkout.jsx';
import './../css/style.css';
// import $ from 'jquery';

// var showMonth = {
  
// };
// var showYear = {

// };
// {
class History extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chartView: 'week'
    };
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(option) {
    this.setState({
      chartView: option
    })   
  }

  renderView() {
    var view = this.state.chartView;
    if (view === 'week') {
      return <FitBarChart className="" workoutHistory={this.props.workoutHistory} />
    } else if (view === 'month') {
      return <FitBarMonthChart className="" workoutHistory={this.props.workoutHistory} />
    } else {
      return <FitBarYearChart className="" workoutHistory={this.props.workoutHistory} />
    }
  }

  render () {
    return (
      <div className="history">
        <h1> History </h1>
        {this.props.loggedIn && this.props.workoutHistory.map(indivWorkout => <PastWorkout date={indivWorkout.date} lengthOfWorkout={indivWorkout.lengthOfWorkout} key={indivWorkout._id}/>)}
        {this.props.loggedIn && 
          <div>
           <button onClick={() => this.changeView('week')}>Current Week Fitness Trend</button>
            <button onClick={() => this.changeView('month')}>Current Month Fitness Trend</button>
            <button onClick={() => this.changeView('year')}>Current Year Fitness Trend</button>
            {this.renderView()}
          </div>
        }
        {!this.props.loggedIn && (<span className='historyNotLoggedIn'>You are not currently logged in. Please Log In or Sign Up to view Workout History.</span>)}
      </div>)
    
  }
}

// var History = (props) => (
//   <div className="history">
//     <h1> History </h1>
//     {console.log('HISTORY', props)}
//     {props.loggedIn && props.workoutHistory.map(indivWorkout => <PastWorkout date={indivWorkout.date} lengthOfWorkout={indivWorkout.lengthOfWorkout} key={indivWorkout._id}/>)}
//     {props.loggedIn && <div><button>Current Month Fitness Trend</button>
//       <button>Current Year Fitness Trend</button></div>}
//     {props.loggedIn && (<FitBarChart workoutHistory={props.workoutHistory} />)} 
//     {props.loggedIn && (<FitBarMonthChart workoutHistory={props.workoutHistory} />)} 
//     {props.loggedIn && (<FitBarYearChart workoutHistory={props.workoutHistory} />)}
//     {!props.loggedIn && (<span className='historyNotLoggedIn'>You are not currently logged in. Please Log In or Sign Up to view Workout History.</span>)}
//   </div>
// );


export default History;
// window.History = History;
