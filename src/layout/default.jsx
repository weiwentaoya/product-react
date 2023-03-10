import React from 'react'
import { Toast } from 'antd-mobile'
import BottomBar from '../components/core/BottomBar'
import NavBar from '../components/core/NavBar'
import './default.less'
// import './default.scss'


const layout = props => {
  const back = () =>
    Toast.show({
      content: '点击了 返回区域',
      duration: 1000
    })
  return (
    <div className='page-container__wrap'>
      <NavBar onBack={back}>layout</NavBar>
      <div className='page-main__wrap'>
        {props.children}
      </div>
      <BottomBar></BottomBar>
    </div>
  )
}

export default layout
