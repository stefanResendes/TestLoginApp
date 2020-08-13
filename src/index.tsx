/* import { createAppContainer } from 'react-navigation'; */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard
} from './screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
        />
        <Stack.Screen name = "Login" component = {LoginScreen}/>
        <Stack.Screen name = "Register" component = {RegisterScreen}/>
        <Stack.Screen name = "Forgot" component = {ForgotPasswordScreen}/>
        <Stack.Screen name = "Dashboard" component = {Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
