import styled, { css } from 'styled-components/native'
import { shade, transparentize } from 'polished'

interface ContainerProps {
  isFocused?: boolean
  isErrored?: boolean
  type: 'underline' | 'rounded' | undefined
}

export const Container = styled.View<ContainerProps>`
  height: 50px;
  flex-direction: row;
  align-items: flex-end;

    ${props =>
      props.type === 'underline' &&
      css`
        padding: 0 10px;
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
        border-color: ${() =>
          transparentize(0.7, props.theme.colors.placeholder)};
        background: ${() => transparentize(0.4, props.theme.colors.primary)};
      `}

    ${props =>
      props.isErrored &&
      css`
        border-color: ${props.theme.colors.danger};
      `}
    ${props =>
      props.isFocused &&
      css`
        border-color: ${() => shade(0.2, props.theme.colors.primary)};
      `};
`

export const TextInput = styled.TextInput<ContainerProps>`
  flex: 1;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  height: 50px;

  ${props =>
    props.type === 'underline' &&
    css`
      padding-top: 28px;
    `}
`
