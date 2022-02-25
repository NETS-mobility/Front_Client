import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {ServiceDatePicker} from './servicePicker';
import {HospitalAddr, HomeAddr, DropAddr} from './reservationAddr';
import {ResArrTime, ResResTime, ResDepTime} from './reservationTime';
import {ServiceGowithPicker} from './servicePicker';
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
        <ResResTime time={time} setTime={setTime} />
        <ResArrTime time={time} setTime={setTime} />
        <ResDepTime time={time} setTime={setTime} />
        <ServiceGowithPicker
          type={true}
          title={'병원 동행 예상 시간은 다음과 같습니다.'}
          time={'20'} //귀가 출발 시간-병원 도착 시간으로 설정되도록 변경
        />
      </>
    );
  } else if (
    serviceName == '네츠 휠체어 플러스 편도 서비스' ||
    serviceName == '네츠 휠체어 편도 서비스'
  ) {
    if (way) {
      return (
        <>
          <ResResTime time={time} setTime={setTime} />
          <ResArrTime time={time} setTime={setTime} />
          <ServiceGowithPicker
            type={false}
            title={'병원 동행 기본 시간은 다음과 같습니다.'}
            time={'20'} //관리자에서 설정한 기본 병원동행 시간으로 입력되도록 변경
          />
        </>
      );
    } else {
      return (
        <>
          <ResDepTime time={time} setTime={setTime} />
          <ServiceGowithPicker
            type={false}
            title={'병원 동행 기본 시간은 다음과 같습니다.'}
            time={'20'} //관리자에서 설정한 기본 병원동행 시간으로 입력되도록 변경
          />
        </>
      );
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
