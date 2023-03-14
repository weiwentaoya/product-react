import React from 'react'
import styled from 'styled-components';

function Slidebar({activeMenuList, slide , change}) {
  
  return (
    <Container>
      {
        activeMenuList.map(menu=>{
          return <span  
            className={slide.menuId===menu.menuId?'active':''} 
            key={menu.menuId}
            onClick={()=>{change(menu.menuId)}}
          >{menu.name}</span>
        })
      }
    </Container>
  )
}


export const Container = styled.div`
  height: 100%;
  width: 112px;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  font-size: 12px;
  font-family: Roboto, Roboto-Medium;
  font-weight: 500;
  text-align: left;
  color: #74788a;
  span{
    word-break: break-all;
    padding: 16px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .active{
    background: #000000;
    color: #fff
  }
`;


export default Slidebar