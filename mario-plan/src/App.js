//npm install redux react-redux
//npm install firebase

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/layout/dashboard/dashboard';
import Navbar from './components/layout/navbar'
import './style/style.css';
import ProjectsDetails  from './components/layout/projects/projectsDetails';
import SignIn from './components/layout/auth/SignIn';
import SignUp from './components/layout/auth/SignUp';
import CreateProjects from './components/layout/projects/createProjects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>

     <Switch>
       <Route exact path='/'><Dashboard></Dashboard></Route>
       <Route  path='/projects/:id'><ProjectsDetails></ProjectsDetails></Route>
       <Route path='/signin'><SignIn></SignIn></Route>
       <Route path='/signup'><SignUp></SignUp></Route>
       <Route path='/create'><CreateProjects></CreateProjects></Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
