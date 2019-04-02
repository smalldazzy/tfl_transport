import React, { Component } from 'react';
import './App.css';
import { fetchStations } from './api.js';
import Provider from './context.js';
import MapContainer from './map.js';

//const vaa='940GZZLUAMS';
// (async ()=>{
//   let test= await fetchStations();
//   console.log(test);
// })();


class App extends Component {
  render() {
    return (
      <div className="App">
          <MapContainer/>

      </div>
    );
  }
}
export default App;
