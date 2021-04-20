
import React, { Component, state, useState, setState } from 'react';
import axios from 'axios';
import Home from "./productpage.component";

class SignUpSuccess extends Component {
  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind();
    this.loginHandleClicks = this.loginHandleClicks.bind();

    this.state = {
      apiBaseUrl: "http://localhost:8080",
      showsignupsuccess: true,
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


  loginHandleClicks = (e) => {
    e.preventDefault();
    var data = {
      "email": this.state.email,
      "password": this.state.password
    }


    axios.post(this.state.apiBaseUrl + '/success', data).then((response) => {
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
        {this.state.showsignupsuccess ?
          <div>

            <div class="App-header">
              <h1>PharmaBase - Powered by ACCENDERO</h1>
            </div>

            <div class="sub-header">
              <h3>Congratulations, Your sign up was successful !</h3>
            </div>

            <br></br>

            <div class="sub-header">
              <h3>Please Login below</h3>
            </div>

            <br></br>

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
            <div class="button">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.loginHandleClicks}

              >
                Login
            </button>
            </div>
          </div>
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
export default SignUpSuccess;