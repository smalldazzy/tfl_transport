import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const APP_ID='62d760f3';
const APP_KEY='b3b04a0eaa09b7bf30e019bdf87a116b';
const auth=`app_id=${APP_ID}&app_key=${APP_KEY}`;
const G_API='AIzaSyDuLQPPCI1hxAFfPfV0bs4XKn0wlwBGMQw';


async function fetchData(resource) {
  const response=await fetch(`https://api.tfl.gov.uk${resource}?${auth}`);
  return response.json();
}
export async function fetchStations () {
  const {stopPoints} = await fetchData('/StopPoint/Mode/tube');
  return stopPoints.filter(item=> item.stopType==='NaptanMetroStation');
}
