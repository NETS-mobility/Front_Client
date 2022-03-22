import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {btnStyles} from '../../common/button';
import ServiceBlock from '../serviceBlock';

export const ManagerProfile = ({
  name,
  img,
  certificate,
  comment,
  type,
  tel,
}) => {
  const styles = StyleSheet.create({
    infoBlock: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 17,
    },
    profileImg: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 11,
    },
    btn: {
      width: '100%',
      height: 30,
      marginTop: 22,
    },
  });
  return (
    <ServiceBlock>
      <View style={styles.infoBlock}>
        <Image
          source={require('../../../assets/image/startimg2.png')}
          style={styles.profileImg}
        />
        <View>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fw700,
              typoStyles.textExplainBold,
            ]}>
            {name}
          </Text>
          <Text
            style={[typoStyles.fs12, typoStyles.fw700, typoStyles.textMain]}>
            {certificate != undefined &&
              certificate.map(data => {
                return data.name + ' ';
              })}
          </Text>
        </View>
      </View>
      <Text
        style={[typoStyles.fs14, typoStyles.fwRegular, typoStyles.textExplain]}>
        {comment}
      </Text>
      {type == 2 ? (
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${tel}`)}
          style={[btnStyles.btnBlue, styles.btn]}>
          <Text
            style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textWhite]}>
            전화 걸기
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </ServiceBlock>
  );
};

export const ManagerComment = ({comment}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 22,
    },
  });
  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fw700,
          typoStyles.textExplainBold,
          styles.title,
        ]}>
        매니저가 전하는 말
      </Text>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textExplainBold,
        ]}>
        {comment}
      </Text>
    </ServiceBlock>
  );
};

// -집-병원
// 픽업주소
// 병원주소
// 희망병원도착시간
// 진료검사예약

// -병원-집
// 병원주소
// 귀가주소
// 희망 귀가 출발 시간

// -집-집
// 픽
// 병
// 귀
// 희망병원도착
// 진료검사예약
// 희망귀가출발

// -집-집(2시간이상)
// 픽
// 병
// 귀
// 희망병원도착
// 진료검사예약
// 희망귀가출발
// 차량2개
// 매니저2명
// 동행매니저

const pickCategory = data => {
  return [
    ['서비스 번호', data.service_id],
    ['픽업 주소', data?.pickup_address],
    ['병원 주소', data?.drop_address],
    ['귀가 주소', data?.drop_address],
    ['픽업 예정 시간', data?.pickup_time.substring(0, 5)],
    ['희망 병원 도착 시간', data?.hos_arrival_time.substring(0, 5)],
    ['희망 귀가 출발 시간', data?.hos_arrival_time.substring(0, 5)],
    ['진료/검사 예약 시간', data?.hos_care_time.substring(0, 5)],
    ['차량 번호', dispatch?.[0]?.car_number],
    ['네츠 매니저', dispatch?.[0]?.netsmanager_name],
    ['동행 매니저', data?.gowithumanager],
  ];
};

export const ServiceInfo = ({num, data, dispatch}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 17,
    },
  });
  console.log('dispatch==', dispatch);
  return (
    <View>
      {num == 1 ? (
        <></>
      ) : (
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
            styles.title,
          ]}>
          서비스 정보
        </Text>
      )}
      <ServiceInfoOneLine title={'서비스 번호'} value={data?.service_id} />
      <ServiceInfoOneLine
        title={'픽업 예정 시간'}
        value={data?.pickup_time.substring(0, 5)}
      />
      <ServiceInfoOneLine title={'픽업 주소'} value={data?.pickup_address} />
      <ServiceInfoOneLine title={'병원 주소'} value={data?.hos_address} />
      <ServiceInfoOneLine
        title={'희망 병원 도착 시간'}
        value={data?.hos_arrival_time.substring(0, 5)}
      />
      <ServiceInfoOneLine
        title={'진료/검사 예약 시간'}
        value={data?.hos_care_time.substring(0, 5)}
      />
      <ServiceInfoOneLine
        title={'네츠 매니저'}
        value={dispatch?.[0]?.netsmanager_name}
      />
      <ServiceInfoOneLine
        title={'차량 번호'}
        value={dispatch?.[0]?.car_number}
      />
      <ServiceInfoOneLine title={'동행 매니저'} value={data?.gowithumanager} />
    </View>
  );
};

const ServiceInfoOneLine = ({title, value}) => {
  const styles = StyleSheet.create({
    line: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    title: {
      width: '50%',
    },
    value: {
      width: '50%',
    },
  });
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.title,
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textExplain,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.value,
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textExplainBold,
        ]}>
        {value}
      </Text>
    </View>
  );
};
