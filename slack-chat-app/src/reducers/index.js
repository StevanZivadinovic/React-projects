import {combineReducers} from 'redux';
import * as actionTypes from './../actions/types';

const initalUserState={
    currentUser:null,
    isLoading:true
}


const user_reducer = (state=initalUserState, action)=>{

    switch(action.type){
        case actionTypes.SET_USER:
            return{
                currentUser:action.payload.currentUser,
                isLoading:false
            }
            case actionTypes.CLEAR_USER:
                return{
                    ...initalUserState,
                    isLoading:false
                }
            default:
                return state;
    }
        
}
    

const rootReducer = combineReducers({
    user:user_reducer
})

export default rootReducer;