import React, { Component } from 'react';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
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
  componentDidMount(){
    this.renderMap();
  }
  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${G_API}&callback=initMap`)
    window.initMap = this.initMap
  }


  initMap = () => {
   // Create A Map
   var map = new window.google.maps.Map(document.getElementById('map'), {
     center: {lat: -34.397, lng: 150.644},
     zoom: 8
   })
 }

   // Create An InfoWindow
 //   var infowindow = new window.google.maps.InfoWindow()
 //
 //   // Display Dynamic Markers
 //   this.state.venues.map(myVenue => {
 //
 //     var contentString = `${myVenue.venue.name}`
 //
 //     // Create A Marker
 //     var marker = new window.google.maps.Marker({
 //       position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
 //       map: map,
 //       title: myVenue.venue.name
 //     })
 //
 //     // Click on A Marker!
 //     marker.addListener('click', function() {
 //
 //       // Change the content
 //       infowindow.setContent(contentString)
 //
 //       // Open An InfoWindow
 //       infowindow.open(map, marker)
 //     })
 //
 //   })
 // }




  render() {
    if (!this.props.store.loadingStations) console.log(this.props.store.stations[1].lat);
    console.log('tic');
    return (
      <div id='map'></div>
      // <Map
      //   google={this.props.google}
      //   zoom={10}
      //   style={mapStyles}
      //   initialCenter={{
      //     lat: 51.519105,
      //     lng: -0.128405
      //   }}><Marker title = { 'Changing Colors Garage' }
      //     position = {{ lat: 51.505068 , lng: -0.126524 }}/>
      //   </Map>
    );
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
export default MapContainer;
// export default GoogleApiWrapper({
//   apiKey: G_API
// })(MapContainer)
