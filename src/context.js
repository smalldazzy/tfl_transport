import React, { Component } from 'react';
import { fetchStations } from "./api";

const Context=React.createContext();

class Provider extends Component {
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
      <Context.Provider>
      </Context.Provider>
    );
  }
}


const Consumer = Context.Consumer;
export {Provider, Consumer};
