import React, { useRef } from 'react'
import { Form } from '@unform/mobile'
import { SubmitHandler, FormHandles } from '@unform/core'

import Button from '~/componentes/Atoms/Button'
import Input from '~/componentes/Atoms/Input'

import { Container } from './styles'

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
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" placeholder="Usuário" />
        <Input name="password" label="Senha" placeholder="Senha" />
        <Button onPress={() => formRef.current?.submitForm()}>Enviar</Button>
      </Form>
    </Container>
  )
}

export default Home
