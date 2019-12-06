import React, { Component } from "react";
import "./Title.css";
export default class Title extends Component {
  render() {
    return (
      <div>
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%">
              SwitchList
            </text>
          </symbol>

          <g class="g-ants">
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
          </g>
        </svg>
      </div>
    );
  }
}
