import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BuBdTable from './BuBdTable';
import  MapBuBd from './MapBUBD';
import BuBdSidebar from './BuBdSidebar'; 
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

  return (
    <div className={classes.root}>
      <Grid container>
        {/* <Grid item xs={7} className={classes.fullHeight}>
          <Paper className={classes.paper}><BuBdTable /></Paper>
        </Grid>
        <Grid item xs={5} className={classes.fullHeight}>
          <MapBuBd />
        </Grid> */}

        <Grid item xs={3} className={classes.fullHeight}>
          <BuBdSidebar />
        </Grid>
        <Grid item xs={9} className={classes.fullHeight}>
          <MapBuBd />
        </Grid>
      </Grid>
    </div>
  );
}