import { NOTIFY_BANNER } from '../action-type'

const initial = {
  imgUrl: '',
  linkUrl: null
}


export default function notifyReducer(state = initial, action) {
  state = {...state}
  const { type, payload } = action
  switch (type) {
    case NOTIFY_BANNER:
      state = { ...payload}
      break;
      default:
  }

  return state
  
}