import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {InputBox} from '../../../components/findAuth/findAuthComponent';
import FindAuthLayout from '../../../components/findAuth/findAuthLayout';

const ChangePW = ({navigation}) => {
  const [id, setID] = useState('');
  const [tel, setTel] = useState('');
  const [authNum, setAuthNum] = useState();
  return (
    <FindAuthLayout
      pageType="pwChange"
      num={1}
      btnType="next"
      goNext={() => navigation.navigate('ChangePW2')}
      goBack={() => navigation.pop()}>
      <Text style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
        아이디를 입력해주세요.
      </Text>
      <InputBox
        placeholder="아이디"
        returnKey="next"
        value={id}
        setVal={setID}
        styles={styles.idInput}
      />
      <Text style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
        휴대전화 번호를 입력해주세요.
      </Text>
      <InputBox
        placeholder="휴대전화 번호"
        keyBoard="number-pad"
        returnKey="next"
        value={tel}
        setVal={setTel}
        styles={styles.telInput}
      />
      <InputBox
        placeholder="발송된 인증번호 입력"
        keyBoard="number-pad"
        value={authNum}
        setVal={setAuthNum}
      />
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 45,
    marginBottom: 15,
  },
  idInput: {
    marginBottom: 53,
  },
  telInput: {
    marginBottom: 2,
  },
});

export default ChangePW;
