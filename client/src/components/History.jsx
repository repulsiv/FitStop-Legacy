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

var History = (props) => (
  <div className="history">
    <h1> History </h1>
    {console.log('HISTORY', props)}
    {props.loggedIn && props.workoutHistory.map(indivWorkout => <PastWorkout date={indivWorkout.date} lengthOfWorkout={indivWorkout.lengthOfWorkout} key={indivWorkout._id}/>)}
    {props.loggedIn && <div><button>Current Month Fitness Trend</button>
      <button>Current Year Fitness Trend</button></div>}
    {props.loggedIn && (<FitBarChart workoutHistory={props.workoutHistory} />)} 
    {props.loggedIn && (<FitBarMonthChart workoutHistory={props.workoutHistory} />)} 
    {props.loggedIn && (<FitBarYearChart workoutHistory={props.workoutHistory} />)}
    {!props.loggedIn && (<span className='historyNotLoggedIn'>You are not currently logged in. Please Log In or Sign Up to view Workout History.</span>)}
  </div>
);


export default History;
// window.History = History;
