import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Layout from '../layout/default'

import { bannerPositionList, recommendCommonTagList, hotsalesIndex } from '../api/activity'
import Sticky from '../components/home/Sticky'
import Server from '../components/home/Server'
import TopBanner from '../components/home/TopBanner'
import Category from '../components/home/Category'
import BestSellers from '../components/home/BestSellers'
import TagList from '../components/home/TagList';


export default function Electronic() {

  const [homeInfo, setHomeInfo] = useState({})
  const getBannerPositionList = async () => {
    const res = await bannerPositionList(
      { position: 2, platform: 3 }
    )
    setHomeInfo(res)
  }

  const [hotsales, setHotsales] = useState({})
  
  const getHotsalesIndex = async () => {
    const res = await hotsalesIndex({productBaseType: 2})
    setHotsales({fashionList: res.categoryList})
  }

  const [tagList, setTagList] = useState([])
  const getRecommendCommonTagList = async () => {
    const { tagList } = await recommendCommonTagList(
      { hasTag: true, platform: 3, position: 2 }
    )
    setTagList(tagList)

  }
  useEffect(() => {
    getBannerPositionList()
    getHotsalesIndex()
    getRecommendCommonTagList()
  },[])

  return (
    <Layout>
      <Sticky/>
      <Server/>
      <TopBanner banner={homeInfo.topBannerList}/>
      <Category category={homeInfo.mainPositionList} />
      <Container>
        <BestSellers hotsales={hotsales}/>
        <TagList tagList={tagList} request={recommendCommonTagList} />

      </Container>
    </Layout>
  )
}

const Container = styled.div`
padding: 0 12px;
`;
