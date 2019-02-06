import React, { Component } from 'react';
import './ExportComp.css';

export default class ExportComp extends Component {
  render() {
    return (
      <div className="ExportComp">
        <div>
          <h3>Choose a format you would like to export to.</h3>
        </div>
        <div>
          <form className="FileFormats">
            <button>PNG</button>
          </form>
        </div>
      </div>
    );
  }
}
