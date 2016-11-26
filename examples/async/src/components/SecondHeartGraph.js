import React, { PropTypes } from 'react'
import {LineChart} from 'react-easy-chart';
import { updateTooltip, showTooltip } from '../actions'


function mouseMoveHandler(e) {
    // if (this.state.showToolTip) {
    //   this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});
    // }
  }

function mouseOutHandler() {
    //this.setState({showToolTip: false});
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

// var data = [
//   [
//     { x: 10, y: 67 },
//     { x: 20, y: 68 },
//     { x: 30, y: 72 },
//     { x: 40, y: 90 },
//     { x: 50, y: 66 },
//     { x: 60, y: 65 }
//   ]
// ];

const HeartGraph = ({dispatch, graph}) => {
  setTimeout(() => {
        dispatch({type : 'GET_DATA'});
    }, 1000);

  const {tooltips, showingTooltip, data} = graph;
  
  function mouseOverHandler(d, e) {
    if (tooltips['x : ' + d.x + ', y : ' + d.y]) {
      dispatch(showTooltip('x : ' + d.x + ', y : ' + d.y))
    }
    else {
      dispatch(updateTooltip({
        key : 'x : ' + d.x + ', y : ' + d.y,
        reason : null
      }));
      dispatch(showTooltip('x : ' + d.x + ', y : ' + d.y))
    }
  }

  function infoChanged(showingTooltip) {
    return function(e) {
      dispatch(updateTooltip({
        key : showingTooltip,
        reason : e.target.value
      }));
    };
  }

  return (
    <span>
        <LineChart
          axes
          grid
          yDomainRange={[50, 100]}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
          mouseMoveHandler={mouseMoveHandler}
          width={800}
          height={350}
          data={data}
        />

        {showingTooltip &&
          <div>
            <p>{showingTooltip +' ' + tooltips[showingTooltip]}</p>
            Info: <input value={tooltips[showingTooltip]} onChange={infoChanged(showingTooltip)} />
          </div>
        }
    </span>
  );
}

export default HeartGraph
