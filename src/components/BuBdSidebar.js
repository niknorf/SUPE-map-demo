import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    padding: '20px',
    margin: 0,
    height: '100vh',
    width: '100%',
  },
  close: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  address: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    marginBottom: '46px'
  },
  probability: {
    fontSize: '14px',
    lineHeight: '17px',
    display: 'flex'
  },
  probabilityText: {
    color: '#8C949E',
  },
  probabilityPercent: {
    fontWeight: 'bold',
  },
  justificationButton: {
    textTransform: 'none',
    textDecoration: 'underline',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#252F4A',
    marginTop: '17px',
    marginBottom: '24px'
  },
  infoItem: {
    display: 'flex',
    fontSize: '14px',
    lineHeight: '17px',
  },
  property: {
    color: '#8C949E',
  },
  value: {
    fontWeight: 'bold',
  },
  comment: {
    display: 'inline'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Box className={classes.close}>
        <IconButton aria-label="delete">
        <CloseIcon />
      </IconButton>
        </Box>
        <Typography className={classes.address}>
          Фёдора Абрамова, 19 к1
        </Typography>
        <Box className={classes.probability}>
          <Typography className={classes.probabilityText}>
            Вероятность бездоговорного потребления (%): &nbsp;
          </Typography>
          <Typography className={classes.probabilityPercent}>
            27,6
          </Typography>
        </Box>
        <Button className={classes.justificationButton}
          startIcon={<InfoOutlinedIcon style={{ color: '#4A9CFF' }} />}
        >
          Обоснование
        </Button>
        <Box>
          <Box className={classes.infoItem}>
            <Typography className={classes.property}>
              Период прогнозирования: &nbsp;
            </Typography>
            <Typography className={classes.value}>
              авг.20
            </Typography>
          </Box>
          <Box className={classes.infoItem}>
            <Typography className={classes.property}>
              Точка присоединения: &nbsp;
          </Typography>
            <Typography className={classes.value}>
              TBA
          </Typography>
          </Box>
          <Box className={classes.infoItem}>
            <Typography className={classes.property}>
              ТП: &nbsp;
            </Typography>
            <Typography className={classes.value}>
              БКТП-9502; БКТП-9501
            </Typography>
          </Box>
          <Box className={clsx(classes.infoItem, classes.comment)}>
            <Typography className={classes.property}>
              Коментарии: &nbsp;
            </Typography>
            <Typography className={classes.value}>
              на основе анализа актов БУ и БД, небалансов, наличие нежелых помещений
            </Typography>
          </Box>
        </Box>
      </Paper >
    </div>
  );
}