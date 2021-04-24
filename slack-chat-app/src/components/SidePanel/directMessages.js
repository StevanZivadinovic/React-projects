import {useState, useEffect} from 'react';
import Firebase from './../../config';
const DirectMessages = (props) => {
   
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    useEffect(() => {
        if(props.props.user){

            setCurrentUser(props.props.user)
        }
        
    }, [props.props])
    console.log(currentUser.displayName)


    let addListeners = (userId)=>{

    }



    useEffect(() => {
        if(currentUser){
            addListeners(currentUser.uid)
        }
    }, [])
   
    return ( <div >
        <div className='directMessagesUsers'>
            <div className='header'>

        <img src="https://img.icons8.com/fluent-systems-regular/20/000000/message-read.png"/><span>DIRECT MESS({users.length})</span>
            </div>
            <span className='plus'><img src="https://img.icons8.com/android/12/000000/plus.png"/></span>
        </div>
 </div> );
}
 
export default DirectMessages;