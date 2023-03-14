import styled from 'styled-components';
export const TabWrap = styled.div`
  /* display: flex; */
  overflow-x: auto;
  .list{
    /* width: auto; */
    display: flex;
    align-items: center;
    height: 44px;
    span{
      font-size: 14px;
      color: #74788a;
      margin: 0 12px;
      font-weight: 600;
      height: 26px;
      line-height: 26px;
      white-space: nowrap;
    }
    .active{
      font-size: 14px;
      font-family: Roboto, Roboto-Medium;
      font-weight: 500;
      text-align: left;
      position: relative;
      color: #000000;
      &::after{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 36px;
        height: 2px;
        background: #000000;
        content: '';
      }
    }
  }
`