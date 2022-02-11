import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {
  SignUpInputBox,
  SignUpInputBoxWithBtn,
} from '../../components/signup/SignUpInputBox';
import SignUpDetailBtn from '../../components/signup/SignUpDetailBtn';
import {LoginBtn} from '../../components/login/LoginBtn';
import { CheckBox } from '../../components/common/button';

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
    width: '60%'
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
  const [check, setCheck] = useState(false);
  const [isSelected, setSelection] = useState(false);

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
          text={'전체 선택'}
          onPress={() => onClickAll()}
          value={all}
        />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            text={'(필수) 서비스 이용약관 동의'}
            onPress={()=>setR1(!r1)}
            value={r1} />
          <SignUpDetailBtn style={styles.detailbtn} />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            text={'(필수) 개인정보 처리방침 동의'}
            onPress={()=>setR2(!r2)}
            value={r2} />
          <SignUpDetailBtn style={styles.detailbtn} />
        </View>
        <View style={styles.checkboxline}>
          <CheckBox
            text={'(필수) 위치정보 이용 동의'}
            onPress={()=>setR3(!r3)}
            value={r3} />
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
