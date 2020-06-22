import React, { useEffect, useRef, useState } from 'react'
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'

import { Container, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon?: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<any>(null)
  const { fieldName, registerField, defaultValue = '', error } = useField(name)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(value) {
        inputRef.current.value = value
      },
      clearValue() {
        inputRef.current.value = ''
        inputRef.current.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <Container isFocused={isFocused} isErrored={!!error} underline>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={value => {
          inputRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default Input
