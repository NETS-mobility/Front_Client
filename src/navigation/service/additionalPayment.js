import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdditionalPay, AdditionalPayComplete} from '../../screens/service';
import Payment from '../../screens/pay_test/payment';
import PaymentResultTest from '../../screens/pay_test/paymentResult';

const Stack = createNativeStackNavigator();

const AdditionalPayNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdditionalPay"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AdditionalPay" component={AdditionalPay} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen
        name="AdditionalPayComplete"
        component={PaymentResultTest}
      />
    </Stack.Navigator>
  );
};

export default AdditionalPayNavigator;
