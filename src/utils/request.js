import instance from './axios';
import { transformPBReq, transformPBRes } from './index'
export default function request(url,params, QT, ST, Root, method = 'post') {
  console.log(
    '%c ↑ API Request: ' + url,
    'background: #93FFD8; padding: 4px; color: #146356; border-radius: 4px; margin-bottom: 10px; border: 4px solid #CFFFDC',
    '\n',
    params
  )
  return instance({
    url,
    method,
    data: params,
    // 对发送的 data 进行任意转换处理
    transformRequest: [ (params, headers) => transformPBReq(params, headers, QT, Root)],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    // 对接收的 data 进行任意转换处理
    transformResponse: [ (data) => transformPBRes(data, ST, Root)],
    responseType: 'arraybuffer', // 默认值
  })
}