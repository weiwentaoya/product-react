import { USER_USERINFO, USER_TOKEN, USER_REFRESHTOKEN } from "../action-type"
const userActions = {
  userInfo(payload) {
    return {
      type: USER_USERINFO,
      payload
    }
  },
  userToken(payload) {
    return {
      type: USER_TOKEN,
      payload
    }
  },
  userRefreshToken(payload) {
    return {
      type: USER_REFRESHTOKEN,
      payload
    }
  }
}
export default userActions