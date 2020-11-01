import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar></Navbar>

          <Route path="/" exact component={Home}></Route>

          {/*<Route path="/services" exact component={Services}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route> */}
          
        </Router>
       
      </header>
    </div>
  );
}

export default App;
