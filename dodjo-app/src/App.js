import './style/style.css';
import Navbar from './components/navbar';
import Home from './components/home';


function App() {
  

  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Home/>
       
      </div>
    </div>
  );
}

export default App;
