import React, { Component } from 'react';
import FormComponent from './Components/FormComponent';
import Result from './Components/Result';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App"> 
        <div className="Header">
          <h1>Social Card Generator</h1>
          <br/>
          <p>Fill out the form to get a custom social card!</p>
        </div>
        <FormComponent />
        <Result data='1' />
        <div className="Footer">
          <p>Ashton Christensen - 2019 - </p>
        </div>
      </div>
    );
  }
}
