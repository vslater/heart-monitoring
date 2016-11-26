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

const HeartGraph = ({dispatch, graph}) => {
  setTimeout(() => {
        dispatch({type : 'GET_DATA'});
    }, 3000);

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

  var floatLeft = {
    float : 'left'
  }

  return (
    <span>
      <div style={floatLeft}>
        <LineChart
          axes
          grid
          yDomainRange={[50, 100]}
          axisLabels={{x: 'Time', y: 'Heart Rate'}}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
          mouseMoveHandler={mouseMoveHandler}
          width={800}
          height={350}
          data={data}
        />
      </div>

        {showingTooltip &&
          <div>
            <p>{showingTooltip +' ' + tooltips[showingTooltip]}</p>
            Info: <input value={tooltips[showingTooltip]} onChange={infoChanged(showingTooltip)} />
          </div>
        }

        <div style={floatLeft}>
        {Object.keys(data[0]).map(function(key) {
          console.log('data', data[0][key]);
          if (data[0][key].y > 75) {
            console.log('IN HERE')
            return (
              <div>
                Warning: <input value={key} onChange={infoChanged(showingTooltip)} />
              </div>
            );
          }
        })
        }
        </div>
    </span>
  );
}

export default HeartGraph
