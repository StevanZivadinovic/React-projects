import './../../style/App.css';
import {useState, useEffect} from 'react';
import Firebase from './../../config';
import {connect} from 'react-redux';
import Channels from './channels';
const SidePanel = (props) => {
    const [display, setDisplay] = useState(true)
  
    let dropdownMenu = () => {
       
            console.log(props)
            if(display){
    
                document.querySelector('ul').style.display = 'block'
                setDisplay(false)
            }else if(!display){
                document.querySelector('ul').style.display = 'none'
                setDisplay(true)
            }
    
        
       
    }
    

    let signOut = ()=>{
        Firebase.default.auth().signOut()
        .then(data=>{
            console.log('signOut!')
        })
    }
    
    return ( <div className='sidePanel'>
        <h1><span><img src="https://img.icons8.com/color/40/000000/slack-new.png"/></span>DevChat</h1>
        <h2 onClick={dropdownMenu} className='user'><span><img style={{width:'30px', borderRadius:'50%'}} src={props.user && props.user.photoURL}/></span>{ props.user && props.user.displayName}<span><img src="https://img.icons8.com/metro/12/000000/low-priority.png"/></span></h2>
     
        <ul name="" id="mainMenu">
            <li value="" disabled>Signed in as <b>{props.user ? props.user.displayName :''}</b></li>
            <li value="">Change avatar</li>
            <li onClick={signOut} value="">Sign Out</li>
        </ul>
        <Channels></Channels>
    </div> );
}

let mapStateToProps = state=>({
    user:state.user.currentUser
    
})
 
export default connect(mapStateToProps, null)(SidePanel);