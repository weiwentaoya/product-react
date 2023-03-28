import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
  },
  reducers: {
    setUserInfo: (state, action) => {
      const userInfo = JSON.stringify(action.payload)
      Cookies.set('__hk_u_info', userInfo)
      state.userProfileInfo = userInfo
    },
    setUserToken: (state, action) => {
      Cookies.set('__hk_token', action.payload)
      state.token = action.payload
    },
    setRefreshToken: (state, action) => {
      Cookies.set('__hk_refreshToken', action.payload)
      state.refreshToken = action.payload
    }
  }
})
export const { setRefreshToken, setUserInfo, setUserToken} = userSlice.actions
export default userSlice.reducer