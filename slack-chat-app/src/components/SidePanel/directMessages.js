import {useState, useEffect} from 'react';
import Firebase from './../../config';
import {setCurrentChannel, setUsers1} from './../../actions/index';
import {connect} from 'react-redux';
import Ime from './ime';
const DirectMessages = (props) => {
  console.log(props);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const [presence, setPresence] = useState(null);
    const [new1, setNew1] = useState([])
    
    let usersFiltered=[];
 
    let addListeners = (userId)=>{
        Firebase.default.firestore().collection('messages')
        .onSnapshot(snapShot => {
           
            snapShot.docChanges().forEach(change=>{
                if(userId!==change.doc.data().user.id){
                   

                        if(!usersFiltered.includes(change.doc.data().user.name)){
                          
                           usersFiltered.push(
                              change.doc.data().user.name
                              
                           );
                       }  
                
              
                }
            })
            setUsers(usersFiltered)
           
          
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


   
    
    console.log(users)
 let newUsers=[];
    users.forEach(a=>{
        newUsers.push({name:a, presence1:false})
    })
    
    newUsers.forEach(user=>{
        
        Firebase.default.firestore().collection('usersConnected')
        .where('name','==', user.name)
        .onSnapshot(snapShot => {
            snapShot.docChanges().forEach(change=>{
                console.log(change.doc.data().name, user)
                if(change.doc.data().name){
                    user.presence1=true;   
                }
                
            })
        })
    })
    
    console.log(newUsers);
    setUsers1([...newUsers])
    let novi=[...newUsers]
   
    return ( <div >
        <div className='directMessagesUsers'>
            <div className='header'>

        <img src="https://img.icons8.com/fluent-systems-regular/20/000000/message-read.png"/><span>DIRECT MESS({users.length})</span>
            </div>
            {/* <span className='plus'><img src="https://img.icons8.com/android/12/000000/plus.png"/></span> */}
        </div>

        <ul className='listOfUsers'>
           
            { newUsers.length>0 && novi.map(user=>{
                // console.log(newUsers, novi)
            
                return (user?<li key={Math.random()} onClick={()=>setChannelToState({nameOfChannel:user.name})} >
                    <span>@{user.name} { 
                  user.presence1
       ? <img src="https://img.icons8.com/emoji/10/000000/green-circle-emoji.png"/>:<img src="https://img.icons8.com/emoji/10/000000/red-circle-emoji.png"/>}
                        </span></li>
               : <li onClick={()=>setChannelToState({nameOfChannel:user})}>#{user.name}</li>)
            //    onClick={()=>setChannelToState(channel)}
            })}
        </ul>
 </div> );
}

let setPropsToState = state=>({
    users1:state
})
 
export default connect(setPropsToState, {setCurrentChannel, setUsers1})(DirectMessages);