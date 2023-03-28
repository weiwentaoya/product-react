import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartCartLen, cartListV2, cartSkuAddNumV2, cartRemoveSkuV2 } from "../../api/cart"

export const cartSlice = createSlice({
  name: 'user',
  initialState: {
    quantity: -1,
    cartInfo: {}
  },
  reducers: {
    setCartList: (state, action) => {
      state.cartInfo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCartLen.pending, state => {
      // console.log('getCartLen.pending');
    })
      .addCase(getCartLen.fulfilled, (state, action) => {
        // console.log('getCartLen.fulfilled', action);
        state.quantity = action.payload.quantity
      })
      .addCase(getCartLen.rejected, (state) => {
        // console.log('getCartLen.rejected');
      })
  }
})
export const { setCartList }  = cartSlice.actions
export const getCartLen = createAsyncThunk('cart/getCartLen', async () => {
  const res = await cartCartLen()
  return res
})
export const getCartList = ()=>{
  return async (dispatch) => {
    const res = await cartListV2()
    dispatch(setCartList(res))
  }
}
export const cartAddNum = (item,q)=> {
  return async (dispatch) => {
    const res = await cartSkuAddNumV2({
      quantity: q,
      recaptchaAction: "SKU_ADD_NUM",
      recaptchaToken: "03AKH6MRE9vUURFoAKraRdRCWAlKmpha55Ucs0Qr0rdw1eHSJsHiHKjxnJpvMCl5CnoiHBx12C2DVg-rDH7oDcNv8KQMmKrIQ_Jtrul-slkDFvi84-BCQWVuYdGIc0acxph7I_0KlD51o1jpHa2NcTE1t1UnRSYNv5OjVoV_M2qe9pvdxBYOutQfYbeS7i3dIVmwTExNCfQFYpKCTDLfnJcVwFiRmKDMmYX-RUWi8DkfcLG33Ufs64-mG2zgx7JAQDMTgqHCaRrwgM3qASNLtb8NC9VdFmXBJ6ZbN6nCibzRGpXg732KNzdqhOdZ3VCe7RrwzWtxfYszdd3MgtLGyMZLZG3_-ZOVOgUPNwHHp0VivaiW_8ZRHarZRq87kuODZ8HBxnnN1Ye2ULk3Cmw2mIWI0v_zr66cr6StSKW0qpxTC7AA57EuX5nB_aw6DgQ0nPEEY1Dh-UeY-FyualhlsvU7s7f1xoK8MJSvg3ERlA_fnlFQHKSNhpbDiOXot0_Im-Six0oHUgElto1cYyt_AYi4haTybeYv42w0bBWVI5rFHgo_mMKVtY78fKDexGm2TaXXH9hCaiDIQ5BNwYLYcR2rR4rqzWyy_z7GuhSuA0sI9mUaFxYQoflr10rPX3D5rWDBirnc2WkWqgCH4_Bpr-TNJ5sGRK7-70RxErQaN0j6IKNeOsje_uP-c_2TqVW9WHG_S78oby4casE2zYhTanuHwCp39SWNW_fmeKtNf-XHSElgc6Iy72VO2Ubrr9dRXDcvGv-VknycHeUuuFsL83c8hNjtzyU6QzgDpiy9fnC3f1LzInJwT-3MQhhtUShUT2zpkXutzJEzfFyoHNzmLHQrXTClvVU8T5Y9xHEp18Op7KyhluBQ1iJcucsaKkFxic4hxNHedb9bYph8jNq5UizkVfVgQ5qZA7KO8BdrXjdOqs6MuhmMBcC3HH2LL-2QdO6Ti6wdPqcM3_OwGaHKBjT8kJCIBULD_gNESGzB2OWcuDMsnvBTPw54fpZV0R0y4-5-MzjLukAPYdhtL9LQT6IEZOyRWimFIzCOHLOLDmanC03Q6Nu4ZnFd3eEM0jrwTMDZWUTxZyfLvK0sTYWgMZ4gOqIzYXWSgzW9F4Ps_QTZC5PjjpHVqpxE9tv6gHZDh8hlpS8DfC9KlO4LgaCI6__bOJrGdFWYWWqVBObKBzrE1M4a3_PWDN0AROf3qq20jXYMiZlJtdg9fJ-y2dGc380BbeHm4qAUhYCtFfC747rVme98nxeBegnSsXiNVcDQIPtcc1tAJp5qtCzGfq7RCuCTaGz6nXbZwiEdnuceA_AX8cEO4JZQgT4Z4iyLhKCZuw_Op2PGcjpkPxxOmDA_OF5wGDzZ2ZQg_3IxjR60seiG7-T3Wu5XtPcnC-9vZwTVuC5aFOUzDcqnzxWt3gVzk6PZYQ3Ir2sVOPGp6TTSmQK5cCTtk-fvF6sl7ZHSIKbzBpaMLz1cCIFJVQiJg1TmKou1D-RWysew3Ys_xsTR8L7lK-kRhqKgNcKQL83ah3XOa28S1AVG7ybe6YO7hF-_UONPJUOrvBNATR4hqy4WymkSiF-xkVhkBujcRDILgb3G7KMafy-vD499igybrfr3Lfqf8hkRa7gZgcC3c-FTyX51zA3_eYIQqOcNO25ut0TT_2f5rip3qBPkhlp2WqQZGAzDGMhrRJza_E9QgBwDEH3EeWiZ3GuAjxmgQ",
      saleSkuId: item.saleSkuId
    })
    dispatch(setCartList(res))
  }
}
export const cartRemoveSku = (sku)=> {
  return async (dispatch) => {
    const res = await cartRemoveSkuV2({
      saleSkuId: sku
    })
    dispatch(setCartList(res))
  }
}

export default cartSlice.reducer