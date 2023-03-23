import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { formatPrice } from '../../utils/format'
const ProductInfo = ({product, selectSku}) => {
  return (
    <Container>
      <div className="product-title">{product.title}</div>
      <div className="product-sales">{product.sales} Sold</div>
      <div className="product-price">
        <span className="product-price__sale">{formatPrice(selectSku.salePrice)}</span>
        <span className="product-price__market">{formatPrice(selectSku.marketPrice)}</span>
        <span className="product-price__discount">-{selectSku.discount}%</span>
      </div>
      
    </Container>
  )
}


export const Container = styled.div`
  padding: 12px 12px 0 12px;
  .product-title{
    font-size: 14px;
    font-family: Montserrat, Montserrat-Light;
    color: #000000;
    line-height: 18px;
  }
  .product-sales{
    font-family: Montserrat, Montserrat-Regular;
    color: #000000;
    padding: 2px 6px;
    background: #f4f5f7;
    display: inline-block;
    margin-top: 4px;
  }
  .product-price{
    margin-top: 8px;
    display: flex;
    align-items: center;
    &__sale{
      font-size: 18px;
      font-family: Montserrat, Montserrat-SemiBold;
      font-weight: 600;
      margin-right: 6px;
    }
    &__market{
      font-size: 12px;
      font-family: Montserrat, Montserrat-Light;
      text-decoration:  line-through;
      color: #74788a;
      margin-right: 14px;
    }
    &__discount{
      font-size: 12px;
      background: #fff2ee;
      padding: 2px 4px;
      color: #ff4300;
    }
  }
`;

ProductInfo.propTypes = {}
ProductInfo.defaultProps = {
  selectSku: {}
}

export default ProductInfo