import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MypageMain, ChangeInfo} from '../../../screens/mypage';
import Home from '../../../screens/home/home';
import FaqScreen from '../../../screens/mypage/faq/faq';
import ChangePwNavigator from '../changePW/changePW';

const Stack = createNativeStackNavigator();
const MypageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MypageMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MypageMain" component={MypageMain} />
      <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FAQ" component={FaqScreen} />
      <Stack.Screen name="ChangePW" component={ChangePwNavigator} />
    </Stack.Navigator>
  );
};

export default MypageNavigator;
