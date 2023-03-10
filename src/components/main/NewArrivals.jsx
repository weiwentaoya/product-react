import React, { useState, useEffect } from 'react'
import { newUserZoneList } from '@/api/activity'
import './NewArrivals.less'
import Img from '@/components/core/Img';
import ProductItem from '@/components/core/ProductItem';

export default function NewArrivals() {
  const [newUserZone, setNewUserZone] = useState({})
  const getNewUserZoneList = async() => {
    const res = await newUserZoneList({
      hasZoneInfo: true,
      platform: 3
    })
    setNewUserZone(res)
  }
  useEffect(()=>{
    getNewUserZoneList()
  },[])
  return (
    newUserZone && newUserZone.spuInfoList && newUserZone.spuInfoList.length ?
    <div className='new-arrivals__wrap'>
      <div className="new-arrivals__title">
        <h3>New Arrivals</h3>
        <span className="hekka-font hekka-arrow-right" />
      </div>
      <div className="new-arrivals__banner">
        <Img src={newUserZone.imgUrl} perch='strip' />
      </div>
      <div className="new-arrivals__product">
        <div className="product-list">
          {
            newUserZone.spuInfoList.map(el=>{
            return <div className='product-item' key={el.productId}>
              <ProductItem productInfo={el} />
            </div>
            })
          }
        </div>
        
      </div>
    </div>
    : ''
  )
}
