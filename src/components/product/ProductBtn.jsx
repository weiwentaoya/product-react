import React from "react"
import { Toast } from "antd-mobile"
// import PropTypes from 'prop-types'
import styled from "styled-components"
import { cartAddCart } from "../../api/cart"
import { useDispatch } from "react-redux"
import cartAction from "../../store/actions/cart.action"

const ProductBtn = ({ product }) => {
	const params = {
		saleSkuId: product?.skuList?.[0].skuId,
		quantity: 1,
		recaptchaAction: "ADD_CART",
		recaptchaToken:
			"03AKH6MRE8S-rxvor8iDm3RFPbbWLzySOeuJrzKmPpurBTqyHRcRdZoERgQLwhRzLJvY2uxBhro8Ot80lzxwfAF4_XU3F8QQkYsBWk8EfqDtkfz7czMqF1WCNcsAF6KdA-GIeTfMdCFhG3xE0grKtpzKGOJS-AHeJ_xHFSwmx0GFlvKIne3JH4QVoYdh-OHbq5DQR3IwJhV4APTYLG6B-eTx-gkkZjc7moKJvuUWfVNkdvQCfe3ewD5f-lvAumpQO40eG1bsSu-W9S66WThJ-LVitQ7u4qgHvK_yuVs4jTtVVPpdEVQCIH0qHAH8Bm2R2dSkePqXL2U4uo3VylpMeHvHYT3_tvwdXedXalCgmJj4hdLsGFttGVzkkW7sg_ospziEF2LOT1uCFbPF8z9TSwbrZ4TiqZcSkRRCbHrrnrm7Wybp5u-9vELWQDvjE0sn6W7ZEg7Ow7I-_Oj08UndNnh_u0DAHqt57F0wJZ9TLD7QSo-a2EnU--Ytk2ZXplx1cANE_iFh1TZccp4j8_s0AzO9PdZloaIlIZGrORt2CG0vuvMJ61IgUiO2EWgC_uBUUsupu-syq08tdwlqd1rozYzYMIW4SLl9clB4i7C4MUk0F-i8Xko44K4_h3ICSqXq3FaXxwpT6JQbwRBFtfwNg5IXGpefHioZaaEXR_itKU60LUKgPUtdE9MtqLuoIsu07sTaqh5TRY6CgZzUjKKM0hwMvEFgVq3OmZ3-t6J1mN6GCJ5zrMl5P6RxJf_cDOZJyaTYwCsvmDvbXOOkXqccgZ1-_BpNnUYsR74MRyf2Tigt1ZzISjqYttbsHN3pBDE8LiaTK9WnHMCgs79vHRj5nCsNzYGC7P9eP086zBIzqb7B9cym7beLA-WamIiyFzvIGYOzmdPrcV6fraRUfCadqCrSbyaqNzWwnUvtp-lK5sZHwDzo7SE1FM6YiOS_QoXx2XgbHJThEMwhnno0ZTRaElrCNiyCWI1Cw4W-JLCWP_kBNgm3slViwVGGDohSGLIK3cPEzqisDuKKHmDcYBa3Nr2fWRraxyt4jHnGZxwGO4m5La_DL9LeUaSjb3S6br_XOnHlqW_T_9dvBOoN7mgoGPKfhRcSm9lRDzrIe481g1hmmh79NbaxDCCLFHfVeOPll3A5GsMCJraV3XjW4Q0MqfQWVSGRltT_kcx2pA18IGtHw4bT9LyvAlmG-6h5Ixw27qUY0ab4uFn-IHUTKwI3fZfGywOA0l7CIffQUsirs-C3K376zko9t-cCM8xHcNa6XdZH7G19rF-QVILIxqGjY3EXMvjT9OtdWU5Mk5k_9VsqmS8W_lbmxqmPurY9CULKlh1VUyTwsoSGjp_EZ-kmLA4cVOyNi_EqEGcg",
	}
	const dispatch = useDispatch()
	const handleAddCart = async () => {
		await cartAddCart(params)
		Toast.show({
			icon: "success",
			content: "success",
		})
		dispatch(cartAction.cartCartLen())
	}
	return (
		<Container>
			<div className="btn">Buy Now</div>
			<div className="c"></div>
			<div className="btn" onClick={handleAddCart}>
				Add to cart
			</div>
		</Container>
	)
}

ProductBtn.propTypes = {}

export const Container = styled.div`
	height: 68px;
	background: #ffffff;
	display: flex;
	padding: 12px;
	border-top: 0.5px solid #d1d8dc;
	.btn {
		height: 44px;
		line-height: 44px;
		border: 1px solid #000000;
		flex: 1;
		text-align: center;
		font-weight: 600;
		color: #000000;
		:last-child {
			background: #000000;
			color: #fff;
		}
	}
	.c {
		width: 6px;
	}
`

export default React.memo(ProductBtn)
