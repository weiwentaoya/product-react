import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'
import store from '../store-rtk'
// import userActions from '../store/actions/user.action'
import { setRefreshToken, setUserInfo, setUserToken} from '../store-rtk/features/userSlice'

const CID = Cookies.get('__hk_cid')
if (!CID) {
  const prefix = 'hk.cid'
  const timer = new Date().getTime()
  const uuid = uuidv4()
  const cId = [prefix, timer, uuid].join('.')
  Cookies.set('__hk_cid', cId)
}

const token =Cookies.get('__hk_token')
token && store.dispatch(setUserToken(token))
const userProfileInfo =Cookies.get('__hk_u_info')
userProfileInfo && store.dispatch(setUserInfo(JSON.parse(userProfileInfo)))
const refreshToken =Cookies.get('__hk_refreshToken')
refreshToken && store.dispatch(setRefreshToken(refreshToken))
