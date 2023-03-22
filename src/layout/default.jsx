import React from 'react'
import { Toast } from 'antd-mobile'
import BottomBar from '../components/core/BottomBar'
import NavBar from '../components/core/NavBar'
import NotificationBar from '../components/core/NotificationBar'
import './default.less'
// import './default.scss'


const layout =  ({ children }) => {
  const Bottom = children.find(el=>el.props.slot === 'bottom') ||  <BottomBar/>
  const back = () =>
    Toast.show({
      content: '点击了 返回区域',
      duration: 1000
    })
  return (
    <div className='page-container__wrap'>
      <NotificationBar/>
      <NavBar onBack={back}>layout</NavBar>
      <div className='page-main__wrap'>
        {children.filter(el => !el.props.slot)}
      </div>
      {
        Bottom
      }
    </div>
  )
}

export default layout
