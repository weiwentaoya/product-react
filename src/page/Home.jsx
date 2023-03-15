import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

// import { useSelector } from 'react-redux'
import Layout from '../layout/default'
import { bannerPositionList, homeRecommendTagList, hotsalesIndexV2 } from '../api/activity'
import TopBanner from '../components/home/TopBanner'
import Server from '../components/home/Server'
import NewArrivals from '../components/home/NewArrivals'
import Category from '../components/home/Category'
import Sticky from '../components/home/Sticky'
import BestSellers from '../components/home/BestSellers'
import TagList from '../components/home/TagList';

const Home = () => {
  // const state = useSelector(state => state)
  // console.log(state)

  const [tagList, setTagList] = useState([])

  const [homeInfo, setHomeInfo] = useState({})
  const getBannerPositionList = async () => {
    const res = await bannerPositionList(
      { position: 3, platform: 3 }
    )
    setHomeInfo(res)
  }
  const getHomeRecommendTagList = async () => {
    const { tagList } = await homeRecommendTagList(
      { hasTag: true, platform: 3 }
    )
    setTagList(tagList)
  }

  const [hotsales, setHotsales] = useState({})
  
  const getHotsalesIndexV2 = async () => {
    const res = await hotsalesIndexV2({platform: 3})
    setHotsales(res)
  }


  useEffect(() => {
    getHotsalesIndexV2()
    getBannerPositionList()
    getHomeRecommendTagList()
  },[])
  return (
    <Layout>
      <Sticky/>
      <Server/>
      <TopBanner banner={homeInfo.topBannerList}/>
      <NewArrivals/>
      <Category category={homeInfo.mainPositionList} />
      <Container>
        <TopBanner banner={homeInfo.homeMiddle2}/>
        <BestSellers hotsales={hotsales} />
        <div className='home-middle__4'>
        <TopBanner banner={homeInfo.homeMiddle41}/>
        <div className='c'></div>
        <TopBanner banner={homeInfo.homeMiddle42}/>
        </div>
        <TopBanner banner={homeInfo.homeMiddle5}/>
        <TagList tagList={tagList} request={homeRecommendTagList}/>
      </Container>
    </Layout>
  )
}


 const Container = styled.div`
  padding: 0 12px;
  .home-middle__4{
    margin: 8px 0;
    display: flex;
    .c{
      width: 16px;
    }
  }
`;

export default Home
