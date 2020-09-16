import { Grid, Paper, Switch } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Plotly from "plotly.js";
import React, { useContext, setState } from "react";
import createPlotlyComponent from "react-plotly.js/factory";
import full_res from "../../data/graphic/full_res_imbalance.json";
import full_res_phantom from "../../data/graphic/imbalance_phantom.json";
import clsx from "clsx";
import phantomic_buildings from "../../data/balance_phantom_dict.json";
import Contex from "../../store/context";

const Plot = createPlotlyComponent(Plotly);
const useStyles = makeStyles((theme) => ({
  paperStyles: {
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  fixedHeight: {
    height: 500,
  },
  switchRightText: {
    color: "#F19E69",
  },
  switchLeftText: {
    color: "#818E9B",
  },
}));

const OrangeSwitch = withStyles({
  switchBase: {
    color: "#818E9B",
    "&$checked": {
      color: "#F19E69",
    },
    "&$checked + $track": {
      backgroundColor: "#F19E69",
    },
  },
  checked: {},
  track: {},
})(Switch);

const IsPhantomicIncluded = (balance_index) =>{
  return typeof phantomic_buildings[balance_index] === 'undefined' ? false : true;
}

const CreateImabalancePSK = ({ balance_index, object, switchState }) => {
  let year_2017 = {
    x: [],
    y: [],
    name: "2017",
    type: "bar",
    marker: {
      color: "#A9FF94",
    },
  };
  let year_2018 = {
    x: [],
    y: [],
    name: "2018",
    type: "bar",
    marker: {
      color: "#00EBD3",
    },
  };
  let year_2019 = {
    x: [],
    y: [],
    name: "2019",
    type: "bar",
    marker: {
      color: "#00CAFF",
    },
  };
  let year_2020 = {
    x: [],
    y: [],
    name: "2020",
    type: "bar",
    marker: {
      color: "#4A9CFF",
    },
  };

  if (switchState) {

    full_res_phantom.map(function (item) {
      if (item.balance_id.toString() === balance_index.toString()) {
        if (item.year.toString() === "2017") {
          year_2017.x.push(item.month);
          year_2017.y.push(item.imbalance_phantom_kwh);
        }
        if (item.year.toString() === "2018") {
          year_2018.x.push(item.month);
          year_2018.y.push(item.out_phantom_kwh);
        }
        if (item.year.toString() === "2019") {
          year_2019.x.push(item.month);
          year_2019.y.push(item.out_phantom_kwh);
        }

        if (item.year.toString() === "2020") {
          year_2020.x.push(item.month);
          year_2020.y.push(item.out_phantom_kwh);
        }
      }
    });
  } else {

    full_res.map(function (item) {
      if (item.balance_id.toString() === balance_index.toString()) {
        if (item.year.toString() === "2017") {
          year_2017.x.push(item.month);
          year_2017.y.push(item.imbalance_kwh);
        }
        if (item.year.toString() === "2018") {
          year_2018.x.push(item.month);
          year_2018.y.push(item.imbalance_kwh);
        }
        if (item.year.toString() === "2019") {
          year_2019.x.push(item.month);
          year_2019.y.push(item.imbalance_kwh);
        }

        if (item.year.toString() === "2020") {
          year_2020.x.push(item.month);
          year_2020.y.push(item.imbalance_kwh);
        }
      }
    });
  }

  console.log(year_2019);

  object.data.push(year_2017, year_2018, year_2019, year_2020);

  return (
    <Plot data={object.data} layout={object.layout} config={object.config} />
  );
};

const ImbalancePskPu = () => {
  const [switchState, setState] = React.useState(false);
  const { state, globalState } = useContext(Contex);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleSwitchChange = (event) => {
    setState(event.target.checked);
  };

  var imbalance_psk_pu = {
    layout: {
      hoverinfo: "none",
      title: "График небалансов между <br>показаниями ПСК и ПУ, в кВтч от ПУ",
      width: 550,
    },
    data: [],
    config: {
      modeBarButtonsToRemove: [
        "pan2d",
        "select2d",
        "lasso2d",
        "resetScale2d",
        "toggleSpikelines",
        "hoverClosestCartesian",
        "hoverCompareCartesian",
      ],
      displaylogo: false,
    },
  };

  return globalState.balance_index !== "" && globalState.isClean == true
    ? [
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={clsx(fixedHeightPaper, classes.paperStyles)}>

            {IsPhantomicIncluded(globalState.balance_index) ?
              <Grid
                component="label"
                container
                alignItems="center"
                justify="flex-end"
                direction="row"
                spacing={1}
              >
                <Grid item className={classes.switchLeftText}>
                  Без фантомных обьектов
                </Grid>
                <Grid item>
                  <OrangeSwitch
                    checked={switchState}
                    onChange={handleSwitchChange}
                    name="checkedA"
                  />
                </Grid>
                <Grid item className={classes.switchRightText}>
                  Включая фантомные обьекты
                </Grid>
              </Grid>
             : null }

            <CreateImabalancePSK
              balance_index={globalState.balance_index}
              object={imbalance_psk_pu}
              switchState={switchState}
            />
          </Paper>
        </Grid>,
      ]
    : null;
};

export { ImbalancePskPu };
