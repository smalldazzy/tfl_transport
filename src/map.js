import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Provider from './context.js'

const G_API='AIzaSyDuLQPPCI1hxAFfPfV0bs4XKn0wlwBGMQw';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  // constructor (props){
  //   super(props);
  //   this.state = {
  //       showingInfoWindow: false,
  //       activeMarker: {},
  //       selectedPlace: {}
  //     }
  //     onMarkerClick = (props, marker, e) => {
  //       this.setState({
  //         selectedPlace: props,
  //         activeMarker: marker,
  //         showingInfoWindow: true
  //       });
  //     }
  // }





  render() {
    if (!this.props.store.loadingStations) console.log(this.props.store.stations[1].lat);
    console.log('tic');
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: 51.519105,
          lng: -0.128405
        }}><Marker title = { 'Changing Colors Garage' }
          position = {{ lat: 51.505068 , lng: -0.126524 }}/>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: G_API
})(MapContainer)
