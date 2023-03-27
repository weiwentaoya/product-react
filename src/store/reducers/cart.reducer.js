import { CART_QUANTITY } from '../action-type'

const initial = {
  quantity: -1
}

export default function notifyReducer(state = initial, action) {
  state = {...state}
  const { type, payload } = action
  switch (type) {
    case CART_QUANTITY:
      state = { ...payload}
      break;
      default:
  }

  return state
  
}