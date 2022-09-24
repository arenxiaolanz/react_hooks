import ReactDOM from 'react-dom/client'
//引入样式
import './index.css'

const App = <div className="logs">
  {/*日志项*/}
  <div className="item">
  {/*  日期的容器*/}
    <div className="date">
      <div className="month">四月</div>
      <div className="day">19</div>
    </div>
  {/*  日志内容*/}
    <div className="content">
      <h2 className="desc">学习react</h2>
      <div className="time">40分钟</div>
    </div>
  </div>
  <div className="item">
    {/*  日期的容器*/}
    <div className="date">
      <div className="month">四月</div>
      <div className="day">19</div>
    </div>
    {/*  日志内容*/}
    <div className="content">
      <h2 className="desc">学习react</h2>
      <div className="time">40分钟</div>
    </div>
  </div>

</div>

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(App)