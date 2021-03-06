import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {
  SignUpInputBox,
  SignUpInputBoxWithBtn,
} from '../../components/signup/SignUpInputBox';
import SignUpDetailBtn from '../../components/signup/SignUpDetailBtn';
import {LoginBtn} from '../../components/login/LoginBtn';
import {CheckBox} from '../../components/common/button';
import SignUpAPI from '../../api/signup/signup';
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
    paddingTop: 50,
    paddingBottom: 80,
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
    //   setError('????????? ?????? ???????????????.');
    // } else
    if (!EmailValidation(email)) {
      setError('????????? ????????? ??????????????????.');
    } else if (success == 0) {
      setError('????????? ?????? ????????? ??????????????????.');
    } else if (success == 1) {
      setError('?????? ????????? ??????????????????.');
    } else if (password !== confirmPassword) {
      setError('??????????????? ???????????? ????????????.');
    } else if (!PhoneValidation(phone)) {
      setError('???????????? ????????? 010-0000-0000 ???????????? ??????????????????.');
    } //else if (res == 0) {
    //   setError('???????????? ????????? ??????????????????.');
    // }
    // else if (authNum != res) {
    //   console.log('authNum: ', authNum);
    //   console.log('res', res);
    //   setError('??????????????? ???????????? ????????????.');
    //   // setRes(0);
    // }
    else if (!all) {
      setError('????????? ??????????????????');
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
        navigation.replace('SignUpDone', {name: name, id: email, phone: phone});
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

  return (
    <ScrollView>
      <SafeAreaView style={styles.backGround}>
        <Text
          style={[
            styles.title,
            typoStyles.fs32,
            typoStyles.textMain,
            typoStyles.fw700,
          ]}>
          ????????????
        </Text>
        <SignUpInputBoxWithBtn
          isPass={false}
          placeHolder={'?????????'}
          text={email}
          setText={setEmail}
          onPress={() => {
            setSuccess(1);
            CheckDupAPI(email, setSuccess);
          }}
          btnName={'????????????'}
        />
        <SignUpInputBox
          isPass={true}
          placeHolder={'????????????'}
          text={password}
          setText={setPassword}
        />
        <SignUpInputBox
          isPass={true}
          placeHolder={'???????????? ??????'}
          text={confirmPassword}
          setText={setConfirmPassword}
        />
        <SignUpInputBox
          isPass={false}
          placeHolder={'??????'}
          text={name}
          setText={setName}
        />
        <SignUpInputBoxWithBtn
          isPass={false}
          placeHolder={'????????????'}
          text={phone}
          setText={setPhone}
          onPress={() => {
            CheckPhoneAPI({phone: phone}, setRes);
          }}
          btnName={'??????????????????'}
        />
        <SignUpInputBox
          isPass={false}
          placeHolder={'????????????'}
          text={authNum}
          setText={setAuthNum}
        />
        <View style={styles.bigcheckbox}>
          <View style={styles.checkboxtopline}>
            <CheckBox
              text={'?????? ??????'}
              onPress={() => onClickAll()}
              value={all}
            />
          </View>
          <View style={styles.checkboxline}>
            <CheckBox
              text={'(??????) ????????? ???????????? ??????'}
              onPress={() => setR1(!r1)}
              value={r1}
            />
            <SignUpDetailBtn
              navWhere={() => {
                navigation.push('SignUpDetail');
              }}
              style={styles.detailbtn}
            />
          </View>
          <View style={styles.checkboxline}>
            <CheckBox
              text={'(??????) ???????????? ???????????? ??????'}
              onPress={() => setR2(!r2)}
              value={r2}
            />
            <SignUpDetailBtn
              navWhere={() => {
                navigation.push('SignUpDetail');
              }}
              style={styles.detailbtn}
            />
          </View>
          <View style={styles.checkboxline}>
            <CheckBox
              text={'(??????) ???????????? ?????? ??????'}
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
          style={[
            typoStyles.fs12,
            typoStyles.fwRegular,
            typoStyles.textPrimary,
          ]}>
          {error}
        </Text>

        <View style={styles.signupbtn}>
          <LoginBtn btnName={'????????????'} navWhere={() => Checksignup()} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUpScreen;
