import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  input: {
    width: 245,
    height: 56,
    borderBottomWidth: 2,
    color: '#000',
  },

  inputwithbtn: {
    width: 160,
    height: 56,
    borderBottomWidth: 2,
    color: '#000',
  },

  signbtn: {
    width: 87,
    height: 36,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },

  outside: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

const SignUpInputBoxWithBtn = ({
  isPass,
  placeHolder,
  text,
  setText,
  onPress,
  btnName,
}) => {
  const [isfocused, setFocus] = useState(false);

  return (
    <View style={styles.outside}>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isPass}
        style={[
          styles.inputwithbtn,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={placeHolder}
        placeholderTextColor={'#DAD8E0'}
        autoCapitalize="none"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={onPress}>
        <View
          style={
            isfocused
              ? [styles.signbtn, btnStyles.btnBlue]
              : [styles.signbtn, btnStyles.btnDisable]
          }>
          <Text
            style={[typoStyles.fs14, typoStyles.textWhite, typoStyles.fw700]}>
            {btnName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SignUpInputBox = ({isPass, placeHolder, text, setText}) => {
  const [isfocused, setFocus] = useState(false);

  return (
    <View>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isPass}
        style={[
          styles.input,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={placeHolder}
        placeholderTextColor={'#DAD8E0'}
        autoCapitalize="none"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export {SignUpInputBox, SignUpInputBoxWithBtn};
