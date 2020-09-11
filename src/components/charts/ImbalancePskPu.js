import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Plotly from "plotly.js";
import React, { useContext } from "react";
import createPlotlyComponent from "react-plotly.js/factory";
import full_res from "../../data/graphic/full_res_imbalance.json";
import clsx from "clsx";

import Contex from "../../store/context";

const Plot = createPlotlyComponent(Plotly);
const useStyles = makeStyles((theme) => ({
  paperStyles: {
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  fixedHeight: {
    height: 500,
  },
}));

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
var imbalance_psk_pu = {
  layout: {
    hoverinfo: "none",
    title: "График небалансов между <br>показаниями ПСК и ПУ, в кВт/ч от ПУ",
    width: 550,
  },
  data: [],
};

const createData = (balance_index) => {
  imbalance_psk_pu.data = [];
  full_res.map(function (item) {
    if (item.balance_id.toString() === balance_index) {
      if (item.year == "2017") {
        year_2017.x.push(item.month);
        year_2017.y.push(item.imbalance_kwh);
      }
      if (item.year == "2018") {
        year_2018.x.push(item.month);
        year_2018.y.push(item.imbalance_kwh);
      }
      if (item.year == "2019") {
        year_2019.x.push(item.month);
        year_2019.y.push(item.imbalance_kwh);
      }

      if (item.year == "2020") {
        year_2020.x.push(item.month);
        year_2020.y.push(item.imbalance_kwh);
      }
    }
  });

  imbalance_psk_pu.data.push(year_2017, year_2018, year_2019, year_2020);
};

const ImbalancePskPu = () => {
  const { state, globalState } = useContext(Contex);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  if (
    globalState.balance_index !== "" &&
    globalState.isPhantomic == false &&
    globalState.isClean == true
  ) {
    createData(globalState.balance_index);

  }

  return globalState.balance_index !== "" &&
    globalState.isPhantomic == false &&
    globalState.isClean == true
    ? [
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={clsx(fixedHeightPaper, classes.paperStyles)}>
            <Plot
              data={imbalance_psk_pu.data}
              layout={imbalance_psk_pu.layout}
            />
          </Paper>
        </Grid>,
      ]
    : null;

  // <Plot data={imbalance_psk_pu.data} layout={imbalance_psk_pu.layout}/>
};

export { ImbalancePskPu };
