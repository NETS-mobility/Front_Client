import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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

export const btnStyles = StyleSheet.create({
  btnDisable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dad8e0',
    border: 0,
    borderRadius: 30,
  },
  btnWhite: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#19b7cd',
    borderRadius: 30,
  },
  btnBlue: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19b7cd',
    border: 0,
    borderRadius: 30,
  },
});

export default CustomBtn;
