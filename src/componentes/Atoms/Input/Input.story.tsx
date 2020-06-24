import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ThemeProvider } from 'styled-components'
import { Form } from '@unform/mobile'

import { lightTheme } from '~/styles/themes'
import Input from '.'

/**
 * inputs without icons
 */
storiesOf('Atoms/Input', module)
  .add('Default', () => (
    <ThemeProvider theme={lightTheme}>
      <Form onSubmit={e => e}>
        <Input name="username" label="UserName" icon="mail" />
      </Form>
    </ThemeProvider>
  ))
  .add('Error', () => (
    <ThemeProvider theme={lightTheme}>
      <Input name="username" icon="mail" />
    </ThemeProvider>
  ))

/**
 * Icon inputs
 */
storiesOf('Atoms/Input/Icon', module)
  .add('Default', () => (
    <ThemeProvider theme={lightTheme}>
      <Input name="username" icon="mail" />
    </ThemeProvider>
  ))
  .add('Error', () => (
    <ThemeProvider theme={lightTheme}>
      <Input name="username" icon="mail" />
    </ThemeProvider>
  ))
