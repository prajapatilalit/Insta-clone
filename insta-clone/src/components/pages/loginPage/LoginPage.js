import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./loginPage.css";
import insta_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import app from "../../images/app.png";
import play from "../../images/play.png";
import SigninPage from "../signinPage/SigninPage";
import SignupPage from "../signupPage/SignupPage";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }
  render() {
    return (
      <div className="login_page">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className="loginpage_main">
              <div>
                <img src={insta_image} width="454px" alt="pic" />
              </div>
              <div>
                <div className="loginpage_right">
                  <img className="loginpage_logo" src={insta_logo} alt="logo" />
                  {this.state.isLogin ? <SigninPage /> : <SignupPage />}
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
                <div className="loginpage_signup_signin">
                  {!this.state.isLogin ? (
                    <p>
                      Already have an Account?
                      <span
                        onClick={() => this.setState({ isLogin: true })}
                        className="loginpage_p"
                      >
                        SignIn
                      </span>
                    </p>
                  ) : (
                    <p>
                      Don't have an Account?
                      <span
                        className="loginpage_p"
                        onClick={() => this.setState({ isLogin: false })}
                      >
                        Signup
                      </span>
                    </p>
                  )}
                </div>
                <div className="loginpage_getapp">
                  <p className="getApp">Get the App</p>
                  <div>
                    <img className="loginpage_icon" src={app} alt="app-store" />
                    <img
                      className="loginpage_icon"
                      src={play}
                      alt="play-store"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
