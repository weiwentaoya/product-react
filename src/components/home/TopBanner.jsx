import React from 'react'
import { Swiper } from 'antd-mobile'
import Img from '../core/Img';
import PropTypes from 'prop-types'

export default function TopBanner({banner}) {
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

TopBanner.propTypes = {
  banner: PropTypes.array.isRequired
}
TopBanner.defaultProps = {
  banner: []
}