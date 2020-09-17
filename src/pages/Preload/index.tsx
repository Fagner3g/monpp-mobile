import React from 'react';
import { Text } from 'react-native';

import { Container, LoadingIcon } from './styles';

const Preload: React.FC = () => {
  return (
    <Container>
      <Text>Preload</Text>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};

export default Preload;
