import React, { Component } from "react";
import Codesmith from "./Codesmith";
import Epicodus from "./Epicodus";
import Fullstack from "./Fullstack";
import HackReactor from "./HackReactor";
import "./SchoolCard.css";

export default class SchoolCard extends Component {
  bootcampName = () => {
    let camelCaseBootcampName = Object.keys(this.props.bootcamp)[0];
    let uncapitalizedSplitBootcampName = camelCaseBootcampName.replace(
      /([a-z])([A-Z])/g,
      "$1 $2"
    );

    let capitalizedSplitBootcampName =
      uncapitalizedSplitBootcampName[0].toUpperCase() +
      uncapitalizedSplitBootcampName.substring(1);

    return capitalizedSplitBootcampName;
  };

  bootcampSVG = () => {
    if (this.props.bootcamp[this.props.bootcampName].img === "Codesmith") {
      return <Codesmith />;
    } else if (
      this.props.bootcamp[this.props.bootcampName].img === "Epicodus"
    ) {
      return <Epicodus />;
    } else if (
      this.props.bootcamp[this.props.bootcampName].img === "Fullstack"
    ) {
      return <Fullstack />;
    } else if (
      this.props.bootcamp[this.props.bootcampName].img === "HackReactor"
    ) {
      return <HackReactor />;
    }
  };

  render() {
    // if (this.props.bootcamp[this.state.bootcampNameKey]) {
    //   console.log(
    //     this.props.bootcamp[this.state.bootcampNameKey].employmentResults
    //   );
    // }
    console.log(this.props.bootcamp[this.props.bootcampName].img);
    return (
      <div className="ui card bootcamp">
        <div className="image">
          {/* <img
            src={
              this.props.bootcamp
                ? this.props.bootcamp[this.props.bootcampName].img
                : "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"
            }
            alt="Alternative Text"
          ></img> */}
          {this.bootcampSVG()}
        </div>
        <div className="content">
          <a className="header">{this.bootcampName()}</a>
          <div className="meta">
            <span className="date">Median Salary after 90 days:</span>
          </div>
          <div className="description">
            $
            {
              this.props.bootcamp[this.props.bootcampName].medianSalary[
                "90Days"
              ]
            }
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            Apply Now
          </a>
        </div>
      </div>
    );
  }
}
