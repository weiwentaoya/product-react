import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import { Provider } from 'react-redux'
import LoginComponent from '../components/core/LoginComponent'
import store from '../store-rtk'
// 定义一个全局的容器元素
const containerElement = document.createElement('div');
document.body.appendChild(containerElement);
let root
function close() {
  if (root) {
    root.unmount();
    root = null
  }

}
const Login = {
  open: () => {
    if (!root) {
      root = ReactDOM.createRoot(containerElement);
    }
    root.render(
      createPortal(
        <Provider store={store}>
          <LoginComponent afterClose={close} />
        </Provider>
      , containerElement)
    );
  },
  close
}

export default Login