import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const BlueBlock = ({children}) => {
  return (
    <View style={styles.serviceBlock}>
      <View style={styles.shadow}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceBlock: {
    overflow: 'hidden',
    paddingBottom: 10,
  },
  shadow: {
    backgroundColor: '#fff',
    borderTopColor: '#19B7CD',
    borderTopWidth: 2,
    borderBottomColor: '#19B7CD',
    borderBottomWidth: 2,
    paddingVertical: 25,
    paddingHorizontal: 40,
    elevation: 6,
  },
});

export default BlueBlock;
