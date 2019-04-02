import React, { Component } from 'react';
import { fetchStations } from "./api";
import MapContainer from './map'

const Context=React.createContext();

export default class Provider extends Component {
  state = {
    loadingStations: true,
    stations: [],
  };

  // setMarker(lat,lng,title){
  //   const marker = new google.maps.Marker({
  //     position: {lat, lng},
  //     map: map,
  //     title: title,
  //     opacity: 0.7
  //   });
  // }

  async componentDidMount() {
     const stations = await fetchStations();
     this.setState(() => ({ stations, loadingStations: false }));
     console.log(stations[0].commonName);
     // stations.forEach(stop=>setMarker(stop.lat, stop.lon, stop.commonName));
  }



  render() {
    return (
      // <Context.Provider>asda
        <MapContainer store={this.state.stations}/>
      // </Context.Provider>
    );
  }
}


//const Consumer = Context.Consumer;
//export {Provider, Consumer};
