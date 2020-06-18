import React from 'react'

import Button from '~/componentes/Atoms/Button'
import Input from '~/componentes/Atoms/Input'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Input name="username" icon="mail" />
      <Button>Enviar</Button>
    </Container>
  )
}

export default Home
