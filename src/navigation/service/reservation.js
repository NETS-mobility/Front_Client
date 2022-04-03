import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/home';
import {
  Reservation01,
  Reservation02,
  Reservation03,
  Reservation04,
  ReservationPay,
  ReservationComplete,
  ReservationMainScreen,
} from '../../screens/service';
import {LoginMainScreen, LoginScreen} from '../../screens/login';
import Loading from '../../screens/common/loading';

const Stack = createNativeStackNavigator();

const ReservationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ReservationMainScreen"
        component={ReservationMainScreen}
      />
      <Stack.Screen name="LoginMain" component={LoginMainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Reservation01" component={Reservation01} />
      <Stack.Screen name="Reservation02" component={Reservation02} />
      <Stack.Screen name="Reservation03" component={Reservation03} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Reservation04" component={Reservation04} />
      <Stack.Screen name="ReservationPay" component={ReservationPay} />
      <Stack.Screen
        name="ReservationComplete"
        component={ReservationComplete}
      />
    </Stack.Navigator>
  );
};

export default ReservationNavigator;
