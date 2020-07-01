import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, ButtonText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
  background?: string
  color?: string
  disabled?: boolean
  type?: 'default' | 'solid' | 'outline'
  size?: 'full' | 'medium'
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  background,
  color,
  ...rest
}) => (
  <Container {...rest} disabled={disabled} background={background}>
    <ButtonText color={color || background}>{children}</ButtonText>
  </Container>
)

export default Button
