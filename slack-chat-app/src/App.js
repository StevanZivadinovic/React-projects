
import './style/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/login'><Login></Login></Route>
         <Route path='/register'><Register></Register></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
