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
  },
};
/* Bar charts */
var month_input = {
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
      marker: { color: "#00EBD3)" },
      type: "bar",
    },
  ],
};
var month_psk_out = {
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
      type: "bar",
    },
  ],
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
      type: "bar",
    },
  ],
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
      type: "bar",
    },
  ],
};

function createDataArrayPie(balance_index) {
  // const balance_index = 366;
    // console.log(balance_index);
  if(balance_index !== '' && typeof balance_index !== 'undefined'){
    indexes.map((item) => {
      if (
        item.balance_id.toString() == balance_index.toString() &&
        item.date_year === 2020 &&
        item.date_month === "сентябрь"
      ) {
        compnay_trust_index.data[0].values.push(
          item.trust_index_PSK_urik,
          100 - parseInt(item.trust_index_PSK_urik)
        );
        compnay_trust_index.layout.annotations[0].text =
          item.trust_index_PSK_urik.toString() + "%";

        if (parseInt(item.trust_index_PSK_urik) > 50) {
          compnay_trust_index.layout.annotations[1].text = "Высокий";
          compnay_trust_index.layout.annotations[1].font.color = '#D33126';
          compnay_trust_index.layout.annotations[1].font.bgcolor = 'rgba(222, 32, 19, 0.4)';
        } else {
          compnay_trust_index.layout.annotations[1].text = "Низкий";
          compnay_trust_index.layout.annotations[1].font.color = "#21BA49";
          compnay_trust_index.layout.annotations[1].font.bgcolor =
            "rgba(96, 200, 125, 0.4)";
        }

        person_trust_index.data[0].values.push(
          parseInt(item.trust_index_PSK_fiz),
          100 - parseInt(item.trust_index_PSK_fiz)
        );
        person_trust_index.layout.annotations[0].text =
          item.trust_index_PSK_fiz.toString() + "%";

        if (parseInt(item.trust_index_PSK_fiz) > 50) {
          person_trust_index.layout.annotations[1].text = "Высокий";
          person_trust_index.layout.annotations[1].font.color = '#D33126';
          person_trust_index.layout.annotations[1].font.bgcolor = 'rgba(222, 32, 19, 0.4)';
        } else {
          person_trust_index.layout.annotations[1].text = "Низкий";
          person_trust_index.layout.annotations[1].font.color = "#21BA49";
          person_trust_index.layout.annotations[1].font.bgcolor =
            "rgba(96, 200, 125, 0.4)";
        }

        house_trust_index.data[0].values.push(
          item.trust_index_PSK_ODN,
          100 - parseInt(item.trust_index_PSK_ODN)
        );
        house_trust_index.layout.annotations[0].text =
          item.trust_index_PSK_ODN.toString() + "%";

        if (parseInt(item.trust_index_PSK_ODN) > 50) {
          house_trust_index.layout.annotations[1].text = "Высокий";
          house_trust_index.layout.annotations[1].font.color = '#D33126';
          house_trust_index.layout.annotations[1].font.bgcolor = 'rgba(222, 32, 19, 0.4)';
        } else {
          house_trust_index.layout.annotations[1].text = "Низкий";
          house_trust_index.layout.annotations[1].font.color = "#21BA49";
          house_trust_index.layout.annotations[1].font.bgcolor =
            "rgba(96, 200, 125, 0.4)";
        }

        transfer_percent.data[0].values.push(
          item.percent_transmission_PU,
          100 - parseInt(item.percent_transmission_PU)
        );
        transfer_percent.layout.annotations[0].text =
          item.percent_transmission_PU.toString() + "%";
        if (parseInt(item.percent_transmission_PU) > 50) {
          transfer_percent.layout.annotations[1].text = "Высокий";
          transfer_percent.layout.annotations[1].font.color = '#D33126';
          transfer_percent.layout.annotations[1].font.bgcolor = 'rgba(222, 32, 19, 0.4)';
        } else {
          transfer_percent.layout.annotations[1].text = "Низкий";
          transfer_percent.layout.annotations[1].font.color = "#21BA49";
          transfer_percent.layout.annotations[1].font.bgcolor =
            "rgba(96, 200, 125, 0.4)";
        }

        difference_percent.data[0].values.push(
          item.index_compliance_forecast_present_unbalance,
          100 - parseInt(item.index_compliance_forecast_present_unbalance)
        );
        difference_percent.layout.annotations[0].text =
          item.index_compliance_forecast_present_unbalance.toString() + "%";
        if (parseInt(item.index_compliance_forecast_present_unbalance) > 50) {
          difference_percent.layout.annotations[1].text = "Высокий";
          difference_percent.layout.annotations[1].font.color = '#D33126';
          difference_percent.layout.annotations[1].font.bgcolor = 'rgba(222, 32, 19, 0.4)';
        } else {
          difference_percent.layout.annotations[1].text = "Низкий";
          difference_percent.layout.annotations[1].font.color = "#21BA49";
          difference_percent.layout.annotations[1].font.bgcolor =
            "rgba(96, 200, 125, 0.4)";
        }
      }
    });
  }

}

function createDataArrayBar(balance_index) {
// console.log(full_res);
  full_res.map(function (item) {
    // console.log(item);
    if (item.balance_id.toString() == balance_index) {

      month_input.data[0].x.push(item.month);
      month_input.data[0].y.push(item.input_month);
      month_psk_out.data[0].x.push(item.month);
      month_psk_out.data[0].y.push(item.out_psk_month);
      balance_group_tech_loss.data[0].x.push(item.month);
      balance_group_tech_loss.data[0].y.push(item.imbalance_kwh);
      meter_avg.data[0].x.push(item.month);
      meter_avg.data[0].y.push(item.na_meter_avg);
    }
  });
}
 console.log(month_input.data[0].x);

const GraphicGroup = () => {
  const { state, globalState } = useContext(Contex);

  let paperGraph = "paper-graph";
  let secondBlock = "second-block";
  let firstGraph = "first-graph";
  let secondGraph = "second-graph";
  let thirdtGraph = "third-graph";
  let fourthGraph = "fourth-graph";
  let pieCharts = "pie-charts";

// if(globalState.balance_index !== '' && typeof globalState.balance_index !== 'undefined'){
  // updateGraphic(globalState.balance_index);
  // console.log(globalState.balance_index);
  if(globalState.balance_index !== ''){
    createDataArrayPie(globalState.balance_index);
    createDataArrayBar(globalState.balance_index);
  }

// }

  return (
    <div>
      {globalState.isClean == true && typeof globalState.balance_index !== 'undefined'  ? [
            <div key="div2">
              <Grid container spacing={3}>
                <Grid item xs={6} md={12} lg={12}>
                  <Paper className={clsx(paperGraph, pieCharts)}>
                    <div className="test">
                      <Plot
                        data={transfer_percent.data}
                        layout={transfer_percent.layout}
                        config={transfer_percent.config}
                      />
                      <Plot
                        data={difference_percent.data}
                        layout={difference_percent.layout}
                        config={difference_percent.config}
                      />
                      <Plot
                        data={person_trust_index.data}
                        layout={person_trust_index.layout}
                        config={person_trust_index.config}
                      />
                      <Plot
                        data={house_trust_index.data}
                        layout={house_trust_index.layout}
                        config={house_trust_index.config}
                      />
                      <Plot
                        data={compnay_trust_index.data}
                        layout={compnay_trust_index.layout}
                        config={compnay_trust_index.config}
                      />
                    </div>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6} md={12} lg={12}>
                  <Paper className={clsx(paperGraph, secondBlock)}>
                    <Plot
                      data={month_input.data}
                      layout={month_input.layout}
                      className={firstGraph}
                    />
                    <Plot
                      data={month_psk_out.data}
                      layout={month_psk_out.layout}
                      className={secondGraph}
                    />
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6} md={12} lg={12}>
                  <Paper className={clsx(paperGraph, secondBlock)}>
                    <Plot
                      data={balance_group_tech_loss.data}
                      layout={balance_group_tech_loss.layout}
                      className={thirdtGraph}
                    />
                    <Plot
                      data={meter_avg.data}
                      layout={meter_avg.layout}
                      className={fourthGraph}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </div>,
          ]
        : null}
    </div>
  );
};

function updateGraphic(filterText) {

  // createDataArrayPie(indexes, filterText, person_trust_index, "entity_conf");
  // createDataArrayPie(
  //   tech_losses,
  //   filterText,
  //   tech_loss_index,
  //   "percent_technical_losses"
  // );
  // createDataArrayPie(indexes, filterText, house_trust_index, "population_conf");
  // createDataArrayPie(indexes, filterText, compnay_trust_index, "utility_conf");

  // createDataArrayBar(full_res, filterText);
}

export { GraphicGroup };
