import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import './NavBar.less'
import { Link } from 'react-router-dom';
import { cartCartLen } from '../../api/cart'
export default function NavBar() {
  const router = useSelector(state => state.router)
  const cartLen = async () => {
		const res = await cartCartLen()
	}
	useEffect(() => {
		cartLen()
	}, [])
  useEffect(() => {
		// console.log('router',router);
	}, [router])
  return (
    <div className='nav-bar__wrap'>
      <span className="hekka-font hekka-back"></span>
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
