import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {ServiceDatePicker, ServiceTimePicker} from './servicePicker';
import {ServiceAddress} from './serviceInputBox';

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

const test = () => {
  if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
    return (
      <>
        <ResDate />
        {/* 장소 */}
        <HomeAddr />
        <HospitalAddr />
        <DropAddr />
        {/* 시간 */}
        <ResArrTime />
        <ResResTime />
        <ResDepTime />
      </>
    );
  } else if (
    serviceName == '네츠 휠체어 플러스 편도 서비스' ||
    serviceName == '네츠 휠체어 편도 서비스'
  ) {
    if (way == 'to hos') {
      return (
        <>
          <ResDate />
          <HomeAddr />
          <HospitalAddr /> <ResArrTime /> <ResResTime />
        </>
      );
    } else {
      return (
        <>
          <ResDate />
          <DropAddr />
          <HospitalAddr /> <ResArrTime />
        </>
      );
    }
  }
};

const HospitalAddr = () => {
  const [hosaddr, setHosaddr] = useState('');
  const [hosdetail, setHosdetail] = useState('');
  return (
    <ServiceAddress
      prititle={'병원'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'병원 주소'}
      Text1={hosaddr}
      setText1={setHosaddr}
      Text2={hosdetail}
      setText2={setHosdetail}
    />
  );
};

const HomeAddr = () => {
  const [pickaddr, setPickaddr] = useState('');
  const [pickdetail, setPickdetail] = useState('');
  return (
    <ServiceAddress
      prititle={'픽업'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'픽업 주소'}
      Text1={pickaddr}
      setText1={setPickaddr}
      Text2={pickdetail}
      setText2={setPickdetail}
    />
  );
};

const DropAddr = () => {
  const [dropaddr, setDropaddr] = useState('');
  const [dropdetail, setDropdetail] = useState('');
  return (
    <ServiceAddress
      prititle={'귀가'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'귀가 주소'}
      Text1={dropaddr}
      setText1={setDropaddr}
      Text2={dropdetail}
      setText2={setDropdetail}
    />
  );
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

const ResResTime = () => {
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
      <ServiceTimePicker />
    </View>
  );
};

const ResArrTime = () => {
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
      <ServiceTimePicker />
      <Text
        style={[typoStyles.fs12, typoStyles.fwBold, typoStyles.textExplain]}>
        원활한 서비스 진행을 위해,{'\n'}도착 시간이{' '}
        <Text
          style={[typoStyles.fs12, typoStyles.fwBold, typoStyles.textPrimary]}>
          진료시간 20분 이전
        </Text>
        <Text
          style={[typoStyles.fs12, typoStyles.fwBold, typoStyles.textExplain]}>
          으로 설정되어있습니다.
        </Text>{' '}
      </Text>
    </View>
  );
};

const ResDepTime = () => {
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
      <ServiceTimePicker />
    </View>
  );
};

export {
  HospitalAddr,
  HomeAddr,
  DropAddr,
  ResDate,
  ResResTime,
  ResArrTime,
  ResDepTime,
};
