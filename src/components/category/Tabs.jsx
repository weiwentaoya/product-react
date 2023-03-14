import React from 'react'
import { TabWrap } from './TabsStyle'
export default function Tabs({menuList, menuId, change}) {
  return (
    <TabWrap>
      <div className="list">
        {
          menuList.map( menu => {
            return <span
              className={menuId===menu.menuId?'active':''}
              key={menu.menuId}
              onClick={()=>{change(menu.menuId)}}
            >{menu.name}</span>
          })
        }
      </div>
    </TabWrap>
  )
}
