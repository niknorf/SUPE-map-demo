import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
// import { Icon } from 'leaflet';
import './map.css';

export default function() {
  return (
    <Map center={[60.08, 30.33]} zoom={16}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    </Map>
  )
}