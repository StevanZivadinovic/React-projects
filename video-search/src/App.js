//instalacija npm install --save faker
import faker from "faker";
import Avatar from './components/avatar'

function App() {
  

  return (
    <div className="App">
      <div className="polje" style={{display:'flex'}}>
        <a href="/" className="avatar">
          <img src={faker.image.imageUrl()} alt="error" style={{width:'50px'}} />
        </a>
        <div className="podaci">
          <div className="metadata">
          <a href="/">Sam</a>
            <span>Today 6:00PM</span>
          </div>
            <div className="text">Nice text!</div>
        </div>
      </div>

     <Avatar></Avatar>
    </div>
  );
}

export default App;
