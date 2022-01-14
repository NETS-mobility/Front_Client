import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FindPwNavigator,
  FindIdNavigator,
} from './src/navigation/findAuth/findAuth';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FindPwNavigator" component={FindPwNavigator} />
        <Stack.Screen name="FindIdNavigator" component={FindIdNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
