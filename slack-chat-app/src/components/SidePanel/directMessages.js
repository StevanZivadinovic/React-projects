import {useState, useEffect} from 'react';
import Firebase from './../../config';
import {setCurrentChannel} from './../../actions/index';
import {connect} from 'react-redux';
const DirectMessages = (props) => {
   
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    
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
   
   
    return ( <div >
        <div className='directMessagesUsers'>
            <div className='header'>

        <img src="https://img.icons8.com/fluent-systems-regular/20/000000/message-read.png"/><span>DIRECT MESS({users.length})</span>
            </div>
            <span className='plus'><img src="https://img.icons8.com/android/12/000000/plus.png"/></span>
        </div>

        <ul className='listOfUsers'>

            {users.length>0 && users.map(user=>{
                console.log(user);
                return (user?<li key={Math.random()} onClick={()=>setChannelToState({nameOfChannel:user})}><span>@{user } {currentUser.displayName===user ? <img src="https://img.icons8.com/emoji/10/000000/green-circle-emoji.png"/>:<img src="https://img.icons8.com/emoji/10/000000/red-circle-emoji.png"/>}</span></li>
               : <li onClick={()=>setChannelToState({nameOfChannel:user})}>#{user}</li>)
            //    onClick={()=>setChannelToState(channel)}
            })}
        </ul>
 </div> );
}


 
export default connect(null, {setCurrentChannel})(DirectMessages);