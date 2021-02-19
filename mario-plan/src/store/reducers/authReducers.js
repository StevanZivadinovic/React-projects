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

            case 'SIGNOUT_SUCCESS':
                console.log('signout success')

            case 'SIGNUP_SUCCESS':
                console.log('signup success')
                return{
                    ...state,
                    authError:null
                }
            case 'SIGNUP_ERROR':
                return{

                    ...state,
                    authError:action.err.message
                }
                default:
                    return state;
    
    }

    
}

export default authReducer;