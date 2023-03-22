import React from 'react'
import Img from './Img'
import './ProductItem.less'
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/format';
import { Link } from 'react-router-dom'


function ProductItem({ productInfo, showInfo, type }) {
  const { rank, title, marketPrice, cart } = showInfo
  let proportion
  if (type === 'square') {
    proportion = 100
  }else if(type === 'rectangle'){
    proportion = 133.33
  } else if ( productInfo.mainPhoto.height && productInfo.mainPhoto.width) {
    proportion = productInfo.mainPhoto.height / productInfo.mainPhoto.width * 100
  }else {
    proportion = 133.33
  }
  const path = `/product/${productInfo.handle || 'handle'}-p-${productInfo.spuId}-k-${productInfo.skuId || '0'}.html`
  return (
    <Link className='product-item__wrap' to={ path }>
      <div className='product-item__photo' style={{ paddingTop: proportion +'%'}}>
        <div className="item__photo">
          <Img src={productInfo.mainPhoto.url}></Img>
          
        </div>
        {
            cart && <div className='add-cart'><span className="hekka-font hekka-jiagou"></span></div>
          }
          {
            productInfo.spuDiscount && <span className='spu-discount'>-{productInfo.spuDiscount}%</span>
          }
      </div>
      <div className="info">
      {
        title ?
          <div className="title">{productInfo.title}</div>
          : ''
      }
      <div className="sale-price">
        <span>{
          formatPrice(productInfo.salePrice)
        }</span>
        {
          marketPrice ?
            <del>{
              formatPrice(productInfo.marketPrice)
            }</del>
            : ''
        }
      </div>
      {
        rank && productInfo.rankInfo?.rank > 0 ?
          <div className="top">
            <div>Top {productInfo.rankInfo.rank}</div>
            {/* in */}
            <span></span>
          </div>
          : ''
      }
      </div>
    </Link>
  )
}

ProductItem.propTypes = {
  rank: PropTypes.bool,
  title: PropTypes.bool,
  cart: PropTypes.bool,
  marketPrice: PropTypes.bool
}

ProductItem.defaultProps = {
  showInfo: {
    rank: true,
    title: true,
    marketPrice: true,
    cart: false
  }

}
export default ProductItem