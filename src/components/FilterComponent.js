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
import ts_list from "../data/ts_balance_list.json";
import building_polygons from "../building_polygon.json";

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

const SelectComponent = () => {
  const classes = useStyles();
  const [tp, setTp] = useState("");
  const { state, globalDispach } = useContext(Contex);
  const { globalState } = useContext(Contex);

  const handleChange = (event, value) => {
    setTp(event.target.value);
    globalDispach({ type: "FILTERCOMPONENT", bi_value: value.props.myvalue });
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink="shrink" id="tp_select_label">
        Трансформаторная подстанция
      </InputLabel>
      <Select
        labelId="tp_select_label"
        id="tp_select"
        value={tp}
        onChange={handleChange}
        displayEmpty="displayEmpty"
        className={classes.selectEmpty}
      >
        <MenuItem name="" value="">
          Выберете из списка
        </MenuItem>
        <MenuItem myvalue={[1, 4, 5]} value={10}>
          Ten
        </MenuItem>
        <MenuItem myvalue={[5]} value={78}>
          Twenty
        </MenuItem>
        <MenuItem myvalue={[566, 45, 4]} value={45}>
          Thirty
        </MenuItem>
      </Select>
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
      isPhantomic: value === null? '': value.isPhantomic,
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

  // console.log(street_array);

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

export { SelectComponent, SearchComponent };
