import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import notifyReducer from './notify.reducer'
import cartReducer from './cart.reducer'

const createRootReducer = (history) => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  notify: notifyReducer,
  cart: cartReducer
})

export default createRootReducer
