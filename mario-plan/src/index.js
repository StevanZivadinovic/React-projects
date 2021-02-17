import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux"; //createStore ugradjena funkicja u redux
//applyMiddleware je isto ugradjena funkcija, koristi se zajedno sa redux-thunk-om
import rootReducer from "./store/reducers/rootReducers";
import { Provider } from "react-redux"; //isto ugradjena funkcija
import thunk from "redux-thunk"; //redux thunk mora da se instalira "npm install redux-thunk"
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebaseConfig from './config/fbConfig';
import firebase from "firebase/app";
const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig) // redux bindings for firestore
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/**App tag obuhvatas Provider tagom */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
