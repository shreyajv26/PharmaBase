import React, { Component,state , useState, setState} from 'react';
import axios from 'axios';
/*import PharmaDataService from "../services/pharma.service";*/
//import Sign from '../title';

class SignUpForm extends Component {

    constructor(props) {

        super(props);
        this.handleSubmitClick=this.handleSubmitClick.bind();
        this.handleChange=this.handleChange.bind();
        this.state = {
          firstName: '',
          lastName:'',
          email: '',  
          password: '',
          apiBaseUrl: "http://localhost:8080",
          showLoginForm:false,
          showProductList:false,
          showSignUpForm:true
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
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "email": this.state.email,
          "password": this.state.password
    
        }
      
        axios.post(this.state.apiBaseUrl + '/register_process', data).then(function (response) {
    
          console.log(response);
    
          if (response.data.success) {
    
            console.log("Sign Up successfull");
            alert("Sign Up successfull");
    
          } else {
    
            alert("Sign Up failed");
    
          }
    
        }).catch(function (error) {
    
          console.log(error);
    
        });
      }


    render() {
        return (
            <div>
              <h1>PharmaBase - Powered by ACCENDERO</h1>
              <h5>Sign Up</h5>
              <input type="text"
                id="firstName"
                size="15"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange} 
              />
      <br></br>
      <br></br>
              <input type="text"
                id="lastName"
                size="15"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange} 
               
              />
        <br></br>
        <br></br>
              <input type="text"
                id="email address"
                size="15"
                id="email"
                placeholder="Email ID"
                value={this.state.email}
                onChange={this.handleChange} 
               
              />
        <br></br>
        <br></br>
              <input type="text"
                id="password"
                size="15"
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
                Sign Up
                </button>
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

export default SignUpForm;