import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ReservationPay} from '../../screens/service';
import Payment from '../../screens/pay_test/payment';

const Stack = createNativeStackNavigator();

const PaymentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReservationPay"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReservationPay" component={ReservationPay} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
