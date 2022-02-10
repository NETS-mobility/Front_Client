import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {btnStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {AdditionalPayment} from '../../../components/service/payment/additionalPayment';
import {
  Step1,
  Step2,
} from '../../../components/service/reservation/reservation04';

const AdditionalPay = () => {
  const styles = StyleSheet.create({
    block: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: 40,
    },
    btn: {
      width: '80%',
      height: 47,
      alignSelf: 'center',
      marginTop: 24,
    },
  });
  return (
    <CommonLayout>
      <ScrollView>
        <View style={styles.block}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
              styles.title,
            ]}>
            추가 요금 결제
          </Text>
        </View>
        <Step1 />
        <Step2 additional={true} />
        <TouchableOpacity style={[btnStyles.btnBlue, styles.btn]}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            결제
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </CommonLayout>
  );
};

export default AdditionalPay;
