import React, { Component } from "react";
import "./MatInput.css";

export default class MatInput extends Component {
  render() {
    return (
      <div className="MatInput">
        <form>
          <div>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={this.props.label}
            />
          </div>
        </form>
      </div>
    );
  }
}
