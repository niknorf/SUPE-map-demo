import { Typography, Container } from "@material-ui/core";
import React, { useContext } from "react";
import Contex from "../store/context";
import {Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import info_icon from '../img/info_icon.svg';
import triangle_icon from '../img/triangle_icon.svg';

const useStyles = makeStyles({
  imageIcon: {
    // height: '100%'
    width: 40,
    height: 40
  },
  iconRoot: {
    textAlign: 'center',
  }
});


const InitialState = () => {
const classes = useStyles();
  return (
      <Container>
        <Typography>
          Балансовая группа
        </Typography>
        <Icon classes={{root: classes.iconRoot}}>
          <img className={classes.imageIcon} src={info_icon}/>
        </Icon>
        <Typography>
          Чтобы посмотреть балансовую группу, выберите обьект на карте или воспользуйтесь поиском или фильтрацией
        </Typography>


      </Container>
  );
};

const WarningState = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography>
        Балансовая группа
      </Typography>
      <Icon classes={{root: classes.iconRoot}}>
        <img className={classes.imageIcon} src={triangle_icon}/>
      </Icon>
      <Typography>
       Не удалось определить балансовую группу для выбранного обьекта
      </Typography>


    </Container>
  );
};

const ShowDataState = () => {
  return (
    <Typography>
      <Container>Show data heer</Container>
    </Typography>
  );
};

const InfoSection = () => {
  const { state, globalState } = useContext(Contex);
  return (
    <Container>
      {(() => {
        if (!globalState.bi_value) {
          return <InitialState />;
        } else if (globalState.isPhantomic) {
          return <WarningState />;
        } else {
          return <ShowDataState />;
        }
      })()}
    </Container>
  );
};

export { InfoSection };
