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


