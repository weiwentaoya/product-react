import React, { useMemo } from 'react'
// import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './Sticky.less'
import { Link } from 'react-router-dom'


export default function Sticky() {
  const nav = ['HOME', 'FASHION', 'ELECTRONICS']
  const location = useLocation()
  const active = useMemo(() => {
    switch (location.pathname) {
      case '/':
        return 'HOME'
      case '/fashion':
        return 'FASHION'
      case '/electronics':
        return 'ELECTRONICS'
      default:
        return 'HOME'
    }
  }, [ location ])
  return (
    <div className='sticky-wrap'>
      {
        nav.map(el => {
          return <Link key={el} to={'/' + (el !== 'HOME'? el.toLocaleLowerCase():'')} className={el === active?'active':''}>{el}</Link>
        })
      }
    </div>
  )
}
