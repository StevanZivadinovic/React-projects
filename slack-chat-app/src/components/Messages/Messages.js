import MessagesHeader from './messagesHeader';
import  MessageForm from './messageForm';
import {useState, useEffect} from 'react';
import Firebase from './../../config';
import moment from 'moment';
import {connect} from 'react-redux';
import {setTerm1} from './../../actions/index'


const Messages = (props) => {

  let a = document.querySelector('.ulMessages');
  let preuzmi=(b)=>{
    // console.log(moment(b.timestamp.toMillis()).fromNow())
    
    if(b.content){
      a.innerHTML+=`<div  class='${b.user.id===user1.currentUser.uid ? "list-item":"list-item-stranger"}'><img alt='slika' height='35px' width='35px' src='${b.user.avatar}'><li class='${b.user.id===user1.currentUser.uid?"message_self":"message_stranger"}'> ${b.user.name} <span>${b.timestamp ? moment(b.timestamp.toMillis()).fromNow():''}</span><br>${b.content}</li></div>`;
    }
    if(b.image){
     
        a.innerHTML+=`<div id='imageLi' class='${b.user.id===user1.currentUser.uid ? "list-item":"list-item-stranger"}'><img alt='slika' height='35px' width='35px' src='${b.user.avatar}'><li class='${b.user.id===user1.currentUser.uid?"message_self":"message_stranger"}'> ${b.user.name} <span>${b.timestamp ? moment(b.timestamp.toMillis()).fromNow():''}</span><br><a target='_blank' href='${b.image}'><img id='slika'  width='110px' src='${b.image}'></a></li></div>`;
   
    }
    
  }
 let catchTerm = (e) =>{
  if(e.target.value){ 
    a.innerHTML='';
  
  Firebase.default.firestore().collection('messages')
  .where('channel','==',channel1.currentChannel.nameOfChannel)
  .orderBy('timestamp', 'asc')
  .onSnapshot(snapShot => {
    snapShot.docChanges().forEach(change=>{
    //  console.log(change.doc.data().content);
      const regex = new RegExp(e.target.value, 'gi');
      let q = change.doc.data().content;
      console.log(change.doc.data())
      if(q && q.match(regex) || change.doc.data().user.name.match(regex)){
        console.log('Uspelo je');
        preuzmi(change.doc.data())
      }
      
    })
   
   })
  }else{
    a.innerHTML='';
    Firebase.default.firestore().collection('messages')
        .where('channel','==',channel1.currentChannel.nameOfChannel)
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapShot => { 
          snapShot.docChanges().forEach(change=>{           
            if (change.type === 'added') {
            preuzmi(change.doc.data())
           users.push(change.doc.data())
            }
            
          })
        
        })
  }
}
console.log(props.state1.term);
  let channel=props.state.stateProperty.channel;
  let user = props.state.stateProperty.user;
  const [ channel1, setChannel1] = useState('');
  const [ user1, setUser1] = useState('');
  // const [messages, setMessages] = useState([]);
  const [numOfUsers1, setnumOfUsers1] = useState(null);

  useEffect(() => {
        setChannel1(channel);
        setUser1(user)
  }, [channel.currentChannel])
  console.log(channel1, user1);




let time = Math.floor(new Date().getTime()/1000)


let users=[];
useEffect(() => {
  if(channel1.currentChannel && user1.currentUser){
    a.innerHTML='';
    
        Firebase.default.firestore().collection('messages')
        .where('channel','==',channel1.currentChannel.nameOfChannel)
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapShot => {
     
          
          snapShot.docChanges().forEach(change=>{
           
            // console.log(change.doc.data())
            if (change.type === 'added') {
            preuzmi(change.doc.data())
           users.push(change.doc.data())
            }
            
          })
          console.log(users);
          let names = [];
          users.forEach(user=>{
            names.push(user.user.name)
          })
         let numOfUsers=[];
         names.forEach(name=>{
           if(!numOfUsers.includes(name)){
            numOfUsers.push(name)
           }
         })
         setnumOfUsers1(numOfUsers.length)
         console.log(numOfUsers.length)
          document.querySelector('.progress-bar').style.display='none';
        })
        
        }
}, [channel1.currentChannel])



 
 

    
    return ( <div className='messagesMain'>
        <MessagesHeader catchTerm={catchTerm} numOfUsers1={numOfUsers1} channel1={channel1}></MessagesHeader>
        <div className="messages">
          <ul className='ulMessages'></ul>
            </div>
        
        <MessageForm></MessageForm>
    </div> );
}

let setStateToProps=state=>({
  state1:state
})
 
export default connect(setStateToProps, null)(Messages);