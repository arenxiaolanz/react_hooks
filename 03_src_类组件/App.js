import React from 'react'
/*
*  类组件必须要继承React.Component
*   类组件中必须要添加一个render（）函数，且方法的返回值要是一个jsx
*   相较于函数组件，类组件的编写要麻烦一点，但是两者的功能是一样的
* */
class App extends React.Component{
  render() {
    return <div>我是一个类组件</div>
  }
}

//导出App
export default App