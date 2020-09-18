import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import 'react-native-gesture-handler';

import Routes from '~/routes';
import { lightTheme } from '~/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
