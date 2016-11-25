import {
  UPDATE_TOOLTIP
} from '../actions'

const graphReducer = (state = {tooltip : 'my tooltip' }, action) => {
  switch (action.type) {
    case UPDATE_TOOLTIP:
      return {
        ...state,
        tooltip : action.tooltip
      }
    default:
      return state
  }
}

export default graphReducer
