import React from 'react';
import StartMainScreen from './src/screens/start/StartMainScreen';
import StartFirstScreen from './src/screens/start/StartFirstScreen';
import StartSecondScreen from './src/screens/start/StartSecondScreen';
import StartThirdScreen from './src/screens/start/StartThirdScreen';
import LoginMainScreen from './src/screens/login/LoginMainScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import SignUpScreen from './src/screens/signup/SignUpScreen';
import SignUpDoneScreen from './src/screens/signup/SignUpDoneScreen';
import SignUpDetailScreen from './src/screens/signup/SignUpDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpDone">
        <Stack.Screen
          options={{headerShown: false}}
          name="Start"
          component={StartMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="StartFirst"
          component={StartFirstScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="StartSecond"
          component={StartSecondScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="StartThird"
          component={StartThirdScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginMain"
          component={LoginMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUpDetail"
          component={SignUpDetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUpDone"
          component={SignUpDoneScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
