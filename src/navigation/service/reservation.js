import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Reservation01,
  Reservation02,
  Reservation03,
  Reservation04,
  ReservationComplete,
  ReservationMainScreen,
} from '../../screens/service';
import Loading from '../../screens/common/loading';
import PaymentNavigator from './payment';

const Stack = createNativeStackNavigator();

const ReservationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReservationMainScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReservationMainScreen"
        component={ReservationMainScreen}
      />
      <Stack.Screen name="Reservation01" component={Reservation01} />
      <Stack.Screen name="Reservation02" component={Reservation02} />
      <Stack.Screen name="Reservation03" component={Reservation03} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Reservation04" component={Reservation04} />
      <Stack.Screen name="Payment" component={PaymentNavigator} />
      <Stack.Screen
        name="ReservationComplete"
        component={ReservationComplete}
      />
    </Stack.Navigator>
  );
};

export default ReservationNavigator;
