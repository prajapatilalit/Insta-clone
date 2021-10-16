import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Posts from "./components/pages/Posts";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/loginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
