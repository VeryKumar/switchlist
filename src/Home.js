import React, { Component } from "react";
import SchoolContainer from "./SchoolContainer";
import Title from "./Title";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          className="ui inverted vertical masthead center aligned segment"
          // style={{ marginBottom: "55px" }}
        >
          <div className="ui text container">
            <div className="ui inverted header">
              <Title />
              <h2
                style={{ color: "#5c6566", fontWeight: 300, marginTop: "5px" }}
              >
                Bootcamp Outcomes at a Glance
              </h2>
            </div>
          </div>
        </div>

        <SchoolContainer />
      </div>
    );
  }
}
