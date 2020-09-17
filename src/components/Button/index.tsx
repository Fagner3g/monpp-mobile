import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends TouchableOpacityProps {}

const Button: React.FC<Props> = (props) => {
  return (
    <Container {...props}>
      <Text>Login</Text>
    </Container>
  );
};

export default Button;
