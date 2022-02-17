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

export const GetAddr = ({serviceName, way}) => {
  if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
    return (
      <>
        <HomeAddr />
        <HospitalAddr />
        <DropAddr />
      </>
    );
  } else if (
    serviceName == '네츠 휠체어 플러스 편도 서비스' ||
    serviceName == '네츠 휠체어 편도 서비스'
  ) {
    if (way) {
      return (
        <>
          <HomeAddr />
          <HospitalAddr />
        </>
      );
    } else {
      return (
        <>
          <DropAddr />
          <HospitalAddr />
        </>
      );
    }
  }
};

export const GetTime = ({serviceName, way, time, setTime}) => {
  // const [resTimes, setResTimes] = useState([
  //   {resResTime: '0',
  //   {resArrTime: '0'},
  //   {resDepTime: '0'},
  // ]);
  if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
    /*
    setTime({...time,resResTime:'19:00:00'})
    */
    return (
      <>
        <ResArrTime time={time} setTime={setTime} />
        <ResResTime />
        <ResDepTime />
      </>
    );
  } else if (
    serviceName == '네츠 휠체어 플러스 편도 서비스' ||
    serviceName == '네츠 휠체어 편도 서비스'
  ) {
    if (way) {
      return (
        <>
          <ResArrTime />
          <ResResTime />
        </>
      );
    } else {
      return <ResDepTime />;
    }
  }
};

const ResDate = () => {
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
      <ServiceDatePicker />
    </View>
  );
};

export {ResDate};
