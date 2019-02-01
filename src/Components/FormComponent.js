import React, { Component } from "react";
import MatInput from "./MatInput";
import GradientGen from "./GradientGen";
import Pic from "./Pic";
import "./FormComponent.css";

export default class FormComponent extends Component {
  render() {
    return (
      <div className="FormComponent">
        <div className="pic">
          <Pic />
        </div>
        <div className="gradient">
          <GradientGen />
        </div>
        <div id="inputs" className="inputs container">
          <div className="leftins">
            <MatInput label="Name" />
            <MatInput id="right" label="Email" />
          </div>
          <div className="rightins">
            <MatInput className="s" label="Title" />
            <MatInput id="right" label="Phone" />
          </div>
        </div>
      </div>
    );
  }
}
