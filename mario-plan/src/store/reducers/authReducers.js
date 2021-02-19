const initState={
    authError:null
};

let authReducer = (state=initState, action)=>{

    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('error')
            
            return {
                ...state,
                authError:'Login faild'
            }

            case 'LOGIN_SUCCESS':
                console.log('success');
                return {
                    ...state,
                    authError:null
                }

                default:
                    return state;
    
    }

    
}

export default authReducer;