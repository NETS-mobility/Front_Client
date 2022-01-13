import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  leftbox: {
    width: 190,
    height: 222,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
    backgroundColor: 'white',
    opacity: 0.8,
  },

  rightbox: {
    width: 190,
    height: 222,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 4,
    backgroundColor: 'white',
    opacity: 0.7,
  },
});

const StartLeftBox = () => {
  return <View style={styles.leftbox} />;
};

const StartRightBox = () => {
  return <View style={styles.rightbox} />;
};

export {StartLeftBox, StartRightBox};
