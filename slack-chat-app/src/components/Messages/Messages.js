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
  const [messages, setMessages] = useState('');

  useEffect(() => {
        setChannel1(channel);
        setUser1(user)
  }, [channel.currentChannel])
//   console.log(channel1, user1);

let v=[]

if(channel1.currentChannel && user1){

  
    
    Firebase.default.firestore().collection('messages')
    .where('channel','==',channel1.currentChannel.nameOfChannel).onSnapshot(snapShot => {
      let initialArray=new Array();
      snapShot.forEach(doc=>{
          
        initialArray.push(doc.data())
        
       

      })
      console.log((initialArray))
        // setMessages(initialArray);
      v=[...initialArray]
      })
    }
   
  console.log(v)
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
          {/* <ul>{displayMessages()}</ul> */}
            </div>        
        <MessageForm></MessageForm>
    </div> );
}
 
export default Messages;