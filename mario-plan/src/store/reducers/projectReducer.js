const initState={
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
};

let authReducer = (state=initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action, action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error', action.err)
            return state;
        
        // case 'GET_PROJECT':
        //     console.log('project is getted')
        //      return {state};
        default:
        return state;
    }

    
}

export default authReducer;