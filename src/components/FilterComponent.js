import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useContext, useState} from 'react';
import Contex from '../store/context';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  adressInput: {
    display: "flex",
    marginRight: "32px"
  }
}));

 const SelectComponent = () => {
  const classes = useStyles();
  const [tp, setTp] = useState('');
  const [notTp, setNotTp] = useState('');
  const {state, globalDispach} = useContext(Contex);

  const handleChange = (event, value) => {
    setTp(event.target.value);
    globalDispach({type: 'FILTERCOMPONENT', data: value.props.myvalue});
  };

  return (<FormControl className={classes.formControl}>
    <InputLabel shrink="shrink" id="tp_select_label">Трансформаторная подстанция</InputLabel>
    <Select labelId="tp_select_label" id="tp_select" value={tp} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
      <MenuItem name="" value="">Выберете из списка</MenuItem>
      <MenuItem myvalue={[1, 4, 5]} value={10}>Ten</MenuItem>
      <MenuItem myvalue={[5]} value={78}>Twenty</MenuItem>
      <MenuItem myvalue={[566,45,4]} value={45}>Thirty</MenuItem>
    </Select>
  </FormControl>);
}

const SearchComponent = ()=> {
  const classes = useStyles();
  const [tp, setTp] = useState('');

  const {globalDispach} = useContext(Contex);

  const handleChange = (event) => {
    setTp(event.target.value);
    globalDispach({type: 'FILTERCOMPONENT'})
  };
// use for search component
// clsx(classes.adressInput, classes.textField)

      // <FormControl>
      //   <Autocomplete id="street_search"  options={address_search.menu_items} getOptionLabel={(option) => option.name} style={{
      //       width: 300
      //     }} onChange={this.handleFilterTextChange} renderInput={(params) => <TextField {...params} label={address_search.help_text} margin="normal" endAdornment={
      //       <InputAdornment position="end">
      //         <IconButton>
      //           <SearchIcon style={{ color: "#4A9CFF" }} />
      //         </IconButton>
      //       </InputAdornment>
      //     }/>}/>
      // </FormControl>

  return (<div>
    ALLALAL
  </div>)
}

export {SelectComponent, SearchComponent}
