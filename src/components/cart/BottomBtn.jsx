import React from 'react'
import styled from 'styled-components';
import { formatPrice } from '../../utils/format';
import { CheckOutline } from 'antd-mobile-icons'

const BottomBtn = ({cartInfo, total}) => {
  const { amount } = cartInfo
  return (
    <Container>
      <div className="cart-info">
        <div className="checkout">
          <span>
          <CheckOutline color='#fff'/>
          </span>
          All
        </div>
        <div className='info'>
          <div className="discount-price">
            Saved:{formatPrice(amount?.totalMarketDiscountPrice)}
          </div>
          <div className="total">{formatPrice(amount?.totalMarketPayPrice)}</div>
        </div>
      </div>
      <div className="cart-btn">
      <span className="hekka-font hekka-a-bellowbag"></span>
        <span>SECURE CHECKOUT ({total})</span>
      </div>
    </Container>
  )
}

export const Container = styled.div`
  min-height: 56px;
  .cart-info{
    width: 100%;
    /* border-top: 1px solid #f5f5f5; */
    border-bottom: 1px solid #e5e5e5;
    padding: 16px 12px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 14px;
    font-family: Roboto, Roboto-Medium;
    font-weight: 600;
    color: #000000;
    .checkout{
      display: flex;
      align-items: center;
      span{
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        background: #000000;
        border-radius: 8px;
        margin-right: 8px;
      }
      
    }
    .info{
      text-align: right;
      .discount-price{
        color: #ff325a;
      }
    }
  }
  .cart-btn{
    margin: 6px 12px;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background: #000000;
    font-size: 16px;
    font-family: Roboto, Roboto-Medium;
    font-weight: 600;
    color: #ffffff;
    span{
      margin: 0 6px;
    }
  }
`;

export default BottomBtn