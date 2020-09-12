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
import {GetBalanceGroup, GetAllObjBalanaceId} from '../scripts/kgisid_mapping.js'
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

// const GetBalanceGroup = (kgisId) => {
//   if (kgisId !== "" && typeof kgisId !== "undefined") {
//     //Map the kgisId to upe_id
//     var key = kgis_upe.find((element) => {
//       return element.kgis_id === kgisId;
//     });
//
//     //check if  there is a balance id if not display a message
//     var balance_index = balance_result_full.find((element) => {
//       return element.branch_id === key.upe_id.toString();
//     });
//
//
//     var temp_obj = {
//       isClean: "balance_id_not_found",
//       balance_index: "",
//     };
//     if (typeof balance_index !== "undefined") {
//       temp_obj.isClean = balance_index.is_clean;
//       temp_obj.balance_index = balance_index.balance_index.toString();
//     }
//
//     return temp_obj;
//   }
// };

// const GetAllObjBalanaceId = (balance_index) => {
//   //get all the balance group objects
//   var object_ep_list = balance_result_full.filter((element) => {
//     return element.balance_index == balance_index;
//   });
//   //extract to array branch ids
//   let result = object_ep_list.map((a) => a.branch_id);
//   var final_array = [];
//
//   kgis_upe.map((element) => {
//     if (result.includes(element.upe_id.toString())) {
//       final_array.push(element.kgis_id);
//     }
//   });
//
//   return final_array;
// };

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

/*TODO if it is an array consosts of 1 element proceed of many loop though them and get the building lists*/
  let kgis_building_list = GetAllObjBalanaceId(bi);
  let temp;
  temp = buildingsPolygon.map((building) => {
    for (const element of kgis_building_list) {
      if (building.properties.kgisId == element) {
        return building;
      }
    }
  });

  temp = temp.filter((obj) => {
    return typeof obj !== "undefined";
  });

   return <GeoJSON key={kgisId} data={temp} style={style} />;;
};

const DisplayByBalanceGroup = (bg_index_array) => {};

const GeneralMap = () => {
  const { state, globalState } = useContext(Contex);
  const { globalDispach } = useContext(Contex);

  const position = [60.04506711185432, 30.39647037897212];

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

  const handleClick = (event) => {
    console.log(event.sourceTarget.feature.properties.isPhantomic);

    globalDispach({
      type: "FILTERCOMPONENT",
      bi_value: event.sourceTarget.feature.properties.kgisId,
      isPhantomic: event.sourceTarget.feature.properties.isPhantomic,
      balance_index: GetBalanceGroup(
        event.sourceTarget.feature.properties.kgisId
      ).balance_index,
      isClean: GetBalanceGroup(event.sourceTarget.feature.properties.kgisId)
        .isClean,
      objSelected: true,
      building_address: event.sourceTarget.feature.properties.name,
    });
  };

  return (
    <Map
      className="markercluster-map"
      center={position}
      zoom={16}
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
      />

      {globalState.objSelected ? checkDisplay(globalState) : null}

    </Map>
  );
};

const checkDisplay = (globalState) => {
  console.log(globalState);
  if (globalState.isClean === 'balance_id_not_found' || globalState.isPhantomic) {
    return PhantomicBuilding(globalState.bi_value);
  } else {
    return NonePhantomicBuilding(globalState);
    /*TODO add the varibale to identify if it came from TS filter display all balance group*/
  }
};
export default GeneralMap;
