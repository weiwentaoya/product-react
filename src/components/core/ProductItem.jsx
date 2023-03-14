import React from 'react'
import Img from './Img'
import './ProductItem.less'
import PropTypes from 'prop-types';

function ProductItem({ productInfo, showInfo, type }) {
  const { rank, title, marketPrice } = showInfo
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
  return (
    <div className='product-item__wrap'>
      <div className='product-item__photo' style={{ paddingTop: proportion +'%'}}>
        <div className="item__photo">
          <Img src={productInfo.mainPhoto.url}></Img>
        </div>
      </div>
      <div className="info">
      {
        title ?
          <div className="title">{productInfo.title}</div>
          : ''
      }
      <div className="sale-price">
        <span>{productInfo.salePrice}</span>
        {
          marketPrice ?
            <del>{productInfo.marketPrice}</del>
            : ''
        }
      </div>
      {
        rank ?
          <div className="top">
            <div>Top {productInfo.rankInfo.rank}</div>
            {/* in */}
            <span></span>
          </div>
          : ''
      }
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  rank: PropTypes.bool,
  title: PropTypes.bool,
  marketPrice: PropTypes.bool
}

ProductItem.defaultProps = {
  showInfo: {
    rank: true,
    title: true,
    marketPrice: true
  }

}
export default ProductItem