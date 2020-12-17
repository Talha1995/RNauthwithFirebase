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
import { SafeAreaView } from 'react-native';
const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
