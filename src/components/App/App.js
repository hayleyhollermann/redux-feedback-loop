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
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br/>
          <Route exact path="/feeling" component={Feeling}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/supported" component={Supported}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/review" component={Review}/>
          <Route exact path="/thanks" component={Thanks}/>
        </div>
      </Router>
    );
  }
}

export default App;
