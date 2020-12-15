// App.js

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../container/login';
import Signup from '../container/signup';
import Dashboard from '../container/dashboard';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({title: 'Login'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({title: 'Dashboard'}, {headerLeft: null})}
      />
    </Stack.Navigator>
  );
}


