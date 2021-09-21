import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import Stack from './Stack';

function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <Stack />
    </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

export default Routes;
