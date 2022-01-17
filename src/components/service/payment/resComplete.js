import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import CommonLayout from '../../common/layout';
import {btnStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';

export const Profile = ({name, img, certificate, comment, type}) => {
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
              typoStyles.fwBold,
              typoStyles.textExplainBold,
            ]}>
            {name}
          </Text>
          <Text
            style={[typoStyles.fs12, typoStyles.fwBold, typoStyles.textMain]}>
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
            style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>
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
          typoStyles.fwBold,
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

const OneLine = ({title, value}) => {
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

export const ServiceInfo = () => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 17,
    },
  });
  return (
    <View>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fwBold,
          typoStyles.textExplainBold,
          styles.title,
        ]}>
        서비스 정보
      </Text>
      <OneLine title={'서비스 번호'} value={'21102323921'} />
      <OneLine title={'픽업 예정 시간'} value={'11:00'} />
      <OneLine title={'픽업 주소'} value={'성북구 길음동 11-15'} />
      <OneLine title={'병원'} value={'서울백병원'} />
      <OneLine title={'희망 병원 도착 시간'} value={'12:00'} />
      <OneLine title={'진료/검사 예약 시간'} value={'12:30'} />
      <OneLine title={'귀가 출발 시간'} value={'14:00'} />
      <OneLine title={'네츠 매니저'} value={'홍길동'} />
      <OneLine title={'차량 번호'} value={'55거 1234'} />
      <OneLine title={'동행 매니저'} value={'김강빈'} />
    </View>
  );
};

const ResComplete = () => {
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
    btn: {width: 300, height: 47},
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
          서비스 예약 완료
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwBold,
              typoStyles.textPrimary,
            ]}>
            서비스 예약이 완료
          </Text>
          되었습니다.{'\n'}
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwBold,
              typoStyles.textPrimary,
            ]}>
            서비스 내역
          </Text>
          메뉴에서 예약 내역 확인이 가능합니다.
        </Text>
      </View>

      <Profile
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
          style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textWhite]}>
          확인
        </Text>
      </TouchableOpacity>
    </CommonLayout>
  );
};

export default ResComplete;
