import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import { lightTheme } from '~/theme'
import SignIn from '~/pages/SignIn'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SignIn />
    </ThemeProvider>
  )
}

export default App
