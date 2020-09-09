import React, {useState, useContext} from 'react';
import {Map, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import '../css/map.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import buildingsPolygon from '../building-polygon.json'
import polygon_data from './polygon_data.json'
import Contex from '../store/context';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;


const GeneralMap = () => {

  const {state, globalState} = useContext(Contex);

  const position = [30.29526169108005, 59.82655905019564  ];

  console.log(globalState);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     buildingsPolygon: '',
  //     click_happened: [],
  //     value: ''
  //   };
  //   this.showBuilding = this.showBuilding.bind(this);
  //    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  // }
  //
  // showBuilding(e) {
  //   let array = [];
  //
  //   e.layer.options.data.features.map(function(item) {
  //     if (e.layer.feature.properties.balance_index === item.properties.balance_index) {
  //       // console.log(item);
  //       array.splice(0, 0, item);
  //     }
  //   });
  //
  //   // this.props.onFilterTextChange(e.layer.feature.properties.balance_index);
  //   // array = this.state.click_happened.map(l => Object.assign({}, l))
  //
  //   // this.setState((prevState) => {
  //   //   return {click_happened: array, value: e.layer.feature.properties.balance_index}
  //   // });
  //
  // }

    const filterText = 4;

    const style = {
      fillColor: 'rgba(37, 47, 74, 0.24)',
      weight: 1,
      opacity: 1,
      color: '#252F4A', //Outline color
      fillOpacity: 0.7
    };
    const style_main = {
      fillColor: 'rgba(74, 156, 255, 0.25)',
      weight: 1,
      opacity: 1,
      color: '#4A9CFF', //Outline color
      // fillOpacity: 0.7
    }

    // var building_array = [];
    //
    // Object.values(polygon_data).map((item, index) => {
    //   console.log(item);
    //
    //   if (item.type === "ConsumerBuilding") {
    //
    //     // building_array.push(item.polygon);
    //   }
    // });

    // console.log(buildingsPolygon);

    return (
      <Map className="markercluster-map" center={position} zoom={7}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
        <GeoJSON key={'building_polygons'} data={buildingsPolygon} />

      </Map>
    );
}
export default GeneralMap;
