import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FindPW, FindPW2, FindPW3, FindFail} from '../../screens/findAuth';

const Stack = createNativeStackNavigator();
const FindPWNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FindPW"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FindPW" component={FindPW} />
      <Stack.Screen name="FindPW2" component={FindPW2} />
      <Stack.Screen name="FindPW3" component={FindPW3} />
      <Stack.Screen name="FindFail" component={FindFail} />
    </Stack.Navigator>
  );
};

export default FindPWNavigator;
