import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import GetBaseCost from '../../../api/payment/GetBaseCost';

const PaymentLine = ({title, price}) => {
  return (
    <View style={[styles.box, styles.lightLine]}>
      <Text style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
        {title}
      </Text>
      <Text style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
        {`${Number(price).toLocaleString('ko-KR')}원`}
      </Text>
    </View>
  );
};

export const Payment = ({id}) => {
  const [baseCost, setBaseCost] = useState({});
  const BaseCost = async () => {
    setBaseCost(await GetBaseCost(id));
  };

  useEffect(() => {
    BaseCost();
  }, []);

  return (
    <View>
      <View style={[styles.box, styles.boldLine]}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          내역
        </Text>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          금액
        </Text>
      </View>
      {baseCost?.baseCost != 0 && (
        <PaymentLine title={'서비스요금'} price={baseCost?.baseCost} />
      )}
      {baseCost?.overMoveDistanceCost != 0 && (
        <PaymentLine
          title={`추가 거리 요금(${baseCost?.overMoveDistance?.toFixed(2)}km)`}
          price={baseCost?.overMoveDistanceCost}
        />
      )}
      {baseCost?.overGowithTimeCost != 0 && (
        <PaymentLine
          title={`추가 시간 요금(${baseCost?.overGowithTime}분)`}
          price={baseCost?.overGowithTimeCost}
        />
      )}
      {baseCost?.nightCost != 0 && (
        <PaymentLine
          title={`심야할증(${baseCost?.nightmin}분)`}
          price={baseCost?.nightCost}
        />
      )}
      {baseCost?.weekendCost != 0 && (
        <PaymentLine title={`주말 할증`} price={baseCost?.weekendCost} />
      )}
      <View style={styles.total}>
        <Text
          style={[
            typoStyles.fw700,
            typoStyles.fs18,
            typoStyles.textExplainBold,
          ]}>
          최종결제금액
        </Text>
        <Text style={[typoStyles.fw700, typoStyles.fs18, typoStyles.textMain]}>
          {`${Number(baseCost?.TotalBaseCost).toLocaleString('ko-KR')}원`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
  },
  boldLine: {
    borderBottomColor: '#737373',
  },
  lightLine: {
    borderBottomColor: '#DAD8E0',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 27,
  },
});

const AdditionalTimeDist = () => {
  return (
    <View>
      <View style={[styles.box, styles.boldLine]}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          사전 예약 시간/거리
        </Text>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
          ]}>
          서비스 진행 시간/거리
        </Text>
      </View>
      <View style={[styles.box, styles.lightLine]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          16:00
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textPrimary]}>
          17:00
        </Text>
      </View>
      <View style={[styles.box, styles.lightLine]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
          10km
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textPrimary]}>
          11km
        </Text>
      </View>

      <View style={styles.total}>
        <Text
          style={[
            typoStyles.fw700,
            typoStyles.fs18,
            typoStyles.textExplainBold,
          ]}>
          최종결제금액
        </Text>
        <Text style={[typoStyles.fw700, typoStyles.fs18, typoStyles.textMain]}>
          44,000원
        </Text>
      </View>
    </View>
  );
};
