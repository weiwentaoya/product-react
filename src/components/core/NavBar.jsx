import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import cartAction from '../../store/actions/cart.action';

import { Badge } from "antd-mobile"
import "./NavBar.less"
import { Link } from "react-router-dom"

export default function NavBar({onBack}) {
	const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
		if (cart.quantity < 0) {
			dispatch(cartAction.cartCartLen())
		}
  },[])
	return (
		<div className="nav-bar__wrap">
			<span className="hekka-font hekka-back" onClick={onBack}></span>
			<span className="hekka-font hekka-more"></span>
			<Link to="/" className="nav-bar__logo">
				<img src={require("@/static/logo.png")} alt="" />
			</Link>
			<div className="nav-bar__occupy"></div>
			<span className="hekka-font hekka-search1"></span>
			{
        cart.quantity > 0 ? (
          <Badge content={cart.quantity}>
            <span className="hekka-font hekka-bag"></span>
          </Badge>
        ) : (
          <span className="hekka-font hekka-bag"></span>
        )
      }

			<div className="nav-bar__customer">
				<span className="hekka-font hekka-support1"></span>
				<span className="nav-bar__date">24/7</span>
			</div>
		</div>
	)
}
