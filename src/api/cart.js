import Cart from '../proto/cart.json'
import request from '../utils/request'


//购物车数量
export const cartCartLen = (params)=>{
  return request(
    'order/cart/cartLen',
    params,
    'CartLen.Request',
    'CartLen.Response',
    Cart
  )
}

//加购 购物车
export const cartAddCart = (params)=>{
  return request(
    'order/cart/addCart',
    params,
    'AddCart.Request',
    'AddCart.Response',
    Cart
  )
}

//加购 购物车
export const cartListV2 = (params)=>{
  return request(
    'order/cart/list/V2',
    params,
    'CartSkuListV2.Request',
    'CartSkuListV2.Response',
    Cart
  )
}

//购物车+-
export const cartSkuAddNumV2 = (params)=>{
  return request(
    'order/cart/skuAddNum/V2',
    params,
    'CartSkuAddNumV2.Request',
    'CartSkuAddNumV2.Response',
    Cart
  )
}
//购物车remove
export const cartRemoveSkuV2 = (params)=>{
  return request(
    'order/cart/removeSku/V2',
    params,
    'CartRemoveSkuV2.Request',
    'CartRemoveSkuV2.Response',
    Cart
  )
}
