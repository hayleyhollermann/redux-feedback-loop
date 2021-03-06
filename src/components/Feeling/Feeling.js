import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Feeling extends Component {
  state = {
    rating: '',
    complete: false,
  }

  setRating = (event) => {
    this.setState({
      rating: event.target.value,
      complete: true,
    })
  }

  handleClick = () => {
    console.log('add rating in Feeling');
    this.props.dispatch({type: 'FEELING', payload: this.state.rating});
    if (this.state.complete){
      this.props.history.push('/understanding');
    }
  }

  render() {

    return (
      <div>
          <h2>How are you feeling today?</h2>
          <div>
            <p>Feeling?</p>
            {/* <input type="number" onChange={this.setRating}/> */}
            <select className="selectBar" onChange={this.setRating}>
              <option> </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button className="nextButton" onClick={this.handleClick}>
              NEXT
            </button>
          </div>
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapReduxStateToProps= (reduxStore)=>{
    return reduxStore;
  }


export default connect(mapReduxStateToProps)(withRouter(Feeling));