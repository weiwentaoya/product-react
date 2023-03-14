import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import './Sticky.less'
import { Link } from 'react-router-dom'
export default function Sticky() {
  const nav = ['HOME', 'FASHION', 'ELECTRONICS']
  const state = useSelector(state => state)
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
  }, [state.router.location.pathname])
  return (
    <div className='sticky-wrap'>
      {
        nav.map(el => {
          return <Link key={el} to={'/' + el.toLocaleLowerCase()} className={el === active?'active':''}>{el}</Link>
        })
      }
    </div>
  )
}
