import React, { useEffect, useState } from 'react'
import { Swiper } from 'antd-mobile'
import styled from 'styled-components';
import ProductItem from '@/components/core/ProductItem';

import PropTypes from 'prop-types'
import { hotsalesIndexV2 } from '@/api/activity'
import Img from '../core/Img';

const BestSellers = props => {

  const [hotsales, setHotsales] = useState({})
  
  const getHotsalesIndexV2 = async () => {
    const res = await hotsalesIndexV2({platform: 3})
    setHotsales(res)
  }
  useEffect(()=>{
    getHotsalesIndexV2()
    
  },[])
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

BestSellers.propTypes = {}

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