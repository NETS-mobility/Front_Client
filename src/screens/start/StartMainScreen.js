import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StartBtn from '../../components/start/StartBtn';

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#19B7CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StartMainScreen = () => {
  return (
    <SafeAreaView style={styles.back}>
      <StartBtn />
    </SafeAreaView>
  );
};

export default StartMainScreen;
