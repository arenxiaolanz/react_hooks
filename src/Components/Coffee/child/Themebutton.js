import React,{useContext} from 'react';
import {ThemeContext} from "../../context";

const Themebutton = ({data}) => {
  const dispatch = useContext(ThemeContext)
  // console.log(value)
  console.log(data)
  return (
    <div>
      <button style={data.dark} onClick={() => {
        dispatch({type:'dark'})
      }}>点我一下</button>
    </div>
  );
};

export default Themebutton;