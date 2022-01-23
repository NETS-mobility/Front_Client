import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    ReservationMainScreen,
    Reservation01,
    Reservation02,
    Reservation03
} from '../../screens/reservation';

const Stack = createNativeStackNavigator();

const ReservationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Reservation"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Reservation" component={ReservationMainScreen} />
      <Stack.Screen name="Reservation01" component={Reservation01} />
      <Stack.Screen name="Reservation02" component={Reservation02} />
      <Stack.Screen name="Reservation03" component={Reservation03} />
    </Stack.Navigator>
  );
};

export default ReservationNavigator;
