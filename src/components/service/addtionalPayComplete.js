import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {btnStyles} from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';
import CommonLayout from '../common/layout';
import {Step1, Step2} from './layout';

const AdditionalPayComplete = () => {
  const styles = StyleSheet.create({
    block: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    block2: {
      width: '100%',
      paddingHorizontal: 32,
      paddingVertical: 30,
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: 100,
    },
    btn: {
      width: '80%',
      height: 47,
      marginBottom: 20,
      alignSelf: 'center',
    },
    explain: {
      marginBottom: 137,
    },
  });
  return (
    <CommonLayout>
      <View style={styles.block}>
        <Text
          style={[
            typoStyles.fs32,
            typoStyles.fwBold,
            typoStyles.textMain,
            styles.title,
          ]}>
          추가 요금 결제 완료
        </Text>
      </View>
      <View style={styles.block2}>
        <Text
          style={[typoStyles.textPrimary, typoStyles.fs14, typoStyles.fwBold]}>
          추가 요금 결제가 완료
          <Text style={[typoStyles.textExplain]}>{`되었습니다.\n\n\n`}</Text>
        </Text>
        <Text
          style={[
            typoStyles.textExplain,
            typoStyles.fs14,
            typoStyles.fwBold,
            styles.explain,
          ]}>
          {`네츠 모빌리티를 이용해주셔서 감사합니다.\n더 좋은 서비스 제공을 위해 노력하겠습니다.\n감사합니다.`}
        </Text>
        <TouchableOpacity style={[btnStyles.btnBlue, styles.btn]}>
          <Text
            style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textWhite]}>
            확인
          </Text>
        </TouchableOpacity>
      </View>
    </CommonLayout>
  );
};

export default AdditionalPayComplete;
