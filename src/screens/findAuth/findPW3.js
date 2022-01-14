import React from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import FindAuthLayout from '../../components/findAuth/layout';

const FindPW3 = ({navigation}) => {
  return (
    <FindAuthLayout
      pageType="pw"
      num={2}
      btnType="login"
      goBack={() => navigation.pop()}>
      <Text
        style={[
          typoStyles.textExplain,
          typoStyles.fs15,
          typoStyles.fwBold,
          styles.line,
        ]}>
        비밀번호 변경이 완료되었습니다.
      </Text>
      <Text
        style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fwBold]}>
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

export default FindPW3;