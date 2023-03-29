import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/core/BottomBar'
import NavBar from '../components/core/NavBar'
import NotificationBar from '../components/core/NotificationBar'
import './default.less'
// import './default.scss'


const Layout =  ({ children }) => {
  const navigate = useNavigate()
  const back = () =>navigate(-1)
  const childArray = React.Children.toArray(children);
  const Bottom = childArray?.find(el=>el.props.slot === 'bottom') ||  <BottomBar/>
  const navBar = childArray?.find(el=>el.props.slot === 'navBar') ||  <NavBar onBack={back}>layout</NavBar>
  
  
  return (
    <div className='page-container__wrap'>
      <NotificationBar/>
      {
        navBar
      }
      <div className='page-main__wrap'>
        {childArray.filter(el => !el.props.slot)}
      </div>
      {
        Bottom
      }
    </div>
  )
}

export default Layout
