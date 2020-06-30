import React from 'react'

import Button from '~/components/Atoms/Button'

import BackgroundImg from '~/assets/image/Splash.png'
import {
  Background,
  Container,
  SocialContainer,
  Text,
  OrContainer,
  LineOr,
} from './styles'

const Home: React.FC = () => {
  return (
    <Background source={BackgroundImg}>
      <Container>
        <SocialContainer>
          <Button onPress={() => {}} medium background="#3B5998" color="#FFF">
            Facebook
          </Button>
          <Button onPress={() => {}} medium background="#DB4437" color="#FFF">
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

export default Home
