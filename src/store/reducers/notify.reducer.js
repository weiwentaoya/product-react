const initial = {
  imgUrl: '',
  linkUrl: null
}


export default function notifyReducer(state = initial, action) {
  state = {...state}
  const { type, payload } = action
  switch (type) {
    case 'notify':
      state = { ...payload}
      break;
      default:
  }

  return state
  
}