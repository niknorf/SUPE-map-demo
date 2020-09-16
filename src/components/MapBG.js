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
  GetBalanceGroupObj, GetAllObjBalanaceId,
  GetBalanceIndexIsClean,
  GetIsCleanByBalanceIndex,
  GetKgisIdByBranchId,
  GetAllBuildingByFiasList,
  GetAllSubstationsByFiasList,
  GetPhantomicBuildingsObjects,
} from '../scripts/kgisid_mapping.js'
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

const PhantomicBuildingstyle = {
  fillColor: "rgba(241, 158, 105, 0.2)",
  weight: 1,
  opacity: 1,
  color: "#EC8041", //Outline color
  fillOpacity: 0.7,
};

const NonPhantomicBuildingstyle = {
  fillColor: "rgba(37, 47, 74, 0.24)",
  weight: 1,
  opacity: 1,
  color: "#252F4A", //Outline color
  fillOpacity: 0.7,
};

const PhantomicBuilding = (kgisId) => {
  var temp;

  temp = buildingsPolygon.map((building) => {
    if (building.properties.kgisId == kgisId) {
      return building;
    }
  });

  temp = temp.filter((obj) => {
    return typeof obj !== "undefined";
  });
  return <GeoJSON key={kgisId} data={temp} style={PhantomicBuildingstyle} />;
};

const NonePhantomicBuilding = (globalState) => {

  let bi = globalState.balance_index;
  let fiasId_building_list = GetAllObjBalanaceId(bi);
  let phantomic_building_objects = GetPhantomicBuildingsObjects(bi);
  let building_objects = GetAllBuildingByFiasList(fiasId_building_list.concat(phantomic_building_objects));
  let substations = GetAllSubstationsByFiasList(fiasId_building_list);
  let final_array = [...substations, ...building_objects];

  return <GeoJSON key={bi} data={building_objects} style={(features) => {return features.properties.isPhantomic ? PhantomicBuildingstyle : NonPhantomicBuildingstyle} }/>;
};

const DisplayMultipleBalanceGroups = (globalState) => {
  const { globalDispach } = useContext(Contex);

  const handleTsClick = (event) => {
    if(globalState.balance_index_array.length > 1){

      globalDispach({
        type: "FILTERCOMPONENT",
        kgis_id: event.sourceTarget.feature.properties.kgisId,
        fiasId: event.sourceTarget.feature.properties.fiasId,
        isPhantomic: event.sourceTarget.feature.properties.isPhantomic,
        balance_index: GetBalanceIndexIsClean(GetBalanceGroupObj(event.sourceTarget.feature.properties.fiasId)).balance_index,
        isClean: GetBalanceIndexIsClean(GetBalanceGroupObj(event.sourceTarget.feature.properties.fiasId)).isClean,
        objSelected: true,
        building_address: event.sourceTarget.feature.properties.name,
        obj_from: 'map_click',
        isInPSK: false,
      });
    }
  };

  const style = {
    fillColor: "rgba(37, 47, 74, 0.24)",
    weight: 1,
    opacity: 1,
    color: "#252F4A", //Outline color
    fillOpacity: 0.7,
  };

  const PhantomicStyle = {
    fillColor: "rgba(241, 158, 105, 0.2)",
    weight: 1,
    opacity: 1,
    color: "#EC8041", //Outline color
    fillOpacity: 0.7,
  };

  var branch_ids = [];
  var array = [];
  for (const balance_index of globalState.balance_index_array) {
    branch_ids.push(GetAllObjBalanaceId(balance_index));
  }

  for (const obj of branch_ids) {
    array.push(<GeoJSON key={obj[0]} data={GetAllBuildingByFiasList(obj)} style={(features) => {return features.properties.isPhantomic ? PhantomicStyle : style} }   onClick={handleTsClick}/>);
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

    // map.leafletElement.fitBounds(event.sourceTarget.getBounds());

    globalDispach({
      type: "FILTERCOMPONENT",
      kgis_id: event.sourceTarget.feature.properties.kgisId,
      fiasId: event.sourceTarget.feature.properties.fiasId,
      isPhantomic: event.sourceTarget.feature.properties.isPhantomic,
      balance_index: GetBalanceIndexIsClean(GetBalanceGroupObj(event.sourceTarget.feature.properties.fiasId)).balance_index,
      isClean: GetBalanceIndexIsClean(GetBalanceGroupObj(event.sourceTarget.feature.properties.fiasId)).isClean,
      objSelected: true,
      building_address: event.sourceTarget.feature.properties.name,
      obj_from: 'map_click',
      isInPSK: event.sourceTarget.feature.properties.isInPSK,
    });
  };

  return (
    <Map
      className="markercluster-map"
      center={position}
      zoom={zoom_level}
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
        style={style_main}
      />

      {globalState.objSelected ? checkDisplay(globalState) : null}

    </Map>
  );
};

const checkDisplay = (globalState) => {

  if(globalState.obj_from === 'ts_select'){
    return DisplayMultipleBalanceGroups(globalState);
  }else{
    if (globalState.isPhantomic) {
      return PhantomicBuilding(globalState.kgis_id);
    } else {
      return NonePhantomicBuilding(globalState);
    }
  }


};
export default GeneralMap;
