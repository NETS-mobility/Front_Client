import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import typoStyles from './typography';
const CustomBtn = ({
  viewStyle,
  textStyle,
  viewStyleDisabled,
  textStyleDisabled,
  text,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} disabled={disabled}>
      <View style={disabled ? viewStyleDisabled : viewStyle}>
        <Text style={disabled ? textStyleDisabled : textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const RadioButton = ({text, onPress, value}) => {
  const styles = StyleSheet.create({
    radioBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 9,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioBtn}>
      <View
        style={[
          {
            height: 15,
            width: 15,
            borderRadius: 7.5,
            borderWidth: 2,
            borderColor: '#DAD8E0',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 9,
          },
        ]}>
        {value ? (
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 4,
              backgroundColor: '#DAD8E0',
            }}
          />
        ) : null}
      </View>
      <Text
        style={[typoStyles.fs14, typoStyles.fwRegular, typoStyles.textExplain]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const CheckBox = ({text, onPress, value, styles}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        styles,
      ]}
      onPress={onPress}>
      <View
        style={{
          height: 18,
          width: 18,
          borderRadius: 9,
          borderWidth: 2,
          borderColor: '#19B7CD',
          marginRight: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {value ? (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#19B7CD',
            }}
          />
        ) : null}
      </View>
      <Text
        style={[typoStyles.fs14, typoStyles.fwRegular, typoStyles.textExplain]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const shadowStyles = StyleSheet.create({
  shadow: {
    elevation: 6,
  },
});

export const btnStyles = StyleSheet.create({
  btnDisable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dad8e0',
    borderWidth: 0,
    borderRadius: 30,
  },
  btnWhite: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#19b7cd',
    borderRadius: 30,
  },
  btnBlue: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19b7cd',
    borderWidth: 0,
    borderRadius: 30,
  },
});

export default CustomBtn;
