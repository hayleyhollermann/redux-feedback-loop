import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {

  render() {

    return (
      <div>
        <h2>How well are you understanding the content?</h2>
          <div>
              <p>Understanding?</p>
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

export default connect(mapReduxStateToProps)(withRouter(Understanding));