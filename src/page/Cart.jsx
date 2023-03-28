import React, { useEffect, useMemo } from "react"
import BackNavBar from "../components/core/BackNavBar"
import CartList from "../components/cart/CartList"
import BottomBtn from "../components/cart/BottomBtn"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { getCartList } from "../store-rtk/features/cartSlice"

const Cart = () => {
	const dispatch = useDispatch()
	const cartInfo = useSelector((state) => state.cart).cartInfo
	useEffect(() => {
		if (!cartInfo.skuList) {
			dispatch(getCartList())
		}
	})
	// Unavailable Items (2)
	const unavailableList = useMemo(() => {
		if (!cartInfo.skuList || cartInfo.skuList.length <= 0) {
			return []
		}
		return cartInfo.skuList?.filter((el) => el.invalidFlag)
	})
	const cartList = useMemo(() => {
		if (!cartInfo.skuList || cartInfo.skuList.length <= 0) {
			return []
		}
		return cartInfo.skuList?.filter((el) => !el.invalidFlag)
	})
	const total = useMemo(() => {
		return cartList?.map((el) => Number(el.quantity)).reduce((a, b) => a + b, 0)
	})

	return (
		<Container>
			<BackNavBar title="Shopping Bag"></BackNavBar>
			<div className="content">
				<CartList cartList={cartList} />
				<div className="unavailable-title">
					<b>Unavailable Items ({unavailableList.length})</b>
					<span>Clear All</span>
				</div>
				<CartList cartList={unavailableList} unavailable/>

			</div>
			<BottomBtn className="bottom-btn" cartInfo={cartInfo} total={total} />
		</Container>
	)
}

export const Container = styled.div`
	height: 100vh;
	background: #fff;
	display: flex;
	flex-direction: column;
	.content {
		flex: 1;
		overflow-y: auto;
		border-top: 8px solid #f5f5f5;
		.unavailable-title {
			padding: 0 12px;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;
      border-bottom: 1px solid #f5f5f5;
			b {
				font-size: 14px;
				font-family: Roboto, Roboto-Medium;
			}
			span {
				font-size: 11px;
				font-family: Roboto, Roboto-Regular;
				text-decoration: underline;
			}
		}
	}
`

export default Cart
