import React from 'react';
import IMP from 'iamport-react-native';
import {getUserCode} from '../../components/pay_test/utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loading from '../../components/pay_test/loading';

const Payment = ({route, navigation}) => {
  // const params = route.params?.params;
  // const tierCode = route.params?.tierCode;
  console.log('route=', route);
  const {data} = route.params;
  console.log('data=', data.params.pg);
  const userCode = getUserCode(data.params.pg);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <IMP.Payment
        userCode={'imp03732063'}
        tierCode={undefined}
        loading={<Loading />}
        data={data.params}
        callback={response =>
          navigation.replace('PaymentResultTest', {data: response})
        }
      />
    </SafeAreaView>
  );
};

export default Payment;
