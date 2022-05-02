import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  faqBlock: {
    width: 310,
    height: 104,
    borderWidth: 2,
    borderColor: '#DAD8E0',
    shadowColor: '#DAD8E0',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: 'black',
  },
  faqBlockContent: {},
});

const FaqBlock = ({type, onPress, content}) => {
  return (
    <TouchableOpacity style={styles.faqBlock} onPress={onPress}>
      <Text style={styles.faqBlockContent}>{content}</Text>
    </TouchableOpacity>
  );
};

export default FaqBlock;
