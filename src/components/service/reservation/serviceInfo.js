import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {btnStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';

export const ManagerProfile = ({name, img, certificate, comment, type}) => {
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
            {certificate.map(data => {
              return data + ' ';
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
          onPress={() => Linking.openURL(`tel:02-0000-0000`)}
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

export const ServiceInfo = ({num}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 17,
    },
  });
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
      <ServiceInfoOneLine title={'서비스 번호'} value={'21102323921'} />
      <ServiceInfoOneLine title={'픽업 예정 시간'} value={'11:00'} />
      <ServiceInfoOneLine title={'픽업 주소'} value={'성북구 길음동 11-15'} />
      <ServiceInfoOneLine title={'병원'} value={'서울백병원'} />
      <ServiceInfoOneLine title={'희망 병원 도착 시간'} value={'12:00'} />
      <ServiceInfoOneLine title={'진료/검사 예약 시간'} value={'12:30'} />
      <ServiceInfoOneLine title={'귀가 출발 시간'} value={'14:00'} />
      <ServiceInfoOneLine title={'네츠 매니저'} value={'홍길동'} />
      <ServiceInfoOneLine title={'차량 번호'} value={'55거 1234'} />
      <ServiceInfoOneLine title={'동행 매니저'} value={'김강빈'} />
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
