import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Arrow from '../../assets/icon/arrow.svg';

const styles = StyleSheet.create({
  clauseBlock: {
    position: 'relative',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#DAD8E0',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: 'black',
  },
  arrow: {
    position: 'absolute',
    top: '65%',
    right: 0,
    transform: [{rotate: '270deg'}],
  },
});

const ClauseBlock = ({onPress, content, id}) => {
  return (
    <TouchableOpacity style={styles.clauseBlock} onPress={onPress}>
      <Arrow width={24} height={24} style={styles.arrow} />
      <Text>{content}</Text>
    </TouchableOpacity>
  );
};

export default ClauseBlock;
