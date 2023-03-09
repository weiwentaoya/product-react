import React from 'react'
import {
  AppOutline,
  TruckOutline,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'
import { Badge } from 'antd-mobile'

export const Tabs = [
  {
    key: '/',
    title: 'Home',
    icon: <AppOutline />,
    badge: Badge.dot
  },
  {
    key: '/category',
    title: 'Category',
    icon: <UnorderedListOutline />,
    badge: '5'
  },
  {
    key: '/cart',
    title: 'Cart',
    icon: <TruckOutline />,
    badge: '99+'
  },
  {
    key: '/me',
    title: 'Me',
    icon: <UserOutline />
  }
]
