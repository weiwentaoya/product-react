import React from 'react'
import styled from 'styled-components';
import Img from '../core/Img'
const CategoryContent = ({slide}) => {
  return (
    <Container>
     { slide.sonMenuList?.map(menu=>{
       return <div key={menu.menuId} className="category-list">
        <div className="categoty-title">
          {menu.name}
        </div>
        <div className="son-list">
          {
            menu.sonMenuList.map(son=>{
              return <div key={son.menuId} className="son">
                <div className="pic">
                  <Img src={son.picUrl}/>
                </div>
                <span>{son.name}</span>
              </div>
            })
          }
        </div>
        
       </div>
     })}
    </Container>
  )
}



export const Container = styled.div`
  flex: 1;
  padding: 16px 12px;

  .category-list{
    overflow-y: auto;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 18px;
    margin-bottom: 16px;
    .categoty-title{
      font-size: 12px;
      font-family: Roboto, Roboto-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      padding-bottom: 16px;
    }
    .son-list{
      display: flex;
      flex-wrap: wrap;
      .son{
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .pic{
          width: 64px;
          height: 64px;
          margin-bottom: 6px;
        }
      }
    }
    &:last-child{
      border: none
    }
  }
`;

export default CategoryContent