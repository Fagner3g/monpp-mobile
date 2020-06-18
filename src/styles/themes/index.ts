// theme.ts
import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secundary: string
      placeholder: string
      danger: string
    }
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#F5F5F5',
    secundary: '#7169b6',
    placeholder: '#333',
    danger: 'red',
  },
}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#333',
    secundary: '#87b899',
    placeholder: '#f5f5f5',
    danger: 'red',
  },
}
