import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import btnStyles from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';
import {
  SignUpInputBox,
  SignUpInputBoxWithBtn,
} from '../../components/signup/SignUpInputBox';
import SignUpDetailBtn from '../../components/signup/SignUpDetailBtn';
import {LoginBtn} from '../../components/login/LoginBtn';

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  title: {
    alignItems: 'center',
    marginBottom: 27,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 50,
  },

  bigcheckbox: {
    alignItems: 'flex-start',
  },

  checkboxline: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxtopline: {
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 16,
    alignItems: 'center',
  },

  checkboxtext: {
    marginLeft: 20,
    color: 'black',
  },

  detailbtn: {
    alignItems: 'flex-end',
  },

  signupbtn: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [authNum, setAuthNum] = useState('');
  const [check, setCheck] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.backGround}>
      <Text
        style={[
          styles.title,
          typoStyles.fs32,
          typoStyles.textMain,
          typoStyles.fw700,
        ]}>
        회원가입
      </Text>
      <SignUpInputBoxWithBtn
        isPass={false}
        placeHolder={'이메일'}
        Text1={email}
        setText={setEmail}
        navWhere={'Signup'}
        btnName={'중복확인'}
      />
      <SignUpInputBox
        isPass={true}
        placeHolder={'비밀번호'}
        Text={password}
        setText={setPassword}
      />
      <SignUpInputBox
        isPass={true}
        placeHolder={'비밀번호 확인'}
        Text={confirmPassword}
        setText={setConfirmPassword}
      />
      <SignUpInputBox
        isPass={false}
        placeHolder={'이름'}
        Text={name}
        setText={setName}
      />
      <SignUpInputBoxWithBtn
        isPass={false}
        placeHolder={'휴대전화 번호'}
        Text={phone}
        setText={setPhone}
        btnName={'인증번호받기'}
      />
      <SignUpInputBox
        isPass={false}
        placeHolder={'인증번호'}
        Text={authNum}
        setText={setAuthNum}
      />
      <View style={styles.bigcheckbox}>
        <View style={styles.checkboxtopline}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text
            style={[
              styles.checkboxtext,
              typoStyles.fs14,
              typoStyles.fwRegular,
            ]}>
            전체 동의
          </Text>
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text
            style={[
              styles.checkboxtext,
              typoStyles.fs14,
              typoStyles.fwRegular,
            ]}>
            (필수) 서비스 이용약관 동의{' '}
          </Text>
          <SignUpDetailBtn style={styles.detailbtn} />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text
            style={[
              styles.checkboxtext,
              typoStyles.fs14,
              typoStyles.fwRegular,
            ]}>
            (필수) 개인정보 처리방침 동의{' '}
          </Text>
          <SignUpDetailBtn style={styles.detailbtn} />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text
            style={[
              styles.checkboxtext,
              typoStyles.fs14,
              typoStyles.fwRegular,
            ]}>
            (필수) 위치정보 이용 동의{' '}
          </Text>
          <SignUpDetailBtn
            navWhere={() => {
              navigation.push('SignUpDetail');
            }}
            style={styles.detailbtn}
          />
        </View>
      </View>
      <View style={styles.signupbtn}>
        <LoginBtn btnName={'가입하기'} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
