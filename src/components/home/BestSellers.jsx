import React from 'react'
import { Swiper } from 'antd-mobile'
import styled from 'styled-components';

import PropTypes from 'prop-types'
import Img from '../core/Img';

const BestSellers = ({hotsales}) => {
  
  return (
    <Container>
      <div className="best-sellers__header">
        <span>Best Sellers</span>
        <span className="hekka-font hekka-arrow-right" />
      </div>
      <div className="best-sellers__fashion">
          {
            hotsales.fashionList && hotsales.fashionList.length?
            <Swiper
              slideSize={40}
              defaultIndex={0}
              indicatorProps={{
                style: {
                  display: 'none'
                },
              }}
            >
              {
                hotsales.fashionList.map(el=>{
                  return <Swiper.Item  key={el.secondaryCategoryId} >
                    <div className="fashion-img">
                      <Img src={el.imgLink}/>
                    </div>
                    <div className="fashion-title">{el.secondaryCategory}</div>
                  </Swiper.Item>
                })
              }
              {/* <ProductItem productInfo={el} /> */}
            </Swiper>
            : ''
          }
        </div>
        <div className="best-sellers__electronic">
          {
            hotsales.electronicList && hotsales.electronicList.length?
            <Swiper
              slideSize={40}
              defaultIndex={0}
              indicatorProps={{
                style: {
                  display: 'none'
                },
              }}
            >
              {
                hotsales.electronicList.map(el=>{
                  return <Swiper.Item  key={el.secondaryCategoryId} >
                    <div className="electronic-img">
                      <Img src={el.imgLink} perch='square' />
                    </div>
                    <div className="electronic-title">{el.secondaryCategory}</div>
                  </Swiper.Item>
                })
              }
              {/* <ProductItem productInfo={el} /> */}
            </Swiper>
            : ''
          }
        </div>
    </Container>
  )
}

BestSellers.propTypes = {
  hotsales: PropTypes.object
}
BestSellers.defaultProps = {
  hotsales: {}
}

const Container = styled.div`
  .best-sellers__header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    font-size: 16px;
    font-family: Roboto, Roboto-Bold;
    font-weight: 700;
    color: #000000;
  }
  .best-sellers__fashion{
    .fashion-img{
      width: 138px;
      height: 184px;
    }
    .fashion-title{
      font-size: 12px;
      font-family: Roboto, Roboto-Bold;
      font-weight: 700;
      color: #000000;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  .best-sellers__electronic{
    .electronic-img{
      width: 138px;
      height: 138px;
    }
    .electronic-title{
      font-size: 12px;
      font-family: Roboto, Roboto-Bold;
      font-weight: 700;
      color: #000000;
      margin-top: 10px;
      margin-bottom: 20px;

    }
  }
`;

export default BestSellers