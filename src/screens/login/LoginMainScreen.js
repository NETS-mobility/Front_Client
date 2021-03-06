import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import NetsLogo from '../../assets/icon/logo_blue.svg';
import {LoginBtn, SignBtn} from '../../components/login/LoginBtn';

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
          navigation.navigate('Login');
        }}
        btnName={'로그인'}
        style={styles.loginBtn}
      />
      <SignBtn
        navWhere={() => {
          navigation.push('SignUp');
        }}
        btnName={'회원가입'}
        style={styles.signBtn}
      />
    </SafeAreaView>
  );
};

export default LoginMainScreen;
