import React, { useRef } from 'react'

import { SubmitHandler, FormHandles } from '@unform/core'
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native'

import Button from '~/components/Atoms/Button'

import { Form, Rocket, Logo, Background, Input } from './styles'

interface FormData {
  username: string
  password: string
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={(Platform.OS === 'ios' && 'padding') || 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={-100}
        >
          <Rocket />
          <Logo />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="username"
              label="Usuário"
              placeholder="Usuário"
              type="rounded"
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Senha"
              type="rounded"
              secureTextEntry
            />
            <Button type="solid" onPress={() => formRef.current?.submitForm()}>
              Enviar
            </Button>
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Background>
  )
}

export default Home
