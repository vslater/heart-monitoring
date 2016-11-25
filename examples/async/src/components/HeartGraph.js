import React, { PropTypes } from 'react'
//import Chart from 'chart.js'
//var LineChart = require("react-chartjs").Line;
import {LineChart} from 'react-easy-chart';
//import {BarChart} from 'react-easy-chart';

function mouseOverHandler(d, e) {
    //tooltip = 'hovered';
    // d.setState({
    //   showToolTip: true,
    //   top: `${e.screenY - 10}px`,
    //   left: `${e.screenX + 10}px`,
    //   y: d.y,
    //   x: d.x});
  }

function mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});
    }
  }

function mouseOutHandler() {
    this.setState({showToolTip: false});
  }

function createTooltip() {
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
        >
            The x value is {this.state.x} and the y value is {this.state.y}
        </ToolTip>
      );
    }
    return false;
  }


const HeartGraph = ({tooltip}) => (
  <span>
    <h1>Heart Graph</h1>
      <LineChart
        axes
        dataPoints
        grid
        xDomainRange={[0, 100]}
        yDomainRange={[0, 100]}
        mouseOverHandler={mouseOverHandler}
        mouseOutHandler={mouseOutHandler}
        mouseMoveHandler={mouseMoveHandler}
        width={700}
        height={350}
        interpolate={'cardinal'}
        data={[
          [
            { x: 10, y: 25 },
            { x: 20, y: 10 },
            { x: 30, y: 25 },
            { x: 40, y: 10 },
            { x: 50, y: 12 },
            { x: 60, y: 25 }
          ], [
            { x: 10, y: 40 },
            { x: 20, y: 30 },
            { x: 30, y: 25 },
            { x: 40, y: 60 },
            { x: 50, y: 22 },
            { x: 60, y: 9 }
          ]
        ]}
      />

      {true &&
        <h1>{tooltip}</h1>
      }
  </span>
)

export default HeartGraph
