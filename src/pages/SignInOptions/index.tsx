import React from 'react'

import Button from '~/components/Atoms/Button'

import BackgroundImg from '~/assets/image/bgRocket.png'
import {
  Background,
  Container,
  SocialContainer,
  Text,
  OrContainer,
  LineOr,
} from './styles'

const SignInOptions: React.FC = () => {
  return (
    <Background source={BackgroundImg}>
      <Container>
        <SocialContainer>
          <Button onPress={() => {}} color="#3B5998" textColor="#FFF">
            Facebook
          </Button>
          <Button onPress={() => {}} color="#DB4437" textColor="#FFF">
            Google+
          </Button>
        </SocialContainer>
        <OrContainer>
          <LineOr />
          <Text>Ou</Text>
          <LineOr />
        </OrContainer>
        <Button onPress={() => {}} color="#FFF">
          Login
        </Button>
      </Container>
    </Background>
  )
}

export default SignInOptions
