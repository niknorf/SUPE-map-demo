import React, { useState, useContext, globalState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "../css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import buildingsPolygon from "../building_polygon.json";
import polygon_data from "./polygon_data.json";
import Contex from "../store/context";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

const PhantomicBuilding = (kgisId) => {
  var temp;
    let style = {
      color: "red"
    };
    temp = buildingsPolygon.map((building) => {
      if (building.properties.kgisId == kgisId) {
        return building;
      }
    });

    temp = temp.filter((obj) => {
      return typeof obj !== "undefined";
    });
      return <GeoJSON key={kgisId} data={temp} style={style} />;
};

const GeneralMap = () => {
  const { state, globalState } = useContext(Contex);


  const position = [60.04220088616337, 30.339628111235275];

  const style = {
    fillColor: "rgba(37, 47, 74, 0.24)",
    weight: 1,
    opacity: 1,
    color: "#252F4A", //Outline color
    fillOpacity: 0.7,
  };

  const style_main = {
    fillColor: "rgba(74, 156, 255, 0.25)",
    weight: 1,
    opacity: 1,
    color: "#4A9CFF", //Outline color
    // fillOpacity: 0.7
  };

  const mapStyle = {
    height: "100vh",
  };

  return (
    <Map
      className="markercluster-map"
      center={position}
      zoom={20}
      style={mapStyle}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON key={"building_polygons"} data={buildingsPolygon} />

      {globalState.isPhantomic && globalState.bi_value !== '' && typeof globalState.bi_value !== 'undefined'
        ? PhantomicBuilding(globalState.bi_value)
        : null}
    </Map>
  );
};
export default GeneralMap;
