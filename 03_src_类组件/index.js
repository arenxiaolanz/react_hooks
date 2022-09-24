import  ReactDOM from 'react-dom/client'
/*****
 *
 * 组件
 *  - React中组件有两种创建方式
 *  - 函数式组件
 *    - 函数组件就是一个返回JSX的普通函数
 *    - 组件的首字母必须大写
 *  - 类组件
 *    - 必须要继承
 */
import App from './App'
const root = ReactDOM.createRoot(document.querySelector("#root"))
//react组件可以直接通过JSX渲染
root.render(<App></App>)
