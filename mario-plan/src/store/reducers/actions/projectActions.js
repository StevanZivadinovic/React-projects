export const createProject = (project)=>{
    return(dispatch, getState)=>{//posto koristimo thunk onda vracamo funkciju
        //inace bi vracali objekat i bila bi drugacija sintakasa samim tim


        //make async call to database
        dispatch({
            type:'CREATE_PROJECT', project:project
        })

    }
}