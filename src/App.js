import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SchoolContainer from "./SchoolContainer";

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment blue inverted">
          <h2>SwitchList</h2>
        </div>

        <SchoolContainer />
      </div>
    );
  }
}

export default App;
