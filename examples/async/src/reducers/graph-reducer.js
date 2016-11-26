import {
  UPDATE_TOOLTIP,
  SHOW_TOOLTIP,
  GET_DATA,
  GET_DATA_MINUTE
} from '../actions'

var initialState = {
  tooltips : {},
  showingTooltip : undefined,
  data : [
      { x: 10, y: 67 },
      { x: 20, y: 68 },
      { x: 30, y: 72 },
      { x: 40, y: 90 },
      { x: 50, y: 66 },
      { x: 60, y: 65 }
  ],
  max : 60,
  minuteData : [
    [
      { x: 10, y: 67 },
      { x: 20, y: 68 },
      { x: 30, y: 72 },
      { x: 40, y: 90 },
      { x: 50, y: 66 },
      { x: 60, y: 65 }
    ]
  ],
  minuteMax : 60,
  quarterData : [
    [
      { x: 10, y: 67 },
      { x: 20, y: 68 },
      { x: 30, y: 72 },
      { x: 40, y: 90 },
      { x: 50, y: 66 },
      { x: 60, y: 65 }
    ]
  ],
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_MINUTE:
      state.minuteMax = state.minuteMax + 10;
      state.minuteData[0].shift();
      state.minuteData[0].push({x : state.minuteMax, y : getRandomArbitrary(60,90)})
      return {
        ...state
      }
    case GET_DATA:
      state.max = state.max + 10;
      //state.data[0].shift();
      state.data.push({x : state.max, y : getRandomArbitrary(60,90)})
      return {
        ...state
      }
    case UPDATE_TOOLTIP:
      return {
        ...state,
        tooltips : {
          ...state.tooltips,
          [action.tooltip.key] : action.tooltip.reason
        }
      }
    case SHOW_TOOLTIP:
      //var tooltip = state.tooltips[action.tooltipKey];
      return {
        ...state,
        showingTooltip : action.tooltipKey
      }
    default:
      return state
  }
}

export default graphReducer
