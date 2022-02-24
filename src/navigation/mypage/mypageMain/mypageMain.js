import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MypageMain, ChangeInfo} from '../../../screens/mypage';
import Home from '../../../screens/home/home';

const Stack = createNativeStackNavigator();
const MypageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MypageMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MypageMain" component={MypageMain} />
      <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MypageNavigator;
