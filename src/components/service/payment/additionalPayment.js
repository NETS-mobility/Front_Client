import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';

const styles = StyleSheet.create({
  additionalBlock: {marginBottom: 23},
  box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
  },
  boldLine: {
    borderBottomColor: '#737373',
  },
  lightLine: {
    borderBottomColor: '#DAD8E0',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 27,
  },
});

export const AdditionalPayment = () => {
  return (
    <View style={styles.additionalBlock}>
      <View style={[styles.box, styles.boldLine]}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          사전 예약 시간/거리
        </Text>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          서비스 진행 시간/거리
        </Text>
      </View>
      <View style={[styles.box, styles.lightLine]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          16:00
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textPrimary]}>
          17:00
        </Text>
      </View>
      <View style={[styles.box, styles.lightLine]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          10km
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textPrimary]}>
          11km
        </Text>
      </View>
    </View>
  );
};
