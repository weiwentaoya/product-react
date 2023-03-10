import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import Layout from '../layout/default'
import { bannerPositionList } from '../api/activity'
import TopBanner from '../components/main/TopBanner'
import Server from '../components/main/Server'
import NewArrivals from '../components/main/NewArrivals'
import Category from '../components/main/Category'
import Sticky from '../components/main/Sticky'

const Home = () => {
  // const state = useSelector(state => state)
  // console.log(state)

  const [homeInfo, setHomeInfo] = useState({})
  const getList = async () => {
    const res = await bannerPositionList(
      { position: 3, platform: 3 }
    )
    setHomeInfo(res)
  }
  useEffect(() => {
    getList()
  },[])

  return (
    <Layout>
      <Sticky/>
      <Server/>
      <TopBanner banner={homeInfo.topBannerList || []}/>
      <NewArrivals/>
      <Category category={homeInfo.mainPositionList || []} />
    </Layout>
  )
}

export default Home
