import MessagesHeader from './messagesHeader';
import  MessageForm from './messageForm';
import {useState, useEffect} from 'react';
import Firebase from './../../config';
import Message from './message';
import moment from 'moment'


const Messages = (props) => {
  
  let channel=props.state.stateProperty.channel;
  let user = props.state.stateProperty.user;
  const [ channel1, setChannel1] = useState('');
  const [ user1, setUser1] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
        setChannel1(channel);
        setUser1(user)
  }, [channel.currentChannel])
  console.log(channel1, user1);


// var v=document.createElement('div')
let a = document.querySelector('.ulMessages');
let time = Math.floor(new Date().getTime()/1000)

let preuzmi=(b)=>{
  // console.log(moment(b.timestamp.toMillis()).fromNow())
  console.log(b.image)
  if(b.content){
    a.innerHTML+=`<div class='${b.user.id===user1.currentUser.uid ? "list-item":"list-item-stranger"}'><img width='35px' src='${b.user.avatar}'><li class='${b.user.id===user1.currentUser.uid?"message_self":"message_stranger"}'> ${b.user.name} <span>${b.timestamp ? moment(b.timestamp.toMillis()).fromNow():''}</span><br>${b.content}</li></div>`;
  }
  if(b.image){
      a.innerHTML+=`<div class='${b.user.id===user1.currentUser.uid ? "list-item":"list-item-stranger"}'><img width='35px' src='${b.user.avatar}'><li class='${b.user.id===user1.currentUser.uid?"message_self":"message_stranger"}'> ${b.user.name} <span>${b.timestamp ? moment(b.timestamp.toMillis()).fromNow():''}</span><br>${b.image}</li></div>`;
 
  }
  
}
useEffect(() => {
  if(channel1.currentChannel && user1){
    a.innerHTML='';
    
        Firebase.default.firestore().collection('messages')
        .where('channel','==',channel1.currentChannel.nameOfChannel)
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapShot => {
     
          
          snapShot.docChanges().forEach(change=>{
           
            // console.log(change.doc.data())
            if (change.type === 'added') {
            preuzmi(change.doc.data())
            
            }
          })
       
        })
        
        }
}, [channel1.currentChannel])

   
 

    
    return ( <div className='messagesMain'>
        <MessagesHeader></MessagesHeader>
        <div className="messages">
          <ul className='ulMessages'></ul>
            </div>        
        <MessageForm></MessageForm>
    </div> );
}
 
export default Messages;