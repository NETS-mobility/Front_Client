import React, {useState, useEffect} from 'react';
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

export const GetTime = ({
  serviceName,
  way,
  time,
  setTime,
  setDis,
  gowithTime,
  setGowithTime,
}) => {
  useEffect(() => {
    if (time.resArrTime.time != '0' && time.resDepTime.time != '0') {
      const TestArrTime = time.resArrTime.time;
      const TestDepTime = time.resDepTime.time;
      const compArrTime = new Date();
      const compDepTime = new Date();
      compArrTime.setHours(
        TestArrTime.substring(0, 2),
        TestArrTime.substring(3, 5),
        TestArrTime.substring(6, 8),
      );
      compDepTime.setHours(
        TestDepTime.substring(0, 2),
        TestDepTime.substring(3, 5),
        TestDepTime.substring(6, 8),
      );
      setGowithTime((compDepTime - compArrTime) / (60 * 1000));
    }
  }, [time.resArrTime.time, time.resDepTime.time]);

  useEffect(() => {
    if (gowithTime <= 0) {
      setDis(true);
    } else {
      setDis(false);
    }
  }, [gowithTime]);

  if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
    return (
      <>
        <ResResTime time={time} setTime={setTime} />
        <ResArrTime time={time} setTime={setTime} />
        <ResDepTime time={time} setTime={setTime} />
        {gowithTime <= 0 ? (
          <Text
            style={[
              typoStyles.fs13,
              typoStyles.fw700,
              typoStyles.textPrimary,
              {marginTop: 10},
            ]}>
            {'귀가 출발 시간은 병원 도착 시간 이후로 설정해주세요.'}
          </Text>
        ) : (
          <ServiceGowithPicker
            type={true}
            title={'병원 동행 예상 시간은 다음과 같습니다.'}
            time={gowithTime}
          />
        )}
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
