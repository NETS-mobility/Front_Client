import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    height: 50,
    alignContent: 'space-between',
    marginTop: 10,
  },
  textset: {
    width: '83%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});

const ArrowBtn = ({contents, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles.btnBlue]}>
      <View style={styles.textset}>
        <Text
          style={[typoStyles.fs18, typoStyles.fwBold, typoStyles.textWhite]}>
          {contents}
        </Text>
        <Text
          style={[typoStyles.fs18, typoStyles.fwBold, typoStyles.textWhite]}>
          {'>'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {ArrowBtn};
