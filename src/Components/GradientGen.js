import React, { Component } from 'react';
import './GradientGen.css';
var ColorScheme = require('color-scheme');

export default class GradientGen extends React.Component {
  constructor() {
    super();
    this.state = {
      gradient: `linear-gradient(45deg, rgba(186,186,186, .6), rgba(255,255,255,0)),   linear-gradient(to right, #B78A9D, #e380ff)`,
    };
    this.getScheme = this.getScheme.bind(this);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }
  handleChange = () => {
    this.props.onGradChange(this.state.gradient);
  };
  getScheme() {
    var scheme = new ColorScheme();
    let color = this.getRandomColor();
    scheme
      .from_hex(color)
      .scheme('analogic')
      .variation('pastel');
    var colors = scheme.colors();
    console.log(colors);
    // newDiv.style.setProperty("background-image", `linear-gradient(45deg, rgba(255,255,255, .6), rgba(186,186,186,0)), linear-gradient(to right, #${colors[0]}, #${colors[Math.floor(Math.random()*11)]})`)
    this.setState(
      {
        gradient: `linear-gradient(45deg, rgba(186,186,186, .6), rgba(255,255,255,0)),   linear-gradient(to right, #${
          colors[0]
        }, #${colors[Math.floor(Math.random() * 11)]})`,
      },
      this.handleChange
    );
    return colors;
  }
  render() {
    return (
      <div className="GradientGen" style={{ background: this.state.gradient }}>
        <div>
          <p>
            <button onClick={this.getScheme}> Change color! </button>
          </p>
        </div>
      </div>
    );
  }
}

//  newDiv.style.setProperty("background-image", `linear-gradient(to bottom, rgba(255,255,255, .6), rgba(186,186,186,0)),   linear-gradient(to right, #${colors[0]}, #${colors[Math.floor(Math.random()*11)]})`);
