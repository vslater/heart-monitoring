import {
  UPDATE_TOOLTIP,
  SHOW_TOOLTIP
} from '../actions'

var initialState = {
  tooltips : {},
  showingTooltip : undefined
};

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
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
