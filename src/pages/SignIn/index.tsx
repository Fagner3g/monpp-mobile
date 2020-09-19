import React from 'react';

import { transparentize } from 'polished';
import { useTheme } from 'styled-components';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  LogoArea,
  LoginArea,
  Button,
  SocialArea,
  SocialText,
  ButtonArea,
  SocialIconsArea,
  CreateAccountText,
} from './styles';

const PreSignIn: React.FC = () => {
  const theme = useTheme();
  const navigatin = useNavigation();

  function handleLogin() {
    alert('Login');
  }

  return (
    <Container>
      <LogoArea>
        <Logo source={require('../../assets/image/nuvem.png')} />
      </LogoArea>

      <LoginArea>
        <ButtonArea>
          <Button
            color={theme.colors.primary}
            onPress={handleLogin}
            text="Smart Id"
            textColor={theme.colors.primary}
            iconLeft="fingerprint"
            iconColor={theme.colors.primary}
          />
        </ButtonArea>

        <SocialArea>
          <SocialText>Use Social Login</SocialText>
        </SocialArea>
      </LoginArea>
    </Container>
  );
};

export default PreSignIn;
