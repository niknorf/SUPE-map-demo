import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BuBdTable from './BuBdTable';
import  MapBuBd from './MapBUBD';
import BuBdSidebar from './BuBdSidebar'; 
import Contex from "../store/context";
import '../css/mapBuBd.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100vh',
  },
  fullHeight: {
    height: '100vh',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const { state, globalState } = useContext(Contex);



  var displayedObject;

  if (globalState.isOpenSidebar) {
    displayedObject = <Grid item xs={7} className={classes.fullHeight}>
                        <BuBdSidebar />
                      </Grid>;
  } else if (globalState.isOpenSidebar == false) {
    displayedObject = <Grid item xs={7} className={classes.fullHeight}>
                        <Paper className={classes.paper}><BuBdTable /></Paper>
                      </Grid>;
                      console.log(displayedObject);
                      console.log(globalState.isOpenSidebar);
  }

  return (
    <div className={classes.root}>
      <Grid container>
        {displayedObject}
        <Grid item xs={5} className={classes.fullHeight}>
          <MapBuBd />
        </Grid>
      </Grid>
    </div>
  );
}