import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Feeling extends Component {

  render() {

    return (
      <div>
          <h2>How are you feeling today?</h2>
          <div>
              <p>Feeling?</p>
              <input type="number"/>
              <button>
                NEXT
              </button>
          </div>
      </div>
    );
  }
}

const mapReduxStateToProps= (reduxState)=>{
    return reduxState;
  }


export default connect(mapReduxStateToProps)(withRouter(Feeling));