import Activity from '../proto/activity'
import request from '../utils/request'
// 首页banner
export const bannerPositionList = (params)=>{
  return request(
    'activity/bannerPosition/list',
    params,
    'BannerPosition.Request',
    'BannerPosition.Response',
    Activity
  )
}
// 首页banner
export const newUserZoneList = (params)=>{
  return request(
    'activity/newUserZone/list',
    params,
    'AppNewUserZone.Request',
    'AppNewUserZone.Response',
    Activity
  )
}
