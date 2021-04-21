import React, { Component, state, useState, setState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import LoginForm from "./loginform.component";
import SignUpSuccess from "./signupsuccess.component";

class SignUpForm extends Component {

  constructor(props) {

    super(props);
    this.signupHandleClick = this.signupHandleClick.bind();
    this.handleChange = this.handleChange.bind();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      apiBaseUrl: "http://localhost:8080",
      showLoginForm: false,
      showSignUpForm: true,
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

    var data = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "password": this.state.password

    }

    axios.post(this.state.apiBaseUrl + '/register_process', data).then((response) => {
      this.setState({
        showSignUpForm: false,
        showSignUpSuccess: true
      });

    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        {this.state.showSignUpForm ?
          <div>
            <div class="App-header">
              <h1>PharmaBase - Powered by ACCENDERO</h1>
            </div>

            <div class="sub-header">
              <h5>Sign Up</h5>
            </div>

            <br></br>

            <div className="form-group">
              <center>
                <label>First Name : </label>
                <input type="text"
                  id="firstName"
                  size="15"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </center>
            </div>


            <br></br>

            <div className="form-group">
              <center>
                <label>Last Name : </label>
                <input type="text"
                  id="lastName"
                  size="15"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}

                />
              </center>
            </div>


            <br></br>

            <div className="form-group">
              <center>
                <label>Email ID : </label>
                <input type="text"
                  id="email address"
                  size="15"
                  id="email"
                  placeholder="Email ID"
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
                  id="password"
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.signupHandleClick}
              >
                Sign Up
                </button>
            </div>

          </div>
          :
          <div></div>
        }

        {this.state.showSignUpSuccess ?
          <div>
            <SignUpSuccess></SignUpSuccess>
          </div>
          :
          <p></p>
        }


      </div>
    );
  }
}

export default withRouter(SignUpForm);