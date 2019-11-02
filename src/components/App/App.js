import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import { connect } from 'react-redux'; 
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br/>
            <ul>
              <li>
                <Link to="/feeling">How are you feeling</Link>
              </li>
              <li>
                <Link to="/understanding">How well are you understanding the content</Link>
              </li>
              <li>
                <Link to="/supported">How well are you being supported</Link>
              </li>
              <li>
                <Link to="/comments">Any comments you want to leave</Link>
              </li>
              <li>
                <Link to="/review">Review Feedback</Link>
              </li>
            </ul>
          <Route exact path="/feeling" component={Feeling}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/supported" component={Supported}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/review" component={Review}/>
        </div>
      </Router>
    );
  }
}

export default App;
