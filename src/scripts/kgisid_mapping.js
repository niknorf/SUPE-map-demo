import React from 'react';
import balance_result_full from "../data/balance_result_full.json";
import kgis_upe from "../data/kgis_upe.json";
import buildingsPolygon from "../building_polygon.json";


const GetAllBuildingByKgisList= (kgis_building_list) =>{

  let temp;

  temp = buildingsPolygon.map((building) => {
    for (const element of kgis_building_list) {
      if (building.properties.kgisId == element) {
        return building;
      }
    }
  });
// console.log(temp);
  temp = temp.filter((obj) => {
    return typeof obj !== "undefined";
  });

return temp;

}



const GetBalanceGroup = (kgisId) => {
  if (kgisId !== "" && typeof kgisId !== "undefined") {
    //Map the kgisId to upe_id
    var key = kgis_upe.find((element) => {
      return element.kgis_id === kgisId;
    });

    //check if  there is a balance id if not display a message
    var balance_index = balance_result_full.find((element) => {
      return element.branch_id === key.upe_id.toString();
    });
    return balance_index;
  }
};

const GetBalanceIndexIsClean = (balance_index) =>{
  var temp_obj = {
    isClean: "balance_id_not_found",
    balance_index: "",
  };
  if (typeof balance_index !== "undefined") {
    temp_obj.isClean = balance_index.is_clean;
    temp_obj.balance_index = balance_index.balance_index.toString();
  }

  return temp_obj;
}

const GetIsCleanByBalanceIndex = (balance_index) =>{

  var balance_index_obj = balance_result_full.find((element) => {
    return element.balance_index === balance_index && element.type === 'ConsumerBuilding';
  });

  return balance_index_obj;
}

const GetKgisIdByBranchId = (branch_id)=>{

  var obj = kgis_upe.find((element) => {
    return element.upe_id.toString() === branch_id;
  });

  // console.log(obj, branch_id);

  return typeof obj !== 'undefined' ? obj.kgis_id.toString() : "";

}


const GetAllObjBalanaceId = (balance_index) => {
  //get all the balance group objects
  var object_ep_list = balance_result_full.filter((element) => {
    return element.balance_index == balance_index;
  });
  //extract to array branch ids
  let result = object_ep_list.map((a) => a.branch_id);
  var final_array = [];

  kgis_upe.map((element) => {
    if (result.includes(element.upe_id.toString())) {
      final_array.push(element.kgis_id);
    }
  });

  return final_array;
};


export { GetAllObjBalanaceId, GetBalanceGroup, GetBalanceIndexIsClean, GetIsCleanByBalanceIndex, GetKgisIdByBranchId, GetAllBuildingByKgisList};
