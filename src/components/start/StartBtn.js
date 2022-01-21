import React from 'react';
import {View, StyleSheet, LogBox} from 'react-native';
import NetsLogo from '../../assets/image/logo.svg';

const styles = StyleSheet.create({
  btn: {
    width: 262,
    height: 115,
    borderRadius: 100,
    elevation: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
});

function StartBtn() {
  return (
  <View style={styles.btn}>
    <NetsLogo width={175} height={70} />
  </View>
  );
}

export default StartBtn;
