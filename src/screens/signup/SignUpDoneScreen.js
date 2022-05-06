import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {btnStyles} from '../../components/common/button';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 60,
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

const SignUpDoneScreen = ({route, navigation}) => {
  const data = route.params;
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
              이메일
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
              {data.name}
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {data.id}
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {data.phone}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.login}>
        <TouchableOpacity onPress={() => navigation.replace('LoginMain')}>
          <View style={[styles.loginbtn, btnStyles.btnBlue]}>
            <Text
              style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
              로그인하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpDoneScreen;
