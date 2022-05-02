import React from 'react';
import {Button, Icon, Text, View} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeTest = ({navigation}) => {
  return (
    <View flex={1}>
      <View
        flex={1}
        pos={'relative'}
        alignItems={'center'}
        bgColor={'#344e81'}
        justifyContent={'center'}>
        <Text
          color={'#fff'}
          fontSize={20}
          mb={10}
          fontWeight={'bold'}
          textAlign={'center'}>
          아임포트 테스트
        </Text>
        <Text color={'#fff'} fontSize={15} textAlign={'center'}>
          아임포트 리액트 네이티브 모듈 테스트 화면입니다.
        </Text>
        <Text color={'#fff'} fontSize={15} textAlign={'center'}>
          아래 버튼을 눌러 결제 또는 본인인증 테스트를 진행해주세요.
        </Text>
      </View>
      <View
        flex={1}
        pos={'relative'}
        bottom={'0%'}
        w={'90%'}
        flexDir={'row'}
        alignSelf={'center'}>
        <Button
          m={'4%'}
          bgColor={'#fff'}
          borderRadius={3}
          flex={1}
          shadow={1}
          onPress={() => navigation.push('PaymentTest')}>
          <Icon
            as={FontAwesome}
            name={'credit-card'}
            textAlign={'center'}
            w={'100%'}
            mb={'6%'}
          />
          <Text>결제 테스트</Text>
        </Button>
      </View>
    </View>
  );
};

export default HomeTest;
