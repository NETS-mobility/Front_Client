import React from 'react';
import CommonLayout from '../common/layout';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {ServiceStatus} from './serviceHistory';
import {ManagerComment, Profile} from './payment/resComplete';
import {ServiceInfo} from './payment/resComplete';
import ServiceBlock from './serviceBlock';
import Payment from './payment';

const DetailProgressCircle = ({time, text}) => {
  const styles = StyleSheet.create({
    oneStep: {
      width: '25%',
      alignItems: 'center',
    },
    bigCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#fff',
    },
    smallCircle: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#19b7cd',
    },
    text: {
      marginVertical: 8,
    },
  });

  return (
    <View style={styles.oneStep}>
      <Text
        style={[
          typoStyles.fs13,
          typoStyles.fwBold,
          typoStyles.textExplain,
          styles.text,
        ]}>
        {time}
      </Text>
      <View style={styles.bigCircle}>
        <View style={styles.smallCircle} />
      </View>
      <Text
        style={[
          typoStyles.fs13,
          typoStyles.fwBold,
          typoStyles.textExplain,
          styles.text,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const ServiceDetailProgress = () => {
  const styles = StyleSheet.create({
    title: {marginBottom: 12},
    steps: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 0,
    },
    line: {
      position: 'absolute',
      bottom: '53%',
      width: '100%',
      height: 13,
      backgroundColor: '#19B7CD',
    },
  });
  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fwBold,
          typoStyles.textExplainBold,
          styles.title,
        ]}>
        진행 상황
      </Text>
      <View style={styles.steps}>
        <View style={styles.line} />
        <DetailProgressCircle time={'11:37'} text={'픽업완료'} />
        <DetailProgressCircle time={'11:48'} text={'병원도착'} />
        <DetailProgressCircle time={'12:12'} text={'귀가차량\n병원도착'} />
        <DetailProgressCircle time={'13:14'} text={'귀가출발'} />
        <DetailProgressCircle time={'13:30'} text={'서비스종료'} />
      </View>
    </ServiceBlock>
  );
};

const ServiceDetail = () => {
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {marginBottom: 12},
  });
  return (
    <CommonLayout>
      <View style={styles.block1}>
        <Text
          style={[
            typoStyles.fs32,
            typoStyles.textMain,
            typoStyles.fwBold,
            styles.title,
          ]}>
          서비스 상세보기
        </Text>
        <ServiceStatus text={'현재 운행 중'} />
      </View>
      <Profile
        name={'홍길동'}
        certificate={['간호조무사', '요양보호사']}
        comment={
          '모든 일에 적극적이며 긍정적이라는 평가를 받아왔습니다. 따뜻한 배려와 친절함으로 동행하겠습니다.'
        }
        type={2}
      />
      <ServiceDetailProgress />
      <ManagerComment comment={'문 앞에 도착하면 연락드리겠습니다!'} />
      <ServiceBlock>
        <ServiceInfo />
      </ServiceBlock>
      <Payment />
    </CommonLayout>
  );
};

export default ServiceDetail;
