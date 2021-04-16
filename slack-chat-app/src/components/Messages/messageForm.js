import Firebase from './../../config';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AddMedia from './addMedia';

const MessageForm = ({stateProperty, dispatch}) => {
  
  const [message, setMessage] = useState('');
  const [loading, setLoadig] = useState(false);
  const [channel, setChannel] = useState('');
  const [user, setUser] = useState(stateProperty.user.currentUser);
  const [modal, setModal] = useState(false)
  const [err, setErr]=useState([]);
  const [uploadState, setUploadState] = useState('');
  const [uploadTask, setUploadTask] = useState(null);
  const [storage, setStorage] = useState(Firebase.default.storage());
  const [percentUploaded, setPercentUploaded] = useState(0);
  const [errors, setErrors] = useState(null)



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

  let openModal = ()=>{
    setModal(true);
    document.querySelector('.mainMedia').style.display = 'flex';
  }
  let closeModal = ()=>{
    setModal(false);
    console.log(false);
  }

  let uploadFile =(file,metadata)=>{
    const pathToUpLoad = stateProperty.channel.currentChannel.id;
    let db = Firebase.default.firestore().collection('messages');
    const filePath = `chat/public/${file.name}`;

    setUploadState('uploading');
    storage.ref(filePath).put(file, metadata)//metadata nesto ne radi

   

     .on('state_changed',snap=>{
        let percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        setPercentUploaded(percentage);
      
    },
    (err)=>{
      console.log(err);
      setUploadState('error');
      // setUploadTask(null);
      setErrors(err);
    },
    ()=>{
     
      storage.ref(filePath).getDownloadURL()
      .then(downloadURL=>{//ovde dohvatas URL slike iz storage
        console.log(downloadURL)
        // sendFileMessage(downloadURL, ref, pathToUpLoad)
      })
      .catch(err=>{
        console.log(err);
      setUploadState('error');
      setUploadTask(null);
      setErrors(err);
      })
    }
    )
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
          <button onClick={openModal} className="uploadMedia">Upload Media</button>
          <img src="https://img.icons8.com/metro/26/000000/upload.png" />
          <AddMedia uploadFile={uploadFile} modal={modal} closeModal={closeModal}></AddMedia>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state=>({
  stateProperty:state
})

export default connect(mapStateToProps, null)(MessageForm);
