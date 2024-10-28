import {Component} from 'react'
import './app.less'


class App extends Component<any, any> {


  componentDidMount() {
    console.log("app componentDidMount");
  }

  // 定义全局数据
  taroGlobalData = {
    name: "wuyiccc"
  }

  render() {

    return this.props.children
  }

}

export default App
