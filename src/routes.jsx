import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './page/Home'
import Fashion from './page/Fashion'
import Electronics from './page/Electronics'
import Me from './page/Me'
import Category from './page/Category'
import Cart from './page/Cart'

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/me' element={<Me />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
