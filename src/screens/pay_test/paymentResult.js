import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GetPayResult from '../../api/payment/GetPayResult';
import {PayToken} from '../../api/payment/PayToken';
import typoStyles from '../../assets/fonts/typography';
import {ServiceInfoOneLine} from '../../components/service/reservation/serviceInfo';
import CommonLayout from '../../components/common/layout';
import CustomBtn, {btnStyles} from '../../components/common/button';

const styles = StyleSheet.create({
  block: {
    width: '100%',
    paddingTop: 14,
    paddingBottom: 50,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  block2: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 100,
  },
  btn: {
    width: '80%',
    height: 47,
    marginBottom: 20,
    alignSelf: 'center',
  },
  okBtn: {
    width: '100%',
    height: 47,
    marginTop: 60,
  },
  explain: {
    marginBottom: 137,
  },
});

const PaymentResultTest = ({route, navigation}) => {
  const [success, setSuccess] = useState('');
  const [result, setResult] = useState();
  const {data} = route.params;
  console.log('result data================', data);

  const GetResult = async () => {
    const token = await PayToken();
    console.log('token=', token);
    const res = await GetPayResult(data.imp_uid, token);
    setResult(res.data.response);
    console.log('res status=', res.status);
    console.log('res data=', res.data);
    console.log('res data response=', res.data.response.pay_method);
    if (res.status == 200) setSuccess(true);
    else setSuccess(false);
  };
  // status == 200 => vbank_name, vbank_num, vbank_date(timestamp로 되어있음 1970년부터시작된거..)
  // status != 200 => 결제에 실패하였습니다. 고객센터에 문의해주세요.

  useEffect(() => {
    GetResult();
  }, []);

  useEffect(() => {
    const date = result?.vbank_date;
    console.log('new Date = ', new Date(date * 1000));
    const newDate =
      date?.getFullYear() +
      '-' +
      (date?.getMonth() + 1) +
      '-' +
      date?.getDate() +
      ' ' +
      date?.getHours() +
      ':' +
      date?.getMinutes() +
      ':' +
      date?.getSeconds();
    console.log('new Date time = ', newDate);
  }, [result]);

  return (
    <CommonLayout>
      <SafeAreaView style={styles.block}>
        {success === '' ? (
          <></>
        ) : success === false ? (
          <Text
            style={[
              {marginBottom: 50},
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
            ]}>
            결제 실패
          </Text>
        ) : (
          <Text
            style={[
              {marginBottom: 50},
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
            ]}>
            {result?.pay_method == 'vbank' ? '결제 정보 확인' : '결제 완료'}
          </Text>
        )}
        <View>
          {success === true ? (
            <>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fw700,
                  typoStyles.textExplain,
                  {marginBottom: 50},
                ]}>
                <Text style={[typoStyles.textPrimary]}>
                  {result?.pay_method === 'vbank'
                    ? `결제 정보가 생성`
                    : '요금 결제가 완료'}
                </Text>
                {result?.pay_method === 'vbank'
                  ? `되었습니다.
                
입금은행과 계좌번호를 확인하시어
입금기한까지 결제 부탁드립니다.
                
입금기한이 경과하면, 
서비스 예약이 취소됩니다.`
                  : `네츠 모빌리티를 이용해주셔서 감사합니다.
좋은 서비스 제공을 위해 노력하겠습니다.
감사합니다.`}
              </Text>
              <ServiceInfoOneLine
                title={'입금 은행'}
                value={result?.vbank_name}
              />
              <ServiceInfoOneLine
                title={'입금 계좌'}
                value={result?.vbank_num}
              />
              <ServiceInfoOneLine
                title={'입금 기한'}
                value={result?.vbank_date}
              />
            </>
          ) : success === false ? (
            <Text>고객센터에 문의해주세요.</Text>
          ) : (
            <></>
          )}
        </View>
        <CustomBtn
          text={'확인'}
          viewStyle={[btnStyles.btnBlue, styles.okBtn]}
          textStyle={[typoStyles.fw700, typoStyles.fs20, typoStyles.textWhite]}
          onPress={() => navigation.replace('Home')}
        />
      </SafeAreaView>
    </CommonLayout>
  );
};

export default PaymentResultTest;
