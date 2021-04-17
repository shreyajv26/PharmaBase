import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home.component";

class App extends Component {
  render() {
    return (
      <div>
       <Home></Home>
       
      </div>
    );
  }
}

export default App;
