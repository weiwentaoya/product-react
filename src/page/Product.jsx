import React, { useEffect, useState } from "react"
import Layout from "../layout/default"
import Container from "./ProductStyled"
import { useLocation } from "react-router-dom"
import { getProductDetail, detailPromotionProductList } from "../api/product"
import ProductBtn from "../components/product/ProductBtn"
import ProductBanner from "../components/product/ProductBanner"
import ProductList from '../components/core/ProductList';

const Product = () => {
	const productParams = {
		spuId: 0,
		skuId: 0,
	}
	const location = useLocation()
	let pathStr = location.pathname
	if (pathStr.endsWith(".html")) {
		pathStr = pathStr.replace(".html", "")
	}
	const regP = /-p-/
	const regK = /-k-/
	const pkStrIndex = pathStr.lastIndexOf("-p-")
	pathStr = pathStr.substr(pkStrIndex)
	const _paramsStr = pathStr.split(regP)
	const paramsStr = _paramsStr[_paramsStr.length - 1]
	const paramsArray = paramsStr.split(regK)
	productParams.spuId = paramsArray[0] || 0
	productParams.skuId = paramsArray[1] || 0
	// console.log(productParams);

	const [product, setProduct] = useState({})
	const productDetail = async () => {
		const res = await getProductDetail(productParams)
		setProduct(res)
	}
	useEffect(() => {
		productDetail()
	}, [])
	return (
		<Layout>
			<ProductBanner product={product}></ProductBanner>
			<Container>
        <div className="also-like">
          <div className="also-like__title">You Might Also Like</div>
          <ProductList
            requestConfig={{
              request: detailPromotionProductList,
              params: {
                spuId: Number(productParams.spuId),
              },
              resultKey: 'list'
            }}
          />
        </div>
      </Container>
			<ProductBtn slot="bottom" product={product}></ProductBtn>
		</Layout>
	)
}

export default Product
