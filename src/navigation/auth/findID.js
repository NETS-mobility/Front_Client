import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FindID, FindID2, FindFail} from '../../screens/findAuth';

const Stack = createNativeStackNavigator();

const FindIDNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FindID"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FindID" component={FindID} />
      <Stack.Screen name="FindID2" component={FindID2} />
      <Stack.Screen name="FindFail" component={FindFail} />
    </Stack.Navigator>
  );
};

export default FindIDNavigator;
