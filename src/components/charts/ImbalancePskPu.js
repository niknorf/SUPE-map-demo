import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Plotly from "plotly.js";
import React, { useContext } from "react";
import createPlotlyComponent from "react-plotly.js/factory";
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

var imbalance_psk_pu = {
  layout: {
    hoverinfo: "none",
    title: "График небалансов между показаниями ПСК и ПУ, в % от ПУ",
    width: 550,
  },
  data: [
    {
      x: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      y: [
        -22258.62,
        -19341.75,
        -19674.89,
        -18135.07,
        -18576.98,
        -17191.18,
        -15894.16,
        -14348.42,
        -13830.52,
        -18908.49,
        -22282,
        -18487.81,
      ],
      name: "2017",
      type: "bar",
      marker: {
        color: "#4A9CFF",
      },
    },
    {
      x: [
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      y: [
        -52525.83,
        -36566.04,
        -36578.62,
        -35485.97,
        -40367.4,
        -54592.95,
        -44747.68,
        -47542.37,
        -21399.33,
        -19676.71,
        -18399.37,
        -20579.74,
        -16905.96,
        -16494.3,
        -14170.28,
        -15121.96,
        -15534.51,
        -17244.41,
        -17986.74,
        -23654.08,
      ],
      name: "2018",
      type: "bar",
      marker: {
        color: "#00CAFF",
      },
    },
    {
      x: [
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Dec",
        "Dec",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Dec",
        "Oct",
        "Nov",
        "Dec",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Dec",
        "Dec",
        "Dec",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      y: [
        -13426.44,
        142021.84,
        174228.97,
        185251.28,
        410005.32,
        407173.31,
        68274.6,
        8257.4,
        46786.05,
        316001,
        324478.48,
        329400.06,
        363569.21,
        -10619.84,
        4374.61,
        6176.04,
        5849.38,
        8106.87,
        49877.4,
        127106.83,
        216141.77,
        231613.93,
        33132.9,
        53603,
        57384.2,
        -50101.33,
        -44087.85,
        -45293.79,
        -40285.61,
        -43180.68,
        -36533.33,
        -30572.78,
        -36527.5,
        -35071.6,
        -39022.18,
        -44561.4,
        -39808.55,
        42612.65,
        102833.07,
        -3326.98,
        6601.89,
        -19514.1,
        -19322.37,
        -18437.41,
        -17235.54,
        -15862.74,
        -16837.81,
        -13431.07,
        -14319.29,
        -15076.65,
        -15056.28,
        -15363.37,
        -15187.83,
        -53102.63,
        57498.88,
        85701.76,
        63208.5,
        74687.43,
        95313.85,
      ],
      name: "2019",
      type: "bar",
      marker: {
        color: "#00EBD3",
      },
    },
    {
      x: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
      ],
      y: [
        1551018.37,
        1406195.67,
        1206596.56,
        1124306.54,
        995445.78,
        1001776.25,
        376249.93,
        342711.1,
        344639.07,
        290490.58,
        276318.4,
        228227.62,
        234160.33,
        113345.9,
        99996.16,
        94463.92,
        71290.6,
        65181.62,
        37358.3,
        37094.93,
        11245.7,
        10610.9,
        11063.1,
        10363.2,
        5178.9,
        258.2,
        297,
        214.6,
        351710.06,
        321788.83,
        327001.81,
        298113.74,
        283908.8,
        279755.64,
        275446.11,
        7722.65,
        7347.8,
        7553.88,
        2727.67,
        2840.19,
        2247.3,
        928.06,
        68929.3,
        64378.5,
        59726.7,
        47824.4,
        44034,
        39363.1,
        42847.4,
        33874,
        27121.21,
        306606.79,
        281683.71,
        264369.8,
        239898.28,
        236166.21,
        -20062.3,
        -19724.18,
        -20870.8,
        -17640.9,
        -18425.13,
        -14217.57,
        -28309.1,
        8810.04,
        3331.43,
        3994.9,
        3046.2,
        4439.96,
        220063.71,
        206266.11,
        205792.85,
        170217.01,
        155447.61,
        137833.25,
        137469.53,
        56197,
        50950.7,
        52920.1,
        50616.8,
        46136.5,
        42797.7,
        42853.3,
        33676.4,
        -48152.97,
        -40276.14,
        -40496.75,
        -45918.29,
        -39623.1,
        -37525.6,
        -36506.72,
        110137.36,
        78550.64,
        86849.44,
        38371.24,
        50145.68,
        9780.27,
        40148.28,
        143659.68,
        124145.44,
        136744.65,
        126390.24,
        117987.9,
        103870.98,
        99911.33,
        11247.1,
        10656.08,
        12642.87,
        3464.08,
        4717.78,
        4125.24,
        1074.06,
        17080.1,
        16814.13,
        18410.89,
        13601.14,
        11365.52,
        14213.02,
        12808.35,
        -15334.06,
        -12711.22,
        -17011.69,
        -16978.63,
        -14416.92,
        -13164.52,
        -11422.42,
        98289.64,
        94774.47,
        105668.63,
        88028.83,
        93891.84,
        65149.96,
        72616.67,
      ],
      name: "2020",
      type: "bar",
      textinfo: "none",
      marker: {
        color: "#A9FF94",
      },
    },
  ],
};

const PhantomicBuilding = ({building_id}) => {
  return null;

};

const BalanceId = () => {
  return null;
};

const ImbalancePskPu = () => {
  const { state, globalState } = useContext(Contex);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    globalState.bi_value !== '' ? [
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={clsx(fixedHeightPaper, classes.paperStyles)}>
          {(() => {
            if (globalState.isPhantomic) {
              return <PhantomicBuilding building_id={globalState.bi_value}/>;
            } else {
              return <BalanceId />;
            }
          })()}
        </Paper>
      </Grid>
    ] : null

  );

  // <Plot data={imbalance_psk_pu.data} layout={imbalance_psk_pu.layout}/>
};

export { ImbalancePskPu };
