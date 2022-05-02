import React, {useEffect, useState} from 'react';
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
import GetServiceDetail from '../../../api/reservation/serviceDetail';

const ServiceDetail = ({navigation, route}) => {
  const [id] = useState(route.params.detailId);
  const [detail, setDetail] = useState({});
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

  const GetDetailInfos = async () => {
    setDetail(await GetServiceDetail(id));
  };

  useEffect(() => {
    GetDetailInfos();
  }, []);

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
          <ServiceStatus text={detail?.service?.reservation_state} />
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
          certificate={detail?.dispatch?.[0]?.netsmanager_certificate}
          name={detail?.dispatch?.[0]?.netsmanager_name}
          comment={detail?.dispatch?.[0]?.netsmanager_intro}
          tel={detail?.dispatch?.[0]?.netsmanager_tel}
          type={2}
        />
        <ServiceDetailProgress
          progress={{
            state: detail?.service_state,
            state_time: detail?.service_state_time,
          }}
        />
        <ManagerComment comment={detail?.dispatch?.[0]?.netsmanager_mention} />
        <ServiceBlock>
          <ServiceInfo
            num={2}
            data={detail?.service}
            dispatch={detail?.dispatch}
          />
        </ServiceBlock>

        <ServiceBlock>
          <Payment id={id} />
        </ServiceBlock>
      </ScrollView>
    </CommonLayout>
  );
};

export default ServiceDetail;
