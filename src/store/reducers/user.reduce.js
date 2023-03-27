import { USER_USERINFO, USER_TOKEN, USER_REFRESHTOKEN } from "../action-type"
import Cookies from 'js-cookie'

const initial = {}


// const cookieOptions = {
//   maxAge: 60 * 60 * 24 * 7,
//   path: '/',
//   sameSite: 'Lax'
// }


export default function userReducer(state = initial, action) {
  state = { ...state }
  const { type, payload } = action

  switch (type) {
    case USER_USERINFO:
      console.log(payload);
      Cookies.set('__hk_u_info', payload)
      state.userProfileInfo = payload
      break;
    case USER_TOKEN:
      Cookies.set('__hk_token', payload)
      state.token = payload
      break;
    case USER_REFRESHTOKEN:
      Cookies.set('__hk_refreshToken', payload)
      state.refreshToken = payload
      break;

    default:
      break;
  }
  return state
}