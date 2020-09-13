import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import BarChartIcon from '@material-ui/icons/BarChart';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '24px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  button: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '9px 14px',
    border: 'none',
    color: '#FFF',
    width: '175px',
    height: '142px',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '4px 6px 18px rgba(0, 0, 0, 0.06)',
  },
  buttonBalance : {
    background: 'linear-gradient(127.52deg, #00CAFF 20.68%, #4A9CFF 80.9%)',
    marginRight: '24px',
  },
  ButtonBuBd: {
    background: 'linear-gradient(122.56deg, #4A9CFF 15.82%, #3671B9 82.63%)',
  },
  buttonText: {
    fontFamily: 'PFDinTextCondPro-Regular !important',
    fontSize: '24px',
    lineHeight: '29px',
    display: 'inline-flex',
  },
  icon: {
    position: 'absolute',
    top: '15px',
    left: '14px',
  }
}));


export default function Home() {
  const classes = useStyles();

  const ButtonBalance = withRouter(({ history }) => (
    <button
      type='button'
      className={clsx(classes.button, classes.buttonBalance)}
      onClick={() => { history.push('/balancegroup') }}
    >
      <BarChartIcon className={classes.icon} />
      <div className={classes.buttonContainer}>
        <span className={classes.buttonText}>Балансовыe</span>
        <span className={classes.buttonText}>группы</span>
      </div>
    </button>
  ))

  const ButtonBuBd = withRouter(({ history }) => (
    <button
      type='button'
      className={clsx(classes.button, classes.ButtonBuBd)}
      onClick={() => { history.push('/bubd') }}
    >
      <MapOutlinedIcon className={classes.icon} /> 
      <div className={classes.buttonContainer}>
        <span className={classes.buttonText}>Карта</span>
        <span className={classes.buttonText}>БУ/БД</span>
      </div>
    </button>
  ))

  return (
    <div className={classes.root}>
      <ButtonBalance />
      <ButtonBuBd />
    </div>
  );
}