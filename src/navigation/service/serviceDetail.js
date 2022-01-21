import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ServiceDetail, ServiceHistory} from '../../screens/service';
import {FindID} from '../../screens/findAuth';

const Stack = createNativeStackNavigator();

const ServiceDetailNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ServiceHistory"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ServiceHistory" component={ServiceHistory} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
    </Stack.Navigator>
  );
};

export default ServiceDetailNavigator;
