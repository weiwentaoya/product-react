import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'

const CID = Cookies.get('__hk_cid')
if (!CID) {
  const prefix = 'hk.cid'
  const timer = new Date().getTime()
  const uuid = uuidv4()
  const cId = [prefix, timer, uuid].join('.')
  Cookies.set('__hk_cid', cId)
}
