import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import street_list from '../data/street_list.json';


const address_search = {
  label: '',
  help_text: 'Найти адрес',
  menu_items: street_list.street_list,
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [street, setStreet] = React.useState('');

  const handleChange = (event) => {
    setStreet(event.target.value);
  };

  return (
    <div>
    <FormControl className={classes.formControl}>
      <Autocomplete
      id="street_search"
      debug
      options={address_search.menu_items}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={address_search.help_text} margin="normal" />}
    />
    {/* <InputLabel shrink="shrink" id="demo-simple-select-placeholder-label-label">
      {address_search.label}
    </InputLabel>
      <Select labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" value={street} onChange={handleChange} displayEmpty="displayEmpty" className={classes.selectEmpty}>

        <MenuItem value="">{address_search.help_text}</MenuItem>
        {address_search.menu_items.map((item, index) => <MenuItem key={item.id}>{item.name}</MenuItem>)}

      </Select> */}
    </FormControl>

  </div>
);
}
