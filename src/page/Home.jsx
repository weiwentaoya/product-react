import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../layout/default'
import { bannerPositionList } from '../api/activity'

const Home = () => {
  const state = useSelector(state => state)
  console.log(state)
  const getList = async () => {
    console.log(bannerPositionList);
    const res = await bannerPositionList(
      { position: 3, platform: 3 }
    )
    console.log(res)
  }
  useEffect(() => {
    getList()
  })
  return (
    <Layout>
      <p>Home{JSON.stringify(state)}</p>
    </Layout>
  )
}

export default Home
