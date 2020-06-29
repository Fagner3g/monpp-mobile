import React, { useRef } from 'react'

import { SubmitHandler, FormHandles } from '@unform/core'
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native'

import Button from '~/componentes/Atoms/Button'
import Input from '~/componentes/Atoms/Input'

import BackgroundImg from '~/assets/image/Splash.png'
import { Container, Form } from './styles'

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
    <Container source={BackgroundImg}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' && 'padding'}
          style={{ flex: 1 }}
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="username" label="Usuário" placeholder="Usuário" />
            <Input name="password" label="Senha" placeholder="Senha" />
            <Button onPress={() => formRef.current?.submitForm()}>
              Enviar
            </Button>
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default Home
