import Firebase from './../../config';
const Ime = () => {
    return ( <div>
        {  function setOnlineOffline(ime){
        Firebase.default.firestore().collection('usersConnected')
        .onSnapshot(snapShot=>{
            snapShot.docChanges().forEach(change=>{
                console.log(change.doc.data().name, ime)
                if(change.doc.data().name===ime){
                    // <img src="https://img.icons8.com/emoji/10/000000/green-circle-emoji.png"/>
                    console.log('green')
                    return true
                }
             
            })
        })
    }}
    </div> );
}
 
export default Ime;