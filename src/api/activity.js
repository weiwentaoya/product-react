import Activity from '../proto/activity'
import request from '../utils/request'
// 获取顾客详细信息
export const bannerPositionList = (params)=>{
  return request(
    'activity/bannerPosition/list',
    params,
    'BannerPosition.Request',
    'BannerPosition.Response',
    Activity
  )
}
