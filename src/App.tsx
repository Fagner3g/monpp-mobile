import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '~/utils/switchTheme'
import SignIn from '~/pages/SignIn'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <SignIn />
  </ThemeProvider>
)

export default App
