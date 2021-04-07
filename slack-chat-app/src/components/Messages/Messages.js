import MessagesHeader from './messagesHeader';
import  MessageForm from './messageForm';
import {useState, useEffect} from 'react';
import Firebase from './../../config'


const Messages = (props) => {
  
  let channel=props.state.stateProperty.channel;
  let user = props.state.stateProperty.user;
  const [ channel1, setChannel1] = useState('');
  const [ user1, setUser1] = useState('');
  const [messages, setMessages] = useState([])

  useEffect(() => {
        setChannel1(channel);
        setUser1(user)
  }, [channel.currentChannel])
//   console.log(channel1, user1);

  if(channel1.currentChannel && user1){
    // let initialArray=[]
    Firebase.default.firestore().collection('messages')
    .where('channel','==',channel1.currentChannel.nameOfChannel).get()
    .then(data=>{
        data.forEach(doc=>{
            console.log(doc.data())
            // initialArray.push()
            setMessages(...messages, doc.data())

        })
        console.log(messages) 
    })
  }


    return ( <div className='messagesMain'>
        <MessagesHeader></MessagesHeader>
        <div className="messages">
            </div>        
        <MessageForm></MessageForm>
    </div> );
}
 
export default Messages;