import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
  background?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  enabled = true,
  background,
  ...rest
}) => (
  <Container {...rest} enabled={enabled} background={background}>
    <ButtonText>{children}</ButtonText>
  </Container>
)

export default Button
