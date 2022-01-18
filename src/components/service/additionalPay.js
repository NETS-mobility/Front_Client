import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {btnStyles} from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';
import CommonLayout from '../common/layout';
import {Step1, Step2} from './layout';

const AdditionalPay = () => {
  const styles = StyleSheet.create({
    block: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: 40,
    },
    btn: {
      width: '80%',
      height: 47,
      alignSelf: 'center',
      marginTop: 24,
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
          추가 요금 결제
        </Text>
      </View>
      <Step1 />
      <Step2 />
      <TouchableOpacity style={[btnStyles.btnBlue, styles.btn]}>
        <Text
          style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textWhite]}>
          결제
        </Text>
      </TouchableOpacity>
    </CommonLayout>
  );
};

export default AdditionalPay;
