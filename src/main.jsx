import React from 'react'
import ReactDOM from 'react-dom/client'

import  theme  from './styles/theme'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import { MyContext } from './myContext'

import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  < >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{ name: 'Igor Xavier',  email: 'igor@email.com' }}>
        <Routes /> 
      </MyContext.Provider>
    </ThemeProvider>
  </>,
)
