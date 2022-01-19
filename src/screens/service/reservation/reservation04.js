import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {btnStyles, shadowStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import ServiceProgress from '../../../components/service/reservation/progress';

import {
  Step1,
  Step2,
  Step3,
} from '../../../components/service/reservation/reservation04';

const Reservation04 = ({navigation}) => {
  return (
    <CommonLayout>
      <ScrollView>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.textMain,
              typoStyles.fw700,
              styles.title,
            ]}>
            서비스 예약
          </Text>
          <ServiceProgress />
          <TouchableOpacity
            style={[btnStyles.btnBlue, styles.checkBtn, shadowStyles.shadow]}>
            <Text
              style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fw700]}>
              서비스 요금 확인하기
            </Text>
          </TouchableOpacity>
        </View>

        <Step1 />
        <Step2 />
        <Step3 />
        <TouchableOpacity
          style={[btnStyles.btnBlue, styles.btn]}
          onPress={() => navigation.push('ReservationComplete')}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            결제
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#02931f',
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 22,
  },
  title2: {
    marginBottom: 8,
  },
  explain1: {marginBottom: 7},
  explain2: {marginTop: 5, marginBottom: 11},
  btn: {width: 300, height: 47, alignSelf: 'center', marginTop: 31},
  btn2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBtn: {
    alignSelf: 'center',
    width: 300,
    height: 30,
  },
});

export default Reservation04;
