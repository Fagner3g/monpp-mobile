import styled, { css } from 'styled-components/native'
import { shade } from 'polished'

interface ContainerProps {
  isFocused?: boolean
  isErrored?: boolean
  type: 'underline' | 'rounded'
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 5px;

    ${props =>
      props.type === 'underline' &&
      css`
        padding: 0 10px;
        margin-bottom: 8px;
        border-bottom-width: 2px;
        border-color: ${() => shade(0.4, props.theme.colors.primary)};
      `}
    ${props =>
      props.type === 'rounded' &&
      css`
        align-items: center;
        padding-left: 30px;
        border-width: 2px;
        border-radius: 50px;
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
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  align-items: center;
`
