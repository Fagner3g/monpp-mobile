import React from 'react'
import { ThemeProvider } from 'styled-components'

import Dashboard from '~/pages/Dashboard'
import theme from '~/utils/switchTheme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Dashboard />
  </ThemeProvider>
)

export default App
