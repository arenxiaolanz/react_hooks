import React from 'react'

export const themes = {
  light:{
    color:'red',
    background:'green'
  },
  dark:{
    color:'yellow',
    background: 'red'
  }
}

export const ThemeContext = React.createContext(themes )