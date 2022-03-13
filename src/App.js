// 组件App
// 组件有两种：类式、函数式
//创建外壳组件APP；这里面包括所有的组件
import React from 'react'
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

// 创建并暴露
export  default class App extends React.Component{
    render() {
        return(
            <div>
                <Hello/>  {/* 组件引用的形式 */}
                <Welcome/>
            </div>
        )
    }
}