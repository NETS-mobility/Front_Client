import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FindPwNavigator,
  FindIdNavigator,
} from './src/navigation/findAuth/findAuth';
import StartNavigator from './src/navigation/start/start';
import LoginNavigator from './src/navigation/login/login';
import SignUpNavigator from './src/navigation/signup/signup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartNavigator" component={StartNavigator} />
        <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
        <Stack.Screen name="SignUpNavigator" component={SignUpNavigator} />
        <Stack.Screen name="FindPwNavigator" component={FindPwNavigator} />
        <Stack.Screen name="FindIdNavigator" component={FindIdNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
