import authReducer from './authReducers';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'
import {combineReducers} from 'redux';//cobineReducers je ugradjena funkcija

let rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore:firestoreReducer
});

export default rootReducer;