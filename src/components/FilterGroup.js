import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  const [age, setAge] = React.useState('');

  console.log(props.menu_items);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (<div>
    <FormControl className={classes.formControl}>
      <InputLabel shrink="shrink" id="demo-simple-select-placeholder-label-label">
        {props.label}
      </InputLabel>
      <Select labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" value={age} onChange={handleChange} displayEmpty="displayEmpty" className={classes.selectEmpty}>

        <MenuItem value="">Выберите из списка</MenuItem>
        {props.menu_items.map((item, index) => <MenuItem key={item.key}>{item.value}</MenuItem>)}

      </Select>
    </FormControl>
  </div>);
}
