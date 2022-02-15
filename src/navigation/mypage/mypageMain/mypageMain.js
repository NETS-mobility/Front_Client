import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MypageMain, ChangeInfo} from '../../../screens/mypage';

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
