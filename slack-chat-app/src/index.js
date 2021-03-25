import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';//ovde uvodimo Router,
//u App.js pogledaj objasnjenje

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';//ovo instaliras preko npm
//ili/i je to google dodatak za redux;
import rootReducer from './reducers/index';
import 'semantic-ui-css/semantic.min.css';


const store = createStore(rootReducer, composeWithDevTools())//pri argument je reducer, drugi enhancer
//postoji jos jedan argument, koji se dodaje izmedju ova dva, ali on je opcion

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
