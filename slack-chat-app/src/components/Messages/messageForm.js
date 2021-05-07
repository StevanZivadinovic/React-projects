import Firebase from './../../config';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AddMedia from './addMedia';
import "emoji-mart/css/emoji-mart.css";
import { Picker, emojiIndex } from "emoji-mart";
//za emoji-e
// npm install emoji-mart
// npm install babel-runtime

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
  const [URL, setURL] = useState(null);
  const [emoji, setEmoji] = useState(false);
  const [emojiToInput, setEmojiToInput] = useState(null)
console.log(emojiToInput)

 useEffect(() => {
  setChannel(stateProperty.channel.currentChannel)
 }, [stateProperty.channel.currentChannel])
 
 let colonToUnicode = (message)=>{
   return message.replace(/:[A-Za-z0-9_+-]+:/g,x=>{
     x=x.replace(/:/g, "");
     let emoji = emojiIndex.emojis[x];
     if(typeof emoji !=='undefined'){
       let unicode = emoji.native;
       if(typeof unicode !=="undefined"){
         return unicode
       }
     }
     x=":"+x+":";
     return x;
   })
 }
 let handleChange=(e)=>{
  
    setMessage(colonToUnicode(`${e.target.value}${emojiToInput}`))
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
      Firebase.default.firestore().collection('typing').doc(user.uid).delete()//ovde dodato

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

  let typingAnimation = ()=>{
    console.log(message)
    if(message){
      
      Firebase.default.firestore().collection('typing').doc(user.uid)
      .set({
        user1:user.displayName
      })
    }else{
      Firebase.default.firestore().collection('typing').doc(user.uid).delete()
    }

   

    Firebase.default.firestore().collection('typing')
    .where('user1','!=',user.displayName)
.onSnapshot(snapsHot=>{
  snapsHot.docChanges().forEach(change=>{
    console.log(snapsHot.docs.length);
    if(user){
      if(user.displayName !== change.doc.data().user1 && change.doc.data().user1!==null && change.doc.data().user1!==undefined && change.doc.data().user1 ){
        console.log(change.doc.data().user1);
        document.querySelector('.dots').style.display='flex';
        document.querySelector('.user__typing').innerText =`${change.doc.data().user1} is typing`
      }
     console.log(change.doc.data().user1)
      if(snapsHot.docs.length===0){
         console.log('uspeh')
        document.querySelector('.dots').style.display='none';
      }
    }
  })

})

  }

  Firebase.default.firestore().collection('typing')
  .where('user1','!=',user.displayName)
.onSnapshot(snapsHot=>{
snapsHot.docChanges().forEach(change=>{
  
  if(user){
    if(user.displayName !== change.doc.data().user1 && change.doc.data().user1!==null && change.doc.data().user1!==undefined && change.doc.data().user1 ){
      console.log(change.doc.data().user1);
      document.querySelector('.dots').style.display='flex';
      document.querySelector('.user__typing').innerText =`${change.doc.data().user1} is typing`
    }
   console.log(change.doc.data().user1)
    if(snapsHot.docs.length===0){
      console.log('uspeh')
      document.querySelector('.dots').style.display='none';
    }
  }
})

})

let handleEmoji = ()=>{
  if(emoji===false){

    setEmoji(true)
  }else{
    setEmoji(false)
  }
}
let CloseEmoji = (emoji)=>{
  setEmoji(false)
  setEmojiToInput(emoji)
  console.log('uspeh')
}
  return (
    <div className="messageFormMain">
      <div className='progress-bar' style={{width:percentUploaded +'%'}}>{`${percentUploaded}%`}</div>

      <div className="inputText">
        <div>
          <span>
            <img src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" onClick={handleEmoji}/>
            {emoji && 
            <Picker  
            // onSelect={CloseEmoji()}
            set='apple'
            className='emojipicker'
            title='Pick your emoji'
            emoji='point_up'
           
            onSelect={emoji => CloseEmoji(emoji.native)}  />}
            <input id='textMessage' onChange={handleChange} type="text" placeholder="Write your message" onKeyDown={typingAnimation}/>
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
