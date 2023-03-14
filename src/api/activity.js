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
// 首页banner
export const homeRecommendTagList = (params)=>{
  return request(
    'activity/homeRecommend/tagList',
    params,
    'HomeRecommendTag.Request',
    'HomeRecommendTag.Response',
    Activity
  )
}

// 首页 Best Sellers
      
export const hotsalesIndexV2 = (params)=>{
  return request(
    'activity/hotsales/indexV2',
    params,
    'HotSalesIndexV2.Request',
    'HotSalesIndexV2.Response',
    Activity
  )
}