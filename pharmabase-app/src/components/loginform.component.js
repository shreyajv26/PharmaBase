
import React, { Component, state, useState, setState } from 'react';
import axios from 'axios';
import SignUpForm from "./signupform.component";
import Home from "./productpage.component";
import ProductForm from "./productlist.component";

class LoginForm extends Component {

  constructor(props) {

    super(props);
    //this.handleSubmitClick=this.handleSubmitClick.bind();
    this.handleChange = this.handleChange.bind();
    this.loginHandleClick = this.loginHandleClick.bind();
    this.signupHandleClick = this.signupHandleClick.bind();

    this.state = {
      email: '',
      password: '',
      apiBaseUrl: "http://localhost:8080",
      showLoginForm: true,
      showProductList: false,
      showSignUpForm: false,
      showHomePage: false
    }
  }

  handleChange = (e) => {
    const { id, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  signupHandleClick = (e) => {
    e.preventDefault();
    this.setState({
      showSignUpForm: true,
      showLoginForm: false,
      showProductList: false,
      showHomePage: false
    });
  }

  loginHandleClick = (e) => {
    e.preventDefault();
    var data = {
      "email": this.state.email,
      "password": this.state.password
    }


    axios.post(this.state.apiBaseUrl + '/login', data).then((response) => {
      this.setState({
        showSignUpForm: false,
        showLoginForm: false,
        showProductList: false,
        showHomePage: true
      });

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

            <div class="App-header">
              <h1>PharmaBase - Powered by ACCENDERO</h1>
            </div>

            <br></br>
            
              <div class="sub-header">
                <h3>Sign In</h3>
              </div>

              <br></br>

              <form>
              <div className="form-group">
                <center>
                  <label>Email ID : </label>
                  <input type="text"
                    id="email"
                    size="15"
                    placeholder="Email id"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label>Password : </label>
                  <input type="password"
                    size="15"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>
              <br></br>

              <div class="button">
                <button type="submit" className="btn btn-primary mr-5" onClick={this.loginHandleClick}>
                  Login
            </button>

                <button
                  type="submit" className="btn btn-primary mr-5" onClick={this.signupHandleClick}>
                  Register
            </button>
              </div>
            </form>

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
          <div><Home></Home></div>

          :
          <div></div>
        }

      </div>
    );
  }
}
export default LoginForm;