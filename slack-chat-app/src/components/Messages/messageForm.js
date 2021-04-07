import Firebase from './../../config';
import {useState} from 'react';
import {connect} from 'react-redux';

const MessageForm = (props) => {
  console.log(props)
  const [message, setMessage] = useState('');
  const [loading, setLoadig] = useState(false);
 const [channel, setChannel] = useState(props.stateProperty.channel.currentChannel &&
  props.stateProperty.channel.currentChannel.nameOfChannel);
 console.log(channel)
  let handleChange=(e)=>{
    setMessage(e.target.value)
  }

  let sendMessage = () =>{
    if(message){

      Firebase.default.firestore().collection('messages')
      .add({
        content:message,
        timestamp:Firebase.default.firestore.FieldValue.serverTimestamp(),
        user:{
          id:'',
          name:'',
          avatar:''
        }
      })
      .then(data=>{
        console.log('message is sent')
      })
      setLoadig(true);
    }
  }

  return (
    <div className="messageFormMain">
      <div className="inputText">
        <div>
          <span>
            <img src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
            <input onChange={handleChange} type="text" placeholder="Write your message" />
          </span>
        </div>
      </div>
      <div className="messageFormButton">
        <span>
          <img src="https://img.icons8.com/fluent-systems-filled/48/000000/edit-message.png" />
          <button onClick={sendMessage} className="addReplay">Add Replay</button>
          <button className="uploadMedia">Upload Media</button>
          <img src="https://img.icons8.com/metro/26/000000/upload.png" />
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state=>({
  stateProperty:state
})

export default connect(mapStateToProps, null)(MessageForm);
