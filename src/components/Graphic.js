import React from 'react';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export class GraphicGroup extends React.Component {
  render() {
    return (<SingleGraphic name={this.props.name} x_coordinates={this.props.x_coordinates} y_coordinates={this.props.y_coordinates} type={this.props.type}/>);
  }
}

function SingleGraphic(props) {

  const plotlydata = [
    {
      x: props.x_coordinates,
      y: props.y_coordinates,
      type: props.type
    }
  ];
  return <Plot data={plotlydata} layout={{
      title: props.name
    }}/>

}
