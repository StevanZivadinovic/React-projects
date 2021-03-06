import "./style/App.css";
//moras da Router uvedes u komponenti koja je hijerarhijski iznad one komponente
//u kojoj koristis useHistory ili npr useLocation, inace nece da rade.
//U ovom konkretnom slucaju undex.js je hijerarhijski iznad App.js, pa zato samo tamo
//uveo Router, a ovde ostalo(Switch i Route)
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Firebase from "./config";
import { useEffect } from "react";
import { connect } from "react-redux";
import { SetUser, ClearUser } from "./actions/index";
import Spinner from "./spinner";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";

function App(props) {
  
  let history = useHistory();

  useEffect(() => {
    console.log(Firebase.default.auth().currentUser)
    Firebase.default.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        
        props.SetUser(user);
        history.push("/");
      }else{
        history.push("/login");
        props.ClearUser()

      }
    });
  }, []);

  return props.stateProperty.user.isLoading ? (
    <Spinner></Spinner>
  ) : (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
        <div className="mainFields">
        <div className="colorSide">
          <ColorPanel></ColorPanel>
          <SidePanel curentUser={props}></SidePanel>
        </div>
        <div className="messagesMeta">
          <Messages state={props}></Messages>
          <MetaPanel></MetaPanel>
        </div>
      </div>
        </Route>
      </Switch>
     
    </div>
  );
}

let mapStateToProps = (state) => ({
  stateProperty: state,
});

export default connect(mapStateToProps, { SetUser, ClearUser })(App); //kad ovako dodas funkciju
//stavljas uglaste zagrade.
