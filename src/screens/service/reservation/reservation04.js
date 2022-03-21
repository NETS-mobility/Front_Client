import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {btnStyles} from '../../../components/common/button';
import ReservationAPI from '../../../api/reservation/reservation';
import {CheckObjEmpty} from '../../../utils/checkEmpty';

// //배차 결과 나오기 전까지 로딩 화면
// const Reservation04 = ({navigation}) => {
//   /*
// 만약에 차가 있다 -> 결제를 진행하셔야 최종 예약이 가능합니다. 예약하시겠습니까?(결제 마감 시간: 1시간 30분 뒤) (홈으로가기 btn)(결제하러가기 btn)
// 차가 없다 -> 배차 가능한 차량이 없습니다.
// */

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 60,
  },

  bigbox: {
    flex: 1,
    marginTop: 50,
    marginLeft: 30,
  },

  textbox: {
    width: '100%',
    height: '100%',
    marginTop: 52,
  },

  rightcontents: {
    color: 'black',
    marginBottom: 15,
    width: '50%',
    height: '100%',
  },

  leftcontents: {
    marginBottom: 15,
    width: '45%',
  },

  titlebox: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },

  btn: {
    width: '100%',
    height: 47,
    padding: 10,
  },

  btnAlign: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  login: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },

  serviceCont: {width: 120},
});

const Reservation04 = ({navigation, route}) => {
  const data = route.params;
  const {
    serviceKindId,
    moveDirection,
    gowithHospitalTime, //바꿔야댐
    pickupAddr,
    dropAddr,
    hospitalAddr,
    hopeReservationDate,
    hopeHospitalArrivalTime,
    fixedMedicalTime,
    hopeHospitalDepartureTime,
    fixedMedicalDetail,
    hopeRequires,
    patientName,
    patientPhone,
    protectorName,
    protectorPhone,
    validTargetKind,
    dispatch,
  } = data;

  return CheckObjEmpty(dispatch) ? (
    <SafeAreaView style={styles.background}>
      <View style={styles.bigbox}>
        <View>
          <Text
            style={[typoStyles.fs32, typoStyles.fw700, typoStyles.textMain]}>
            배차 가능한 차량이 없습니다.
          </Text>
        </View>
        <Text
          style={[
            typoStyles.fs20,
            typoStyles.fw700,
            typoStyles.textExplain,
            styles.textbox,
          ]}>
          다른 일정을 선택해주세요.
        </Text>
      </View>
      <View style={styles.btnAlign}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <View style={[styles.btn, btnStyles.btnWhite]}>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, typoStyles.textMain]}>
              홈 화면으로 돌아가기
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('ReservationMainScreen')}>
          <View style={[styles.btn, btnStyles.btnBlue]}>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, typoStyles.textWhite]}>
              다른 일정으로 예약하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.background}>
      <View style={styles.bigbox}>
        <View>
          <Text
            style={[typoStyles.fs32, typoStyles.fw700, typoStyles.textMain]}>
            배차가{'\n'}완료되었습니다.
          </Text>
        </View>
        <View style={styles.textbox}>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              픽업 예정 시간
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {dispatch?.dispatch1.expCarPickupTime.substring(11, 16)}
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              서비스 종료 예정 시간
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {dispatch?.dispatch1.expCarTerminateServiceTime.substring(11, 16)}
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              서비스 종류
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {serviceKindId}
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              픽업주소
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {pickupAddr}
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              병원주소
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {hospitalAddr}
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Text
              style={[
                typoStyles.fs15,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.leftcontents,
              ]}>
              예약 날짜
            </Text>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, styles.rightcontents]}>
              {hopeReservationDate}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.btnAlign}>
        <TouchableOpacity
          onPress={async () => {
            const res = await ReservationAPI(data);
            navigation.push('ReservationPay');
          }}>
          {/* 버튼 눌렀을 때 reservation api 연결, 그리고 결제화면으로 넘기깅 */}
          <View style={[styles.btn, btnStyles.btnBlue]}>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, typoStyles.textWhite]}>
              결제하러 가기
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <View style={[styles.btn, btnStyles.btnWhite]}>
            <Text
              style={[typoStyles.fs15, typoStyles.fw700, typoStyles.textMain]}>
              홈 화면으로 돌아가기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Reservation04;
