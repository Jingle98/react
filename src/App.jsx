// step2：写App
import React, {Component} from 'react';
import Header from "./components/Header";
import './App.css'
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
    // 在render前面初始化状态
    state = {todos:[
            {id:'001',name:'事件1',done:'true'},
            {id:'002',name:'事件2',done:'true'},
            {id:'003',name:'事件3',done:'false'},
            {id:'004',name:'事件4',done:'true'},
        ]
    }
    render() {
        // 把状态取出来
        const {todos}=this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header/>
                        {/*把拿到的状态传递给List*/}
                        <List todos={todos}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;