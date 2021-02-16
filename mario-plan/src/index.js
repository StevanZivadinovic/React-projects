import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';//createStore ugradjena funkicja u redux
//applyMiddleware je isto ugradjena funkcija, koristi se zajedno sa redux-thunk-om
import rootReducer from './store/reducers/rootReducers';
import {Provider} from 'react-redux'//isto ugradjena funkcija
import thunk from 'redux-thunk';//redux thunk mora da se instalira "npm install redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk));//reducer ide unutar store-a, tako se povezuju
//reducer i store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>{/**App tag obuhvatas Provider tagom */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

