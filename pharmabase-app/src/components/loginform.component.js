
import React, { Component, state, useState, setState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SignUpForm from "./signupform.component";
import Home from "./productpage.component";

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
    let path = '/register_process';
    this.props.history.push(path);
  }

  loginHandleClick = (e) => {
    e.preventDefault();
    var data = {
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post(this.state.apiBaseUrl + '/', data).then((response) => {
      let path = '/home';
      this.props.history.push(path);
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
                  <label class="required">Email ID : </label>
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
export default withRouter(LoginForm);