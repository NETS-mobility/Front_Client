import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MypageMain } from '../../../screens/mypage/mypageMain';
import { ChangeInfo } from '../../../screens/mypage/mypageMain';

const Stack = createNativeStackNavigator();
const MypageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MypageMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MypageMain" component={MypageMain} />
      <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
    </Stack.Navigator>
  );
};

export default MypageNavigator;
