import React, { Component } from "react";
import "./MatInput.css";

export default class MatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    this.props.onInput(this.state.value, this.props.label);
  }

  handleChange = e => {
    let input = e.target.value;
    this.setState({ value: input }, this.handleSubmit);
  };

  render() {
    return (
      <div className="MatInput">
        <form>
          <div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              id="inputs"
              aria-describedby="textinputs"
              placeholder={this.props.label}
            />
          </div>
        </form>
      </div>
    );
  }
}
