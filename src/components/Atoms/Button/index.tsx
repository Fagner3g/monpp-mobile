import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Container, ButtonText } from './styles'

interface ButtonProps extends TouchableOpacity {
  children: string
  background?: string
  color?: string
  medium?: boolean
  enabled?: boolean
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
