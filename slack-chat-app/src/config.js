//instalirao sam ova dva, ali pitanje da li je neophodno.
//npm install firebase
//npm install firebase --save

// import firebase from 'firebase/app';
import * as Firebase from 'firebase';//here I must import firebase in this way
//the solution above didnt work
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBF-Nn4MklzscNnkhny3B3Dzn374TJHJ2Y",
    authDomain: "slack-chat-app-ba4de.firebaseapp.com",
    projectId: "slack-chat-app-ba4de",
    storageBucket: "slack-chat-app-ba4de.appspot.com",
    messagingSenderId: "770919804457",
    appId: "1:770919804457:web:e838cf45d469209ad07638",
    measurementId: "G-RDJ5HYLECS"
  };
  // Initialize Firebase
   Firebase.default.initializeApp(firebaseConfig);
  console.log(Firebase.default.firestore())
  // const projectStorage = firebase.storage();
  // const projectFirestore = firebase.firestore();
  // const projectAuth = firebase.auth();
  // const timestamps= firebase.firestore.FieldValue.serverTimestamp()
  // export {projectStorage, projectFirestore, timestamps };
  
  export default Firebase;
  