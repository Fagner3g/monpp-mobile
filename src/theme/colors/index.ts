import { IStyledTheme } from '~/theme'

import { darkTheme } from './dark'
import { lightTheme } from './light'

export * from './dark'
export * from './light'

interface IThemes {
  light: IStyledTheme
  dark: IStyledTheme
}
export const themes: IThemes = {
  light: lightTheme,
  dark: darkTheme,
}
