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
    }
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#11B5E4',
    secundary: '#7169b6',

    text: shade(0.6, '#11B5E4'),
    placeholder: lighten(0.4, '#313131'),

    warning: '#F77F00',
    danger: '#D62828',
  },
}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#333',
    secundary: '#87b899',

    text: '#313131',
    placeholder: '#DDD',

    warning: '#F77F00',
    danger: '#D62828',
  },
}
