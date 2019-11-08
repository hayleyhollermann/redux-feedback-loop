import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {
  state = {
      rating: '',
      complete: false,
    }
  
  setRating = (event) => {
    this.setState({
      rating: event.target.value,    
      // checks to see if rating has been set
      complete: true,
    })
  }

  handleClick = () => {
    console.log('add rating in Understanding');
    this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.rating});
    if (this.state.complete){
      this.props.history.push('/supported');
    }  
  }

  render() {

    return (
      <div>
        <h2>How well are you understanding the content?</h2>
          <div>
            <p>Understanding?</p>
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

export default connect(mapReduxStateToProps)(withRouter(Understanding));