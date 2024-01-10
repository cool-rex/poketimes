import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
    }
  
  }
 
export default App;
