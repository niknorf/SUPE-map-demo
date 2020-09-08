import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
import differencePercent from '../data/graphic/transfer_percent.json'
import indexes from '../data/graphic/indexes.json'
import tech_losses from '../data/graphic/tech_losses.json'
import full_res from '../data/graphic/full_res_imbalance.json'
import '../css/graphic.css';
const Plot = createPlotlyComponent(Plotly);

const hole_size = .6;
const pie_colors = ['rgb(65,123,236)', 'rgba(140, 148, 158, 0.2)'];
const pie_legend = {
  xanchor: "center",
  yanchor: "top",
  y: -0.3, // play with it
  x: 0.5 // play with it
};
const pie_annotations = [
  {
    font: {
      size: 25,
      color: "#252F4A"
    },
    showarrow: false,
    text: '',
    x: 0.5,
    y: 0.5
  }, {
    font: {
      size: 12,
      color: ''
    },
    showarrow: false,
    text: '',
    x: 0.5,
    xanchor: 'center',
    y: -0.5,
    bgcolor: '',
    // opacity: 0.3,
    // borderRadius: 4,
  }

];
const pie_markers = {
  colors: pie_colors
};
const pie_title_font = {
  size: 12,
  color: '#818E9B'
}
const column_title_font = {
  size: 12,
  color: '#252F4A'
}

var imbalance_psk_pu = {
  layout: {
    hoverinfo: 'none',
    title: 'График небалансов между показаниями ПСК и ПУ, в % от ПУ'
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
        "Dec"
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
        -18487.81
      ],
      name: '2017',
      type: 'bar'
    }, {
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
        "Dec"
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
        -23654.08
      ],
      name: '2018',
      type: 'bar'
    }, {
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
        "Dec"
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
        95313.85
      ],
      name: '2019',
      type: 'bar'
    }, {
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
        "Jul"
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
        72616.67
      ],
      name: '2020',
      type: 'bar',
      textinfo: 'none'
    }

  ]

};
/* Pie charts */
var transfer_percent = {
  layout: {
    title: 'Процент передачи показаний приборов технического учета за месяц'
  },
  data: [
    {
      values: [],
      labels: [
        '', 'other'
      ],
      type: 'pie',
      hole: hole_size,
      textinfo: 'none'
    }
  ]
};
var difference_percent = {
  layout: {
    showlegend: false,
    hoverinfo: 'none',
    width: 270,
    height: 300,
    title: {
      text: 'Процент несоответствия предиктивного <br>и фактического небалансов',
      x: 0.5,
      xanchor: 'center',
      y: 0.2,
      yanchor: 'bottom',
      font: pie_title_font
    },
    legend: pie_legend,
    annotations: pie_annotations
  },
  data: [
    {
      values: [],
      labels: [
        '', ''
      ],
      type: 'pie',
      hole: hole_size,
      textinfo: 'none',
      hoverinfo: 'none',
      marker: pie_markers
    }
  ],
  config: {
    responsive: true
  }
};
var person_trust_index = {
  layout: {
    showlegend: false,
    hoverinfo: 'none',
    width: 270,
    height: 300,
    title: {
      text: 'Индекс доверия показаниям <br> физических лиц в ПСК',
      x: 0.5,
      xanchor: 'center',
      y: 0.2,
      yanchor: 'bottom',
      font: pie_title_font
    },
    legend: pie_legend,
    annotations: pie_annotations
  },
  data: [
    {
      values: [''],
      labels: [
        '', ''
      ],
      type: 'pie',
      hole: hole_size,
      textinfo: 'none',
      hoverinfo: 'none',
      marker: pie_markers
    }
  ],
  config: {
    responsive: true
  }
};
var tech_loss_index = {
  layout: {
    showlegend: false,
    hoverinfo: 'none',
    width: 270,
    height: 300,
    title: {
      text: 'Индекс технических потерь',
      x: 0.5,
      xanchor: 'center',
      y: 0.2,
      yanchor: 'bottom',
      font: pie_title_font
    },
    legend: pie_legend,
    annotations: pie_annotations
  },
  data: [
    {
      values: [''],
      labels: [
        '', ''
      ],
      type: 'pie',
      hole: hole_size,
      textinfo: 'none',
      hoverinfo: 'none',
      marker: pie_markers
    }
  ],
  config: {
    responsive: true
  }
};
var house_trust_index = {
  layout: {
    showlegend: false,
    hoverinfo: 'none',
    width: 270,
    height: 300,
    title: {
      text: 'Индекс доверия показаниям <br>общедомовых нужд в ПСК',
      x: 0.5,
      xanchor: 'center',
      y: 0.2,
      yanchor: 'bottom',
      font: pie_title_font
    },
    legend: pie_legend,
    annotations: pie_annotations
  },
  data: [
    {
      values: [],
      labels: [
        '', ''
      ],
      type: 'pie',
      hole: hole_size,
      textinfo: 'none',
      hoverinfo: 'none',
      marker: pie_markers
    }
  ],
  config: {
    responsive: true
  }
};
var compnay_trust_index = {
  layout: {
    showlegend: false,
    hoverinfo: 'none',
    width: 270,
    height: 300,
    title: {
      text: 'Индекс доверия показаниям<br> юридических лиц в ПСК',
      x: 0.5,
      xanchor: 'center',
      y: 0.2,
      yanchor: 'bottom',
      font: pie_title_font,
    },
    legend: pie_legend,
    annotations: pie_annotations
  },
  data: [
    {
      values: [],
      labels: [
        '', ''
      ],
      type: 'pie',
      hole: hole_size,
      textinfo: 'none',
      hoverinfo: 'none',
      marker: pie_markers
    }
  ],
  config: {
    responsive: true
  }
};
/* Bar charts */
var month_input = {
  layout: {
    width: 550,
    title: {
      text:'График суммарных помесчных показаний согласно приборам учета, кВтч',
      font: column_title_font,
    }
  },
  data: [
    {
      x: [],
      y: [],
      marker: {color: '#00EBD3)'},
      type: 'bar',
    }
  ]

};
var month_psk_out = {
  layout: {
    width: 550,
    title: {
      text:'График суммарных помесчных показаний от ПСК, кВтч',
      font: column_title_font,
    }
  },
  data: [
    {
      x: [],
      y: [],
      type: 'bar'
    }
  ]

};
var balance_group_tech_loss = {
  layout: {
    title: {
      text:'Технические потери на балансовой группе, кВтч',
      font: column_title_font,
    }
  },
  data: [
    {
      x: [],
      y: [],
      type: 'bar'
    }
  ]

};
var meter_avg = {
  layout: {
    title: {
      text:'Передача показаний приборов технического учета, %',
      font: column_title_font,
    }
  },
  data: [
    {
      x: [],
      y: [],
      type: 'bar'
    }
  ]

};

function createDataArrayPie(rowData, balance_index, chart_data, key) {

  var genuion_value = 0
  chart_data.data[0].values = [];
  chart_data.layout.annotations[0].text = '';

  genuion_value = parseInt(rowData.find(element => element.balance_index == balance_index)[key]);
  var rest_value = 100 - genuion_value;

  chart_data.data[0].values.push(genuion_value, rest_value);
  chart_data.layout.annotations[0].text = genuion_value;

  if (genuion_value > 50) {
    chart_data.layout.annotations[1].text = 'Высокий';
    chart_data.layout.annotations[1].font.color = '#D33126';
    chart_data.layout.annotations[1].font.bgcolor = 'rgba(222, 32, 19, 0.4)';
  } else {
    chart_data.layout.annotations[1].text = 'Низкий';
    chart_data.layout.annotations[1].font.color = '#21BA49';
    chart_data.layout.annotations[1].font.bgcolor = 'rgba(96, 200, 125, 0.4)';
  }

}

function createDataArrayBar(rawData, balance_index) {

  rawData.map(function (item) {
    if (item.balance_id.toString() == balance_index.toString()) {
      month_input.data[0].x.push(item.date_month);
      month_input.data[0].y.push(item.input_month);
      month_psk_out.data[0].x.push(item.date_month);
      month_psk_out.data[0].y.push(item.out_psk_month);
      balance_group_tech_loss.data[0].x.push(item.date_month_text);
      balance_group_tech_loss.data[0].y.push(item.imbalance_kwh);
      meter_avg.data[0].x.push(item.date_month_text);
      meter_avg.data[0].y.push(item.na_meter_avg);
    }
  });
}


export class GraphicGroup extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { data: [], layout: {}, config: {}, revision: 0 };
  }

  render() {
    const filterText = this.props.filterText;

    if (filterText !== '') {
      updateGraphic(this.props.filterText);

      console.log(month_input.data);
    }

    let paperGraph = 'paper-graph';
    let secondBlock = 'second-block';
    let firstGraph = 'first-graph';
    let secondGraph = 'second-graph';
    let thirdtGraph = 'third-graph';
    let fourthGraph = 'fourth-graph';
    let pieCharts = 'pie-charts';

    return (<div>

      {
        filterText !== ''
          ? [<div key='div2'>

            {/* <Plot data={imbalance_psk_pu.data} layout={imbalance_psk_pu.layout}/> */}
            <Grid container spacing={3}>
              <Grid item xs={6} md={12} lg={12}>
                <Paper className={clsx(paperGraph, pieCharts)}>
                <div className="test">
                  <Plot data={difference_percent.data} layout={difference_percent.layout} config={difference_percent.config} />
                  <Plot data={person_trust_index.data} layout={person_trust_index.layout} config={person_trust_index.config} />
                  <Plot data={tech_loss_index.data} layout={tech_loss_index.layout} config={tech_loss_index.config} />
                  <Plot data={house_trust_index.data} layout={house_trust_index.layout} config={house_trust_index.config} />
                  <Plot data={compnay_trust_index.data} layout={compnay_trust_index.layout} config={compnay_trust_index.config} />
                  </div>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6} md={12} lg={12}>
                <Paper className={clsx(paperGraph, secondBlock)}>
                  <Plot data={month_input.data} layout={month_input.layout} className={firstGraph} />
                  <Plot data={month_psk_out.data} layout={month_psk_out.layout} className={secondGraph} />
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6} md={12} lg={12}>
                <Paper className={clsx(paperGraph, secondBlock)}>
                  <Plot data={balance_group_tech_loss.data} layout={balance_group_tech_loss.layout} className={thirdtGraph} />
                  <Plot data={meter_avg.data} layout={meter_avg.layout} className={fourthGraph} />
                </Paper>
              </Grid>
            </Grid>

          </div>
            ]
          : null
      }
    </div>);

  }
}

function updateGraphic(filterText) {
  createDataArrayPie(differencePercent, filterText, difference_percent, 'difference_unbalance');
  createDataArrayPie(indexes, filterText, person_trust_index, 'entity_conf');
  createDataArrayPie(tech_losses, filterText, tech_loss_index, 'percent_technical_losses');
  createDataArrayPie(indexes, filterText, house_trust_index, 'population_conf');
  createDataArrayPie(indexes, filterText, compnay_trust_index, 'utility_conf');

  createDataArrayBar(full_res, filterText)
}
