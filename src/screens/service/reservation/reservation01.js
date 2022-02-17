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

const Reservation01 = ({route, navigation}) => {
  const {serviceName} = route.params;
  const {way} = route.params;

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
