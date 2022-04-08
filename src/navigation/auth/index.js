import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNavigator from './login';
import SignUpNavigator from './signup';
import FindPWNavigator from './findPW';
import FindIDNavigator from './findID';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginMain" component={LoginNavigator} />
      <Stack.Screen name="SignUp" component={SignUpNavigator} />
      <Stack.Screen name="FindID" component={FindIDNavigator} />
      <Stack.Screen name="FindPW" component={FindPWNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
