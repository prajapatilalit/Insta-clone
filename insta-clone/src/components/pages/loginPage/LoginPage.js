import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";
import insta_image from "../../images/loginPageLeft.png";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
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
                <div className="loginpage_divider">
                  <div className="loginpage_line"></div>
                  <div className="loginpage_or">OR</div>
                  <div className="loginpage_line"></div>
                </div>
                <div>
                  <div className="loginpage_fb">
                    <button>
                      <span>
                        <img className="facebook" src={fb} alt="facebook" />
                      </span>
                      <span>Log in with Facebook </span>
                    </button>
                  </div>
                </div>
                <Link className="forgotton_P" to="#">
                  Forgotten your password
                </Link>
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
