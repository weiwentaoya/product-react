import React from 'react'
import Img from './Img'
import './ProductItem.less'

export default function ProductItem(props) {
  const { productInfo } = props
  const proportion = productInfo.mainPhoto.width / productInfo.mainPhoto.height
  return (
    <div className='product-item__wrap'>
      <div className={`product-item__photo ${proportion === 1? 'product-item__square': ''}`}>
        <div className="item__photo">
          <Img src={productInfo.mainPhoto.url}></Img>
        </div>
      </div>
      <div className="sale-price">{productInfo.salePrice}</div>
    </div>
  )
}
