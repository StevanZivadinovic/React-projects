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
            // case actionTypes.SET_TERM:
            //     return{
            //         ...initalUserState,
            //         isLoading:false
            //     }
            default:
                return state;
    }
        
}

const initialChannelState = {
    currentChannel: null
}

const channel_reducer = (state=initialChannelState, action)=>{
    switch(action.type){
        case actionTypes.SET_CURRENT_CHANNEL:
            return{
                ...state,
                currentChannel:action.payload.currentChannel
            }
            default:
                return state;
            
    }
}
const initialSetTermState={
    term:''
}

const term_reducer = (state=initialSetTermState, action)=>{
    switch(action.type){
        case actionTypes.SET_TERM:
            return{
                ...state,
                term:action.payload.term
            }
            default:
                return state;
            
    }
}
const initialSetUsersState={
    users:[]
}
const users_reducer = (state=initialSetUsersState, action)=>{
    switch(action.type){
        case actionTypes.SET_USERS:
            return{
                ...state,
                users3:action.payload.users2
            }
            default:
                return state;
            
    }
}
    

const rootReducer = combineReducers({
    user:user_reducer,
    channel:channel_reducer,
    term:term_reducer,
    users3:users_reducer
})

export default rootReducer;