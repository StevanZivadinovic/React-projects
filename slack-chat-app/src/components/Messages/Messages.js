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
// let probni = document.querySelector('.probni');
let c = document.createElement('div');
if(channel1.currentChannel && user1){
  
    Firebase.default.firestore().collection('messages')
    .where('channel','==',channel1.currentChannel.nameOfChannel).onSnapshot(snapShot => {
      let initialArray=new Array();
      // setMessages(snapShot);
      snapShot.forEach(doc=>{
        initialArray.push(doc.data())
      })
      initialArray.forEach(b=>{
        // console.log(b.content)
        
        c.innerHTML+=`<div class='list-item'><img width='30px' src='${b.user.avatar}'><li class='${b.user.id===user1.currentUser.uid?"message_self":''}'> ${b.content}</li></div>`;
       
      })
      console.log(c)
     a.innerHTML=`${c}`;
      // snapShot.docChanges().forEach(change => {
      //   if (change.type === 'added') {
      //     console.log('New city: ', change.doc.data());
      //   }
      //    })
    })
    
    }
   
  // console.log(v)
    // let displayMessages=(messages1)=>{
    //   // console.log(messages1.length)
    //   messages1.map(message1=>{
        
    //     return console.log(message1)
    //     // <Message
    //     // key={message.timestamp}
    //     // message={message}
    //     // user={message.user}

    //     // />
    //   })
    // }

    
    return ( <div className='messagesMain'>
        <MessagesHeader></MessagesHeader>
        <div className="messages">
          <ul className='ulMessages'></ul>
            </div>        
        <MessageForm></MessageForm>
    </div> );
}
 
export default Messages;