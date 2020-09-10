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
import address_search from "../data/street_list";
import ts_list from "../data/ts_balance_list.json";
import address_list from '../building_polygon.json'


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

  // setTp(globalState.toClean);

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
      bi_value: value === null ? "" : value.balance_index,
    });
  };

// console.log(Object.entries(address_list));
var street_array = []

// let format = address_list.map((obj) =>{
//   let obj_push = {}
//   // obj_push.name = obj.parametre
//   console.log(obj.propperties);
//   return obj_push;
// });
//
// console.log(street_array);
// const allowed = ['name', 'kgisId', 'isPhantomic']
//   let addres = Object.keys(address_list.properties).filter(key=>allowed.includes(key)).reduce((obj, key)=>{
//     obj[key] = address_list.propertiesp[key];
//     return obj;
//   },{});
//
//   console.log(addres);


  return (
    <FormControl>
      <Autocomplete
        id="street_search"
        options={address_search.street_list}
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
