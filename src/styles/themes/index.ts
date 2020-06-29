// theme.ts
import { DefaultTheme } from 'styled-components/native'
import { lighten, shade } from 'polished'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secundary: string

      text: string
      placeholder: string

      danger: string
      warning: string

      border: string
    }
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#68D3C4',
    secundary: '#7169b6',

    text: '#5C7266',
    placeholder: lighten(0.4, '#FAFBFA'),

    warning: '#F77F00',
    danger: '#D62828',

    border: lighten(0.6, '#313131'),
  },
}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#333',
    secundary: '#87b899',

    text: '#5C7266',
    placeholder: '#DDD',

    warning: '#F77F00',
    danger: '#D62828',

    border: lighten(0.6, '#313131'),
  },
}
