import React ,{useReducer}from 'react';
import Toolbar from "./child/Toolbar";
import {themes,ThemeContext} from '../context'

const Coffee = () => {
  const reducer = (state,action) => {
    if(action.type == 'dark'){
      return {
        ...state,
        dark:{
          color:'red',
          background:'white'
        }
      }
    }
  }
  const [state,dispatch] = useReducer(reducer,themes)
  return (
    <ThemeContext.Provider value={dispatch}>
      <Toolbar data={state}></Toolbar>
    </ThemeContext.Provider>
  );
};

export default Coffee;