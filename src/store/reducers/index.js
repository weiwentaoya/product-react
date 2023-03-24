import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import notifyReducer from './notify.reducer'
import cartReducer from './cart.reducer'
import userReduce from './user.reduce'

const createRootReducer = (history) => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  notify: notifyReducer,
  cart: cartReducer,
  user: userReduce
})

export default createRootReducer
