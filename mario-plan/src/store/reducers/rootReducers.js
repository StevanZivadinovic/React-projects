import authReducer from './authReducers';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'//povezuje se na bazu podataka-firestore
import {combineReducers} from 'redux';//cobineReducers je ugradjena funkcija
import {firebaseReducer} from 'react-redux-firebase';//importujes 
//authentification reducer iz firebase-a

let rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    
});

export default rootReducer;