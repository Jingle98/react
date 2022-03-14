// 这个就是log的图片，图片也可作为一个模块使用
// 创建了App这个组件
import logo from './logo.svg';
import './App.css';

// 用函数定义的组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 利用这句话将组件暴露出去，默认暴露{es6的模块化语法}
export default App;
