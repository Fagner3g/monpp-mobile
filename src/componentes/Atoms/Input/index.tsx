import React, { useEffect, useRef, useState } from 'react'
import { TextInputProps, Animated } from 'react-native'
import { useField } from '@unform/core'

import { useTheme } from 'styled-components/native'
import { Container, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon?: string
  label?: string
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<any>(null)
  const { fieldName, registerField, defaultValue = '', error } = useField(name)
  const [isFocused, setIsFocused] = useState(false)
  const animatedIsFocused = new Animated.Value(1)

  const theme = useTheme()

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: undefined,
      getValue(ref) {
        return ref.value
      },
    })

    inputRef.current.value = defaultValue
  }, [fieldName, registerField, defaultValue])

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || inputRef.current.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [animatedIsFocused, isFocused])

  const styles = {
    position: 'absolute',
    left: 0,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [35, 5],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.placeholder, theme.colors.text],
    }),
  }

  return (
    <Container isFocused={isFocused} isErrored={!!error} underline>
      <Animated.Text style={styles}>{label}</Animated.Text>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        selectionColor={theme.colors.primary}
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
