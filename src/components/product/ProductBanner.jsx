import React from "react"
import { Swiper } from "antd-mobile"
import Img from "../../components/core/Img"
import styled from 'styled-components';

export const Container = styled.div`
  .product-banner{
    padding-left: 6px;
    height: 100vw;
  }
  .custom-indicator{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 8px;
    color: #ffffff;
    border-radius: 30px;
    user-select: none;
  }
`;

const ProductBanner = ({ product }) => {
	return (
		<Container>
			<Swiper
				slideSize={75}
				indicator={(total, current) => (
          <div className="custom-indicator">
            {`${current + 1} / ${total}`}
          </div>
        )}
			>
				{
        product.mainPhotos && product.mainPhotos.map((el, index) => {
            return (
              <Swiper.Item key={el.url}>
                <div className="product-banner" style={index===0 && {padding:0}}>
                  <Img src={el.url} fit="cover"/>
                </div>
              </Swiper.Item>
            )
          })
        }
        {
        product.detailPhotos && product.detailPhotos.map((el) => {
            return (
              <Swiper.Item key={el.url}>
                <div className="product-banner">
                  <Img src={el.url}  fit="cover"/>
                </div>
              </Swiper.Item>
            )
          })
        }
				{/* <ProductItem productInfo={el} /> */}
			</Swiper>
		</Container>
	)
}

ProductBanner.propTypes = {}

export default ProductBanner
