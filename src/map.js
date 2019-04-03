import React, { Component } from 'react';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Provider from './context.js'

const G_API='AIzaSyDuLQPPCI1hxAFfPfV0bs4XKn0wlwBGMQw';


export class MapContainer extends Component {
  state = {
    loading: true
  }
  componentDidMount(){
  }
  componentDidUpdate(){
    if (!this.props.store.loadingStations) {
      this.renderMap();
    }
  }
  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${G_API}&callback=initMap`)
    window.initMap = this.initMap
  }


  initMap = () => {
   let map = new window.google.maps.Map(document.getElementById('map'), {
     center: {lat: 51.519105, lng: -0.128405},
     zoom: 11
   })
   let infowindow = new window.google.maps.InfoWindow()
   this.props.store.stations.map((station,index) => {
     let contentString = '<div id="content">'+
     '<div id="siteNotice">' +
     '</div><strong>' + station.commonName +
     '</strong><div id="bodyContent">' +
     '<ul>' +
     `<li> NaptanId: ${station.naptanId}  </li>` +
     `<li> Line: ${station.lines[0].name} </li>` +
        '</ul>' +
        '</div>' +
        '</div>';

     let marker = new window.google.maps.Marker({
       position: {lat: station.lat , lng: station.lon},
       map: map,
       title: station.commonName,
       info: {
         title: station.commonName,
         id: station.naptanID,
         type: station.stopType
       }
     })

     marker.addListener('click', function() {
        infowindow.setContent(contentString)
        infowindow.open(map, marker)
      })

    })
  }



  render() {
    return (
      <div id='map'></div>
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
