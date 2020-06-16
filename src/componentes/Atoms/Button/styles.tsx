import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface IContainer {
  readonly background?: string
  readonly enabled: boolean
}

export const Container = styled(RectButton)<IContainer>`
  width: 100%;
  height: 60px;
  background: ${props => props.background || '#798888'};
  border-radius: 10px;
  opacity: ${props => (props.enabled ? 1 : 0.7)};

  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
`
