import React, { useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container, LoadingIcon } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        // Validar o token
      } else {
        navigation.reset({ routes: [{ name: 'PreSignIn' }] });
      }
    };

    setTimeout(() => {
      checkToken();
    }, 3000);
  }, []);

  return (
    <Container>
      <Text>Preload</Text>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};

export default Preload;
