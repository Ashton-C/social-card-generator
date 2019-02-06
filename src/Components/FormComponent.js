import React, { Component } from 'react';
import MatInput from './MatInput';
import GradientGen from './GradientGen';
import Pic from './Pic';
import ExportComp from './ExportComp';
import './FormComponent.css';

export default class FormComponent extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleGradChange = this.handleGradChange.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
    this.state = {
      Name: '',
      Title: '',
      Email: '',
      Phone: '',
      gradient: `linear-gradient(45deg, rgba(186,186,186, .6), rgba(255,255,255,0)),   linear-gradient(to right, #B78A9D, #e380ff)`,
      picUrl: 'https://www.viawater.nl/files/default-user.png',
    };
  }

  handleInput = (input, label) => {
    console.log(`${input} , ${label}`);
    this.setState({ [label]: input });
  };

  handleGradChange = newGrad => {
    this.setState({ gradient: newGrad });
  };

  handlePicChange = newPic => {
    this.setState({ picUrl: newPic });
  };

  render() {
    return (
      <div className="BigPicture">
        <div id="formComponent" className="FormComponent">
          <div className="pic">
            <Pic onPicChange={this.handlePicChange} pic={this.state.picUrl} />
          </div>
          <div className="gradient">
            <GradientGen
              onGradChange={this.handleGradChange}
              grad={this.state.gradient}
            />
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
        <div className="exports">
          <ExportComp
            name={this.state.Name}
            title={this.state.Title}
            email={this.state.Email}
            phone={this.state.Phone}
            gradient={this.state.gradient}
            picUrl={this.state.picUrl}
          />
        </div>
      </div>
    );
  }
}
