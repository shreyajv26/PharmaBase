
import React, { Component,state , useState, setState} from 'react';
import axios from 'axios';
/*import PharmaDataService from "../services/pharma.service";*/
import SignUpForm from "./signupform.component";
import Home from "./home.component";

class LoginForm extends Component {

  constructor(props) {

    super(props);
    //this.handleSubmitClick=this.handleSubmitClick.bind();
    this.handleChange=this.handleChange.bind();
    this.loginHandleClick=this.loginHandleClick.bind();
    this.signupHandleClick=this.signupHandleClick.bind();
    
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

  signupHandleClick = (e) => {
    e.preventDefault();
    this.setState({showSignUpForm:true,
                    showLoginForm:false,
                    showProductList:false,
                    showHomePage:false});
    }

    loginHandleClick = (e) => {
    e.preventDefault();
    var data = {

      "email": this.state.email,

      "password": this.state.password

    }
  
  
    axios.post(this.state.apiBaseUrl + '/login', data).then((response)=> {
      //if (response.status==200) {
        this.setState({showSignUpForm:false,
          showLoginForm:false,
          showProductList:false,
          showHomePage:true});
      /*} else {
      }*/

    }).catch((e) => {

      console.log(e);

    });
  }

 
  render() {
    return (
      <div>
        {this.state.showLoginForm ? 
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
          <button
          type="submit"
          className="btn btn-primary"
          onClick={this.signupHandleClick}
          
        >
          Register
          </button>
          </div>
          :
          <div></div>
        }
        {this.state.showSignUpForm ? 
          <div><SignUpForm></SignUpForm></div>
          
          :
          <div></div>
        }
           {this.state.showHomePage ? 
        <div>
          <Home></Home>
           </div>
          :
          <p></p>
          }
      </div>
    );
  }
}
export default LoginForm;