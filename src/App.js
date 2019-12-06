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
  state = { bootcampsObj: {} };

  componentDidMount = async () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let database = firebase.database();
    let bootcampsRef = database.ref("bootcamps");
    bootcampsRef.on("value", snapshot => {
      let data = snapshot.val();
      this.setState({ bootcampsObj: data }, console.log("FIRST", data));
    });
  };

  render() {
    console.log("APP", this.state.bootcampsObj);
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route
            path="/bootcamps/:id"
            render={props => (
              <Show {...props} bootcampsObj={this.state.bootcampsObj} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
