import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/navbar'
import './style/style.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>
     </BrowserRouter>
    </div>
  );
}

export default App;
