import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Close from '../../assets/icon/close.svg';
import CustomBtn, {btnStyles} from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';
import {ProgressBar} from './findAuthComponent';
import WholeLayout from '../wholeLayout';

const FindAuthLayout = ({pageType, num, btnType, children, goNext, goBack}) => {
  return (
    <WholeLayout check={1}>
      <View style={styles.block}>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.closeBtn}
            onPress={goBack}>
            <Close width={25} height={25} />
          </TouchableOpacity>
          <ProgressBar num={num} />
          <View style={styles.contents}>
            <Text
              style={[
                typoStyles.textMain,
                typoStyles.fs32,
                typoStyles.fw700,
                styles.title,
              ]}>
              {pageType == 'pw'
                ? '비밀번호 찾기'
                : pageType == 'id'
                ? '아이디 찾기'
                : '비밀번호 변경'}
            </Text>
            {children}
          </View>
        </ScrollView>
        {btnType == 'login' ? (
          <CustomBtn
            viewStyle={[btnStyles.btnBlue, styles.nextStepBtn]}
            textStyle={[
              typoStyles.textWhite,
              typoStyles.fs20,
              typoStyles.fw700,
            ]}
            text={'로그인'}
            onPress={goNext}
          />
        ) : (
          <CustomBtn
            viewStyle={[btnStyles.btnWhite, styles.nextStepBtn]}
            textStyle={[typoStyles.textMain, typoStyles.fs20, typoStyles.fw700]}
            text={'계속'}
            onPress={goNext}
          />
        )}
      </View>
    </WholeLayout>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 15,
    paddingBottom: 31,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 87,
  },
  closeBtn: {
    marginBottom: 8,
  },
  contents: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  nextStepBtn: {
    width: 245,
    height: 47,
    alignSelf: 'center',
  },
});

export default FindAuthLayout;
