interface IColors {
  primary: string
  secundary: string

  text: string
  placeholder: string

  danger: string
  warning: string

  border: string

  background: string
}

export interface IStyledTheme {
  colors: IColors
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: IColors
  }
}
