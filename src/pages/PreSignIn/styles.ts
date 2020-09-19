import styled from 'styled-components/native';
import ButtonBase from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const LogoArea = styled.View`
  flex: 1;
  width: 100%;
`;

export const LoginArea = styled.View`
  flex: 1;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
`;

export const Button = styled(ButtonBase)`
  margin: 10px;
`;
export const SocialArea = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const SocialText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const SocialIconsArea = styled.TouchableOpacity`
  flex-direction: row;
  margin: 20px;
  padding: 10px;
`;

export const CreateAccountText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.QuicksandRegular};
`;
