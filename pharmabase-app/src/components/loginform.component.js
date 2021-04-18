
import React, { Component,state , useState, setState} from 'react';
import axios from 'axios';
import PharmaDataService from "../services/pharma.service";

class LoginForm extends Component {

  constructor(props) {

    super(props);
    this.handleSubmitClick=this.handleSubmitClick.bind();
    this.handleChange=this.handleChange.bind();
    this.state = {
      email: '',  
      password: '',
      apiBaseUrl: "http://localhost:8080",
      showLoginForm:true,
      showProductList:false,
      showSignUpForm:false
    }
  }

   handleChange = (e) => {
    const {id , value} = e.target   
    this.setState(prevState => ({
        ...prevState,
        [id] : value
    }));
  }

  handleSubmitClick = (e) => {
    e.preventDefault();

    var data = {

      "email": this.state.email,

      "password": this.state.password

    }
  
    axios.post(this.state.apiBaseUrl + '/login', data).then(function (response) {

      console.log(response);

      if (response.data.success) {

        console.log("Login successfull");

      } else {

        alert(response.data.message);

      }

    }).catch(function (error) {

      console.log(error);

    });
  }

  render() {
    return (
      <div>
        <h1>PharmaBase - Powered by ACCENDERO</h1>
        <h5>Login</h5>
        <br></br>
        <input type="text"
          id="email"
          size="20"
          placeholder="Email id"
          value={this.state.email}
          onChange={this.handleChange} 
        />
<br></br>
        <input type="text"
          size="20"
          id="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange} 
         
        />
        <br></br>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmitClick}
          
        >
          Login
          </button>
      </div>
    );
  }
}
export default LoginForm;