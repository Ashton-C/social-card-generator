import React, { Component } from 'react';
import './MatInput.css';

export default class MatInput extends Component {
  render() {
    return (
      <div className="MatInput">
        <form>
          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>{this.props.label}</label>
          </div>
        </form>
      </div>
    )
  }
}
