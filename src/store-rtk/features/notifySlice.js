import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { homeCommonInfo } from "../../api/activity"

export const getHomeInfo = createAsyncThunk('notify/homeInfo', async ()=>{
  const { topBar } = await homeCommonInfo()
  return topBar
})


export const notifySlice = createSlice({
  name:'notify',
  initialState: {
    imgUrl: '',
    linkUrl: null
  },
  extraReducers: (builder)=>{
    builder.addCase(getHomeInfo.pending, (state)=>{
      
    })
    .addCase(getHomeInfo.fulfilled, (state, { payload })=>{
      state = {...payload}
      return state
    })
    .addCase(getHomeInfo.rejected, (state)=>{
      
    })
  }
})
export default notifySlice.reducer