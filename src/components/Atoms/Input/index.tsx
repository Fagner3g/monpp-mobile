import React, { useEffect, useRef, useState } from 'react'
import { TextInputProps, Animated } from 'react-native'
import { useField } from '@unform/core'

import { useTheme } from 'styled-components/native'
import { Container, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon?: string
  label?: string
  type?: 'underline' | 'rounded' | undefined
  isErrored?: boolean
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  placeholder,
  isErrored,
  style,
  ...rest
}) => {
  const inputRef = useRef<any>(null)
  const { fieldName, registerField, defaultValue = '', error } = useField(name)
  const [isFocused, setIsFocused] = useState(false)
  const [animatedIsFocused] = useState(new Animated.Value(1))

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
      outputRange: [23, 5],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: !isErrored
        ? [theme.colors.placeholder, theme.colors.text]
        : [theme.colors.danger, theme.colors.danger],
    }),
  }

  return (
    <Container
      isFocused={isFocused}
      isErrored={!!error || isErrored}
      type={type}
      style={style}
    >
      {type === 'underline' && (
        <Animated.Text style={styles}>{label}</Animated.Text>
      )}
      <TextInput
        type={type}
        ref={inputRef}
        defaultValue={defaultValue}
        selectionColor={theme.colors.secundary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={type !== 'underline' ? placeholder : ''}
        onChangeText={value => {
          inputRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default Input
