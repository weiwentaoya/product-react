import React, { useEffect, useState } from "react"
import Layout from "../layout/default"
import Container from "./ProductStyled"
import { useLocation } from "react-router-dom"
import { getProductDetail, detailPromotionProductList } from "../api/product"
import ProductBtn from "../components/product/ProductBtn"
import ProductBanner from "../components/product/ProductBanner"
import ProductInfo from "../components/product/ProductInfo"
import ProductList from "../components/core/ProductList"
import ProductOption from "../components/product/ProductOption"

const Product = () => {
	const params = productParams(useLocation())
	
	// console.log(params);
  const [selectSku, setSelectSku] = useState({})
	const [product, setProduct] = useState({})
	const productDetail = async () => {
		const res = await getProductDetail(params)
		setProduct(res)
    setSelectSku(res.skuList[0])
	}
	useEffect(() => {
		productDetail()
	}, [])
  
	return (
		<Layout>
			<ProductBanner product={product}></ProductBanner>
      <ProductInfo  product={product} selectSku={selectSku} />
      <ProductOption  product={product} selectSku={selectSku} />
			<Container>
				<div className="also-like">
          
					<div className="also-like__title">You Might Also Like</div>
					<ProductList
						requestConfig={{
							request: detailPromotionProductList,
							params: {
								spuId: Number(params.spuId),
							},
							resultKey: "list",
						}}
					/>
				</div>
			</Container>
			<ProductBtn slot="bottom" product={product}></ProductBtn>
		</Layout>
	)
}

function productParams(location) {
  let params = {}
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
	params.spuId = paramsArray[0] || 0
	params.skuId = paramsArray[1] || 0
  return params
}
export default Product
