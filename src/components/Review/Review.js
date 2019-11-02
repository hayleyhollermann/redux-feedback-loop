import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';


class Feeling extends Component {
  
  submitFeedback = () => {
      console.log('submitting feedback');
      Axios.post('/feedback', this.props.feedbackQuestions)
      .then((response) => {
          console.log(response);
          this.props.dispatch({type: 'SUBMIT_FEEDBACK'})
      })
  }

  render() {

    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {this.props.feedbackQuestions.feeling}</p>
        <p>Understanding: {this.props.feedbackQuestions.understanding}</p>
        <p>Support: {this.props.feedbackQuestions.support}</p>
        <p>Comments: {this.props.feedbackQuestions.comments}</p>
        <br />
        <button onClick={this.submitFeedback}>Submit Feedback</button>
        <pre>{JSON.stringify(this.props.feedbackQuestions, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps= (reduxStore)=>{
    return reduxStore;
  }


export default connect(mapReduxStateToProps)(withRouter(Feeling));