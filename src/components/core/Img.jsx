import React from 'react'
import { Image  } from 'antd-mobile'
import PropTypes from 'prop-types'

const CDN = 'https://hekkacdn.pengpengduobao.com'

// 占位图类型
const perchType = {
  rectangle: require('@/static/images/perch_3x4.webp'), // 3:4 长方形
  square: require('@/static/images/perch_1x1.webp'), // 1:1 正方形
  banner: require('@/static/images/perch_banner.webp'), // 首页 banner
  strip: require('@/static/images/perch_strip.webp') // 首页 长横幅
}

function Placeholder({perch}) {
  return <img src={perchType[perch]} alt='hekka' style={{maxWidth: '100%'}} />
}

export default function Img({src, perch}) {
  let imgUrl = ''
  if (src.startsWith('http')) {
    imgUrl = src
  }else{
    imgUrl = CDN + src
  }
  return (
    <Image lazy alt='hekka' src={imgUrl} fit="contain" placeholder={<Placeholder perch={perch} />} style={{width: '100%', height: '100%',background: '#f8f8f8'}}/>
  )
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  perch: PropTypes.string
}
Img.defaultProps = {
  perch: 'rectangle'
}