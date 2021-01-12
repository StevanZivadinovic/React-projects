//instalacija npm install --save faker
import faker from "faker";
import Avatar from './components/avatar';
import {useState} from 'react';
import ExtraContent from './components/extraContent'
import './style/style.css'

function App() {
  const [names, setNames] = useState([{name:'mike',
id:1}, {name:'max', id:2}, {name:'alex', id:3}])

  return (
    <div className="App">
            <ExtraContent>
              <div>
                <h2>Warning!</h2>
                <div>Are you sure?</div>
              </div>
              </ExtraContent>

            <ExtraContent><Avatar names={names}></Avatar></ExtraContent>
            <ExtraContent><Avatar names={names}></Avatar></ExtraContent>
            <ExtraContent><Avatar names={names}></Avatar></ExtraContent>

            
        
      </div>

  
  );
}

export default App;
