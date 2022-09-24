import React,{useEffect,useState,useCallback} from 'react';

//自定义一个useWinSize的钩子函数
const useWinSize = () => {
  const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight
  })

  const onResize =useCallback(   () => {
    console.log('ffffffffff');
    setSize({

      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    })
  },[])


  useEffect(() => {
    console.log('resizeresize');
    window.addEventListener('resize',onResize)
    return () => {
      console.log('1111111111resizeresize');
      window.removeEventListener('resize',onResize)
    }
  })

  return size
}

const Zidingyihooks = () => {
  const size = useWinSize()
  return (
    <div>
      当前屏幕的大小为：{size.width} * {size.height}
    </div>
  );
};

export default Zidingyihooks;