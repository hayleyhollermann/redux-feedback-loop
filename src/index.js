import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// Reducers
const feedbackQuestions = (state = {}, action) => {
  if (action.type === 'FEELING'){
    console.log('feeling reducer');
    return {...state, feeling: action.payload}
  } else if (action.type === 'UNDERSTANDING'){
    console.log('understanding reducer');
    return {...state, understanding: action.payload}
  } else if (action.type === 'SUPPORTED'){
    console.log('understanding supported');
    return {...state, support: action.payload}
  } else if (action.type === 'COMMENTS'){
    console.log('understanding comments');
    return {...state, comments: action.payload}
  } 
  return state;
}




// Redux State / Store
const reduxStore = createStore(
  combineReducers({
    feedbackQuestions,
    // add reducers
  }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
