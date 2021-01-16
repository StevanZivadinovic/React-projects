//instalacija npm install --save faker
import faker from "faker";
import { useState } from "react";
import Avatar from "./components/season";
import "./style/style.css";

function App() {
// brisanje npm paketa iz projekta: npm uninstall --save ime projekta-npm, 

const [lat, setLat]=useState(null);
const [long, setLong]=useState(null);



window.navigator.geolocation.getCurrentPosition(
  (response)=>{setLat(response.coords.latitude)
    setLong(response.coords.longitude)
    console.log(response.coords.latitude)}
    ,
    err=>{console.log(err.message)}
)

    


  return (
    <div className="App">
      <Avatar></Avatar>
    
    {(lat && long)? <div className="ispis">{`lat:${lat}, long: ${long}`}
    </div>:<div>Loading....</div>}
    </div>


  );
}

export default App;
