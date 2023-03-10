import React from 'react'
import { Swiper } from 'antd-mobile'
import Img from '../core/Img';


export default function TopBanner(props) {
  console.log(props);
  const { banner = [] } = props
  return (
    <Swiper autoplay loop>
      {
        banner.map(el=>{
          return <Swiper.Item key={el.id}>
            <Img src={el.imgUrl} perch='banner'/>
          </Swiper.Item>
        })
      }
    </Swiper>
  )
}
