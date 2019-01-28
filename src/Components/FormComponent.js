import React, { Component } from "react";
import MatInput from "./MatInput";
import GradientGen from "./GradientGen";
import "./FormComponent.css";

export default class FormComponent extends Component {
  render() {
    return (
      <div className="FormComponent">
        <div className="pic">
          <p>profilepic component</p>
        </div>
        <div className="gradient">
          <GradientGen />
        </div>
        <div className="inputs">
          <MatInput label="Name" />
          <MatInput label="Title" />
          <MatInput label="Email" />
          <MatInput label="Phone" />
        </div>
      </div>
    );
  }
}
