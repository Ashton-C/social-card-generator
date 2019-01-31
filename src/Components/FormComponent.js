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
        <div className="inputs form-group container">
          <div className="row">
            <MatInput className="" label="Name" />
            <MatInput className="mr-auto" label="Email" />
          </div>
          <div className="row">
            <MatInput className="mr-auto" label="Title" />
            <MatInput className="mr-auto" label="Phone" />
          </div>
        </div>
      </div>
    );
  }
}
