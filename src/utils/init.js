import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'
import store from '../store'
import userActions from '../store/actions/user.action'

const CID = Cookies.get('__hk_cid')
if (!CID) {
  const prefix = 'hk.cid'
  const timer = new Date().getTime()
  const uuid = uuidv4()
  const cId = [prefix, timer, uuid].join('.')
  Cookies.set('__hk_cid', cId)
}

const token =Cookies.get('__hk_token')
token && store.dispatch(userActions.userToken(token))
const userProfileInfo =Cookies.get('__hk_u_info')
userProfileInfo && store.dispatch(userActions.userInfo(userProfileInfo))
const refreshToken =Cookies.get('__hk_refreshToken')
refreshToken && store.dispatch(userActions.userRefreshToken(refreshToken))
