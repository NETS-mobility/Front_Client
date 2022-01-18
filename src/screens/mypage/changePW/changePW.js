import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import CustomBtn, {btnStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import {InputBox} from '../../../components/findAuth/components';
import FindAuthLayout from '../../../components/findAuth/layout';
import {PhoneValidation} from '../../../utils/validation';

const ChangePW = ({navigation}) => {
  const [tel, setTel] = useState('');
  const [authNum, setAuthNum] = useState();
  return (
    <FindAuthLayout
      pageType="pwChange"
      num={1}
      btnType="next"
      goNext={() => navigation.navigate('ChangePW2')}
      goBack={() => navigation.pop()}>
      <Text
        style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fwBold]}>
        가입 시 기입하신 휴대전화 번호를 입력해주세요.
      </Text>
      <InputBox
        placeholder="휴대전화 번호"
        keyBoard="number-pad"
        returnKey="next"
        value={tel}
        setVal={setTel}
        styles={styles.telInput}
      />
      <CustomBtn
        viewStyleDisabled={[btnStyles.btnDisable, styles.btn]}
        viewStyle={[btnStyles.btnBlue, styles.btn]}
        textStyleDisabled={[
          typoStyles.textWhite,
          typoStyles.fs14,
          typoStyles.fwBold,
        ]}
        textStyle={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fwBold]}
        text={'인증번호 받기'}
        disabled={!PhoneValidation(tel)}
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
  telInput: {
    marginBottom: 6,
  },
});

export default ChangePW;
