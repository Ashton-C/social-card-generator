import React, { Component } from "react";
import "./Pic.css";

export default class Pic extends Component {
  render() {
    return (
      <div className="Pic">
        <img src="null" />
        <button> Upload Picture! </button>
      </div>
    );
  }
}
