import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="gray-background">
      <img src={logo} alt="logo" />
      <h2>Let's deveolop management system!</h2>
    </div>
    )
  }
}


export default App;
