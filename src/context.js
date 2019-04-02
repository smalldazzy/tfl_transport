import React, { Component } from 'react';
import { fetchStations } from "./api";

const Context=React.createContext();

export default class Provider extends Component {
  state = {
    loadingStations: true,
    stations: [],
  };

   async componentDidMount() {
     const stations = await fetchStations();
     this.setState(() => ({ stations, loadingStations: false }));
     console.log(stations[0].commonName);
   }
   

   render() {
    return (
      <Context.Provider>asda

      </Context.Provider>
    );
  }
}


const Consumer = Context.Consumer;
//export {Provider, Consumer};
