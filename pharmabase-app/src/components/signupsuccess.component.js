
import React, { Component,state , useState, setState} from 'react';
import axios from 'axios';
/*import PharmaDataService from "../services/pharma.service";*/
import LoginForm from "./loginform.component";
import Home from "./productpage.component";
import ProductForm from "./productlist.component";

class SignUpSuccess extends Component {
    constructor(props) {

        super(props);
        this.handleChange=this.handleChange.bind();
        this.loginHandleClick=this.loginHandleClick.bind();
        
        this.state = {
          email: '',  
          password: '',
          apiBaseUrl: "http://localhost:8080",
          showLoginForm:true,
          showProductList:false,
          showSignUpForm:false,
          showHomePage:false
        }
      }

    handleChange = (e) => {
        const {id , value} = e.target   
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }));
      }

    
    loginHandleClick = (e) => {
        e.preventDefault();
        var data = {
          "email": this.state.email,
          "password": this.state.password
        }
      
      
        axios.post(this.state.apiBaseUrl + '/login', data).then((response)=> {
            this.setState({showSignUpForm:false,
              showProductList:true,
              showHomePage:false});
    
        }).catch((e) => {
          console.log(e);
        });
      }


  
  render() {
    return (

        //Render Login form with Login and Register buttons
        <div>
          {this.state.showLoginForm ? 
          <div>
          <h1>PharmaBase - Powered by ACCENDERO</h1>
          <h3>Congratulations, Your sign up was successful !</h3>
          <h5>Please Login below</h5>
          <br></br>
          <h11>Email ID : </h11>
          <input type="text"
            id="email"
            size="20"
            placeholder="Email id"
            value={this.state.email}
            onChange={this.handleChange} 
          />
  <br></br>
          <h11>Password : </h11>
          <input type="password"
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
            onClick={this.loginHandleClick}
            
          >
            Login
            </button>
            </div>
            :
            <div></div>
          }
  
          {this.state.showProductList ? 
            <div><ProductForm></ProductForm></div>
            
            :
            <div></div>
          }
  
  
          
        </div>
      );
    }
}
export default SignUpSuccess;