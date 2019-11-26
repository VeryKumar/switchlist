import React, { Component } from "react";
import SchoolContainer from "./SchoolContainer";

export default class Home extends Component {
  render() {
    console.log("Home", this.props);
    return (
      <div className="ui raised segment">
        <div
          className="ui segment blue attached inverted"
          style={{ marginBottom: "55px" }}
        >
          <h2>SwitchList</h2>
        </div>
        <SchoolContainer bootcampObj={this.props.bootcampObj} />
      </div>
    );
  }
}
