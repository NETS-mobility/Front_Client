import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ReservationPay} from '../../screens/service';
import Payment from '../../screens/pay_test/payment';
import PaymentResultTest from '../../screens/pay_test/paymentResult';

const Stack = createNativeStackNavigator();

const PaymentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReservationPay"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReservationPay" component={ReservationPay} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentResultTest" component={PaymentResultTest} />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
