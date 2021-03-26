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