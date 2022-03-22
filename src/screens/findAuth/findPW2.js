import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {InputBox} from '../../components/findAuth/findAuthComponent';
import FindAuthLayout from '../../components/findAuth/findAuthLayout';
import FindIDAPI from '../../api/auth/findIDAPI';
import FindFail from './findFail';
import ChangePWAPI from '../../api/auth/changePW';

const FindPW2 = ({route, navigation}) => {
  const {phone} = route.params;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState();
  const [dis, setDis] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const getemail = async () => {
    await FindIDAPI({phone: phone}).then(r => {
      setTimeout(() => {
        console.log('this is r: ', r);
        setEmail(r);
      }, 100);
    });
  };

  useEffect(() => {
    if (pw == '') {
      setDis(true);
      setErrMsg('비밀번호는 공백이 아니어야 합니다.');
    } else if (pw != pwConfirm) {
      setDis(true);
      setErrMsg('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
      setDis(false);
      setErrMsg('');
    }
  }, [pw, pwConfirm]);

  useEffect(() => {
    getemail();
  }, []);

  return email == undefined || email == '' ? (
    <FindFail navigation={navigation} />
  ) : (
    <FindAuthLayout
      pageType="pw"
      num={2}
      btnType="next"
      goNext={async () => {
        const res = await ChangePWAPI({id: email, password: pw});
        if (res.success) {
          navigation.navigate('FindPW3');
        } else {
          navigation.navigate('FindFail');
        }
      }}
      goBack={() => navigation.pop()}
      disabled={dis}>
      <Text style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
        변경하실 비밀번호를 입력해주세요.
      </Text>
      <InputBox
        isPass={true}
        placeholder="비밀번호"
        returnKey="next"
        value={pw}
        setVal={setPw}
        styles={styles.pwInput}
      />
      <Text style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
        비밀번호를 다시 한 번 입력해주세요.
      </Text>
      <InputBox
        isPass={true}
        placeholder="비밀번호 확인"
        value={pwConfirm}
        setVal={setPwConfirm}
      />
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textPrimary,
          styles.errMsg,
        ]}>
        {errMsg}
      </Text>
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  pwInput: {
    marginBottom: 40,
  },
  errMsg: {
    textAlign: 'center',
    marginTop: 70,
  },
});

export default FindPW2;
