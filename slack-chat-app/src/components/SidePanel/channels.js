import './../../style/App.css';
import {useState, useEffect} from 'react';
import Firebase from './../../config';
import {connect} from 'react-redux';
import {setCurrentChannel} from './../../actions/index'

const Channels = (props) => {
    const [numOfChannels, setNumOfChannels] = useState([]);
    const [modal, setModal] = useState(false);
    const [nameOfChannel, setNameOfChannel] = useState('');
    const [detailsOfChannel, setDetailsOfChannel] = useState('')
    
    

    let openModal = ()=>{
        setModal(true);
        document.querySelector('.addChannelForm').style.display = 'flex';

    }

    let handleChangeName = (e)=>{
        setNameOfChannel(e.target.value);
        

    }
    let handleChangeDetails = (e)=>{
        setDetailsOfChannel(e.target.value);

    }
    let turnOffAddModal = (e)=>{
        document.querySelector('.addChannelForm').style.display = 'none';
    }

   

    let formValid = (nameOfChannel,detailsOfChannel )=>{
        

        if(nameOfChannel&& detailsOfChannel){
            console.log(true)
            return true;
        }
    }
   
    let handleSubmit = ()=>{
        if(formValid(nameOfChannel,detailsOfChannel)){
            console.log('Channel added');
            Firebase.default.firestore()
            .collection('channels').add({
                name:nameOfChannel,
                details:detailsOfChannel,
                createdBy:{
                    avatar:props.user.user.currentUser.photoURL,
                    name:props.user.user.currentUser.displayName
                }
            }).then(data=>{
                setNumOfChannels( [...numOfChannels ,{
                    name:nameOfChannel,
                    details:detailsOfChannel,
                    createdBy:{
                        avatar:props.user.user.currentUser.photoURL,
                        name:props.user.user.currentUser.displayName
                    }}])
            })

        }
    }

    useEffect(() => {
        setNumOfChannels([]);
        Firebase.default.firestore()
        .collection('channels').get().then(docs=>{
            docs.forEach(doc=>{
                
               
                setNumOfChannels(numOfChannels=> [...numOfChannels, {
                    nameOfChannel:doc.data().name,
                    details:doc.data().details,            
                    avatar:doc.data().createdBy.avatar,
                    name:doc.data().createdBy.name
                    }]) 

                   
            })
        })  
        
    }, [])

    let setChannelToState=channel=>{
        props.setCurrentChannel(channel)//nije useState promenljiva nego action
    }

    return ( <div className="channels">
        <img src="https://img.icons8.com/android/12/000000/data-in-both-directions.png"/>
        CHANNELS<span>({numOfChannels.length})</span>
        <span className='plus' onClick={openModal}><img src="https://img.icons8.com/android/12/000000/plus.png"/></span>

        <ul className='listOfChannels'>
            {numOfChannels.length>0 && numOfChannels.map(channel=>{
                return <li onClick={()=>setChannelToState(channel)}>#{channel.nameOfChannel}</li>
            })}
        </ul>

        <div className='addChannelForm'>
            <div className="form">
            <div className='subForm' onSubmit={handleSubmit}>
                <h2>Add a channel</h2>
            <div className="name">
            <label htmlFor="nameOfChannel">Name of channel</label>
            <input type='text' id='nameOfChannel' onChange={handleChangeName}/>
            </div>

            <div className="details">
            <label htmlFor="detailsOfChannel">About the channel</label>
            <input type='text' id='detailsOfChannel' onChange={handleChangeDetails}/>
            </div>

            <div className="buttons">
                <button className='Add' onClick={handleSubmit}  value='Add'><span><img src="https://img.icons8.com/color/20/000000/checked--v4.png"/>Add</span></button>
                <button className='Cancel'  value='Cancel' onClick={turnOffAddModal}><span><img src="https://img.icons8.com/color/20/000000/cancel--v1.png"/>Cancel</span></button>
            </div>

            </div>
            </div>
        </div>
    </div> );
}

let mapStateToProps=state=>({
    user:state
})
 
export default connect(mapStateToProps, {setCurrentChannel})(Channels);
