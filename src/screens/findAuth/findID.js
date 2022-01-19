import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import CustomBtn, {btnStyles} from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';
import {InputBox} from '../../components/findAuth/findAuthComponent';
import FindAuthLayout from '../../components/findAuth/findAuthLayout';
import {PhoneValidation} from '../../utils/validation';

const FindID = ({navigation}) => {
  const [tel, setTel] = useState('');
  const [authNum, setAuthNum] = useState();
  return (
    <FindAuthLayout
      pageType="id"
      num={0}
      btnType="next"
      goNext={() => navigation.navigate('FindID2')}
      goBack={() => navigation.pop()}>
      <Text style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
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
        viewStyleDisabled={[btnStyles.btnDisable, styles.getNumBtn]}
        viewStyle={[btnStyles.btnBlue, styles.getNumBtn]}
        textStyleDisabled={[
          typoStyles.textWhite,
          typoStyles.fs14,
          typoStyles.fw700,
        ]}
        textStyle={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fw700]}
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
  getNumBtn: {
    width: '100%',
    height: 45,
    marginBottom: 15,
  },
  telInput: {
    marginBottom: 6,
  },
});

export default FindID;
