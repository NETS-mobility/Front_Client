import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import ServiceBlock from '../../../components/service/serviceBlock';
import typoStyles from '../../../assets/fonts/typography';
import {ServiceAddress} from '../../../components/service/reservation/serviceInputBox';
import CommonLayout from '../../../components/common/layout';
import {NextBtn} from '../../../components/service/reservation/serviceBtn';
import ServiceProgress from '../../../components/service/reservation/progress';
import {
  ServiceDatePicker,
  ServiceTimePicker,
} from '../../../components/service/reservation/servicePicker';

const styles = StyleSheet.create({
  background: {
    // backgroundColor: 'white',
    flex: 1,
  },
  step1title: {
    marginBottom: 7,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    marginBottom: 22,
  },
  proset: {
    alignItems: 'center',
  },
  textline: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  pickbox: {
    marginTop: 30,
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
});

const Reservation01 = ({navigation}) => {
  const [pickaddr, setPickaddr] = useState('');
  const [pickdetail, setPickdetail] = useState('');

  const [hosaddr, setHosaddr] = useState('');
  const [hosdetail, setHosdetail] = useState('');

  const [isChecked, setCheck] = useState(true);

  return (
    <CommonLayout>
      <ScrollView style={styles.background}>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
              styles.title,
            ]}>
            서비스예약
          </Text>
          <ServiceProgress num={1} />
        </View>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP1. 장소 설정
          </Text>
          <ServiceAddress
            prititle={'픽업'}
            exptitle={' 주소를 입력해주세요'}
            placeHolder={'픽업 주소'}
            Text1={pickaddr}
            setText1={setPickaddr}
            Text2={pickdetail}
            setText2={setPickdetail}
          />
          <ServiceAddress
            prititle={'병원'}
            exptitle={' 주소를 입력해주세요'}
            placeHolder={'병원 주소'}
            Text1={hosaddr}
            setText1={setHosaddr}
            Text2={hosdetail}
            setText2={setHosdetail}
          />
        </ServiceBlock>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP2. 일정 설정
          </Text>
          <View style={styles.pickbox}>
            <View style={styles.textline}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textPrimary,
                ]}>
                서비스 원하시는 날짜
              </Text>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textExplain,
                ]}>
                를 입력해주세요.
              </Text>
            </View>
            <ServiceDatePicker />
          </View>
          <View style={styles.pickbox}>
            <View style={styles.textline}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textPrimary,
                ]}>
                예약된 병원 검사/진료 시간
              </Text>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textExplain,
                ]}>
                을 입력해주세요.
              </Text>
            </View>
            <ServiceTimePicker />
          </View>
          <View style={styles.pickbox}>
            <View style={styles.textline}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textPrimary,
                ]}>
                희망하는 병원 도착 시간
              </Text>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textExplain,
                ]}>
                을 입력해주세요.
              </Text>
            </View>
            <ServiceTimePicker />
            <Text
              style={[
                typoStyles.fs12,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              원활한 서비스 진행을 위해,{'\n'}도착 시간이{' '}
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
              </Text>{' '}
            </Text>
          </View>
          <View style={styles.pickbox}>
            <View style={styles.textline}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textPrimary,
                ]}>
                귀가 출발 시간
              </Text>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textExplain,
                ]}>
                을 입력해주세요.
              </Text>
            </View>
            <ServiceTimePicker />
          </View>
        </ServiceBlock>
        <View style={styles.btn}>
          <NextBtn
            navWhere={() => {
              navigation.push('Reservation02');
            }}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default Reservation01;
