import React, { useState, useContext, globalState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "../css/map.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import buildingsPolygon from "../building_polygon.json";
import polygon_data from "../data/polygon_data.json";
import Contex from "../store/context";
import kgis_upe from "../data/kgis_upe.json";
import balance_result_full from "../data/balance_result_full.json";
import {
  GetBalanceGroup, GetAllObjBalanaceId,
  GetBalanceIndexIsClean,
  GetIsCleanByBalanceIndex,
  GetKgisIdByBranchId,
  GetAllBuildingByKgisList,
  GetAllSubstationNnByKgisList,
  GetAllSubstationVnByKgisList} from '../scripts/kgisid_mapping.js'
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

const PhantomicBuilding = (kgisId) => {
  var temp;
  let style = {
    color: "red",
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

const NonePhantomicBuilding = (globalState) => {
  let style = {
    color: "red",
  };

  let bi = globalState.balance_index;
  let kgisId = globalState.bi_value;
  let kgis_building_list = GetAllObjBalanaceId(bi);
  let building_objects = GetAllBuildingByKgisList(kgis_building_list)
  let substation_nn = GetAllSubstationNnByKgisList(kgis_building_list);
  let substation_vn = GetAllSubstationVnByKgisList(kgis_building_list)

  let final_array = [...substation_nn, ...substation_vn, ...building_objects];

   return <GeoJSON key={kgisId} data={final_array} style={style} />;
};

const DisplayMultipleBalanceGroups = (globalState) => {
  const { globalDispach } = useContext(Contex);


  const handleTsClick = (event) => {
    globalDispach({
      type: "FILTERCOMPONENT",
      bi_value: event.sourceTarget.feature.properties.kgisId,
      isPhantomic: event.sourceTarget.feature.properties.isPhantomic,
      balance_index: GetBalanceIndexIsClean(GetBalanceGroup(event.sourceTarget.feature.properties.kgisId)).balance_index,
      isClean: GetBalanceIndexIsClean(GetBalanceGroup(event.sourceTarget.feature.properties.kgisId)).isClean,
      objSelected: true,
      building_address: event.sourceTarget.feature.properties.name,
      obj_from: 'map_click',
      isInPSK: false,
    });
  };

  let style = {
    color: "green",
  };

  var branch_ids = [];
  var array = [];
  for (const balance_index of globalState.balance_index_array) {
    branch_ids.push(GetAllObjBalanaceId(balance_index));
  }

  for (const obj of branch_ids) {
    array.push(<GeoJSON key={obj[0]} data={GetAllBuildingByKgisList(obj)} style={style}   onClick={handleTsClick}/>);
  }

   return array;
};

const GeneralMap = () => {
  const { state, globalState } = useContext(Contex);
  const { globalDispach } = useContext(Contex);

  const position = [60.04506711185432, 30.39647037897212];
  const zoom_level = 15;

  let map = '';
  let basic_layer =  ''

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
    height: "70vh",
  };

  const handleClick = (event) => {

console.log(event.sourceTarget.feature.properties);

    map.leafletElement.fitBounds(event.sourceTarget.getBounds());

    globalDispach({
      type: "FILTERCOMPONENT",
      bi_value: event.sourceTarget.feature.properties.kgisId,
      isPhantomic: event.sourceTarget.feature.properties.isPhantomic,
      balance_index: GetBalanceIndexIsClean(GetBalanceGroup(event.sourceTarget.feature.properties.kgisId)).balance_index,
      isClean: GetBalanceIndexIsClean(GetBalanceGroup(event.sourceTarget.feature.properties.kgisId)).isClean,
      objSelected: true,
      building_address: event.sourceTarget.feature.properties.name,
      obj_from: 'map_click',
      isInPSK: event.sourceTarget.feature.properties.isInPSK,
    });
  };

  return (
    <Map
      className="markercluster-map"
      center={typeof globalState.position !== 'undefined' ? globalState.position : position}
      zoom={typeof globalState.zoom_level !== 'undefined' ? globalState.zoom_level : zoom_level}
      ref={(ref) => { map = ref; }}
      style={mapStyle}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        key={"building_polygons"}
        data={buildingsPolygon}
        onClick={handleClick}
          ref={(ref) => { basic_layer = ref; }}
      />

      {globalState.objSelected ? checkDisplay(globalState) : null}

    </Map>
  );
};

const checkDisplay = (globalState) => {

  if(globalState.obj_from === 'ts_select'){
    return DisplayMultipleBalanceGroups(globalState);
  }else{
    if (globalState.balance_index === '') {
      return PhantomicBuilding(globalState.bi_value);
    } else {
      return NonePhantomicBuilding(globalState);
    }
  }


};
export default GeneralMap;
