import React from 'react'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  TruckOutline,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux"

const BottomBar = () => {
  const navigate = useNavigate()

  const handlePathChange = val => {
    navigate(val)
  }
  const location = useLocation()
  const cart = useSelector((state) => state.cart)

  return <TabBar style={{borderTop: '1px solid #d9dbe2'}} activeKey={location.pathname} onChange={ val => handlePathChange(val)}  >
    <TabBar.Item key='/' icon={<AppOutline />} title='Home' />
    <TabBar.Item key='/category' icon={<UnorderedListOutline />} title='Category' />
    <TabBar.Item key='/cart' icon={<TruckOutline />} title='Cart' badge={cart.quantity} />
    <TabBar.Item key='/me' icon={<UserOutline />} title='Me' />
</TabBar>
}

export default BottomBar
