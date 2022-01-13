import React from 'react';
import StartMainScreen from './src/screens/StartMainScreen';
import StartFirstScreen from './src/screens/StartFirstScreen';
import StartSecondScreen from './src/screens/StartSecondScreen';
import StartThirdScreen from './src/screens/StartThirdScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartThird">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
