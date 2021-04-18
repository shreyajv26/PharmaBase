import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home.component";
import LoginForm from "./components/loginform.component";
import SignUpForm from "./components/signupform.component";


class App extends Component {
  render() {
    return (
      <div>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default App;
