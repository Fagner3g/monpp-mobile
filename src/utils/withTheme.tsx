import React from 'react'
import { boolean, radios } from '@storybook/addon-knobs'
import styled, { ThemeProvider, css } from 'styled-components/native'

import { IStyledTheme, themes } from '~/theme'

const options = {
  theme: {
    Light: 'light',
    Dark: 'dark',
  },
  padding: {
    sim: 's',
    Nao: 'n',
  },
}

const Background = styled.View<{ padding?: boolean }>`
  background-color: ${props => props.theme.colors.background};
  height: 100vh;
  flex: 1;

  ${props =>
    props.padding &&
    css`
      padding: 10px;
    `}
`

export const StorybookHoc: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const color = radios('Theme', options.theme, 'light')
  const theme: IStyledTheme = color === 'dark' ? themes.dark : themes.light

  return (
    <ThemeProvider theme={theme}>
      <Background padding={boolean('Pedding', !!options.padding)}>
        {children}
      </Background>
    </ThemeProvider>
  )
}

export const withTheme = fn => <StorybookHoc>{fn()}</StorybookHoc>
