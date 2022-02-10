/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FindPwNavigator,
  FindIdNavigator,
} from './src/navigation/findAuth/findAuth';
import StartNavigator from './src/navigation/start/start';
import LoginNavigator from './src/navigation/login/login';
import SignUpNavigator from './src/navigation/signup/signup';
import ReservationNavigator from './src/navigation/reservation/reservation';
import MypageNavigator from './src/navigation/mypage/mypageMain/mypageMain';
import {StyleSheet, StatusBar} from 'react-native';
import MapView from './src/MapView';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomTab from './src/components/common/bottomTab';

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" />
      <MapView
        appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
        style={styles.map}
        lat={48.577741}
        lng={27.602706}
      /> */}
      <BottomTab />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
});

export default App;
