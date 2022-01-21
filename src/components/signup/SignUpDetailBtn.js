import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import btnStyles from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  detailbtn: {
    width: 32,
    height: 16,
  },
});

const SignUpDetailBtn = ({navWhere}) => {
  return (
    <TouchableNativeFeedback onPress={navWhere}>
      <View style={[btnStyles.btnDisable, styles.detailbtn]}>
        <Text style={[typoStyles.fs10, typoStyles.textWhite, typoStyles.fw700]}>
          보기
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SignUpDetailBtn;
