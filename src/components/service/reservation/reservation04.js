import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {RadioButton, CheckBox} from '../../../assets/fonts/button';
import ServiceBlock from '../serviceBlock';
import {Payment} from '../payment/payment';
import {AdditionalPayment} from '../payment/additionalPayment';

export const Step1 = () => {
  const [r1, setR1] = useState(false);
  const [r2, setR2] = useState(false);
  const [r3, setR3] = useState(false);

  const changeState = (r1, r2, r3) => {
    setR1(r1);
    setR2(r2);
    setR3(r3);
  };

  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs18,
          typoStyles.fw700,
          typoStyles.textMain,
          styles.explain1,
        ]}>
        STEP1. 결제 방식 선택
      </Text>
      <RadioButton
        text={'무통장 입금'}
        onPress={() => changeState(true, false, false)}
        value={r1}
      />
      <RadioButton
        text={'신용카드 결제'}
        onPress={() => changeState(false, true, false)}
        value={r2}
      />
      <RadioButton
        text={'간편 결제'}
        onPress={() => changeState(false, false, true)}
        value={r3}
      />
    </ServiceBlock>
  );
};

export const Step2 = ({additional}) => {
  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs18,
          typoStyles.fw700,
          typoStyles.textMain,
          styles.title2,
        ]}>
        STEP2. 결제 금액 확인
      </Text>
      {additional ? <AdditionalPayment /> : <></>}
      <Payment />
      {additional ? (
        <></>
      ) : (
        <>
          <Text
            style={[
              typoStyles.fs12,
              typoStyles.fw700,
              typoStyles.textPrimary,
              styles.explain2,
            ]}>
            서비스 진행 시간이 예상 시간보다 초과되면 추가 요금이 청구될 수
            있습니다.
          </Text>
          <TouchableOpacity style={styles.btn2}>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textExplain,
              ]}>
              결제 시 유의사항
            </Text>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textExplain,
              ]}>
              자세히 보기
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ServiceBlock>
  );
};

export const Step3 = () => {
  const [all, setAll] = useState(false);
  const [r1, setR1] = useState(false);
  const [r2, setR2] = useState(false);
  const [r3, setR3] = useState(false);
  const [r4, setR4] = useState(false);

  useEffect(() => {
    if (all) {
      setR1(all);
      setR2(all);
      setR3(all);
      setR4(all);
    }
  }, [all]);

  useEffect(() => {
    if (!(r1 && r2 && r3 && r4)) {
      setAll(false);
    }
  }, [r1, r2, r3, r4]);

  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs18,
          typoStyles.fw700,
          typoStyles.textMain,
          styles.title,
        ]}>
        STEP3. 동의사항 체크
      </Text>
      <CheckBox
        text={'전체 선택'}
        onPress={() => setAll(!all)}
        value={all}
        styles={{marginBottom: 28}}
      />
      <CheckBox
        text={'[필수] 법정감염병 환자에 해당 없습니다.'}
        onPress={() => setR1(!r1)}
        value={r1}
      />
      <CheckBox
        text={'[필수] 서비스 이용약관에 동의합니다.'}
        onPress={() => setR2(!r2)}
        value={r2}
      />
      <CheckBox
        text={'[필수] 개인정보 제공에 동의합니다.'}
        onPress={() => setR3(!r3)}
        value={r3}
      />
      <CheckBox
        text={'[필수] 개인정보 제 3자(고위드유) 제공에 동의합니다.'}
        onPress={() => setR4(!r4)}
        value={r4}
      />
    </ServiceBlock>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#02931f',
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 22,
  },
  title2: {
    marginBottom: 8,
  },
  explain1: {marginBottom: 7},
  explain2: {marginTop: 5, marginBottom: 11},
  btn: {width: 300, height: 47},
  btn2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBtn: {
    alignSelf: 'center',
    width: 300,
    height: 30,
  },
});
