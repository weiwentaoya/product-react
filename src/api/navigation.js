import Navigation from '../proto/navigation.json'
import request from '../utils/request'


//导航列表
export const navigationList = (params)=>{
  return request(
    'product/navigation/list',
    params,
    'AppNavigationList.Request',
    'AppNavigationList.Response',
    Navigation
  )
}


