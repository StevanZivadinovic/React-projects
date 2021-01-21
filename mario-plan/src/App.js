import './App.css';
import { useState} from 'react'

function App() {

  const [ime, setIme] = useState('mika')

  let a = {
    imeMoje:'pera'
  }
  let handleEvent = ()=>{

    console.log(a.imeMoje)
  }
  return (
    <div className="App">
     <button onClick={handleEvent}>klik</button>
    </div>
  );
}

export default App;
