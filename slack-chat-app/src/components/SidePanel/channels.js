import './../../style/App.css';
import {useState} from 'react';

const Channels = () => {

    const [numOfChannels, setNumOfChannels] = useState([]);
    const [modal, setModal] = useState(false)

    let openModal = ()=>{
        setModal(true);
        console.log(true)
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
            <input type='text' id='nameOfChannel'/>
            </div>

            <div className="details">
            <label htmlFor="detailsOfChannel">About the channel</label>
            <input type='text' id='detailsOfChannel'/>
            </div>

            <div className="buttons">
                
            </div>

            </div>
            </div>
        </div>
    </div> );
}
 
export default Channels;
