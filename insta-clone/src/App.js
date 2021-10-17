import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";

import Posts from "./components/pages/Posts";
import About from "./components/pages/About";
import Home from "./components/pages/home/Home";
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
