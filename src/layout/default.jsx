import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import cartAction from '../store/actions/cart.action';
import BottomBar from '../components/core/BottomBar'
import NavBar from '../components/core/NavBar'
import NotificationBar from '../components/core/NotificationBar'
import './default.less'
// import './default.scss'


const Layout =  ({ children }) => {

  const childArray = React.Children.toArray(children);
  const Bottom = childArray?.find(el=>el.props.slot === 'bottom') ||  <BottomBar/>
  const navigate = useNavigate()
  const back = () =>navigate(-1)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(cartAction.cartCartLen())
  },[])
  return (
    <div className='page-container__wrap'>
      <NotificationBar/>
      <NavBar onBack={back}>layout</NavBar>
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
