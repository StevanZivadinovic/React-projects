export const createProject = (project)=>{
    return(dispatch, getState,{getFirebase, getFirestore})=>{//posto koristimo thunk onda vracamo funkciju
        //inace bi vracali objekat i bila bi drugacija sintakasa samim tim


        //make async call to database
        let db = getFirestore();

        

        db.collection('kolekcija').add({
            ...project,
            authorFirstName:'Net'
        }).then(()=>{
            dispatch({
                type:'CREATE_PROJECT', project:project
            })
        }).catch((err)=>{
            dispatch({
                type:'CREATE_PROJECT_ERROR', err
            })
        })

        // dispatch({
        //            type:'CREATE_PROJECT', project:project
        //        })

       
       
        
 
     }
}
//pola funkcije poveyuje redux store sa unesenim podacima, 
//a druga polovina omogucava slanje podataka u firestore


// export const getUserData = (uid)=>{
//     return(dispatch, getState, {getFirebase, getFirestore})=>{
//         let db = getFirestore();
//         db.collection('user').doc(uid).get()
//         .then((data)=>{
//             console.log(data.data());
//             return data.data();
//         })
//         .then((data)=>{
//          dispatch({
//              type:'GET_PROJECT', data
//          })
//      })
//     }
// }