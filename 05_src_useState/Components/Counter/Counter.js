import React , {useState,useEffect}from 'react';

const Counter = (props) => {
  const [count,setCount] = useState(0)
  //惰性state的使用
  const [number,setNumber] = useState(() => {
    if(props.initialState <100){
      return props.initialState +1
    }else {
      return props.initialState +100
    }
  })
  const [name] = useState('renxiaolan')
  const [person,setPerson] = useState({name:'rxl',age:22})
  useEffect(function updateTitle() {
    document.title = name+count
  })
  console.log(props,'更新')
  const handleClick1 = () => {
    //setCount函数式写法
    setCount(() => {
      if(count<3){
        return count+1
      }else{
        return count+3
      }
    })
  }
  const handleClick2 = () => {
    setPerson(() => {
      return {
        ...person,
        name:'ninomiya'
      }
    })
  }
  const handleClick3 = () => {
    setNumber(() => {
      // return number+1
    //  因为number的值改变，所以会重新渲染，会打印出更新
      return number
    //  因为number的值没改变,所以不会重新渲染，不会打印出更新
    })
  }
  return (
    <div>
      <p>hook</p>
      <p>从父组件传过来的props值为{number}</p>
      <p>当前计数值为：{count}</p>
      <p>当前人的信息为:{person.name}--{person.age}</p>
      <button onClick={()=>{setCount(count+1)}}>点我加一</button>
      <br/>
      <button onClick={handleClick1}>点我一下</button>
      <br/>
      <button onClick={handleClick2}>点我变更人的信息</button>
      <br/>
      <button onClick={handleClick3}>点我number+1</button>
    </div>
  );
};

export default Counter;