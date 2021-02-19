//npm install firebase
//npm install react-redux-firebase redux-firestore

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { getFirestore, reduxFirestore } from "redux-firestore";

 var firebaseConfig = {
    apiKey: "AIzaSyBmdymkniynaEVF_a_SxCUGEUcJUqBTbPc",
    authDomain: "web-app-8f4d1.firebaseapp.com",
    databaseURL: "https://web-app-8f4d1.firebaseio.com",
    projectId: "web-app-8f4d1",
    storageBucket: "web-app-8f4d1.appspot.com",
    messagingSenderId: "821482055108",
    appId: "1:821482055108:web:6c7ca52e7b8f98cb67f091",
    measurementId: "G-CPY2FE1L0C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshot: true});
  // reduxFirestore(firebase, firebaseConfig) // redux bindings for firestore

  export default firebaseConfig;

