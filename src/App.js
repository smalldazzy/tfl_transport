import React, { Component } from 'react';
import './App.css';
import { fetchStations } from './api.js';
import Station from './context.js'

const vaa='940GZZLUAMS';
let test=fetchStations();
test=JSON.parse(test);
console.log(test);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ss</h1>
      </div>
    );
  }
}
export default App;
