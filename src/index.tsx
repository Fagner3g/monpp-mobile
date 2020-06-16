import React from 'react'
import { ThemeProvider } from 'styled-components'

import Home from '~/pages/Home'

import { lightTheme, darkTheme } from './styles/themes'

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <Home />
  </ThemeProvider>
)

export default App
