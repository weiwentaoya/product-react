import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

// import { useSelector } from 'react-redux'
import Layout from '../layout/default'
import { bannerPositionList, homeRecommendTagList } from '../api/activity'
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
  useEffect(() => {
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
        <BestSellers />
        <div className='home-middle__4'>
        <TopBanner banner={homeInfo.homeMiddle41}/>
        <div className='c'></div>
        <TopBanner banner={homeInfo.homeMiddle42}/>
        </div>
        <TopBanner banner={homeInfo.homeMiddle5}/>
        <TagList tagList={tagList} />
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
