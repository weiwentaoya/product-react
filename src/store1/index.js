import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import promiseMiddleware from 'redux-promise';
import createRootReducer from './reducers'
export const history = createBrowserHistory()

export default createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      promiseMiddleware
    )
  )
)
