import React,{Component} from "react";
import './Welcome.css'
// 创建hello组件
export default class Welcome extends Component{
    render() {
        // 这个样式的名字不能和hello中的title一样
        return <h2 className={"welcome"}>Welcome!</h2>
    }
}