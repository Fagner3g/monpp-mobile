import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
  background?: string
  color?: string
  medium?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  enabled = true,
  background,
  medium,
  color,
  ...rest
}) => (
  <Container
    {...rest}
    enabled={enabled}
    background={background}
    medium={medium}
  >
    <ButtonText color={color}>{children}</ButtonText>
  </Container>
)

export default Button
