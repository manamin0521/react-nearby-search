import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React周辺施設検索</h2>
        </div>
        <p className="App-intro">
          <Button>Bootstrapボタン</Button>
        </p>
      </div>
    );
  }
}

export default App;
