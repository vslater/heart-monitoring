import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import GraphReducer from './reducers/graph-reducer'
import App from './containers/App'
import { combineReducers } from 'redux'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const reducers = combineReducers({
  reducer,
  GraphReducer
})

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//while(true) {
    // setTimeout(() => {
    //     store.dispatch({type : 'GET_DATA'});
    // }, 1000);
//}
