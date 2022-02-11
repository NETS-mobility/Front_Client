import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {ServiceStatus} from '../../../components/service/detail/serviceHistoryComponent';
import {
  ManagerComment,
  ManagerProfile,
} from '../../../components/service/reservation/serviceInfo';
import {ServiceInfo} from '../../../components/service/reservation/serviceInfo';
import ServiceBlock from '../../../components/service/serviceBlock';
import {Payment} from '../../../components/service/payment/payment';
import {ServiceDetailProgress} from '../../../components/service/detail/serviceDetail';
import MapView from '../../../components/service/detail/MapView';

const ServiceDetail = () => {
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {marginBottom: 12},
    mapContainer: {
      width: '100%',
      height: 260,
      backgroundColor: '#fff',
      paddingBottom: 16,
    },
    map: {
      width: '90%',
      height: 244,
      alignSelf: 'center',
    },
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
            서비스 상세보기
          </Text>
          <ServiceStatus text={'현재 운행 중'} />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
            style={styles.map}
            lat={37.566481622437934}
            lng={126.98502302169841}
          />
        </View>
        <ManagerProfile
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
        <ServiceBlock>
          <Payment />
        </ServiceBlock>
      </ScrollView>
    </CommonLayout>
  );
};

export default ServiceDetail;
