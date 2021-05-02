import plus from './../../img/plus.svg';
import {useState} from 'react';

const ColorPanel = () => {
    
    let showPicker = ()=>{
        
            document.querySelector('.picker').style.display='block';
           
    }
    let removeColorPicker = ()=>{
        document.querySelector('.picker').style.display='none';
    }

    let setColor = ()=>{
        localStorage.setItem('color', document.querySelector('#favcolor').value);
        document.querySelector('.picker').style.display='none';
        document.querySelector('.sidePanel').style.backgroundColor=localStorage.getItem('color');
        document.querySelectorAll('.list-item').forEach(a=>{
            a.style.backgroundColor=localStorage.getItem('color');
        })
        document.querySelectorAll('.list-item-stranger').forEach(a=>{
            a.style.backgroundColor=localStorage.getItem('color');
        })

    }
    
    return ( <div className='colorPanel'>
       <img src={plus} onClick={showPicker} />
       <div className='picker' style={{display:'none'}} >

      
       <input   type="color" id="favcolor" name="favcolor"></input>
      <div>

       <button onClick={setColor} value='Submit'>Submit</button>
      <button onClick={removeColorPicker} value='Cancel'>Cancel</button>
      </div>
       </div>
  
   </div>);
}
 
export default ColorPanel;