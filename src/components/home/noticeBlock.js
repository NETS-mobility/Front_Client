import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import Logo from '../../assets/icon/logo_white.svg';
const styles = StyleSheet.create({
  notiBlock: {
    width: 330,
    paddingHorizontal: 42,
    paddingVertical: 17,
    backgroundColor: '#19b7cd',
    border: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 18,
  },
  contents: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
    border: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  marginText: {
    marginTop: 10,
  },
  noTokenNotiBlock: {
    width: 330,
    paddingHorizontal: 32,
    paddingVertical: 25,
    backgroundColor: '#19b7cd',
    border: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 18,
  },
  alignCenter: {
    textAlign: 'center',
  },
  noticeText: {
    marginTop: 30,
    marginBottom: -7,
  },
});

const WhiteBlock = ({content, i, onPress}) => {
  const pickupString = `${content.rev_date.substring(0, 10)}`;
  const serviceType = `${content.service_type}`;
  return (
    <TouchableOpacity style={styles.contents} key={i} onPress={onPress}>
      <Text
        style={[
          typoStyles.textExplainBold,
          typoStyles.fs15,
          typoStyles.fw700,
          styles.alignCenter,
        ]}>
        {`${pickupString}\n${serviceType}`}
      </Text>
    </TouchableOpacity>
  );
};

const NoticeBlock = ({data, navigation}) => {
  const reserve = data?.service?.filter(i => i.pay_state == 1);
  const basicPay = data?.service?.filter(i => i.pay_state == 2);
  const additionalPay = data?.service?.filter(i => i.pay_state == 3);

  return (
    <View style={styles.notiBlock}>
      <Text style={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw700]}>
        {data?.name}님, 안녕하세요!
      </Text>

      {additionalPay?.length > 0 && (
        <Text
          style={[
            typoStyles.textWhite,
            typoStyles.fs14,
            typoStyles.fwRegular,
            styles.noticeText,
          ]}>
          추가결제가 필요한 예약내역이 있습니다.
        </Text>
      )}
      {additionalPay?.map((content, i) => {
        return (
          <WhiteBlock
            content={content}
            i={i}
            onPress={() => {
              navigation.navigate('ReservationPay', {
                screen: 'ReservationPay',
                params: {reservationId: content?.id},
                initial: false,
              });
            }}
          />
        );
      })}

      {basicPay?.length > 0 && (
        <Text
          style={[
            typoStyles.textWhite,
            typoStyles.fs14,
            typoStyles.fwRegular,
            styles.noticeText,
          ]}>
          결제가 필요한 예약내역이 있습니다.
        </Text>
      )}
      {basicPay?.map((content, i) => {
        return (
          <WhiteBlock
            content={content}
            i={i}
            onPress={() => {
              navigation.navigate('ReservationPay', {
                screen: 'ReservationPay',
                params: {reservationId: content?.id},
                initial: false,
              });
            }}
          />
        );
      })}

      {reserve?.length ? (
        <Text
          style={[
            typoStyles.textWhite,
            typoStyles.fs14,
            typoStyles.fwRegular,
            styles.noticeText,
          ]}>
          예약된 서비스가 있습니다.
        </Text>
      ) : (
        <Text
          style={[
            typoStyles.textWhite,
            typoStyles.fs14,
            typoStyles.fwRegular,
            styles.noticeText,
          ]}>
          예약된 서비스가 없습니다.
        </Text>
      )}

      {reserve?.map((content, i) => {
        return (
          <WhiteBlock
            content={content}
            i={i}
            onPress={() =>
              navigation.navigate('서비스내역', {
                screen: 'ServiceDetail',
                params: {detailId: content?.id},
                initial: false,
              })
            }
          />
        );
      })}
    </View>
  );
};

const NoTokenNoticeBlock = () => {
  return (
    <View style={styles.noTokenNotiBlock}>
      <Text style={[typoStyles.textWhite, typoStyles.fs18, typoStyles.fw700]}>
        병원이동과 병원동행을 한번에
      </Text>
      <Text
        style={[
          typoStyles.textWhite,
          typoStyles.fs22,
          typoStyles.fwRegular,
          styles.marginText,
        ]}>
        보다 안전하게 병원가는 방법
      </Text>
      <View style={styles.marginText}>
        <Logo width={100} height={28} />
      </View>
    </View>
  );
};

export {NoticeBlock, NoTokenNoticeBlock};
