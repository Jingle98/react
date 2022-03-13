import React,{Component} from "react";
import './index.css'
// 创建hello组件
export default class Index extends Component{
    render() {
        // 这个样式的名字不能和hello中的title一样
        return <h2 className={"welcome"}>Welcome!</h2>
    }
}