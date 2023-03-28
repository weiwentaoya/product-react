import { NOTIFY_BANNER } from '../action-type'
import { homeCommonInfo } from "../../api/activity"

const notifyAction = {
  async homeCommonInfo() {
    const { topBar } = await homeCommonInfo()
    return {
      type: NOTIFY_BANNER,
      payload: topBar
    };
  }
}
export default notifyAction