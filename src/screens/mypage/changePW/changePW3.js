import React from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import FindAuthLayout from '../../../components/findAuth/findAuthLayout';

const ChangePW3 = ({navigation}) => {
  return (
    <FindAuthLayout
      pageType="pwChange"
      num={2}
      btnType="login"
      goBack={() => navigation.pop()}>
      <Text
        style={[
          typoStyles.textExplain,
          typoStyles.fs15,
          typoStyles.fw700,
          styles.line,
        ]}>
        비밀번호 변경이 완료되었습니다.
      </Text>
      <Text
        style={[typoStyles.textExplainBold, typoStyles.fs15, typoStyles.fw700]}>
        변경된 비밀번호로 로그인 해주세요.
      </Text>
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  line: {
    marginBottom: 30,
  },
});

export default ChangePW3;
