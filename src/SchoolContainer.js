import React, { Component } from "react";
import Search from "./Search";
import SchoolList from "./SchoolList";
import config from "./config";
import * as firebase from "firebase/app";
import "firebase/database";

export default class SchoolContainer extends Component {
  state = { bootcamps: {} };

  componentDidMount = () => {
    firebase.initializeApp(config);
    let database = firebase.database();
    let bootcampsRef = database.ref("bootcamps");
    let currentComponent = this;
    // (() => {
    //   console.log(this.state);
    // })().bind(this)
    bootcampsRef.on("value", snapshot => {
      let data = snapshot.val();
      console.log("not in state", data);
      let newState = [];

      newState.push(data);

      this.setState(
        {
          bootcamps: data
        },
        console.log(this.state)
      );
    });
  };

  //   fetchBootcamps = () => {
  //     firebase.initializeApp(config);
  //     let database = firebase.database();
  //     let bootcampsRef = database.ref("bootcamps");
  //     let currentComponent = this;
  //     bootcampsRef.on("value", function(snapshot) {
  //       let data = snapshot.val();
  //       currentComponent.setState(
  //         { bootcamps: data },
  //         console.log(currentComponent.state)
  //       );
  //     });
  //   };

  //   let currentComponent = this;

  //     firebase.initializeApp(config);
  //     let database = firebase.database();
  //     let bootcampsRef = database.ref("bootcamps");
  //     // console.log("this", currentComponent);

  //     let data = null;
  //     bootcampsRef.on("value", snapshot => {
  //       data = snapshot.val();
  //       console.log("not in state", data);
  //       if (snapshot && snapshot.exists()) {
  //         this.setState({
  //           bootcamps: data
  //         });
  //       }
  //     });
  //     console.log("this", this.state);

  render() {
    return (
      <div>
        <h1>hello!</h1>
      </div>
    );
  }
}
