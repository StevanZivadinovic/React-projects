import plus from './../../img/plus.svg';
import {useState} from 'react';

const ColorPanel = () => {
    
    let showPicker = ()=>{
        
            document.querySelector('.picker').style.display='block';
           
    }
    let removeColorPicker = ()=>{
        document.querySelector('.picker').style.display='none';
    }
    
    return ( <div className='colorPanel'>
       <img src={plus} onClick={showPicker} />
       <div className='picker' style={{display:'none'}} >

      
       <input   type="color" id="favcolor" name="favcolor"></input>
      <div>

       <button value='Submit'>Submit</button>
      <button onClick={removeColorPicker} value='Cancel'>Cancel</button>
      </div>
       </div>
  
   </div>);
}
 
export default ColorPanel;