/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MyStack from './src/navigation/StackNaviagtion';
import {NavigationContainer} from '@react-navigation/native';
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
