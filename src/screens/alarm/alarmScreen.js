import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import CommonLayout from '../../components/common/layout';
import typoStyles from '../../assets/fonts/typography';
import {btnStyles} from '../../components/common/button';
import {AlarmBox} from '../../components/alarm/alarmBox';
import ViewAlarm from '../../api/alarm/viewAlarm';

const styles = StyleSheet.create({
  title: {
    marginLeft: 30,
    marginBottom: 20,
  },
});

const AlarmScreen = () => {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAlarms(await ViewAlarm());
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('alarms=', alarms);
  }, [alarms]);

  return (
    <CommonLayout>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.title}>
            <Text
              style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
              알림
            </Text>
          </View>
          <AlarmBox
            alarmName={'추가 결제 알림'}
            alarmExplain={'아직 결제되지 않은 내역이 있습니다.'}
            alarmTime={'2021년 10월 11일 12시 30분'}
            btnName={'추가 결제 하기'}
          />
          <AlarmBox
            alarmName={'추가 결제 알림'}
            alarmExplain={'아직 결제되지 않은 내역이 있습니다.'}
            alarmTime={'2021년 10월 11일 12시 30분'}
            btnName={'추가 결제 하기'}
          />
          <AlarmBox
            alarmName={'추가 결제 알림'}
            alarmExplain={'아직 결제되지 않은 내역이 있습니다.'}
            alarmTime={'2021년 10월 11일 12시 30분'}
            btnName={'추가 결제 하기'}
          />
          <AlarmBox
            alarmName={'추가 결제 알림'}
            alarmExplain={'아직 결제되지 않은 내역이 있습니다.'}
            alarmTime={'2021년 10월 11일 12시 30분'}
            btnName={'추가 결제 하기'}
          />
        </SafeAreaView>
      </ScrollView>
    </CommonLayout>
  );
};

export default AlarmScreen;
