import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import btnStyles from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  input: {
    width: 252,
    height: 52,
    borderBottomWidth: 2,
  },
});

const LoginInputBox = ({isPass, placeHolder, Text, setText}) => {
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
        value={Text}
        onChangeText={setText}
      />
    </View>
  );
};

export default LoginInputBox;
