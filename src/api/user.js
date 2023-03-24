import User from '../proto/user.json'
import request from '../utils/request'


//检查邮件是否注册过
export const checkEmailRegister = (params)=>{
  return request(
    'user/checkEmailRegister',
    params,
    'UserCheckEmailRegister.Request',
    'UserCheckEmailRegister.Response',
    User
  )
}

// 登录
export const h5Login = (params)=>{
  return request(
    'user/h5Login',
    params,
    'AppUserLogin.Request',
    'AppUserLogin.Response',
    User
  )
}



