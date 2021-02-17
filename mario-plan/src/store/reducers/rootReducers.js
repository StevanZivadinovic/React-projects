import authReducer from './authReducers';
import projectReducer from './projectReducer';
import { firebaseReducer } from 'react-redux-firebase'
import {combineReducers} from 'redux';//cobineReducers je ugradjena funkcija

let rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    // firebase: firebaseReducer
});

export default rootReducer;