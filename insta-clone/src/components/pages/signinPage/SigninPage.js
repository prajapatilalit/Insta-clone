import React, { Component } from "react";
import "../loginPage/loginPage.css";
class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="loginpage_form">
          <input
            className="loginpage_input"
            type="text"
            placeholder="Phone number, username or email address"
          />
          <input
            className="loginpage_input"
            type="password"
            placeholder="Password"
          />
          <button className="loginpage_button">Login</button>
        </div>
      </div>
    );
  }
}

export default SigninPage;
