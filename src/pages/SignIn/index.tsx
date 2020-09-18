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

const SignIn: React.FC = () => {
  const theme = useTheme();
  const navigatin = useNavigation();

  function handleLogin() {
    alert('Botão a ser desenvolvido');
  }

  function handleSocialLogin() {
    alert('Login Social com facebook');
  }

  return (
    <Container>
      <LogoArea>
        <Logo source={require('../../assets/image/logo.png')} />
      </LogoArea>

      <LoginArea>
        <ButtonArea>
          <Button
            color={transparentize('0.8', theme.colors.primary)}
            onPress={handleLogin}
            text="Smart Id"
            textColor={theme.colors.primary}
            iconLeft="fingerprint"
            iconColor={theme.colors.primary}
          />
          <Button
            onPress={handleLogin}
            text="Login"
            iconRight="login"
            iconColor="#FFF"
          />
        </ButtonArea>

        <SocialArea>
          <SocialText>Use Social Login</SocialText>

          <SocialIconsArea onPress={handleSocialLogin}>
            <IconMaterial name="facebook" size={40} color="#4267B2" />
          </SocialIconsArea>

          <CreateAccountText onPress={() => navigatin.navigate('SignUp')}>
            Abrir uma Conta
          </CreateAccountText>
        </SocialArea>
      </LoginArea>
    </Container>
  );
};

export default SignIn;
