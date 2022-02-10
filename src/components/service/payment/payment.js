import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';

export const Payment = () => {
  return (
    <View>
      <View style={[styles.box, styles.boldLine]}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          내역
        </Text>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          금액
        </Text>
      </View>
      <View style={[styles.box, styles.lightLine]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          서비스요금
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          40,000원
        </Text>
      </View>
      <View style={[styles.box, styles.lightLine]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          부가세
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          4,000원
        </Text>
      </View>

      <View style={styles.total}>
        <Text
          style={[
            typoStyles.fw700,
            typoStyles.fs18,
            typoStyles.textExplainBold,
          ]}>
          최종결제금액
        </Text>
        <Text style={[typoStyles.fw700, typoStyles.fs18, typoStyles.textMain]}>
          44,000원
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

const AdditionalTimeDist = () => {
  return (
    <View>
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

      <View style={styles.total}>
        <Text
          style={[
            typoStyles.fw700,
            typoStyles.fs18,
            typoStyles.textExplainBold,
          ]}>
          최종결제금액
        </Text>
        <Text style={[typoStyles.fw700, typoStyles.fs18, typoStyles.textMain]}>
          44,000원
        </Text>
      </View>
    </View>
  );
};
