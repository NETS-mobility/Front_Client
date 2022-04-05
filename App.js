import React, {useState, useMemo, createContext, useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomTab from './src/components/common/bottomTab';
import {GetToken} from './src/utils/controlToken';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import axios from 'axios';
import Home_Test from './src/screens/pay_test/homeTest';
import IamportNavigation from './src/navigation/pay_test/pay_test';
// axios.defaults.baseURL = 'http://10.0.2.2:5000';
axios.defaults.baseURL = 'http://35.197.107.190:5000';

export const RefreshContext = createContext({
  refresh: false,
  setRefresh: () => {},
});

const App = () => {
  const [refresh, setRefresh] = useState();
  const value = useMemo(() => ({refresh, setRefresh}), [refresh, setRefresh]);
  const mainR = async () => {
    await GetToken().then(r => setRefresh(r));
  };

  useEffect(() => {
    mainR();
  }, []);

  return (
    <>
      {/* <StatusBar barStyle="dark-content" />
      <MapView
        appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
        style={styles.map}
        lat={48.577741}
        lng={27.602706}
      /> */}
      {/* <RefreshContext.Provider value={value}>
        <BottomTab />
      </RefreshContext.Provider> */}
      <NativeBaseProvider>
        <SafeAreaProvider>
          <IamportNavigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
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
