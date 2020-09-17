import React from 'react';
import { Text } from 'react-native';

import Button from '~/components/Button';

import { Container, Logo, LogoArea, InputArea } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <Logo source={require('../../assets/image/logo.png')} />
      </LogoArea>

      <InputArea>
        <Button onPress={() => {}} />
      </InputArea>
    </Container>
  );
};

export default SignIn;
