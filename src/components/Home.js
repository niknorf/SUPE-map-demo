import "../css/home.css";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import React from "react";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import clsx from "clsx";
import BuBdTable from "./BuBdTable";
import graphOne from "../img/graph-one.png";
import graphTwo from "../img/graph-two.png";
import pieChart from "../img/pie-chart.png";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "24px",
    width: "100%",
    maxWidth: "1372px",
    margin: "0 auto",
    background: "#F5F6F8",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  button: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "9px 14px",
    border: "none",
    color: "#FFF",
    width: "100%",
    height: "142px",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "4px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  buttonBalance: {
    background: "linear-gradient(127.52deg, #00CAFF 20.68%, #4A9CFF 80.9%)",
    marginRight: "24px",
  },
  ButtonBuBd: {
    background: "linear-gradient(122.56deg, #4A9CFF 15.82%, #3671B9 82.63%)",
  },
  buttonText: {
    fontFamily: "PFDinTextCondPro-Regular !important",
    fontSize: "24px",
    lineHeight: "29px",
    display: "inline-flex",
  },
  icon: {
    position: "absolute",
    top: "15px",
    left: "14px",
  },
  pieChartPaper: {
    padding: "30px",
    boxShadow: "4px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  firstColumn: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  rightPieChart: {
    marginLeft: "12px",
  },
  leftPieChart: {
    marginRight: "12px",
  },
  pieChartImage: {
    width: "100%",
  },
  boxPaper: {
    display: "flex",
  },
  buttonTasks: {
    background: "linear-gradient(127.52deg, #00CAFF 20.68%, #4A9CFF 80.9%);",
    marginRight: "24px",
  },
  graph: {
    marginTop: "24px",
  },
  graphPaper: {
    padding: "20px",
    boxShadow: "4px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  graphOneImage: {
    width: "120%",
  },
  bubdTable: {
    marginTop: "24px",
    boxShadow: "4px 6px 18px rgba(0, 0, 0, 0.06)",
    "& .MuiTable-root": {
      minWidth: "auto",
    },
    "& .MuiTableContainer-root": {
      paddingRight: 0,
      display: "flex",
      flexDirection: "column",
      overflowY: 'hidden',
    },
    "& .MuiTablePagination-toolbar-107": {
      marginTop: "auto",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  const ButtonTasks = withRouter(({ history }) => (
    <button
      type="button"
      className={clsx(classes.button, classes.buttonTasks)}
      onClick={() => {
        history.push("/home");
      }}
    >
      <WorkOutlineOutlinedIcon className={classes.icon} />
      <div className={classes.buttonContainer}>
        <span className={classes.buttonText}>Страница</span>
        <span className={classes.buttonText}>заданий</span>
      </div>
    </button>
  ));

  const ButtonBalance = withRouter(({ history }) => (
    <button
      type="button"
      className={clsx(classes.button, classes.buttonBalance)}
      onClick={() => {
        history.push("/balancegroup");
      }}
    >
      <BarChartIcon className={classes.icon} />
      <div className={classes.buttonContainer}>
        <span className={classes.buttonText}>Балансовыe</span>
        <span className={classes.buttonText}>группы</span>
      </div>
    </button>
  ));

  const ButtonBuBd = withRouter(({ history }) => (
    <button
      type="button"
      className={clsx(classes.button, classes.ButtonBuBd)}
      onClick={() => {
        history.push("/bubd");
      }}
    >
      <MapOutlinedIcon className={classes.icon} />
      <div className={classes.buttonContainer}>
        <span className={classes.buttonText}>Карта</span>
        <span className={classes.buttonText}>БУ/БД</span>
      </div>
    </button>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} spacing={3} className={classes.firstColumn}>
          <Grid item xs={6}>
            <Paper
              className={clsx(classes.pieChartPaper, classes.leftPieChart)}
            >
              <img src={pieChart} className={classes.pieChartImage} alt=''/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              className={clsx(classes.pieChartPaper, classes.rightPieChart)}
            >
              <img src={pieChart} className={classes.pieChartImage} alt=''/>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.graph}>
            <Paper className={clsx(classes.graphPaper, classes.graphOne)}>
              <img src={graphOne} className={classes.graphOneImage} alt=''/>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.graph}>
            <Paper className={clsx(classes.graphPaper, classes.graphTwo)}>
              <img src={graphTwo} className={classes.graphTwoImage} alt=''/>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.boxPaper}>
            <ButtonTasks />
            <ButtonBalance />
            <ButtonBuBd />
          </Box>
          <Paper className={classes.bubdTable}>
            <BuBdTable />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
