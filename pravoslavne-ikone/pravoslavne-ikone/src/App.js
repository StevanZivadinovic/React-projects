import React, { useState, useRef, useEffect } from "react";
import 'react-image-lightbox/style.css';
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Ikonopisac from './components/ikonopisac';
import Footer from "./components/footer";
import Galerija from './components/galerija';
import Kontakt from './components/kontakt'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar></Navbar>

          <Route path="/" exact component={Home}></Route>

          <Route path="/ikonopisac" exact component={Ikonopisac}></Route>
          <Route path="/galerija" exact component={Galerija}></Route>
         <Route path="/kontakt" exact component={Kontakt}></Route>
         
        </Router>
       
      </header>
    </div>
  );
}

export default App;
