
import './style/App.css';
//moras da Router uvedes u komponenti koja je hijerarhijski iznad one komponente
//u kojoj koristis useHistory ili npr useLocation, inace nece da rade.
//U ovom konkretnom slucaju undex.js je hijerarhijski iznad App.js, pa zato samo tamo
//uveo Router, a ovde ostalo(Switch i Route)
import { Switch, Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Firebase from './config';
import {useEffect} from 'react';
import { connect } from 'react-redux';
import {SetUser} from './actions/index'

function App(props) {
  console.log(connect)
  let history = useHistory();

  useEffect(() => {
    Firebase.default.auth().onAuthStateChanged(user=>{
      if(user){
        console.log(user)
        console.log(props)
        props.SetUser(user);
        history.push("/");
      }
    })
    
  },[])


  return (
    <div className="App">
     
       <Switch>
         <Route path='/login'><Login></Login></Route>
         <Route path='/register'><Register></Register></Route>
       </Switch>
     
    </div>
  );
}

// const mapStateToProps = (state)=>{
//   {user}
// }

export default connect(null, {SetUser})(App);
