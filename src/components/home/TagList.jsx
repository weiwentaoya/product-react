import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import ProductList from '../core/ProductList';

const TagList = ({ tagList, request }) => {
  const [activeTag, setActiveTag] = useState(0)
  useEffect(() => {
    setActiveTag(tagList[0]?.tagId || 0)
  }, [tagList])

  
  return (
    <Container>
      <div className="tag-list">
        {
          tagList.map(el => {
            return <div
              key={el.tagId}
              className={`tag ${el.tagId === activeTag ? 'active' : ''}`}
              onClick={() => { setActiveTag(el.tagId) }}
            >{el.title || el.tagName}</div>
          })
        }
      </div>
      <div className="product-list">
        {
          activeTag?
          <ProductList
            requestConfig={{
              request,
              params: {
                hasTag: false,
                isFirstTag: true,
                pageNum: 1,
                pageSize: 40,
                size : 40,
                sortId : "",
                sortId3c : "",
                tagId : activeTag
              },
              resultKey: 'spuInfoList'
            }}
          />
          :''
        }
      </div>
    </Container>
  )
}

TagList.propTypes = {
  tagList: PropTypes.array.isRequired,
  request: PropTypes.func.isRequired
}
TagList.defaultProps = {
  tagList: [],
}

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .tag-list{
    display: inline-flex;
    height: 50px;
    align-items: center;
    .tag{
      white-space: nowrap;
      font-size: 14px;
      font-family: Montserrat, Montserrat-Semibold;
      font-weight: 600;
      text-align: left;
      color: #74788a;
      padding: 0 4px
    }
    .active{
      color: #000;
    }
  }
`;

export default TagList