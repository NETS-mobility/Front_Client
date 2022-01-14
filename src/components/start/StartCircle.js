import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  OrangeCircle: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: '#FB7348',
    margin: 5,
  },

  WhiteCircle: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: 'white',
    margin: 5,
  },
});

const StartOrangeCircle = () => {
  return <View style={styles.OrangeCircle} />;
};

const StartWhiteCircle = () => {
  return <View style={styles.WhiteCircle} />;
};

export {StartOrangeCircle, StartWhiteCircle};
