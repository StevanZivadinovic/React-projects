//instalacija npm install --save faker
// import faker from "faker";
import { useState, useEffect } from "react";
import "./style/style.css";
import Season from './components/season.js';

function App() {
  // brisanje npm paketa iz projekta: npm uninstall --save ime projekta-npm,

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
useEffect(()=>{
  window.navigator.geolocation.getCurrentPosition(
    (response) => {
      setLat(response.coords.latitude);
      setLong(response.coords.longitude);
      console.log(response.coords.latitude);
    },
    (err) => {
      console.log(err.message);
    }
  );

},[])

  return (
    <div className="App">
     

      {lat && long ? (
        
        <div className="ispis">
          <div className="koordinate">
        {`lat:${lat}, long: ${long}`}

          </div>
        <Season lat={lat}></Season>
        </div>
        
        
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default App;
