import React, { Component } from "react";
import "./loginPage.css";
import insta_image from "../../images/loginPageLeft.png";
import insta_logo from "../../images/logoinsta.png";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }
  render() {
    return (
      <div className="login_page">
        <div className="left_div"></div>
        <div className="middle_div">
          <div className="loginpage_main">
            <div className="loginpage_left">
              <img src={insta_image} width="454px" alt="pic" />
            </div>
            <div>
              <div className="loginpage_right">
                <img className="loginpage_logo" src={insta_logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="right_div"></div>
      </div>
    );
  }
}

export default LoginPage;
