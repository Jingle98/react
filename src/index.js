// step1：写index文件
// 引入react
import React from "react";
// 引入dom
import ReactDom from 'react-dom'
// 引入组件
import App from './App'

// 渲染组件
ReactDom.render(<App/>,document.getElementById('root'))