import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Close from '../../assets/icon/close.svg';
import CustomBtn, {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';
import {ProgressBar} from './findAuthComponent';
import WholeLayout from '../wholeLayout';

const FindAuthLayout = ({
  pageType,
  num,
  btnType,
  children,
  goNext,
  goBack,
  disabled,
}) => {
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
        {btnType == 'login' || btnType == 'sign' ? (
          <CustomBtn
            viewStyle={[btnStyles.btnBlue, styles.nextStepBtn]}
            textStyle={[
              typoStyles.textWhite,
              typoStyles.fs20,
              typoStyles.fw700,
            ]}
            text={btnType == 'login' ? '로그인' : '회원가입'}
            onPress={goNext}
          />
        ) : (
          <CustomBtn
            viewStyle={[btnStyles.btnWhite, styles.nextStepBtn]}
            textStyle={[typoStyles.textMain, typoStyles.fs20, typoStyles.fw700]}
            text={'계속'}
            onPress={goNext}
            disabled={disabled}
            viewStyleDisabled={[btnStyles.btnDisable, styles.nextStepBtn]}
            textStyleDisabled={[
              typoStyles.textExplainBold,
              typoStyles.fs20,
              typoStyles.fw700,
            ]}
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
    // paddingBottom: 31,
    paddingBottom: 70, //bottomTab이 버튼을 가려 임시 수정, BottomTab해결 후 수정해야함.
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
