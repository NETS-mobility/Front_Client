import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReservationNavigator from '../service/reservation';
import ServiceDetailNavigator from '../service/serviceDetail';
import AuthNavigator from '../auth';
import Home from '../../screens/home/home';
import AdditionalPayNavigator from '../service/additionalPayment';
import StartNavigator from '../start/start';
import PaymentNavigator from '../service/payment';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ReservationMainScreen"
        component={ReservationNavigator}
      />
      <Stack.Screen name="AdditionalPay" component={AdditionalPayNavigator} />
      <Stack.Screen name="Payment" component={PaymentNavigator} />
      <Stack.Screen name="ServiceHistory" component={ServiceDetailNavigator} />
      <Stack.Screen name="LoginMain" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
