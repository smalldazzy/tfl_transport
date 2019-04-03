import React, { Component } from 'react';
import './App.css';
import Provider from './context.js';
//import MapContainer from './map.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider/>
      </div>
    );
  }
}
export default App;
