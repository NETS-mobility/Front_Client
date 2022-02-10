import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    LoginMainScreen,
    LoginScreen,
} from '../../screens/login';
import {
  SignUpScreen,
} from '../../screens/signup';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginMain" component={LoginMainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
