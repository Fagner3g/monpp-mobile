import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ThemeProvider } from 'styled-components'

import { lightTheme } from '~/styles/themes'

import Button from './index'

storiesOf('Atoms/Button', module)
  .add('Default', () => (
    <ThemeProvider theme={lightTheme}>
      <Button onPress={() => console.log('un-favorited!')}>Enviar</Button>
    </ThemeProvider>
  ))
  .add('Disabled', () => (
    <ThemeProvider theme={lightTheme}>
      <Button enabled={false} onPress={() => console.log('favorited!')}>
        Enviar
      </Button>
    </ThemeProvider>
  ))
