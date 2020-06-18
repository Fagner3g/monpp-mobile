import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Container, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
  isErrored?: boolean
}

const Input: React.FC<InputProps> = ({ isErrored }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container underline isErrored={isErrored} isFocused={isFocused}>
      <TextInput
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </Container>
  )
}

export default Input
