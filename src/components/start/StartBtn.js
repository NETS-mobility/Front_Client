import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    width: 262,
    height: 115,
    borderRadius: 100,
    elevation: 4,
    backgroundColor: 'white',
  },
});

function StartBtn() {
  return <View style={styles.btn} />;
}

export default StartBtn;
