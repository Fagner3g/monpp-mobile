// theme.ts
import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    primary: string
    secundary: string
  }
}

export const lightTheme: DefaultTheme = {
  primary: '#F5F5F5',
  secundary: '#7169b6',
}

export const darkTheme: DefaultTheme = {
  primary: '#333',
  secundary: '#87b899',
}
