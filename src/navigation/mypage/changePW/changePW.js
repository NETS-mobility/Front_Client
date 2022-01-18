import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChangePW, ChangePW2, ChangePW3} from '../../../screens/mypage/changePW';

const Stack = createNativeStackNavigator();
const ChangePwNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChangePW"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChangePW" component={ChangePW} />
      <Stack.Screen name="ChangePW2" component={ChangePW2} />
      <Stack.Screen name="ChangePW3" component={ChangePW3} />
    </Stack.Navigator>
  );
};

export default ChangePwNavigator;
