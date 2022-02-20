import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import NetsLogo from '../../assets/image/logo.svg';
import LoginInputBox from '../../components/login/LoginInputBox';
import {LoginBtn} from '../../components/login/LoginBtn';
import LoginAPI from '../../api/login/login';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  netImg: {
    marginBottom: 72,
  },

  inputBox: {
    marginTop: 57,
  },

  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.wrap}>
      <NetsLogo width={175} height={70} style={styles.netImg} />
      <LoginInputBox placeHolder={'이메일'} Text={email} setText={setEmail} />
      <LoginInputBox
        isPass={true}
        placeHolder={'비밀번호'}
        Text={password}
        setText={setPassword}
      />
      <View style={styles.inputBox}>
        <LoginBtn
          btnName={'로그인'}
          navWhere={() => {
            LoginAPI({id: email, password: password});
            navigation.push('Home');
          }}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('FindID')}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwRegular,
              typoStyles.textExplain,
            ]}>
            아이디 찾기{' '}
          </Text>
        </TouchableNativeFeedback>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fwRegular,
            typoStyles.textExplain,
          ]}>
          |
        </Text>
        <TouchableNativeFeedback onPress={() => navigation.navigate('FindPW')}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwRegular,
              typoStyles.textExplain,
            ]}>
            {' '}
            비밀번호 찾기
          </Text>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
