/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, StatusBar, Modal, Button, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomTab from './src/components/common/bottomTab';
import SignUpNavigator from './src/navigation/signup/signup';
import {SignUpScreen} from './src/screens/signup';
import Postcode from '@actbase/react-daum-postcode';
import axios from 'axios';
axios.defaults.baseURL = 'http://10.0.2.2:5000';
const App = () => {
  const [isModal, setModal] = useState(false);
  return (
    <>
      {/* <StatusBar barStyle="dark-content" />
      <MapView
        appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
        style={styles.map}
        lat={48.577741}
        lng={27.602706}
      /> */}
      {/* <>
        <Modal isVisible={isModal}>
          <Postcode
            style={{width: 320, height: 320}}
            jsOptions={{animation: true, hideMapBtn: true}}
            onSelected={data => {
              alert(JSON.stringify(data));
              setModal(false);
            }}
          />
        </Modal>
        <Button onClick={() => setModal(true)} title={'주소검색'}>
          hi
        </Button>
      </> */}
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
