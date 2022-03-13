import React,{Component} from "react";
//  引入样式:脚手架中引入样式的方式import
import './Hello.css'
// 创建hello组件

export default class Hello extends Component{
    render() {
        // title一会儿设置样式的时候使用
        return <h2 className={"title"}>Hello，ll!</h2>
    }
}