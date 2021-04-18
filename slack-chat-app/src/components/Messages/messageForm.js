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
  const [errors, setErrors] = useState(null);
  const [URL, setURL] = useState(null)



 useEffect(() => {
  setChannel(stateProperty.channel.currentChannel)
 }, [stateProperty.channel.currentChannel])
 
  let handleChange=(e)=>{
    setMessage(e.target.value)
  }
  

  let sendMessage = (downloadURL=null) =>{
    console.log('neispravno poslato');
   
    
    
    if(message || downloadURL){
      // console.log(message, downloadURL)
      if(user){
        console.log(user);
      
      let mess={ 
        timestamp:Firebase.default.firestore.FieldValue.serverTimestamp(),
      channel:channel.nameOfChannel,
      user:{
        id:user.uid,
        name:user.displayName,
        avatar:user.photoURL
      }}

      if(downloadURL!==null){
        mess['image']=downloadURL;

      }else{
        mess['content']=message;
      }

      setLoadig(true);
      Firebase.default.firestore().collection('messages')
      .add(mess)
      .then(data=>{
        console.log('message is sent')
        setLoadig(false);
        setMessage('');
        setURL(null)
        setErr([])
        document.querySelector('#textMessage').value = '';

      }).catch(err=>{
        setErr(err)
      })
      
      }
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
    
    const filePath = `chat/public/${file.name}`;

    setUploadState('uploading');
    storage.ref(filePath).put(file, metadata)//metadata nesto ne radi
     .on('state_changed',snap=>{
        let percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        setPercentUploaded(percentage);
        document.querySelector('.mainMedia').style.display = 'none';
        if(percentUploaded<100){

          document.querySelector('.progress-bar').style.display='block';
        }
      
    },
    (err)=>{
      setUploadState('error');
      // setUploadTask(null);
      setErrors(err);
    },
    ()=>{
     
      storage.ref(filePath).getDownloadURL()
      .then(downloadURL=>{//ovde dohvatas URL slike iz storage
        setURL(downloadURL)
        sendMessage(downloadURL)
        setUploadState('done');
      })
      .catch(err=>{
      setUploadState('error');
      // setUploadTask(null);
      setErrors(err);
      
      })
    }
    )
  }



  return (
    <div className="messageFormMain">
      <div className='progress-bar' style={{width:percentUploaded +'%'}}>{`${percentUploaded}%`}</div>

      <div className="inputText">
        <div>
          <span>
            <img src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
            <input id='textMessage' onChange={handleChange} type="text" placeholder="Write your message" />
          </span>
        </div>
      </div>
      <div className="messageFormButton">
        <span>
          <img src="https://img.icons8.com/fluent-systems-filled/48/000000/edit-message.png" />
          <button disabled={loading} onClick={()=>sendMessage(URL)} className="addReplay">Add Replay</button>
          <button disabled={uploadState==='uploading'} onClick={openModal} className="uploadMedia">Upload Media</button>
          <img src="https://img.icons8.com/metro/26/000000/upload.png" />
          <AddMedia sendMessage={sendMessage} uploadFile={uploadFile} modal={modal} closeModal={closeModal}></AddMedia>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state=>({
  stateProperty:state
})

export default connect(mapStateToProps, null)(MessageForm);
