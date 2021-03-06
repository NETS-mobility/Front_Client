import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  loginBtn: {
    width: 245,
    height: 52,
    marginBottom: 16,
  },

  signBtn: {
    width: 245,
    height: 52,
  },
});

const LoginBtn = ({navWhere, btnName}) => {
  return (
    <TouchableOpacity onPress={navWhere}>
      <View style={[btnStyles.btnWhite, styles.loginBtn]}>
        <Text style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fw700]}>
          {btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const SignBtn = ({navWhere, btnName}) => {
  return (
    <TouchableOpacity onPress={navWhere}>
      <View style={[btnStyles.btnBlue, styles.signBtn]}>
        <Text style={[typoStyles.fs20, typoStyles.textWhite, typoStyles.fw700]}>
          {btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {LoginBtn, SignBtn};
