import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { InfiniteScroll } from "antd-mobile"
import styled from "styled-components"
import ProductItem from '@/components/core/ProductItem';

function ProductList({ requestConfig }) {
	// 翻页请求参数
	const [params, setParams] = useState({
		pageNum: 1,
		pageSize: 40,
		size: 40,
		sortId: "",
	})
	// 数据请求返回数据
	const [list, setList] = useState([])
	const [cursor, setCursor] = useState(0)
	// 是否还有数据可以加载
	const [load, setLoad] = useState(false)
	const [hasMore, setHasMore] = useState(true)
	// 加载下一页数据
	async function loadMore() {
    if (load) return
    setLoad(true)
		const result = await requestConfig.request({
			...requestConfig.params,
			...params,
		})
		const dataList = result[requestConfig.resultKey]
		setParams({
			...params,
			sortId: result.sortId,
			pageNum: params.pageNum + 1,
		})
    setLoad(false)
		setList([...list, ...dataList])
		setHasMore(dataList.length > 0)
	}
	// 瀑布流数据
  const column1 =  useRef()
  const [p1, setP1] = useState([])
  const column2 =  useRef()
  const [p2, setP2] = useState([])
	useEffect(() => {
    if (cursor >= list.length) return
    const c1 = column1.current
    const c2 = column2.current
    if (c1.clientHeight <= c2.clientHeight + 10) {
      setP1([...p1, list[cursor]])
    }else{
      setP2([...p2, list[cursor]])
    }
    setCursor(cursor+1)
  }, [p1, p2, cursor, list])

  

	return (
		<Container>
      <div className="water-fall__list" >
        <div className="product-list__column" ref={column1}>
          {
          p1.map(el=><ProductItem key={el.productId} productInfo={el}/>)
          }
        </div>
        <div className="c"></div>
        <div className="product-list__column" ref={column2}>
          {
          p2.map(el=><ProductItem key={el.productId} productInfo={el}/>)
          }
        </div>
      </div>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
  .water-fall__list{
	width: 100%;
    display: flex;
    .c{
      width: 8px;
    }
    .product-list__column{
      flex: 1 ;
      display: flex;
      flex-direction: column;
      height: min-content;
    }
  }
`

ProductList.propTypes = {
	requestConfig: PropTypes.object.isRequired,
}

export default ProductList
