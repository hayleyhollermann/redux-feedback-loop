import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Supported extends Component {

  render() {

    return (
      <div>
        <h2>How well are you being supported?</h2>
          <div>
              <p>Support?</p>
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

export default connect(mapReduxStateToProps)(withRouter(Supported));