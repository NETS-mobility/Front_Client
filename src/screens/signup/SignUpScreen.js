import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {
  SignUpInputBox,
  SignUpInputBoxWithBtn,
} from '../../components/signup/SignUpInputBox';
import SignUpDetailBtn from '../../components/signup/SignUpDetailBtn';
import {LoginBtn} from '../../components/login/LoginBtn';
import {CheckBox} from '../../components/common/button';
import SignUpAPI from '../../api/signup/signup';
import LoginAPI from '../../api/login/login';
import CheckPhoneAPI from '../../api/signup/checkPhone';
import CheckDupAPI from '../../api/signup/checkDup';
import {EmailValidation, PhoneValidation} from '../../utils/validation';

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
    width: '60%',
  },

  checkboxline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
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
  const [success, setSuccess] = useState(0);
  const [res, setRes] = useState(0);
  const [error, setError] = useState('');

  const [all, setAll] = useState(false);
  const [r1, setR1] = useState(false);
  const [r2, setR2] = useState(false);
  const [r3, setR3] = useState(false);

  const Checksignup = async () => {
    // if (
    //   email === '' ||
    //   password === '' ||
    //   confirmPassword === '' ||
    //   name === '' ||
    //   phone === '' ||
    //   authNum === ''
    // ) {
    //   setError('빈칸을 모두 채워주세요.');
    // } else
    if (!EmailValidation(email)) {
      setError('이메일 형식을 확인해주세요.');
    } else if (success == 0) {
      setError('이메일 중복 확인을 진행해주세요.');
    } else if (success == 1) {
      setError('이미 가입된 이메일입니다.');
    } else if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
    } else if (!PhoneValidation(phone)) {
      setError('휴대전화 번호를 010-0000-0000 형식으로 입력해주세요.');
    } //else if (res == 0) {
    //   setError('휴대전화 인증을 진행해주세요.');
    // }
    else if (authNum != res) {
      console.log('authNum: ', authNum);
      console.log('res', res);
      setError('인증번호가 일치하지 않습니다.');
      // setRes(0);
    } else if (!all) {
      setError('약관에 동의해주세요');
    } else {
      setError('');

      //       console.log(
      // SignUpAPI({
      //         id: email,
      //         password: password,
      //         name: name,
      //         phone: phone,
      //       }),
      //       );

      const res = await SignUpAPI({
        id: email,
        password: password,
        name: name,
        phone: phone,
      });

      if (res == 200) {
        navigation.push('SignUpDone', {name: name, id: email, phone: phone});
      }
    }
  };

  useEffect(() => {
    if (success == 1) {
      setSuccess(0);
    }
  }, [email]);

  useEffect(() => {
    if (r1 && r2 && r3) {
      setAll(true);
    } else if (!(r1 && r2 && r3)) {
      setAll(false);
    }
  }, [r1, r2, r3]);

  const onClickAll = () => {
    setR1(!all);
    setR2(!all);
    setR3(!all);
    setAll(!all);
  };

  const [all, setAll] = useState(false);
  const [r1, setR1] = useState(false);
  const [r2, setR2] = useState(false);
  const [r3, setR3] = useState(false);

  useEffect(() => {
    if (r1 && r2 && r3) {
      setAll(true);
    } else if (!(r1 && r2 && r3)) {
      setAll(false);
    }
  }, [r1, r2, r3]);

  const onClickAll = () => {
    if(all){
      setR1(false);
      setR2(false);
      setR3(false);
    }
    else{
      setR1(true);
      setR2(true);
      setR3(true);
    }
    setAll(!all);
  };

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
        text={email}
        setText={setEmail}
        onPress={() => {
          setSuccess(1);
          CheckDupAPI(email, setSuccess);
        }}
        btnName={'중복확인'}
      />
      <SignUpInputBox
        isPass={true}
        placeHolder={'비밀번호'}
        text={password}
        setText={setPassword}
      />
      <SignUpInputBox
        isPass={true}
        placeHolder={'비밀번호 확인'}
        text={confirmPassword}
        setText={setConfirmPassword}
      />
      <SignUpInputBox
        isPass={false}
        placeHolder={'이름'}
        text={name}
        setText={setName}
      />
      <SignUpInputBoxWithBtn
        isPass={false}
        placeHolder={'휴대전화'}
        text={phone}
        setText={setPhone}
        onPress={() => {
          CheckPhoneAPI({phone: phone}, setRes);
        }}
        btnName={'인증번호받기'}
      />
      <SignUpInputBox
        isPass={false}
        placeHolder={'인증번호'}
        text={authNum}
        setText={setAuthNum}
      />
      <View style={styles.bigcheckbox}>
        <View style={styles.checkboxtopline}>
          <CheckBox
            text={'전체 선택'}
            onPress={() => onClickAll()}
            value={all}
          />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            text={'(필수) 서비스 이용약관 동의'}
            onPress={() => setR1(!r1)}
            value={r1}
          />
          <SignUpDetailBtn style={styles.detailbtn} />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            text={'(필수) 개인정보 처리방침 동의'}
            onPress={() => setR2(!r2)}
            value={r2}
          />
          <SignUpDetailBtn style={styles.detailbtn} />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            text={'(필수) 위치정보 이용 동의'}
            onPress={() => setR3(!r3)}
            value={r3}
          />
          <SignUpDetailBtn
            navWhere={() => {
              navigation.push('SignUpDetail');
            }}
            style={styles.detailbtn}
          />
        </View>
      </View>

      <Text
        style={[typoStyles.fs12, typoStyles.fwRegular, typoStyles.textPrimary]}>
        {error}
      </Text>

      <View style={styles.signupbtn}>
        <LoginBtn
          btnName={'가입하기'}
          navWhere={() =>
            // SignUpAPI({id: email, password: password, name: name, phone: phone})
            Checksignup()
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
