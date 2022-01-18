import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {InputBox} from '../../../components/findAuth/components';
import FindAuthLayout from '../../../components/findAuth/layout';

const ChangePW2 = ({navigation}) => {
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState();
  return (
    <FindAuthLayout
      pageType="pwChange"
      num={2}
      btnType="next"
      goNext={() => navigation.navigate('ChangePW3')}
      goBack={() => navigation.pop()}>
      <Text
        style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fwBold]}>
        변경하실 비밀번호를 입력해주세요.
      </Text>
      <InputBox
        placeholder="휴대전화 번호"
        keyBoard="number-pad"
        returnKey="next"
        value={pw}
        setVal={setPw}
        styles={styles.pwInput}
      />
      <Text
        style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fwBold]}>
        비밀번호를 다시 한 번 입력해주세요.
      </Text>
      <InputBox
        placeholder="발송된 인증번호 입력"
        keyBoard="number-pad"
        value={pwConfirm}
        setVal={setPwConfirm}
      />
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  pwInput: {
    marginBottom: 40,
  },
});

export default ChangePW2;
