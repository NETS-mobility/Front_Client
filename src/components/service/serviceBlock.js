import React from 'react';
import {View, StyleSheet} from 'react-native';
const ServiceBlock = ({children}) => {
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
    borderTopColor: '#737373',
    borderTopWidth: 2,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 40,
    elevation: 13,
  },
});

export default ServiceBlock;
