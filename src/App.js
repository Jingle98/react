// 组件App
// 组件有两种：类式、函数式
//创建外壳组件APP；这里面包括所有的组件
import React from 'react'

class App extends React.Component{
    render() {
        return(
            <div>
                hello,
            </div>
        )
    }
}

// 默认暴露
export default App