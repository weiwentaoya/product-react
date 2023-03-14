import React, { useEffect, useState, useMemo } from 'react'
import Layout from '../layout/default'
import { navigationList } from '../api/product'
import Tabs from '../components/category/Tabs'
import Slidebar from '../components/category/Slidebar'
import styled from 'styled-components';
import CategoryContent from '../components/category/CategoryContent'

const Category = () => {
  // tab
  const [menuId, setMenuId] = useState(0)
  const [menuList, setMenuList] = useState([])

  const getNavigationList = async () => {
    const { menuList } = await navigationList()
    setMenuList(menuList)
    setMenuId(menuList[0].menuId)
  }

  useEffect(()=>{
    getNavigationList()
  }, [])

  const activeMenuList = useMemo(() => {
    const found = menuList.find(el=>el.menuId === menuId)
    return found?.sonMenuList || []
  }, [menuId, menuList])

  const handleSetMenuId = (menuId) => {
    setMenuId(menuId)
    setSlideId(0)
  }
  // 侧边栏
  const [slideId, setSlideId] = useState(0)
  const activeSlide = useMemo(() => {
    return activeMenuList.find(el=>el.menuId === slideId) || activeMenuList[0] || {}
  }, [slideId, activeMenuList])
  const handleSetSlideId = (menuId) => {
    setSlideId(menuId)
  }


  return (
    <Layout>
      <Container>
        <Tabs menuList={menuList} menuId={menuId} change={handleSetMenuId}/>
        <div className="main">
          <Slidebar activeMenuList={activeMenuList} slide={activeSlide}  change={handleSetSlideId}></Slidebar>
          <CategoryContent slide={activeSlide} />
          {/* <div>{activeSlide}</div> */}

        </div>
      </Container>
    </Layout>
  )
}


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    padding-top: 4px;
    flex: 1;
    display: flex;
  }
`;


export default Category
