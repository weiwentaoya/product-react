import React from 'react'
import { TabBar } from 'antd-mobile'
import { Tabs } from './TabsConfig'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomBar = () => {
  const navigate = useNavigate()

  const handlePathChange = val => {
    navigate(val)
  }
  const location = useLocation()
  return <TabBar style={{borderTop: '1px solid #d9dbe2'}} activeKey={location.pathname} onChange={ val => handlePathChange(val)}  >
  {Tabs.map(item => (
    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
  ))}
</TabBar>
}

export default BottomBar
