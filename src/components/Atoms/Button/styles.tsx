import styled, { css } from 'styled-components/native'
import { shade } from 'polished'

interface IContainer {
  background?: string
  disabled?: boolean
  type?: 'solid' | 'outline'
  size?: 'full' | 'medium'
}

export const Container = styled.TouchableOpacity<IContainer>`
  flex-direction: row;
  height: 50px;

  border-radius: 30px;
  opacity: ${props => (!props.disabled ? 1 : 0.7)};
  justify-content: center;
  align-items: center;

  ${props =>
    props.type === 'solid' &&
    css`
      background: ${() =>
        props.background || shade(0.3, props.theme.colors.primary)};
    `}

  ${props =>
    props.type === 'outline' &&
    css`
      border-width: 2px;
      border-color: ${() =>
        props.background || shade(0.3, props.theme.colors.primary)};
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      width: 45%;
    `}
`

export const ButtonText = styled.Text<{ color?: string }>`
  color: ${props => props.color || props.theme.colors.text};
  font-size: 18px;
`
