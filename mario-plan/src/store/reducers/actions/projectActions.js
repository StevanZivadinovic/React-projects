import {useState} from 'react';
export const createProject = (project)=>{
    
    return(dispatch, getState,{getFirebase, getFirestore})=>{//posto koristimo thunk onda vracamo funkciju
        //inace bi vracali objekat i bila bi drugacija sintakasa samim tim

       
        //make async call to database
        let db = getFirestore();
        // let state1 = getState().auth.uid;
        // console.log(state1)
        // db.collection('user').doc(state1).get()
        //  .then((data)=>{
        //      if(data.data()){
        //         data.data();
        //         return data.data();
        //      }
        //  }).then((data)=>{
            db.collection('kolekcija').add({
                ...project,
                authorFirstName:'',
                authorLastName:'',
                authorId:'',
                created_at:new Date()
            }).then(()=>{
                dispatch({
                    type:'CREATE_PROJECT', project:project
                })
            }).catch((err)=>{
                dispatch({
                    type:'CREATE_PROJECT_ERROR', err
                })
            })
        //  })
       
      

        // dispatch({
        //            type:'CREATE_PROJECT', project:project
        //        })

       
       
        
 
     }
}
//pola funkcije poveyuje redux store sa unesenim podacima, 
//a druga polovina omogucava slanje podataka u firestore


