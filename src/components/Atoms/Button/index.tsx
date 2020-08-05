import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, ButtonText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
  color?: string
  textColor?: string
  disabled?: boolean
  type?: 'solid' | 'outline' | undefined
  size?: 'full' | 'medium'
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  textColor,
  ...rest
}) => (
  <Container {...rest} disabled={disabled} background={color}>
    <ButtonText color={textColor}>{children}</ButtonText>
  </Container>
)

export default Button
