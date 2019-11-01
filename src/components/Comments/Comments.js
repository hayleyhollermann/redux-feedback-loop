import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Comments extends Component {
  state = {
    comments: ''
  }

  setComments = (event) => {
    this.setState({
      rating: event.target.value
    })
  }

  handleClick = () => {
    console.log('add comments');
    
  }

  render() {

    return (
      <div>
        <h2>Any comments you want to leave?</h2>
          <div>
              <p>Comments</p>
              <input type="text" onChange={this.setComments}/>
              <button onClick={this.handleClick}>
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

export default connect(mapReduxStateToProps)(withRouter(Comments));
