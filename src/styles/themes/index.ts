// theme.ts
import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secundary: string

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

    placeholder: '#333',

    warning: '#F77F00',
    danger: '#D62828',
  },
}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#333',
    secundary: '#87b899',

    placeholder: '#f5f5f5',

    warning: '#F77F00',
    danger: '#D62828',
  },
}
