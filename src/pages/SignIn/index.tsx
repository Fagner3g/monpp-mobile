import React, { useRef } from 'react'

import { SubmitHandler, FormHandles } from '@unform/core'
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native'

import Button from '~/components/Atoms/Button'

import {
  Form,
  Rocket,
  Logo,
  Background,
  Input,
  ContainerSocial,
  ContainerHelp,
} from './styles'

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
              autoCompleteType="off"
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Senha"
              type="rounded"
              secureTextEntry
            />
            <Button
              type="outline"
              onPress={() => formRef.current?.submitForm()}
            >
              Entrar
            </Button>
            <ContainerSocial>
              <Button
                type="solid"
                size="medium"
                textColor="#FAFAFA"
                color="#3b5998"
              >
                Facebook
              </Button>
              <Button
                type="solid"
                size="medium"
                textColor="#FAFAFA"
                color="#DB4437"
              >
                Google+
              </Button>
            </ContainerSocial>
            <ContainerHelp>
              <Button>Esqueci a senha</Button>
              <Button>Criar conta</Button>
            </ContainerHelp>
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Background>
  )
}

export default Home
