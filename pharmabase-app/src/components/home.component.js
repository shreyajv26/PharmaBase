import React, { Component,state } from 'react';
import axios from 'axios';
import PharmaDataService from "../services/pharma.service";
import LoginForm from "./loginform.component";
import SignUpForm from "./signupform.component";

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
         <SignUpForm></SignUpForm>
          :
          <p>hello</p>
          }
      </div>
    );
  }
}
export default Home;