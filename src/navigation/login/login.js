import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginMainScreen, LoginScreen} from '../../screens/login';
import {
  SignUpScreen,
  SignUpDoneScreen,
  SignUpDetailScreen,
} from '../../screens/signup';
import Home from '../../screens/home/home';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginMain" component={LoginMainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignUpDetail" component={SignUpDetailScreen} />
      <Stack.Screen name="SignUpDone" component={SignUpDoneScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
