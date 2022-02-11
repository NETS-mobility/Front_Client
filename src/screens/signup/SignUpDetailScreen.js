import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 30,
  },

  title: {
    marginTop: 30,
    marginBottom: 9,
  },

  detailbox: {
    width: '90%',
    height: '85%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
  },
});

const SignUpDetailScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text
        style={[
          styles.title,
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textMain,
        ]}>
        이용약관
      </Text>
      <View style={styles.detailbox}>
        <ScrollView>
          <Text
            style={[
              typoStyles.fs12,
              typoStyles.fwRegular,
              typoStyles.textExplain,
            ]}>
            친구는 세월의 도둑이다. 봄부터 흐르는 물은 겨울이 되어도 얼지 않듯이
            마음에서 우러나오는 우적은 역경이 닥친다고 해서 식지 않는다.
            불행했을 때 만난 친구는 가장 소중히 여겨야 한다. 행복했을 때 함께
            기쁨을 누리는 친구보다 힘들 떄 슬픔을 덜어지는 친구를 더 많이 신뢰할
            수 있다. 부유했을 때는 친구를 사귀기 쉽지만, 어려울 때는 눈을 씻고
            찾아봐도 친구를 찾기 어렵다. 짧은 시간 안에 많은 친구를 얻기란
            불가능하다. 왜냐하면 그들은 진정한 친구가 아니기 때문이다. 친구란
            말하자면 또 하나의 자신이다. 친구를 보면 그 사람을 알 수 있다.
            현명한 사람과 어리석은 사람은 서로 어울리지 않는다. 친구는 나를
            동정하는 자가 아니라 나를 돕는 자다. 서로가 고통을 덜어 주지
            않는다면 우리는 무엇을 위해 사는 것일 우리는 모두 적막한 세계를
            떠도는 나그네다. 그 여정에서 찾을 수 있는 최고의 선물은 바로
            믿음직한 벗이다. 좋은 벗은 충격을 덜어주는 완충장치와도 같은 것이며
            인생의 길에서 충동을 피할 수 있도록 도와준다. 우정만이 세상을 하나로
            만들 수 있다. 우정은 영혼의 결혼이다. 관포지교(管鮑之交) 관숙과
            포숙아의 사귐, 변함없는 돈독한 우정. 막역지우(莫逆之友) 마음에
            거슬리는 것이 없는 친구, 더할 나위 없이 친한 친구 문경지교(刎頸之交)
            목을 베어줄 정도의 우정, 변함없는 우정 참된 사랑이 아무리 드물다
            해도 참된 우정만큼 드문 것은 아니다. 참된 우정은 건강과 같아서
            그것을 잃어버려야만 그 가치가 드러 사랑에는 신뢰가 우정에는 이해가
            필요하다. 사랑은 두마음이 한 몸이 되는 것이고, 우정은 두 몸이 한
            몸이 되는 것이다. 우정은 신들의 선물이며 사람에게 소중한 행운이다.
            여자가 개입되면 우정이 끝나는 것은 시간문제다. 친구는 세월의
            도둑이다. 봄부터 흐르는 물은 겨울이 되어도 얼지 않듯이 마음에서
            우러나오는 우적은 역경이 닥친다고 해서 식지 않는다. 불행했을 때 만난
            친구는 가장 소중히 여겨야 한다. 행복했을 때 함께 기쁨을 누리는
            친구보다 힘들 떄 슬픔을 덜어지는 친구를 더 많이 신뢰할 수 있다.
            부유했을 때는 친구를 사귀기 쉽지만, 어려울 때는 눈을 씻고 찾아봐도
            친구를 찾기 어렵다. 짧은 시간 안에 많은 친구를 얻기란 불가능하다.
            왜냐하면 그들은 진정한 친구가 아니기 때문이다. 친구란 말하자면 또
            하나의 자신이다. 친구를 보면 그 사람을 알 수 있다. 현명한 사람과
            어리석은 사람은 서로 어울리지 않는다. 친구는 나를 동정하는 자가
            아니라 나를 돕는 자다. 서로가 고통을 덜어 주지 않는다면 우리는
            무엇을 위해 사는 것일 우리는 모두 적막한 세계를 떠도는 나그네다. 그
            여정에서 찾을 수 있는 최고의 선물은 바로 믿음직한 벗이다. 좋은 벗은
            충격을 덜어주는 완충장치와도 같은 것이며 인생의 길에서 충동을 피할
            수 있도록 도와준다. 우정만이 세상을 하나로 만들 수 있다. 우정은
            영혼의 결혼이다. 관포지교(管鮑之交) 관숙과 포숙아의 사귐, 변함없는
            돈독한 우정. 막역지우(莫逆之友) 마음에 거슬리는 것이 없는 친구, 더할
            나위 없이 친한 친구 문경지교(刎頸之交) 목을 베어줄 정도의 우정,
            변함없는 우정 참된 사랑이 아무리 드물다 해도 참된 우정만큼 드문 것은
            아니다. 참된 우정은 건강과 같아서 그것을 잃어버려야만 그 가치가 드러
            사랑에는 신뢰가 우정에는 이해가 필요하다. 사랑은 두마음이 한 몸이
            되는 것이고, 우정은 두 몸이 한 몸이 되는 것이다. 우정은 신들의
            선물이며 사람에게 소중한 행운이다. 여자가 개입되면 우정이 끝나는
            것은 시간문제다.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpDetailScreen;
