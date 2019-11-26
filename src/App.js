import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "firebase/database";
import * as firebase from "firebase/app";
import config from "./config";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Codesmith from "./Codesmith";
import Show from "./Show";
import Home from "./Home";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/bootcamps/:id" component={Show} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
