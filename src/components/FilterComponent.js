import { Autocomplete } from "@material-ui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";

import Contex from "../store/context";
import building_polygons from "../building_polygon.json";
import ts_balance_dict from "../data/ts_balance_dict.json";
import {GetBalanceGroup, GetAllObjBalanaceId, GetBalanceIndexIsClean} from '../scripts/kgisid_mapping.js'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  adressInput: {
    display: "flex",
    marginRight: "32px",
  },
}));

const TsSearchComponent = () => {
  const classes = useStyles();
  const { globalDispach } = useContext(Contex);

  const handleChange = (event, value) => {
    globalDispach({
      type: "FILTERCOMPONENT",
      balance_index_array: value === null ? "" : value.bg_index,
      objSelected: value === null ? false : true,
      obj_from: 'ts_select',
    });
  };

  var ts_search = [];
  for (const key of Object.keys(ts_balance_dict)) {
    var obj = {};
      obj.ts_name = key;
      obj.bg_index = ts_balance_dict[key];
      ts_search.push(obj)
  }

  return (
    <FormControl>
      <Autocomplete
        id="ts_search"
        options={ts_search}
        getOptionLabel={(option) => option.ts_name}
        style={{ width: 300 }}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label="Выберете из списка " margin="normal" />
        )}
      />
    </FormControl>
  );
};

const SearchComponent = () => {
  const classes = useStyles();
  const { globalDispach } = useContext(Contex);

  const handleChange = (event, value) => {
    globalDispach({
      type: "FILTERCOMPONENT",
      bi_value: value === null ? "" : value.kgisId,
      isPhantomic: value === null ? "" : value.isPhantomic,
      balance_index: value === null ? '' : GetBalanceIndexIsClean(GetBalanceGroup(value.kgisId)).balance_index,
      isClean: value === null ? '' : GetBalanceIndexIsClean(GetBalanceGroup(value.kgisId)).isClean,
      objSelected: value === null ? false : true,
      fromTsFilter: false,
      obj_from: 'street_select',
    });
  };

  //Create array of the steet from the building_polygon file
  var street_array = [];

  building_polygons.map((obj) => {
    let temp_obj = {};
    temp_obj.name = obj.properties.name;
    temp_obj.kgisId = obj.properties.kgisId;
    temp_obj.isPhantomic = obj.properties.isPhantomic;
    street_array.push(temp_obj);
  });

  return (
    <FormControl>
      <Autocomplete
        id="street_search"
        options={street_array}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label="Найти адрес" margin="normal" />
        )}
      />
    </FormControl>
  );
};

export { SearchComponent, TsSearchComponent };
