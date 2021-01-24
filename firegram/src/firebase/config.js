//npm install firebase
import * as firebase from 'firebase/app';

import 'firebase/storage'//storage SDK
import 'firebase/firestore'//firestore SDK

  var firebaseConfig = {
    apiKey: "AIzaSyA8z_zGGseZJVfZ_aga6BbyCI5BI7sxsy8",
    authDomain: "firegram-2391c.firebaseapp.com",
    projectId: "firegram-2391c",
    storageBucket: "firegram-2391c.appspot.com",
    messagingSenderId: "60938914057",
    appId: "1:60938914057:web:f2dd07275e5dc74f4f2bd8",
    measurementId: "G-YVTHEZLCJ7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectDB = firebase.firestore();//inace sam pisao samo db
  export {projectStorage, projectDB };
