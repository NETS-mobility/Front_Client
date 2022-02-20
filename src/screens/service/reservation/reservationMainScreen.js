import React, {useEffect, useState} from 'react';
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
  const [check, setCheck] = useState([
    false, //병원동행
    false,
    false, //휠체어
    false,
    false, //이동방식
    false,
    false, //이동 방향
    false,
  ]);
  const [serviceName, setServiceName] = useState('모든 질문에 답해주세요.');
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    if (check[0] && check[4]) {
      setCnt(3);
    } else if (check[0] && check[5]) {
      setCnt(4);
    } else if (check[1]) {
      setCnt(2);
    }
  }, [check]);

  // useE

  useEffect(() => {
    if (check.filter(i => i == true).length == cnt) {
      if (check[0] && check[2]) {
        if (check[4]) {
          setServiceName('네츠 휠체어 플러스 왕복 서비스');
        } else {
          setServiceName('네츠 휠체어 플러스 편도 서비스');
        }
      } else if (check[0] && check[3]) {
        if (check[4]) {
          setServiceName('네츠 휠체어 왕복 서비스');
        } else {
          setServiceName('네츠 휠체어 편도 서비스');
        }
      } else if (check[1]) {
        setServiceName('네츠 무브 서비스');
      }
    } else {
      setServiceName('모든 질문에 답해주세요.');
    }
  }, [cnt, check]);

  useEffect(() => {
    if (check[1]) {
      check[2] = false;
      check[3] = false;
      check[4] = false;
      check[5] = false;
      setCheck([...check]);
    }
    if (check[0] || check[4]) {
      check[6] = false;
      check[7] = false;
      setCheck([...check]);
    }
  }, [check[0], check[1], check[4]]);

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
            check={check}
            setCheck={setCheck}
            check1={0}
            primtitle={'병원동행'}
            explaintitle={'이 필요하신가요?'}
            text1={'네'}
            text2={'아니요 차량만 이용'}
          />

          {check[0] ? (
            <>
              <ResRadioBtn
                check={check}
                setCheck={setCheck}
                check1={2}
                primtitle={'계단 리프트 서비스'}
                explaintitle={'가 필요하신가요?'}
                text1={'네'}
                text2={'아니요'}
              />
              <ResRadioBtn
                check={check}
                setCheck={setCheck}
                check1={4}
                primtitle={'이동방식'}
                explaintitle={'이 어떻게 되시나요?'}
                text1={'왕복'}
                text2={'편도'}
              />
              {check[5] ? (
                <ResRadioBtn
                  check={check}
                  setCheck={setCheck}
                  check1={6}
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
              check={check}
              setCheck={setCheck}
              check1={6}
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
              {serviceName}
            </Text>
          </View>
          <TouchableNativeFeedback
            onPress={() =>
              navigation.push('Reservation01', {
                serviceName: serviceName,
                way: check[6],
              })
            }>
            <View style={[btnStyles.btnBlue, styles.resbtn]}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textWhite,
                ]}>
                클릭해서 서비스 예약하기
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default ReservationMainScreen;
