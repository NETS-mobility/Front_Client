import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    SignUpScreen,
    SignUpDetailScreen,
    SignUpDoneScreen
} from '../../screens/signup';

const Stack = createNativeStackNavigator();

const SignUpNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignUpDetail" component={SignUpDetailScreen} />
      <Stack.Screen name="SignUpDone" component={SignUpDoneScreen} />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
