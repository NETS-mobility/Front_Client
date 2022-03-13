import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import ServiceBlock from '../../../components/service/serviceBlock';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {
  NextBtn,
  CheckBtn,
} from '../../../components/service/reservation/serviceBtn';
import {ServiceInputBox} from '../../../components/service/reservation/serviceInputBox';
import ServiceProgress from '../../../components/service/reservation/progress';
import ImageSubmit from '../../../components/common/imageSubmit';
import GetUserInfo from '../../../api/mypage/getUserInfo';
import {useIsFocused} from '@react-navigation/native';

const styles = StyleSheet.create({
  title: {
    marginBottom: 22,
  },
  proset: {
    alignItems: 'center',
    marginTop: 10,
  },
  exptext: {
    marginTop: 38,
    marginBottom: 29,
  },
  checkset: {
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  sectext: {
    flexDirection: 'row',
  },
  subbtn: {
    width: 219,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  background: {
    flex: 1,
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
});

const Reservation02 = ({route, navigation}) => {
  const {
    serviceKindId,
    moveDirection,
    resAddrs,
    resDate,
    resTimes,
    gowithHospitalTime,
  } = route.params;

  const [img, setImg] = useState('');
  const [guard, setGuard] = useState({
    name: '',
    phone: '',
  });
  const [user, setUser] = useState({
    name: '',
    phone: '',
  });
  const [check, setCheck] = useState([false, false, false]);
  const [result, setResult] = useState('');
  const [disable, setDisable] = useState(true);

  const checkStaticString = ['고령자', '장애인', '거동불편자'];
  let checkString = '';
  const isFocused = useIsFocused();

  useEffect(() => {
    async function fetchData() {
      const userInfo = await GetUserInfo()
        .then(res => res)
        .catch(err => err);
      setGuard({
        name: userInfo.name,
        phone: userInfo.phone,
      });
    }
    fetchData();
  }, [isFocused]);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (check[i]) {
        checkString += checkStaticString[i] + ',';
      }
      if (i == 2) {
        if (checkString[checkString.length - 1] == ',') {
          setResult(checkString.substring(0, checkString.length - 1));
        } else {
          setResult('');
        }
      }
    }
  }, [check]);

  useEffect(() => {
    if (
      result != '0' &&
      user.name != '' &&
      user.phone != '' &&
      guard.name != '' &&
      guard.phone != ''
    ) {
      setDisable(false);
    }
  }, [result, user]);

  return (
    <CommonLayout>
      <ScrollView style={styles.background}>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
              styles.title,
            ]}>
            서비스예약
          </Text>
          <ServiceProgress num={2} />
        </View>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP1. 정보 입력
          </Text>
          <ServiceInputBox
            title={'보호자 정보를 입력해주세요.'}
            place1={'보호자 이름'}
            place2={'보호자 전화번호'}
            placetextcolor={'#dad8e0'}
            value={guard}
            setValue={setGuard}
          />
          <ServiceInputBox
            title={'이용자 정보를 입력해주세요.'}
            place1={'이용자 이름'}
            place2={'이용자 전화번호'}
            placetextcolor={'#DAD8E0'}
            value={user}
            setValue={setUser}
          />
        </ServiceBlock>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP2. 이용대상 체크
          </Text>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwRegular,
              typoStyles.textExplain,
              styles.exptext,
            ]}>
            네츠모빌리티는 65세 이상 고령자, 장애인, 일시적 거동불편자 등
            이동약자가 진료 및 치료목적으로 이동하는 경우만 이용이 가능하며,
            소견서, 진료 예약증, 입원예정서, 내원 목적의 진단서(투석, 항암치료에
            한함)등 증명서류를 고객센터로 제출하셔야 이동서비스가 가능합니다.
          </Text>
          <View style={styles.checkset}>
            <CheckBtn
              num={0}
              check={check}
              setCheck={setCheck}
              contents={'65세 이상 고령자'}
            />
            <CheckBtn
              num={1}
              check={check}
              setCheck={setCheck}
              contents={'장애인'}
            />
            <CheckBtn
              num={2}
              check={check}
              setCheck={setCheck}
              contents={'거동불편자'}
            />
          </View>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwBold,
              typoStyles.textExplain,
            ]}>
            증명서류를 제출해주세요.
          </Text>
          <View style={styles.sectext}>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              (당일 지참 가능하나,{' '}
            </Text>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fwBold,
                typoStyles.textPrimary,
              ]}>
              서류 미확인 시 탑승 불가
            </Text>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              )
            </Text>
          </View>
          <View style={styles.proset}>
            <ImageSubmit img={img} setImg={setImg} />
          </View>
        </ServiceBlock>
        <View style={styles.proset}>
          <NextBtn
            navWhere={() => {
              navigation.push('Reservation03', {
                serviceKindId: serviceKindId,
                moveDirection: moveDirection,
                resAddrs: resAddrs,
                resDate: resDate,
                resTimes: resTimes,
                guardInfo: guard,
                userInfo: user,
                validTargetKind: result,
                gowithHospitalTime: gowithHospitalTime,
              });
            }}
            disable={disable}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default Reservation02;
