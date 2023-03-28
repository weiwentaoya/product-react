import { configureStore } from "@reduxjs/toolkit";

// import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import userReducer from './features/userSlice'
import cartReducer from './features/cartSlice'
import notifyReducer from './features/notifySlice'
const reducer = {
  reducer: {
    user: userReducer,
    cart: cartReducer,
    notify: notifyReducer
  },
  // 使用中间件「如果我们不指定任何中间件，则默认集成了reduxThunk；但是一但设置，会整体替换默认值，需要手动指定thunk中间件！」
  middleware: [
    // reduxLogger,
    reduxThunk,
    reduxPromise
  ]
}

export default configureStore(reducer)