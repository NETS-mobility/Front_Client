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

const pickCategory = (data, dispatch, pick) => {
  const categories = {
    1: ['서비스 번호', data?.service_id],
    2: ['픽업 주소', data?.pickup_address],
    3: ['병원 주소', data?.hos_address],
    4: ['귀가 주소', data?.drop_address],
    5: ['픽업 예정 시간', dispatch?.[0]?.expCarPickupTime?.substring(11, 16)],
    6: ['희망 병원 도착 시간', data?.hos_arrival_time?.substring(0, 5)],
    7: ['희망 귀가 출발 시간', data?.hos_depart_time?.substring(0, 5)],
    8: ['진료/검사 예약 시간', data?.hos_care_time?.substring(0, 5)],
    9: [
      '서비스 종료 예정 시간',
      dispatch?.[0]?.expCarTerminateServiceTime?.substring(11, 16),
    ],
    10: [
      '서비스 종료 예정 시간',
      dispatch?.[1]?.expCarTerminateServiceTime?.substring(11, 16),
    ],
    11: ['차량 번호', dispatch?.[0]?.car_number],
    12: ['네츠 매니저', dispatch?.[0]?.netsmanager_name],
    13: ['동행 매니저', data?.gowithumanager],
    14: ['차량 번호 1', dispatch?.[0]?.car_number],
    15: ['차량 번호 2', dispatch?.[1]?.car_number],
    16: ['네츠 매니저 1', dispatch?.[0]?.netsmanager_name],
    17: ['네츠 매니저 2', dispatch?.[1]?.netsmanager_name],
  };
  const categoryKey = Object.keys(categories);
  for (let i = 0; i < categoryKey.length; i++) {
    if (categoryKey[i] == pick) {
      return categories[categoryKey[i]];
    }
  }
};

const CaseInfo = (num, dispatchCase) => {
  switch (dispatchCase) {
    case 1: //집-병원
      if (num == 3) return [2, 3, 5, 6, 8, 9, 11, 12];
      return [1, 2, 3, 5, 6, 8, 9, 11, 12, 13];
    case 2: //병원-집
      if (num == 3) return [3, 4, 7, 9, 11, 12];
      return [1, 3, 4, 7, 9, 11, 12, 13];
    case 3: //집-집 (배차 1번, 2시간 이하)
      if (num == 3) return [2, 3, 4, 5, 6, 8, 7, 10, 11, 12];
      return [1, 2, 3, 4, 5, 6, 8, 7, 10, 11, 12];
    case 4: //왕복2시간이상
      if (num == 3) return [2, 3, 4, 5, 6, 8, 7, 10, 14, 15, 16, 17];
      return [1, 2, 3, 4, 5, 6, 8, 7, 10, 13, 14, 15, 16, 17];
  }
};

export const ServiceInfo = ({num, data, dispatch}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 17,
    },
  });
  const infos = CaseInfo(num, data?.dispatch_case);

  return (
    <View>
      {num == 1 || num == 3 ? (
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

      {infos != undefined &&
        infos.map((infoData, i) => {
          const result = pickCategory(data, dispatch, infoData);
          return (
            <ServiceInfoOneLine key={i} title={result[0]} value={result[1]} />
          );
        })}
    </View>
  );
};

export const ServiceInfoOneLine = ({title, value}) => {
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
          typoStyles.fw700,
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
