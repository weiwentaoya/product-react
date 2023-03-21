import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import notifyReducer from './notify.reducer'

const createRootReducer = (history) => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  notify: notifyReducer
})

export default createRootReducer
