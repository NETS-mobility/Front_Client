import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import ResRadioBtn from '../../../components/service/reservation/ResRadioBtn';
import typoStyles from '../../../assets/fonts/typography';
import {btnStyles} from '../../../components/common/button';
import CommonLayout from '../../../components/common/layout';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    marginLeft: 36,
    marginBottom: 20,
  },

  qbox: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  statbig: {
    alignItems: 'center',
  },

  statbox: {
    width: 340,
    height: 32,
    borderColor: '#19B7CD',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  resbtn: {
    width: 340,
    height: 37,
  },
});

const ReservationMainScreen = ({navigation}) => {
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check21, setCheck21] = useState(false);
  const [check22, setCheck22] = useState(false);
  const [check31, setCheck31] = useState(false);
  const [check32, setCheck32] = useState(false);
  const [check41, setCheck41] = useState(false);
  const [check42, setCheck42] = useState(false);

  const [serviceName, setServiceName] = useState('모든 질문에 답해주세요.');

  //병원동행 필요 x -> setCnt(2)
  //check11~check42까지 돌면서 true인게 2개이면 다 체크... -> 이때 확인

  //병원동행 필요 o -> setCnt(4)
  //check11~check42까지 돌면서 true인게 4개이면 다 체크... -> 이때 확인

  return (
    <CommonLayout>
      <ScrollView style={styles.background}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fw700, typoStyles.textMain]}>
            서비스 예약
          </Text>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.push('Reservation01');
            }}>
            <Text
              style={[
                typoStyles.fs13,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              ! 서비스 요금 확인하기
            </Text>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.qbox}>
          <ResRadioBtn
            check1={check21}
            setCheck1={setCheck21}
            check2={check22}
            setCheck2={setCheck22}
            primtitle={'병원동행'}
            explaintitle={'이 필요하신가요?'}
            text1={'네'}
            text2={'아니요 차량만 이용'}
          />

          {/* 네츠무브
-> 병원동행 질문 필요 x
-> 계단 리프트 질문 필요 x
-> 이동 방식 질문 필요 x(무조건 편도)
-> 이동방향 질문 필요 o

네츠 휠체어, 휠체어 플러스
-> 병원동행 질문 필요 o
-> 계단 리프트 질문 필요 o
-> 이동 방식 질문 필요 o
-> 이동방향 질문 필요 o - 조건문으로 처리
*/}

          {check21 ? (
            <>
              <ResRadioBtn
                check1={check11}
                setCheck1={setCheck11}
                check2={check12}
                setCheck2={setCheck12}
                primtitle={'계단 리프트 서비스'}
                explaintitle={'가 필요하신가요?'}
                text1={'네'}
                text2={'아니요'}
              />
              <ResRadioBtn
                check1={check31}
                setCheck1={setCheck31}
                check2={check32}
                setCheck2={setCheck32}
                primtitle={'이동방식'}
                explaintitle={'이 어떻게 되시나요?'}
                text1={'왕복'}
                text2={'편도'}
              />
              {check32 ? (
                <ResRadioBtn
                  check1={check41}
                  setCheck1={setCheck41}
                  check2={check42}
                  setCheck2={setCheck42}
                  primtitle={'이동방향'}
                  explaintitle={'이 어떻게 되시나요?'}
                  text1={'자택 -> 병원'}
                  text2={'병원 -> 자택'}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <ResRadioBtn
              check1={check41}
              setCheck1={setCheck41}
              check2={check42}
              setCheck2={setCheck42}
              primtitle={'이동방향'}
              explaintitle={'이 어떻게 되시나요?'}
              text1={'자택 -> 병원'}
              text2={'병원 -> 자택'}
            />
          )}
        </View>
        <View style={styles.statbig}>
          <View style={styles.statbox}>
            <Text
              style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textMain]}>
              네츠휠체어플러스 왕복서비스
              {serviceName}
            </Text>
          </View>
          <TouchableNativeFeedback
            onPress={() => navigation.push('Reservation01')}>
            <View style={[btnStyles.btnBlue, styles.resbtn]}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textWhite,
                ]}>
                {' '}
                클릭해서 서비스 예약하기{' '}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default ReservationMainScreen;
