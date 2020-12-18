// App.js

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Intro from '../container/intro'
import Login from '../container/login';
import Signup from '../container/signup';
import Dashboard from '../container/dashboard';
import SignupExtraInfo from '../container/SignupExtraInfo'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    
    <Stack.Navigator
      initialRouteName="Intro"
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
        name="Intro"
        component={Intro}
        options={({title: 'Intro'},{headerShown:false})}
      />
         <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'},{headerShown:false}}
      />
           <Stack.Screen
        name="SignupExtraInfo"
        component={SignupExtraInfo}
        options={{title: 'Signup'},{headerShown:false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({title: 'Login'}, {headerShown:false})}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({title: 'Dashboard'}, {headerShown:false})}
      />
    </Stack.Navigator>
  );
}


