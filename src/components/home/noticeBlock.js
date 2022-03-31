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
});

const NoticeBlock = ({data, navi}) => {
  console.log('data=', data);
  return (
    <View style={styles.notiBlock}>
      <Text style={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw700]}>
        {data?.name}님, 안녕하세요!
      </Text>
      {data.service?.length ? (
        <Text
          style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fwRegular]}>
          예약된 서비스가 있습니다.
        </Text>
      ) : (
        <Text
          style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fwRegular]}>
          예약된 서비스가 없습니다.
        </Text>
      )}
      {data.service?.map((content, i) => {
        const pickupString = `${content.rev_date.substring(0, 10)}`;
        const serviceType = `${content.service_type}`;
        return (
          <TouchableOpacity style={styles.contents} key={i}>
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
