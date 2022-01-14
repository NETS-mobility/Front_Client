import React from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import FindAuthLayout from '../../components/findAuth/layout';

const FindID2 = ({navigation}) => {
  return (
    <FindAuthLayout
      pageType="id"
      num={0}
      btnType="next"
      goBack={() => navigation.pop()}>
      <Text
        style={[
          typoStyles.textExplain,
          typoStyles.fs15,
          typoStyles.fwBold,
          styles.line,
        ]}>
        가입하신 아이디는
      </Text>
      <Text
        style={[typoStyles.textPrimary, typoStyles.fs20, typoStyles.fwBold]}>
        jisu****@gmail.com
        <Text
          style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fwBold]}>
          입니다.
        </Text>
      </Text>
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  line: {marginBottom: 20},
});

export default FindID2;
