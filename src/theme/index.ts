import * as styledComponents from 'styled-components/native'
import { IStyledTheme } from '~/theme'

export * from './colors'
export * from './type'

const { default: styled, css, ThemeProvider, useTheme } =
  // @ts-ignore
  styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
    IStyledTheme
  >

export { css, ThemeProvider, useTheme }
export default styled
