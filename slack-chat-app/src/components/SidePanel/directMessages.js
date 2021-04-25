import {useState, useEffect} from 'react';
import Firebase from './../../config';
const DirectMessages = (props) => {
   
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    useEffect(() => {
        if(props.props.user){

            setCurrentUser(props.props.user)
        }
        
    }, [props.props])
    console.log(currentUser.displayName)


    let usersFiltered=[];
    let addListeners = (userId)=>{
        Firebase.default.firestore().collection('messages')
        .onSnapshot(snapShot => {
           
            snapShot.docChanges().forEach(change=>{
                if(userId!==change.doc.data().user.id){
                    
                    usersFiltered.push(change.doc.data().user)
                    
                   
                }
            })
            let uniqueUsers = [];  
            usersFiltered.forEach(user=>{

                if(!uniqueUsers.includes(user)){
                    uniqueUsers.push(user)
                }
                console.log(uniqueUsers);
            })
            // setUsers(usersFiltered);
        })
    }
    
   


    useEffect(() => {
        if(currentUser){
            addListeners(currentUser.uid)
        }
    }, [])
   
    return ( <div >
        <div className='directMessagesUsers'>
            <div className='header'>

        <img src="https://img.icons8.com/fluent-systems-regular/20/000000/message-read.png"/><span>DIRECT MESS({users.length})</span>
            </div>
            <span className='plus'><img src="https://img.icons8.com/android/12/000000/plus.png"/></span>
        </div>

        {/* <ul className='listOfChannels'>
            {numOfChannels.length>0 && numOfChannels.map(channel=>{
                return (channel.nameOfChannel?<li key={Math.random()} onClick={()=>setChannelToState(channel)}>#{channel.nameOfChannel}</li>
               : <li onClick={()=>setChannelToState(channel)}>#{channel.name}</li>)
            })}
        </ul> */}
 </div> );
}
 
export default DirectMessages;