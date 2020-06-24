import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Form } from '@unform/mobile'

import { lightTheme } from '~/styles/themes'

interface IProps {
  children: React.ReactNode
}

export const BoxStorybook: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Form onSubmit={e => e} style={{ margin: 20 }}>
        {children}
      </Form>
    </ThemeProvider>
  )
}
