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

const AlarmScreen = ({navigation}) => {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAlarms(await ViewAlarm());
    };
    fetchData();
  }, []);

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
          {alarms != undefined &&
            alarms.map((data, i) => {
              return (
                <AlarmBox
                  key={i}
                  alarmName={data?.alarm_title}
                  alarmExplain={data?.alarm_content}
                  alarm={data?.alarm_object_data?.reservation_date}
                  id={data?.alarm_object_data?.reservation_id}
                  navigation={navigation}
                />
              );
            })}
        </SafeAreaView>
      </ScrollView>
    </CommonLayout>
  );
};

export default AlarmScreen;
