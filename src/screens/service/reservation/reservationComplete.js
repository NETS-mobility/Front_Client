import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {btnStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import ServiceBlock from '../../../components/service/serviceBlock';
import {
  ManagerProfile,
  ManagerComment,
  ServiceInfo,
} from '../../../components/service/reservation/serviceInfo';

const ReservationComplete = () => {
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: 51,
    },
    btn: {width: 300, height: 47, alignSelf: 'center', marginTop: 28},
  });

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
            서비스 예약 완료
          </Text>
          <Text
            style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textPrimary,
              ]}>
              서비스 예약이 완료
            </Text>
            되었습니다.{'\n'}
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textPrimary,
              ]}>
              서비스 내역
            </Text>
            메뉴에서 예약 내역 확인이 가능합니다.
          </Text>
        </View>

        <ManagerProfile
          name={'홍길동'}
          certificate={['간호조무사', '요양보호사']}
          comment={
            '모든 일에 적극적이며 긍정적이라는 평가를 받아왔습니다. 따뜻한 배려와 친절함으로 동행하겠습니다.'
          }
        />
        <ManagerComment comment={'문 앞에 도착하면 연락드리겠습니다!'} />
        <ServiceBlock>
          <ServiceInfo />
        </ServiceBlock>
        <TouchableOpacity style={[btnStyles.btnBlue, styles.btn]}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            확인
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </CommonLayout>
  );
};

export default ReservationComplete;
