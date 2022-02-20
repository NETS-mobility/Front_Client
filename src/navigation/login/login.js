import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginMainScreen, LoginScreen} from '../../screens/login';
import {
  SignUpScreen,
  SignUpDoneScreen,
  SignUpDetailScreen,
} from '../../screens/signup';
import Home from '../../screens/home/home';
import {
  FindID,
  FindID2,
  FindPW,
  FindPW2,
  FindPW3,
} from '../../screens/findAuth';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginMain" component={LoginMainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="FindPW" component={FindPW} />
      <Stack.Screen name="FindPW2" component={FindPW2} />
      <Stack.Screen name="FindPW3" component={FindPW3} />
      <Stack.Screen name="FindID" component={FindID} />
      <Stack.Screen name="FindID2" component={FindID2} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignUpDetail" component={SignUpDetailScreen} />
      <Stack.Screen name="SignUpDone" component={SignUpDoneScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
