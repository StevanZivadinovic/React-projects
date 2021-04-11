import MessagesHeader from './messagesHeader';
import  MessageForm from './messageForm';
import {useState, useEffect} from 'react';
import Firebase from './../../config';
import Message from './message'


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
let preuzmi=(b)=>{
  a.innerHTML+=`<div class='list-item'><img width='30px' src='${b.user.avatar}'><li class='${b.user.id===user1.currentUser.uid?"message_self":''}'> ${b.content}</li></div>`;
  
}
useEffect(() => {
  if(channel1.currentChannel && user1){
    a.innerHTML='';
    
        Firebase.default.firestore().collection('messages')
        .where('channel','==',channel1.currentChannel.nameOfChannel).onSnapshot(snapShot => {
          let initialArray=new Array();
          
          snapShot.docChanges().forEach(change=>{
            initialArray.push(change.doc.data())
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