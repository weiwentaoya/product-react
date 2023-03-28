import { CART_QUANTITY } from '../action-type'
import { cartCartLen } from "../../api/cart"

const cartAction = {
  async cartCartLen() {
    const res = await cartCartLen()
    return {
      type: CART_QUANTITY,
      payload: res
    };
  }
}
export default cartAction