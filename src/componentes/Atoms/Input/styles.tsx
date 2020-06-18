import styled, { css } from 'styled-components/native'
import { shade } from 'polished'

interface ContainerProps {
  isFocused?: boolean
  isErrored?: boolean
  underline?: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: flex-end;

    ${props =>
      props.underline &&
      css`
        padding: 0 10px;
        margin-bottom: 8px;
        border-bottom-width: 2px;
        border-color: ${() => shade(0.4, props.theme.colors.primary)};
      `}
    ${props =>
      props.isErrored &&
      css`
        border-color: ${props.theme.colors.danger};
      `}
    ${props =>
      props.isFocused &&
      css`
        border-color: ${() => shade(0.8, props.theme.colors.primary)};
      `};
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.placeholder};
  font-size: 18px;
  padding: 20px 0 1px 0;
`
