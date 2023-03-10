import axios from "axios";
import { API } from "./config";

const instance = axios.create({
  baseURL: API,
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-protobuf',
    'Accept': 'application/x-protobuf'
  }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.platform = 3
  config.headers.language = 'en'
  config.headers.countryCode = 'US'
  config.headers.currency = 'USD'
  config.headers.gender = 2
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // debugger
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log(
    '%c ↓ API Response: ' + response.config.url,
    'background: #CDDEFF; padding: 4px; color: #1C6DD0; border-radius: 4px; margin-bottom: 10px; border: 4px solid #A2D2FF',
    '\n',
    response.data.data.value
  )
  return response.data.data.value;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance