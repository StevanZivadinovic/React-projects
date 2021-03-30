import './../../style/App.css';
import {useState} from 'react';

const Channels = () => {

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

    return ( <div className="channels">
        <img src="https://img.icons8.com/android/12/000000/data-in-both-directions.png"/>
        CHANNELS<span>({numOfChannels.length})</span>
        <span className='plus' onClick={openModal}><img src="https://img.icons8.com/android/12/000000/plus.png"/></span>

        <div className='addChannelForm'>
            <div className="form">
            <div className='subForm'>
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
                <button className='Add'  value='Add'>Add</button>
                <button className='Cancel'  value='Cancel' onClick={turnOffAddModal}>Cancel</button>
            </div>

            </div>
            </div>
        </div>
    </div> );
}
 
export default Channels;
