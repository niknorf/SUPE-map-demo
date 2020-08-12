import React from 'react';
import {Map, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import './map.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import customData from './data_map.json';
import buildingsPolygon from './building-polygon.json'


import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

const position = [60.08, 30.33];

function PlaceMarkers() {
  var markers = [];

  // data prossesing, adding markers
  for (var i = 0; i < customData.length; i++) {
    var obj = customData[i];
    var title = obj.loss_probability;

      var icon_url = 'red.png';

      if (parseFloat(obj.loss_probability) <= 20) {
        icon_url = 'green.png';
      } else if (parseFloat(obj.loss_probability) >= 21 && parseFloat(obj.loss_probability) <= 70) {
        icon_url = 'yellow.png';
      }

  const m_icon =   new L.Icon({
      iconUrl: require('./img/' + icon_url),
      iconSize: [40, 40]
    });

    markers.push(<Marker position={[obj.lat, obj.lon]} key={i}  icon={m_icon} ></Marker>);

}

  return (markers)
}

function GeoJsonLayer(){

console.log(buildingsPolygon);
return <GeoJSON key={'building_polygons'} data={buildingsPolygon}/>;
}
export default function() {
  return (<Map className="markercluster-map"   center={position} zoom={16}>
    <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
    <MarkerClusterGroup>
      <PlaceMarkers/>
    </MarkerClusterGroup>
<GeoJsonLayer />
  </Map>)
}
