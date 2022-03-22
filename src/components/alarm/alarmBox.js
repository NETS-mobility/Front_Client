import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BlueBlock from '../../components/mypage/blueBlock';
import typoStyles from '../../assets/fonts/typography';
import {btnStyles} from '../common/button';

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
  },
  btnsize: {
    width: 130,
    height: 30,
  },
  wrapbtn: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
});

const AlarmBoxBtn = ({btnName}) => {
  return (
    <TouchableOpacity>
      <View style={[btnStyles.btnBlue, styles.btnsize]}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>
          {btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const AlarmBox = ({alarmName, alarmExplain, alarmTime, btnName}) => {
  return (
    <BlueBlock>
      <View style={styles.title}>
        <Text style={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textMain]}>
          {alarmName}
        </Text>
      </View>
      <Text
        style={[typoStyles.fs15, typoStyles.fwBold, typoStyles.textExplain]}>
        {alarmExplain}
      </Text>
      <Text
        style={[typoStyles.fs15, typoStyles.fwBold, typoStyles.textExplain]}>
        서비스 일자: {alarmTime}
      </Text>
      <View style={styles.wrapbtn}>
        <AlarmBoxBtn btnName={btnName} />
      </View>
    </BlueBlock>
  );
};

export {AlarmBox};
