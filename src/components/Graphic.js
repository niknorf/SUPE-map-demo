import React, { useContext } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import Contex from "../store/context";
import clsx from "clsx";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
import differencePercent from "../data/graphic/transfer_percent.json";
import indexes from "../data/graphic/indexes.json";
import tech_losses from "../data/graphic/tech_losses.json";
import full_res from "../data/graphic/full_res_imbalance.json";
import "../css/graphic.css";
const Plot = createPlotlyComponent(Plotly);

const hole_size = 0.6;
const pie_colors = ["rgb(65,123,236)", "rgba(140, 148, 158, 0.2)"];
const pie_legend = {
  xanchor: "center",
  yanchor: "top",
  y: -0.3, // play with it
  x: 0.5, // play with it
};

const pie_markers = {
  colors: pie_colors,
};
const pie_title_font = {
  size: 12,
  color: "#818E9B",
};
const column_title_font = {
  size: 12,
  color: "#252F4A",
};

const GraphicGroup = () => {
  const { state, globalState } = useContext(Contex);

  /* Pie charts */
  var transfer_percent = {
    layout: {
      showlegend: false,
      hoverinfo: "none",
      width: 270,
      height: 300,
      title: {
        text:
          "Процент передачи показаний <br>приборов технического учета за месяц",
        x: 0.5,
        xanchor: "center",
        y: 0.2,
        yanchor: "bottom",
        font: pie_title_font,
      },
      legend: pie_legend,
      annotations: [
        {
          font: {
            size: 25,
            color: "#252F4A",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          y: 0.5,
        },
        {
          font: {
            size: 12,
            color: "",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          xanchor: "center",
          y: -0.5,
          bgcolor: "",
          // opacity: 0.3,
          // borderRadius: 4,
        },
      ],
    },
    data: [
      {
        values: [],
        labels: ["", ""],
        type: "pie",
        hole: hole_size,
        textinfo: "none",
        hoverinfo: "none",
        marker: pie_markers,
      },
    ],
    config: {
      responsive: true,
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };
  var difference_percent = {
    layout: {
      showlegend: false,
      hoverinfo: "none",
      width: 270,
      height: 300,
      title: {
        text:
          "Процент несоответствия предиктивного <br>и фактического небалансов",
        x: 0.5,
        xanchor: "center",
        y: 0.2,
        yanchor: "bottom",
        font: pie_title_font,
      },
      legend: pie_legend,
      annotations: [
        {
          font: {
            size: 25,
            color: "#252F4A",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          y: 0.5,
        },
        {
          font: {
            size: 12,
            color: "",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          xanchor: "center",
          y: -0.5,
          bgcolor: "",
          // opacity: 0.3,
          // borderRadius: 4,
        },
      ],
    },
    data: [
      {
        values: [],
        labels: ["", ""],
        type: "pie",
        hole: hole_size,
        textinfo: "none",
        hoverinfo: "none",
        marker: pie_markers,
      },
    ],
    config: {
      responsive: true,
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };
  var person_trust_index = {
    layout: {
      showlegend: false,
      hoverinfo: "none",
      width: 270,
      height: 300,
      title: {
        text: "Индекс доверия показаниям <br> физических лиц в ПСК",
        x: 0.5,
        xanchor: "center",
        y: 0.2,
        yanchor: "bottom",
        font: pie_title_font,
      },
      legend: pie_legend,
      annotations: [
        {
          font: {
            size: 25,
            color: "#252F4A",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          y: 0.5,
        },
        {
          font: {
            size: 12,
            color: "",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          xanchor: "center",
          y: -0.5,
          bgcolor: "",
          // opacity: 0.3,
          // borderRadius: 4,
        },
      ],
    },
    data: [
      {
        values: [],
        labels: ["", ""],
        type: "pie",
        hole: hole_size,
        textinfo: "none",
        hoverinfo: "none",
        marker: pie_markers,
      },
    ],
    config: {
      responsive: true,
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };
  // // var tech_loss_index = {
  //   layout: {
  //     showlegend: false,
  //     hoverinfo: "none",
  //     width: 270,
  //     height: 300,
  //     title: {
  //       text: "Индекс технических потерь",
  //       x: 0.5,
  //       xanchor: "center",
  //       y: 0.2,
  //       yanchor: "bottom",
  //       font: pie_title_font,
  //     },
  //     legend: pie_legend,
  //     annotations: pie_annotations,
  //   },
  //   data: [
  //     {
  //       values: [""],
  //       labels: ["", ""],
  //       type: "pie",
  //       hole: hole_size,
  //       textinfo: "none",
  //       hoverinfo: "none",
  //       marker: pie_markers,
  //     },
  //   ],
  //   config: {
  //     responsive: true,
  //   },
  // };
  var house_trust_index = {
    layout: {
      showlegend: false,
      hoverinfo: "none",
      width: 270,
      height: 300,
      title: {
        text: "Индекс доверия показаниям <br>общедомовых нужд в ПСК",
        x: 0.5,
        xanchor: "center",
        y: 0.2,
        yanchor: "bottom",
        font: pie_title_font,
      },
      legend: pie_legend,
      annotations: [
        {
          font: {
            size: 25,
            color: "#252F4A",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          y: 0.5,
        },
        {
          font: {
            size: 12,
            color: "",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          xanchor: "center",
          y: -0.5,
          bgcolor: "",
          // opacity: 0.3,
          // borderRadius: 4,
        },
      ],
    },
    data: [
      {
        values: [],
        labels: ["", ""],
        type: "pie",
        hole: hole_size,
        textinfo: "none",
        hoverinfo: "none",
        marker: pie_markers,
      },
    ],
    config: {
      responsive: true,
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };
  var compnay_trust_index = {
    layout: {
      showlegend: false,
      hoverinfo: "none",
      width: 270,
      height: 300,
      title: {
        text: "Индекс доверия показаниям<br> юридических лиц в ПСК",
        x: 0.5,
        xanchor: "center",
        y: 0.2,
        yanchor: "bottom",
        font: pie_title_font,
      },
      legend: pie_legend,
      annotations: [
        {
          font: {
            size: 25,
            color: "#252F4A",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          y: 0.5,
        },
        {
          font: {
            size: 12,
            color: "",
          },
          showarrow: false,
          text: "",
          x: 0.5,
          xanchor: "center",
          y: -0.5,
          bgcolor: "",
          // opacity: 0.3,
          // borderRadius: 4,
        },
      ],
    },
    data: [
      {
        values: [],
        labels: ["", ""],
        type: "pie",
        hole: hole_size,
        textinfo: "none",
        hoverinfo: "none",
        marker: pie_markers,
      },
    ],
    config: {
      responsive: true,
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };
  /* Bar charts */
  var input_month = {
    layout: {
      width: 550,
      title: {
        text:
          "График суммарных помесчных показаний согласно приборам учета, кВтч",
        font: column_title_font,
      },
    },
    data: [
      {
        x: [],
        y: [],
        marker: { color: "#00ebd3" },
        type: "bar",
      },
    ],
    config:{
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    }
  };
  var out_psk_month = {
    layout: {
      width: 550,
      title: {
        text: "График суммарных помесчных показаний от ПСК, кВтч",
        font: column_title_font,
      },
    },
    data: [
      {
        x: [],
        y: [],
        marker: { color: "#00caff" },
        type: "bar",
      },
    ],
    config:{
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    }
  };
  var balance_group_tech_loss = {
    layout: {
      title: {
        text: "Технические потери на балансовой группе, кВтч",
        font: column_title_font,
      },
    },
    data: [
      {
        x: [],
        y: [],
        marker: { color: "#a9ff94" },
        type: "bar",
      },
    ],
    config:{
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };
  var meter_avg = {
    layout: {
      title: {
        text: "Передача показаний приборов технического учета, %",
        font: column_title_font,
      },
    },
    data: [
      {
        x: [],
        y: [],
        marker: { color: "#00EBD3" },
        type: "bar",
      },
    ],
    config:{
      modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'toggleSpikelines', 'hoverClosestCartesian', 'hoverCompareCartesian'],
      displaylogo: false
    },
  };

  let paperGraph = "paper-graph";
  let secondBlock = "second-block";
  let firstGraph = "first-graph";
  let secondGraph = "second-graph";
  let thirdtGraph = "third-graph";
  let fourthGraph = "fourth-graph";
  let pieCharts = "pie-charts";

  return (
    <div>
      {(() => {

        if (globalState.isClean && globalState.balance_index !== "") {
          return (
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={6} md={12} lg={12}>
                  <Paper>
                    <DisplayPieChart balance_index={globalState.balance_index} type={transfer_percent} obj_name='percent_transmission_PU'/>
                    <DisplayPieChart balance_index={globalState.balance_index} type={difference_percent} obj_name='index_compliance_forecast_present_unbalance'/>
                    <DisplayPieChart balance_index={globalState.balance_index} type={person_trust_index} obj_name='trust_index_PSK_fiz'/>
                    <DisplayPieChart balance_index={globalState.balance_index} type={house_trust_index} obj_name='trust_index_PSK_ODN'/>
                    <DisplayPieChart balance_index={globalState.balance_index} type={compnay_trust_index} obj_name='trust_index_PSK_urik'/>
                  </Paper>
                </Grid>
                </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6} md={12} lg={12}>
              <Paper>
                <DisplayBarChart balance_index={globalState.balance_index} type={input_month} obj_name='input_month'/>
                <DisplayBarChart balance_index={globalState.balance_index} type={out_psk_month} obj_name='out_psk_month'/>
              </Paper>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6} md={12} lg={12}>
                <Paper>
                  <DisplayBarChart balance_index={globalState.balance_index} type={balance_group_tech_loss} obj_name='imbalance_kwh'/>
                  <DisplayBarChart balance_index={globalState.balance_index} type={meter_avg} obj_name='na_meter_avg'/>
                </Paper>
              </Grid>
              </Grid>
            </Container>
          );
        }
      })()}
      </div>
  );
};

const DisplayBarChart = ({balance_index,type, obj_name}) => {
// type.data[0].x = [];
// type.data[0].y = [];

  full_res.map(function (item) {
    if (item.balance_id.toString() === balance_index.toString()) {
      type.data[0].x.push(item.month);
      type.data[0].y.push(item[obj_name]);
    }
  });

return(<Plot
        data={type.data}
        layout={type.layout}
        config={type.config}
        />)
};

const DisplayPieChart = ({balance_index, type, obj_name}) => {
// type.data[0].values = [];

indexes.map((item) => {
      if (
        item.balance_id.toString() === balance_index.toString() &&
        item.date_year === 2020 &&
        item.date_month === "сентябрь"
      ) {
        type.data[0].values.push(
          item.[obj_name],
          100 - parseInt(item.[obj_name])
        );
        type.layout.annotations[0].text =
          item.[obj_name].toString() + "%";

        if (parseInt(item.[obj_name]) > 50) {
          type.layout.annotations[1].text = "Высокий";
          type.layout.annotations[1].font.color = "#D33126";
          type.layout.annotations[1].font.bgcolor =
            "rgba(222, 32, 19, 0.4)";
        } else {
          type.layout.annotations[1].text = "Низкий";
          type.layout.annotations[1].font.color = "#21BA49";
          type.layout.annotations[1].font.bgcolor =
            "rgba(96, 200, 125, 0.4)";
        }
      }
    });

    return(<Plot
            data={type.data}
            layout={type.layout}
            config={type.config}
            />)
};



export { GraphicGroup };
