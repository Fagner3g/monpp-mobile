import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import theme from '~/utils/switchTheme'
import SignInOptions from '~/pages/SignInOptions'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SignInOptions />
    </ThemeProvider>
  )
}

export default App
