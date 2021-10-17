import React, { Component } from "react";
import "../loginPage/loginPage.css";
class SignupPage extends Component {
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
            placeholder="Mobile number or email address"
          />
          <input
            className="loginpage_input"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="loginpage_input"
            type="text"
            placeholder="Username"
          />
          <input
            className="loginpage_input"
            type="password"
            placeholder="Password"
          />
          <button className="loginpage_button">Signup</button>
        </div>
      </div>
    );
  }
}

export default SignupPage;
