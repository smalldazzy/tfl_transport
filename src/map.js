import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const G_API='AIzaSyDuLQPPCI1hxAFfPfV0bs4XKn0wlwBGMQw';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: 51.519105,
         lng: -0.128405
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: G_API
})(MapContainer);
