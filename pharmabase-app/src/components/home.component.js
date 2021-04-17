import React, { Component,state } from 'react';
import axios from 'axios';
import PharmaDataService from "../services/pharma.service";
import LoginForm from "./loginform.component";

class Home extends Component {

  constructor(props) {

    super(props);
    this.state = {
      email: '',
      password: '',
      apiBaseUrl: "http://localhost:8080",
      showLoginForm:true,
      showProductList:false,
      showSignUpForm:false
    }
  }

  

  render() {
    return (
      <div>
        {this.state.showLoginForm ? 
         <LoginForm></LoginForm>
          :
          <p>hello</p>
          }
      </div>
    );
  }
}
export default Home;