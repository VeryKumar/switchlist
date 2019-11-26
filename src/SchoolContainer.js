import React, { Component } from "react";
import Search from "./Search";
import SchoolList from "./SchoolList";
import config from "./config";
import * as firebase from "firebase/app";
import "firebase/database";
import SchoolCard from "./SchoolCard";
import { Link } from "react-router-dom";

export default class SchoolContainer extends Component {
  state = { bootcampsObj: {} };

  componentDidMount = () => {
    firebase.initializeApp(config);
    let database = firebase.database();
    let bootcampsRef = database.ref("bootcamps");
    bootcampsRef.on("value", snapshot => {
      let data = snapshot.val();
      this.setState({ bootcampsObj: data }, console.log("FIRST", data));
    });
  };

  //this should generate an array of objects from my object
  bootcampList = () => {
    //generate array of keys to loop over
    //with a for each, loop over those keys
    //then generate the value of the key and store it
    let individualBootcampData = {};
    return Object.keys(this.state.bootcampsObj).map((bootcamp, idx) => {
      console.log(bootcamp);
      individualBootcampData = {
        [bootcamp]: this.state.bootcampsObj[bootcamp]
      };
      return (
        <Link to={`/bootcamps/${bootcamp}`}>
          <SchoolCard
            key={idx}
            bootcampName={bootcamp}
            bootcamp={individualBootcampData}
          />
        </Link>
      );
    });
  };

  render() {
    return <div className="ui link cards">{this.bootcampList()}</div>;
  }
}
