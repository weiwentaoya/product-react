import Product from '../proto/product.json'
import request from '../utils/request'



//商品详情
export const getProductDetail = (params)=>{
  return request(
    'product/product/getProductDetail',
    params,
    'AppProductDetail.Request',
    'AppProductDetail.Response',
    Product
  )
}
//商品详情
export const detailPromotionProductList = (params)=>{
  return request(
    'product/list/detailPromotionProductList',
    params,
    'DetailPromotionProductList.Request',
    'DetailPromotionProductList.Response',
    Product
  )
}
