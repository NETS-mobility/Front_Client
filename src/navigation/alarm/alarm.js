import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlarmScreen from '../../screens/alarm/alarmScreen';

const Stack = createNativeStackNavigator();

const AlarmNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Alarm"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Alarm" component={AlarmScreen} />
    </Stack.Navigator>
  );
};

export default AlarmNavigator;
