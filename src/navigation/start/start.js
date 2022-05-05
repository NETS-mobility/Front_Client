import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StartFirstScreen,
  StartSecondScreen,
  StartThirdScreen,
} from '../../screens/start';

const Stack = createNativeStackNavigator();

const StartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartFirst"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartFirst" component={StartFirstScreen} />
      <Stack.Screen name="StartSecond" component={StartSecondScreen} />
      <Stack.Screen name="StartThird" component={StartThirdScreen} />
    </Stack.Navigator>
  );
};

export default StartNavigator;
