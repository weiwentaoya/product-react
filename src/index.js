import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes';
import store, { history } from './store'
import './index.less'
import './static/fonts/iconfont.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}>  */}
    {/* ConnectedRouter传递history对象作为props */}
    <Routes/>
    {/* </ConnectedRouter> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
