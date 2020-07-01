import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import { lightTheme } from '~/theme'
import SignInOptions from '~/pages/SignInOptions'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
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
