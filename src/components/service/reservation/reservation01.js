import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {ServiceDatePicker} from './servicePicker';
import {HospitalAddr, HomeAddr, DropAddr} from './reservationAddr';
import {ResArrTime, ResResTime, ResDepTime} from './reservationTime';
const styles = StyleSheet.create({
  textline: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  pickbox: {
    marginTop: 30,
  },
});
// ResDate는 모두 필요

// serviceName=='네츠 휠체어 플러스 왕복 서비스'
// serviceName=='네츠 휠체어 왕복 서비스'
//HomeAddr / HospitalAddr / DropAddr / ResArrTime / ResResTime / ResDepTime

// serviceName=="네츠 휠체어 플러스 편도 서비스"
// serviceName=="네츠 휠체어 편도 서비스"
// 방향이 자택->병원이면
// HomeAddr / HospitalAddr / ResArrTime / ResResTime
// 방향이 병원->자택이면
// DropAddr / HospitalAddr / ResArrTime

export const GetAddr = ({serviceName, way, addr, setAddr}) => {
  if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
    return (
      <>
        <HomeAddr addr={addr} setAddr={setAddr} />
        <HospitalAddr addr={addr} setAddr={setAddr} />
        <DropAddr addr={addr} setAddr={setAddr} />
      </>
    );
  } else if (
    serviceName == '네츠 휠체어 플러스 편도 서비스' ||
    serviceName == '네츠 휠체어 편도 서비스'
  ) {
    if (way) {
      return (
        <>
          <HomeAddr addr={addr} setAddr={setAddr} />
          <HospitalAddr addr={addr} setAddr={setAddr} />
        </>
      );
    } else {
      return (
        <>
          <DropAddr addr={addr} setAddr={setAddr} />
          <HospitalAddr addr={addr} setAddr={setAddr} />
        </>
      );
    }
  }
};

export const GetTime = ({serviceName, way, time, setTime}) => {
  if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
    return (
      <>
        <ResArrTime time={time} setTime={setTime} />
        <ResResTime time={time} setTime={setTime} />
        <ResDepTime time={time} setTime={setTime} />
      </>
    );
  } else if (
    serviceName == '네츠 휠체어 플러스 편도 서비스' ||
    serviceName == '네츠 휠체어 편도 서비스'
  ) {
    if (way) {
      return (
        <>
          <ResArrTime time={time} setTime={setTime} />
          <ResResTime time={time} setTime={setTime} />
        </>
      );
    } else {
      return <ResDepTime time={time} setTime={setTime} />;
    }
  }
};

const ResDate = ({setDate}) => {
  return (
    <View style={styles.pickbox}>
      <View style={styles.textline}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>
          서비스 원하시는 날짜
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          를 입력해주세요.
        </Text>
      </View>
      <ServiceDatePicker setDate={setDate} />
    </View>
  );
};

export {ResDate};
