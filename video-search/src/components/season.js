import { useState } from "react";
// npm install --save react-fontawesome
//semanticUI
import Image from "./../components/snowflake";
import Sun from "./../components/sun";


const Season = ({ lat }) => {
  const [mesec, setmesec] = useState(new Date().getMonth());
  const [sezona, setSezona] = useState(null);
  let sezona1;
  if (mesec > 2 && mesec < 9) {
    lat > 0 ? (sezona1 = "summer") : (sezona1 = "winter");
    console.log("lat");
  } else {
    lat > 0 ? (sezona1 = "winter") : (sezona1 = "summer");
    console.log("-lat");
  }

  return (
    <div className="polje">
      <div className="text">{sezona1}</div>
      <div className="slika">{sezona1==='winter'?<Image></Image> : <Sun></Sun>}
       
       
      </div>
    </div>
  );
};

export default Season;
