import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Feeling extends Component {
  state = {
    rating: '',
  }

  setRating = (event) => {
    this.setState({
      rating: event.target.value
    })
  }

  handleClick = () => {
    console.log('add rating in Feeling');
    
  }

  render() {

    return (
      <div>
          <h2>How are you feeling today?</h2>
          <div>
              <p>Feeling?</p>
              <input type="number" onChange={this.setRating}/>
              <button onClick={this.handleClick}>
                NEXT
              </button>
          </div>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps= (reduxState)=>{
    return reduxState;
  }


export default connect(mapReduxStateToProps)(withRouter(Feeling));