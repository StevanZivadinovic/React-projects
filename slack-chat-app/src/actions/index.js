import * as actionTypes from './types';

export const SetUser = user=>{
    return{
        type:actionTypes.SET_USER,
        payload:{
            currentUser:user
        }
    }
}

    export const ClearUser = user =>{
        return{
            type:actionTypes.CLEAR_USER,
            
        }
    }

    // Channel Actions

    export const setCurrentChannel=channel=>{
        return{
            type:actionTypes.SET_CURRENT_CHANNEL,
            payload:{
                currentChannel:channel
            }
        }
    }
//Set Search term
    export const setTerm1 = term =>{
        return{
            type:actionTypes.SET_TERM,
            payload:{
                currentTerm:term
            }
            
        }
    }

//Set Users 
export const setUsers1 = users =>{
    return{
        type:actionTypes.SET_USERS,
        payload:{
            users2:users
        }
        
    }
}