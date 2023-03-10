import React from 'react'
import Img from '../core/Img'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './Category.less'


export default function Category({category = []}) {
  return (
    category.length>0?
    <div className='shop-category__wrap'>
      <div className='shop-category__title'>
        <h3>Shop by Category</h3>
        {/* <span className="hekka-font hekka-arrow-right" /> */}
      </div>
      <Swiper
        spaceBetween={10}
         slidesPerView = {4}
         grid= {{
          fill: 'row',
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {
          category.map(el=>{
            return <SwiperSlide key={el.id}>
              <div className='category-img'>
                <Img src={el.imgUrl} perch='square'></Img>
              </div>
              <div className='category-title'>
                {el.title}
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
    : ''
  )
}
