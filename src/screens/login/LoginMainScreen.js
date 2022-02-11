import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import NetsLogo from '../../assets/image/logo.svg';
import btnStyles from '../../components/common/button';
import typoStyles from '../../assets/fonts/typography';
import {LoginBtn, SignBtn} from '../../components/login/LoginBtn';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  netImg: {
    marginBottom: 108,
  },

  signBtn: {
    width: 245,
    height: 52,
  },
});
const LoginMainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrap}>
      <NetsLogo width={175} height={70} style={styles.netImg} />
      <LoginBtn
        navWhere={() => {
          ('Login');
        }}
        btnName={'로그인'}
        style={styles.loginBtn}
      />
      <SignBtn
        navWhere={() => {
          navigation.navigate('SignUp');
        }}
        btnName={'회원가입'}
        style={styles.signBtn}
      />
    </SafeAreaView>
  );
};

export default LoginMainScreen;
