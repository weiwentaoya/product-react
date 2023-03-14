import React from 'react'
import './NavBar.less'
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className='nav-bar__wrap'>
      <span className="hekka-font hekka-more"></span>
      <Link to="/" className='nav-bar__logo'>
      <img src={require('@/static/logo.png')} alt="" />
      </Link>
      <div className='nav-bar__occupy'></div>
      <span className="hekka-font hekka-search1"></span>
      <span className="hekka-font hekka-bag"></span>
      <div className='nav-bar__customer'>
        <span className="hekka-font hekka-support1"></span>
        <span className='nav-bar__date'>24/7</span>
      </div>
    </div>
  )
}
