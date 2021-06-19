import './App.css';
import React, { Component } from "react";
import Api from "./api";

class App extends Component {

  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Api />
      </div>
    );
  }
}

export default App;
