import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import './Sticky.less'
export default function Sticky() {
  const nav = ['HOME', 'FASHION', 'ELECTRONICS']
  const state = useSelector(state => state)
  console.log(state)
  const active = useMemo(() => {
    switch (state.router
      .location.pathname) {
      case '/':
        return 'HOME'
      case '/fashion':
        return 'FASHION'
      case '/electronic':
        return 'ELECTRONICS'
      default:
        return 'HOME'
    }
  }, [])
  return (
    <div className='sticky-wrap'>
      {
        nav.map(el => {
          return <span key={el} className={el === active?'active':''}>{el}</span>
        })
      }
    </div>
  )
}
