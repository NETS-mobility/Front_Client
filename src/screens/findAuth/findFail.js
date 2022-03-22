import React from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import FindAuthLayout from '../../components/findAuth/findAuthLayout';

const FindFail = ({navigation}) => {
  return (
    <FindAuthLayout
      pageType="id"
      num={0}
      btnType="sign"
      goNext={() => navigation.navigate('SignUp')}
      goBack={() => navigation.pop()}>
      <Text
        style={[
          typoStyles.textExplain,
          typoStyles.fs15,
          typoStyles.fw700,
          styles.oneLine,
        ]}>
        가입되지 않은 사용자입니다.
      </Text>
      <Text style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
        회원가입을 진행해주세요.
      </Text>
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  oneLine: {marginBottom: 20},
});

export default FindFail;
