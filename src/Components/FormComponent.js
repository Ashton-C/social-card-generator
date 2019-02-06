import React, { Component } from "react";
import MatInput from "./MatInput";
import GradientGen from "./GradientGen";
import Pic from "./Pic";
import "./FormComponent.css";

export default class FormComponent extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      Name: "",
      Title: "",
      Email: "",
      Phone: ""
    };
  }

  handleInput = (input, label) => {
    this.setState({ [label]: [input] });
    console.log(this.state);
  };

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
            <MatInput onInput={this.handleInput} label="Name" />
            <MatInput onInput={this.handleInput} label="Title" />
          </div>
          <div className="rightins">
            <MatInput onInput={this.handleInput} label="Email" />
            <MatInput onInput={this.handleInput} label="Phone" />
          </div>
        </div>
      </div>
    );
  }
}
