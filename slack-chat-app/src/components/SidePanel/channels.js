import './../../style/App.css';
import {useState} from 'react';

const Channels = () => {

    const [numOfChannels, setNumOfChannels] = useState([])
    return ( <div className="channels">
        <img src="https://img.icons8.com/android/12/000000/data-in-both-directions.png"/>
        CHANNELS<span>({numOfChannels.length})</span>
        <span className='plus'><img src="https://img.icons8.com/android/12/000000/plus.png"/></span>

    </div> );
}
 
export default Channels;
