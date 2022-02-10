import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import btnStyles from '../../assets/fonts/button';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },

  bigbox: {
    marginTop: 109,
    marginLeft: 30,
  },

  textbox: {
    flexDirection: 'row',
    marginTop: 52,
  },

  rightcontents: {
    color: 'black',
    marginBottom: 15,
  },

  leftcontents: {
    marginBottom: 15,
  },

  titlebox: {
    marginRight: 20,
  },

  loginbtn: {
    width: 245,
    height: 47,
  },

  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
});

const SignUpDoneScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.bigbox}>
        <View>
          <Text
            style={[typoStyles.fs32, typoStyles.fw700, typoStyles.textMain]}>
            회원가입이{'\n'}완료되었습니다.
          </Text>
        </View>
        <View style={styles.textbox}>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              이름
            </Text>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              아이디
            </Text>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              생년월일
            </Text>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              휴대전화
            </Text>
          </View>
          <View>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              홍길동
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              gildong0101@gmail.com
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              00.01.12
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              010-0000-1111
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.login}>
        <TouchableNativeFeedback>
          <View style={[styles.loginbtn, btnStyles.btnBlue]}>
            <Text
              style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
              로그인하기
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SignUpDoneScreen;
