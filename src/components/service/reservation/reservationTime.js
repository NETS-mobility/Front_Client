import React from 'react';
import typoStyles from '../../../assets/fonts/typography';
import {View, Text, StyleSheet} from 'react-native';
import {ServiceTimePicker} from './servicePicker';

const styles = StyleSheet.create({
  textline: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  pickbox: {
    marginTop: 30,
  },
});

export const ResResTime = ({time, setTime}) => {
  return (
    <View style={styles.pickbox}>
      <View style={styles.textline}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>
          예약된 병원 검사/진료 시간
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          을 입력해주세요.
        </Text>
      </View>
      <ServiceTimePicker
        time={time}
        setTime={setTime}
        propName={'resResTime'}
      />
    </View>
  );
};

export const ResArrTime = ({time, setTime}) => {
  return (
    <View style={styles.pickbox}>
      <View style={styles.textline}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>
          희망하는 병원 도착 시간
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          을 입력해주세요.
        </Text>
      </View>
      <ServiceTimePicker
        time={time}
        setTime={setTime}
        propName={'resArrTime'}
      />
      <View style={{marginTop: 10}}>
        <Text
          style={[typoStyles.fs12, typoStyles.fwBold, typoStyles.textExplain]}>
          원활한 서비스 진행을 위해,{'\n'}도착 시간이
          <Text
            style={[
              typoStyles.fs12,
              typoStyles.fwBold,
              typoStyles.textPrimary,
            ]}>
            진료시간 20분 이전
          </Text>
          <Text
            style={[
              typoStyles.fs12,
              typoStyles.fwBold,
              typoStyles.textExplain,
            ]}>
            으로 설정되어있습니다.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export const ResDepTime = ({time, setTime}) => {
  return (
    <View style={styles.pickbox}>
      <View style={styles.textline}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>
          귀가 출발 시간
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          을 입력해주세요.
        </Text>
      </View>
      <ServiceTimePicker
        time={time}
        setTime={setTime}
        propName={'resDepTime'}
      />
    </View>
  );
};
