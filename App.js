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
import {StyleSheet, StatusBar} from 'react-native';
import MapView from './src/MapView';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomTab from './src/components/common/bottomTab';
import SignUpNavigator from './src/navigation/signup/signup';
import {SignUpScreen} from './src/screens/signup';
import axios from 'axios';
axios.defaults.baseURL = 'http://10.0.2.2:5000';
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
      {/* <SignUpNavigator /> */}
      {/* <SignUpScreen /> */}
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
