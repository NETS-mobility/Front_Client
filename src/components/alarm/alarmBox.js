import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import BlueBlock from '../../components/mypage/blueBlock';
import typoStyles from '../../assets/fonts/typography';
import {btnStyles} from '../common/button';
import GetServiceDetail from '../../api/reservation/serviceDetail';

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
  },
  btnsize: {
    width: 130,
    height: 30,
  },
  wrapbtn: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
});

const AlarmBoxBtn = ({navigation, title, id}) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        console.log('이 id는==', id);
        const res = await GetServiceDetail(id);
        if (res != undefined && res == 400) {
          Alert.alert(
            '존재하지 않는 예약입니다',
            '결제 기한이 지나 취소되었거나, 취소 요청하신 예약입니다.',
            [{text: '확인', style: 'cancel'}],
          );
        } else {
          if (title === '결제요청' || title === '결제독촉') {
            navigation.navigate('Payment', {
              screen: 'ReservationPay',
              params: {reservationId: id},
            });
          } else if (
            title === '병원동행 추가요금 결제' ||
            title === '대기요금 결제'
          ) {
            navigation.navigate('AdditionalPay', {
              screen: 'ReservationPay',
              params: {reservationId: id},
            });
          } else {
            navigation.navigate(`ServiceDetail`, {id});
          }
        }
      }}>
      <View style={[btnStyles.btnBlue, styles.btnsize]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>
          상세보기
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const AlarmBox = ({alarmName, alarmExplain, alarm, id, navigation}) => {
  return (
    <BlueBlock>
      <View style={styles.title}>
        <Text style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textMain]}>
          {alarmName}
        </Text>
      </View>
      <Text
        style={[typoStyles.fs15, typoStyles.fwBold, typoStyles.textExplain]}>
        {alarmExplain}
      </Text>
      <Text
        style={[typoStyles.fs15, typoStyles.fwBold, typoStyles.textExplain]}>
        서비스 일자: {alarm}
      </Text>
      <View style={styles.wrapbtn}>
        <AlarmBoxBtn navigation={navigation} title={alarmName} id={id} />
      </View>
    </BlueBlock>
  );
};

export {AlarmBox};
