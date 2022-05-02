import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import NetsLogo from '../../assets/icon/logo_blue.svg';
import LoginInputBox from '../../components/login/LoginInputBox';
import {LoginBtn} from '../../components/login/LoginBtn';
import LoginAPI from '../../api/login/login';
import typoStyles from '../../assets/fonts/typography';
import {RefreshContext} from '../../../App';

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
  const {refresh, setRefresh} = useContext(RefreshContext);

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
          navWhere={async () => {
            await LoginAPI({id: email, password: password})
              .then(res => {
                if (res == 200) {
                  setRefresh(true);
                  navigation.replace('Home');
                } else {
                  setRefresh(null);
                }
              })
              .catch(err => console.log('err========', err));
          }}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate('FindID')}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwRegular,
              typoStyles.textExplain,
            ]}>
            아이디 찾기
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fwRegular,
            typoStyles.textExplain,
          ]}>
          |
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('FindPW')}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwRegular,
              typoStyles.textExplain,
            ]}>
            비밀번호 찾기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
