import authReducer from './authReducers';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';//cobineReducers je ugradjena funkcija

let rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer
});

export default rootReducer;