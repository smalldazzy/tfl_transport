import React, { Component } from 'react';
import { fetchStations } from "./api";
import MapContainer from './map'

//const Context=React.createContext();

export default class Provider extends Component {
  state = {
    loadingStations: true,
    stations: [],
  };

  async componentDidMount() {
     const stations = await fetchStations();
     this.setState(() => ({ stations, loadingStations: false }));

  }



  render() {
    return (
        <MapContainer store={this.state}/>

    );
  }
}
