import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FindID,
  FindID2,
  FindPW,
  FindPW2,
  FindPW3,
} from '../../screens/findAuth';

const Stack = createNativeStackNavigator();

const FindPwNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FindPW"
      screenOptions={{headerShown: false, tabBarVisible: false}}>
      <Stack.Screen name="FindPW" component={FindPW} />
      <Stack.Screen name="FindPW2" component={FindPW2} />
      <Stack.Screen name="FindPW3" component={FindPW3} />
    </Stack.Navigator>
  );
};

const FindIdNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FindID"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FindID" component={FindID} />
      <Stack.Screen name="FindID2" component={FindID2} />
    </Stack.Navigator>
  );
};

export {FindPwNavigator, FindIdNavigator};
