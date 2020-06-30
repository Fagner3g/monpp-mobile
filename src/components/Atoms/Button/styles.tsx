import styled, { css } from 'styled-components/native'
import { shade } from 'polished'

interface IContainer {
  background?: string
  enabled?: boolean
  medium?: boolean
}

export const Container = styled.TouchableOpacity<IContainer>`
  flex-direction: row;
  height: 60px;
  background: ${props =>
    props.background || shade(0.3, props.theme.colors.primary)};
  border-radius: 30px;
  opacity: ${props => (props.enabled ? 1 : 0.7)};
  justify-content: center;
  align-items: center;

  ${props =>
    props.medium &&
    css`
      width: 45%;
    `}
`

export const ButtonText = styled.Text<{ color?: string }>`
  color: ${props => props.color || props.theme.colors.text};
  font-size: 18px;
`
