import {useState, useEffect} from 'react';
import Firebase from './../../config';
import {setCurrentChannel} from './../../actions/index';
import {connect} from 'react-redux';
import Ime from './ime';
const DirectMessages = (props) => {
   
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const [presence, setPresence] = useState(null)
    
    let usersFiltered=[];
    let addListeners = (userId)=>{
        Firebase.default.firestore().collection('messages')
        .onSnapshot(snapShot => {
           
            snapShot.docChanges().forEach(change=>{
                if(userId!==change.doc.data().user.id){
                    
                     if(!usersFiltered.includes(change.doc.data().user.name)){
                        usersFiltered.push(change.doc.data().user.name)
                    }  
              
                }
            })
            setUsers(usersFiltered)
            console.log(usersFiltered);
          
        })
    }
    useEffect(() => {
        if(props.props.user){

            setCurrentUser(props.props.user)
        }
        
        if(currentUser){
            addListeners(currentUser.uid)
        }
    }, [props.props])
    // console.log(currentUser.displayName)

    let setChannelToState=channel=>{
        props.setCurrentChannel(channel)//nije useState promenljiva nego action
    }


    // function setOnlineOffline(ime){
    //     Firebase.default.firestore().collection('usersConnected')
    //     .onSnapshot(snapShot=>{
    //         snapShot.docChanges().forEach(change=>{
    //             console.log(change.doc.data().name, ime)
    //             if(change.doc.data().name===ime){
    //                 // <img src="https://img.icons8.com/emoji/10/000000/green-circle-emoji.png"/>
    //                 console.log('green')
    //                 setPresence(true)
    //                 return true
    //             }
    //             if(change.doc.data().name!==ime)
    //             {
    //                 setPresence(false)
    //                 return false;
    //             }
             
    //         })
    //     })
    // }
function setOnlineOffline(user){

    Firebase.default.firestore().collection('usersConnected')
    .where('name','==', user)
    .onSnapshot(snapShot => {
      snapShot.docChanges().forEach(change=>{
          console.log(change.doc.data(), 'haj')
          if(change.doc.data()){

              setPresence(true)
          }else{
            setPresence(false)
          }
      })
    })
}
    
    return ( <div >
        <div className='directMessagesUsers'>
            <div className='header'>

        <img src="https://img.icons8.com/fluent-systems-regular/20/000000/message-read.png"/><span>DIRECT MESS({users.length})</span>
            </div>
            {/* <span className='plus'><img src="https://img.icons8.com/android/12/000000/plus.png"/></span> */}
        </div>

        <ul className='listOfUsers'>
            {users.length>0 && users.map(user=>{
        console.log(presence)
            
                console.log(user);
                //  onChange={setOnlineOffline(user)}
                return (user?<li key={Math.random()} onClick={()=>setChannelToState({nameOfChannel:user})} onChange={setOnlineOffline(user)}>
                    <span>@{user} { 
                    presence
       ? <img src="https://img.icons8.com/emoji/10/000000/green-circle-emoji.png"/>:<img src="https://img.icons8.com/emoji/10/000000/red-circle-emoji.png"/>}
                        </span></li>
               : <li onClick={()=>setChannelToState({nameOfChannel:user})}>#{user}</li>)
            //    onClick={()=>setChannelToState(channel)}
            })}
        </ul>
 </div> );
}


 
export default connect(null, {setCurrentChannel})(DirectMessages);