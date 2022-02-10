import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  SafeAreaView,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import ServiceBlock from '../../../components/service/serviceBlock';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {NextBtn, CheckBtn} from '../../../components/service/serviceBtn';
import {ServiceInputBoxWithoutBtn} from '../../../components/service/serviceInputBox';
import ServiceProgress from '../../../components/service/reservation/progress';
import {btnStyles} from '../../../assets/fonts/button';

const styles = StyleSheet.create({
  title: {
    marginLeft: 30,
    marginBottom: 22,
  },
  proset: {
    alignItems: 'center',
  },
  checkset: {
    height: 150,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  subbtn: {
    width: 219,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

const Reservation03 = ({navigation}) => {
  const [diagnosis, setDiagnosis] = useState('');
  const [etc, setEtc] = useState('');

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  return (
    <CommonLayout>
      <SafeAreaView style={styles.background}>
        <ScrollView style={styles.background}>
          <View style={styles.title}>
            <Text
              style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
              서비스예약
            </Text>
          </View>
          <View style={styles.proset}>
            <ServiceProgress num={3} />
          </View>
          <ServiceBlock>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fwBold,
                typoStyles.textMain,
                styles.step1title,
              ]}>
              STEP1. 내원 정보
            </Text>
            <ServiceInputBoxWithoutBtn
              title={'예약된 진료/검사 내용을 입력해주세요.'}
              place1={'진료/검사 내용'}
              Text1={diagnosis}
              setText1={setDiagnosis}
            />
            <View style={styles.checkset}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textExplain,
                ]}>
                어떤 서비스가 필요하신지 선택해주세요.
              </Text>
              <CheckBtn
                check={check1}
                setCheck={setCheck1}
                contents={'진료실 동행'}
              />
              <CheckBtn
                check={check2}
                setCheck={setCheck2}
                contents={'지정한 보호자에게 진료 내용 전달'}
              />
              <CheckBtn
                check={check3}
                setCheck={setCheck3}
                contents={'진료 관련 서류 촬영 후 지정한 보호자에게 전달'}
              />
              <CheckBtn
                check={check4}
                setCheck={setCheck4}
                contents={'약국 동행'}
              />
              <CheckBtn
                check={check5}
                setCheck={setCheck5}
                contents={'기타 서비스'}
              />
            </View>
            {check5 == true ? (
              <ServiceInputBoxWithoutBtn
                title={'없음'}
                place1={'입력'}
                Text1={etc}
                setText1={setEtc}
              />
            ) : (
              <></>
            )}
          </ServiceBlock>
          <View style={styles.proset}>
            <NextBtn
              navWhere={() => {
                navigation.push('Reservation04');
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </CommonLayout>
  );
};

export default Reservation03;
