import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//引入了App组件
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //    <React.StrictMode> 用来检查App组件以及子组件中的写法是否合理
  //  把代码包裹在这个里面就比较好
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 这个的作用是记录性能的，性能检测
reportWebVitals();
