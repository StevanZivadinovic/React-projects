import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/layout/dashboard/dashboard';
import Navbar from './components/layout/navbar'
import './style/style.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>

     <Switch>
       <Route to='/'><Dashboard></Dashboard></Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
