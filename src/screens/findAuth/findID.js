import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import CustomBtn, {btnStyles} from '../../components/common/button';
import typoStyles from '../../assets/fonts/typography';
import {InputBox} from '../../components/findAuth/findAuthComponent';
import FindAuthLayout from '../../components/findAuth/findAuthLayout';
import {PhoneValidation} from '../../utils/validation';
import CheckPhoneAPI from '../../api/signup/checkPhone';

const FindID = ({navigation}) => {
  const [tel, setTel] = useState('');
  const [authNum, setAuthNum] = useState('');
  const [res, setRes] = useState(0);
  const [isnext, setNext] = useState(0);
  const [dis, setDis] = useState(true);

  useEffect(() => {
    if (!PhoneValidation(tel)) {
      setDis(true);
    } else if (res == 0) {
      //=======================여기 바꿔야 함
      //res==0 -> res!=0
      if (authNum == res) {
        console.log('인증번호 일치!!');
        setNext(1);
        setDis(false);
      } else {
        console.log('인증번호 다름!!');
        setNext(2);
        setDis(true);
      }
    } else {
      setDis(false);
    }
  }, [tel, res, authNum]);

  return (
    <FindAuthLayout
      pageType="id"
      num={0}
      btnType="next"
      goNext={() => isnext == 1 && navigation.navigate('FindID2', {phone: tel})}
      goBack={() => navigation.pop()}
      disabled={isnext != 1 || dis == true}>
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
        onPress={async () => {
          await CheckPhoneAPI({phone: tel}, setRes);
        }}
      />
      <InputBox
        placeholder="발송된 인증번호 입력"
        keyBoard="number-pad"
        value={authNum}
        setVal={setAuthNum}
      />
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textPrimary,
          styles.errMsg,
        ]}>
        {!PhoneValidation(tel)
          ? '형식을 010(02)-0000-0000또는 02-000-0000입니다.'
          : isnext == 2
          ? '인증번호를 올바르게 입력해주세요.'
          : ''}
      </Text>
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
  errMsg: {
    textAlign: 'center',
    marginTop: 70,
  },
});

export default FindID;
