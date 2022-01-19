import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Reservation04, ReservationComplete} from '../../screens/service';

const Stack = createNativeStackNavigator();

const ReservationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Reservation04"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Reservation04" component={Reservation04} />
      <Stack.Screen
        name="ReservationComplete"
        component={ReservationComplete}
      />
    </Stack.Navigator>
  );
};

export {ReservationNavigator};
