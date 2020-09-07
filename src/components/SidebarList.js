import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CssBaseline from '@material-ui/core/CssBaseline';
import { classes } from 'istanbul-lib-coverage';
import { makeStyles } from '@material-ui/styles';



const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent:"center",
  padding: 0,
  margin: 'auto',
  color: "#FFF",
};

const listIcon ={
  color: "#FFF",
  justifyContent: 'center',
};

export const mainListItems = (
    <div>
      {console.log('Classes', classes)}
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <ListItem button style={flexContainer}>
          <ListItemIcon style={listIcon}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText className={classes.itemText} primary="Россети"/>
      </ListItem>
      <ListItem button style={flexContainer}>
          <ListItemIcon style={listIcon}>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Кабинет" />
      </ListItem>
      {/* </ThemeProvider> */}
    </div>
  )

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
    {/* <MuiThemeProvider theme={theme}> */}
    <ListItem button style={flexContainer}>
        <ListItemIcon style={listIcon}>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItem>
    {/* </MuiThemeProvider> */}
  </div>
);
