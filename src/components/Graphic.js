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
