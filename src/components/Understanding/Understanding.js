import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {
  state = {
      rating: '',
    }
  
  setRating = (event) => {
    this.setState({
      rating: event.target.value
    })
  }

  handleClick = () => {
    console.log('add rating in Understanding');
    this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.rating})

  }

  render() {

    return (
      <div>
        <h2>How well are you understanding the content?</h2>
          <div>
            <p>Understanding?</p>
              {/* <input type="number" onChange={this.setRating}/> */}
            <select onChange={this.setRating}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
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

export default connect(mapReduxStateToProps)(withRouter(Understanding));