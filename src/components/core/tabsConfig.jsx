import React from 'react'
import { useSelector } from "react-redux"
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  TruckOutline,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

const TabsConfig = () => {
  const cart = useSelector((state) => state.cart)
  return <>
    <TabBar.Item key='/' icon={<AppOutline />} title='Home' />
    <TabBar.Item key='/category' icon={<UnorderedListOutline />} title='Category' />
    <TabBar.Item key='/cart' icon={<TruckOutline />} title='Cart' badge={cart.quantity} />
    <TabBar.Item key='/me' icon={<UserOutline />} title='Me' />
    </>
}

export default TabsConfig