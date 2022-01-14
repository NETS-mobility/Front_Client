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
import {ProgressBar} from './components';
import WholeLayout from '../wholeLayout';

const FindAuthLayout = ({pageType, num, btnType, children, goNext, goBack}) => {
  return (
    <WholeLayout>
      <View style={styles.block}>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.closeBtn}
            onPress={goBack}>
            <Close width={25} height={25} />
          </TouchableOpacity>
          <ProgressBar num={num} />
          <View style={styles.children}>
            <Text
              style={[
                typoStyles.textMain,
                typoStyles.fs32,
                typoStyles.fwBold,
                styles.title,
              ]}>
              {pageType == 'pw' ? '비밀번호 찾기' : '아이디 찾기'}
            </Text>
            {children}
          </View>
        </ScrollView>
        <View style={styles.center}>
          {btnType == 'login' ? (
            <CustomBtn
              viewStyle={[btnStyles.btnBlue, styles.btn]}
              textStyle={[
                typoStyles.textWhite,
                typoStyles.fs20,
                typoStyles.fwBold,
              ]}
              text={'로그인'}
              onPress={goNext}
            />
          ) : (
            <CustomBtn
              viewStyle={[btnStyles.btnWhite, styles.btn]}
              textStyle={[
                typoStyles.textMain,
                typoStyles.fs20,
                typoStyles.fwBold,
              ]}
              text={'계속'}
              onPress={goNext}
            />
          )}
        </View>
      </View>
    </WholeLayout>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 15,
    paddingBottom: 31,
  },
  closeBtn: {
    marginBottom: 8,
  },
  btn: {
    width: 245,
    height: 47,
  },
  title: {
    marginBottom: 87,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  children: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default FindAuthLayout;
