// 组件App
// 组件有两种：类式、函数式
//创建外壳组件APP；这里面包括所有的组件
import React from 'react'

// 创建并暴露
export  default class App extends React.Component{
    render() {
        return(
            <div>
               hello, {/* 一般不建议这样写，建议写成组件的形式 */}
            </div>
        )
    }
}