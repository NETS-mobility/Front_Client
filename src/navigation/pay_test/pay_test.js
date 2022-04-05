import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeTest from '../../screens/pay_test/homeTest';
import PaymentTest from '../../screens/pay_test/paymentTest';
import PaymentResultTest from '../../screens/pay_test/paymentResult';
import Payment from '../../screens/pay_test/payment';

const RootStack = createNativeStackNavigator();
const IamportNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          options={{headerShown: false}}
          name="HomeTest"
          component={HomeTest}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="Payment"
          component={Payment}
        />
        <RootStack.Screen
          options={{
            headerTitle: '아임포트 결제 테스트',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#344e81',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff',
            headerBackTitle: ' ',
          }}
          name="PaymentTest"
          component={PaymentTest}
        />
        <RootStack.Screen
          options={{
            headerTitle: '아임포트 결제 결과',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#344e81',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff',
            headerLeft: () => null,
          }}
          name="PaymentResultTest"
          component={PaymentResultTest}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default IamportNavigation;
