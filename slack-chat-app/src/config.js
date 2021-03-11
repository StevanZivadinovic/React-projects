import firebase from 'firebase/app';
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
  firebase.initializeApp(firebaseConfig);
  export default firebase;