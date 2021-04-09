import Firebase from './../../config';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const MessageForm = ({stateProperty, dispatch}) => {
  
  const [message, setMessage] = useState('');
  const [loading, setLoadig] = useState(false);
  const [channel, setChannel] = useState('');
  const [user, setUser] = useState(stateProperty.user.currentUser);
  
  const [err, setErr]=useState([])
 useEffect(() => {
  setChannel(stateProperty.channel.currentChannel)
 }, [stateProperty.channel.currentChannel])
 
  let handleChange=(e)=>{
    setMessage(e.target.value)
  }

  let sendMessage = () =>{
  

    if(message){
      setLoadig(true);
      Firebase.default.firestore().collection('messages')
      .add({
        content:message,
        timestamp:Firebase.default.firestore.FieldValue.serverTimestamp(),
        channel:channel.nameOfChannel,
        user:{
          id:user.uid,
          name:user.displayName,
          avatar:user.photoURL
        }
      })
      .then(data=>{
        console.log('message is sent')
        setLoadig(false);
        setMessage('');
        setErr([])
      }).catch(err=>{
        setErr(err)
      })
      
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
          <button disabled={loading} onClick={sendMessage} className="addReplay">Add Replay</button>
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
