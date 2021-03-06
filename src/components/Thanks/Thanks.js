import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Thanks extends Component {
  
  newFeedback = () => {
    this.props.history.push('/feeling');
  }

  render() {

    return (
      <div>
        <h1>Thanks for your feedback!!</h1>
        <button className="nextButton" onClick={this.newFeedback}>Leave New Feedback</button>
      </div>
    );
  }
}

const mapReduxStateToProps= (reduxStore)=>{
    return reduxStore;
  }


export default connect(mapReduxStateToProps)(withRouter(Thanks));