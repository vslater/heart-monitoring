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
  const {tooltips, showingTooltip, minuteData, change} = graph;
  var data = minuteData;
  
  if (change % 5 === 0) {
    setTimeout(() => {
        dispatch({type : 'GET_DATA_MINUTE'});
    }, 1000);
  }

  
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

  var showData = data.slice(data.length -6, data.length);
  console.log('showData', showData)

  var copiedData = data.slice();


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
          data={[showData]}
        />
      </div>

        {showingTooltip &&
          <div>
            <p>{showingTooltip +' ' + tooltips[showingTooltip]}</p>
            Info: <input value={tooltips[showingTooltip]} onChange={infoChanged(showingTooltip)} />
          </div>
        }

        <div style={floatLeft}>
          <p>Irregularities</p>
          {copiedData.reverse().map(function(item) {
            console.log('item', item);
            if (item.y > 82 || item.y < 55) {
              var currentDate = new Date();
              currentDate.setDate(currentDate.getDate() + item.x);
              return (
                <div>
                  {currentDate.toDateString() + ': Heart Rate - ' + item.y} <input placeholder={'Reason'} onChange={infoChanged(showingTooltip)} />
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
