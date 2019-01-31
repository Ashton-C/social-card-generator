import React, { Component } from "react";
import "./MatInput.css";

export default class MatInput extends Component {
  render() {
    return (
      <div className="MatInput">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
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
