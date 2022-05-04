import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Arrow from '../../assets/icon/arrow.svg';

const styles = StyleSheet.create({
  questionBlock: {
    position: 'relative',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#DAD8E0',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: 'black',
  },
  answerBlock: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#DAD8E0',
    backgroundColor: '#F7F6F4',
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: 'black',
  },
  arrow: {
    position: 'absolute',
    top: '65%',
    right: 0,
  },
  arrowReverse: {
    position: 'absolute',
    top: '65%',
    right: 0,
    transform: [{rotate: '180deg'}],
  },
});

const FaqBlock = ({type, onPress, content, clicked}) => {
  return (
    <TouchableOpacity
      style={type == 'q' ? styles.questionBlock : styles.answerBlock}
      onPress={onPress}>
      {type == 'q' && (
        <Arrow
          width={24}
          height={24}
          style={!clicked ? styles.arrow : styles.arrowReverse}
        />
      )}
      <Text>{content}</Text>
    </TouchableOpacity>
  );
};

export default FaqBlock;
